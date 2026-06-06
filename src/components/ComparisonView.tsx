import { type CSSProperties, useEffect, useMemo, useState } from "react";
import { type Chapter, chapters } from "../data/chapters";

type Token = {
	leftText?: string;
	rightText?: string;
	type: "same" | "removed" | "added";
};
type ThemeVars = CSSProperties & Record<`--${string}`, string>;

const spell: Record<string, string> = {
	honour: "honor",
	honoured: "honored",
	honouring: "honoring",
	favour: "favor",
	favoured: "favored",
	saviour: "savior",
	labour: "labor",
	behaviour: "behavior",
	defence: "defense",
	offence: "offense",
	pretence: "pretense",
	fulfil: "fulfill",
	fulfilled: "fulfilled",
	fulfilment: "fulfillment",
	wilful: "willful",
	wilfully: "willfully",
	connexion: "connection",
	connexions: "connections",
	subtilty: "subtlety",
	endeavour: "endeavor",
	endeavoured: "endeavored",
	endeavouring: "endeavoring",
	worshipping: "worshiped",
	worshipped: "worshiped",
	fulness: "fullness",
	skilful: "skillful",
	favourable: "favorable",
	testament: "testaments",
	i: "1",
	ii: "2",
	iii: "3",
	iv: "4",
	v: "5",
	a: "a",
	an: "a",
};

function preserveCase(source: string, replacement: string): string {
	if (source === source.toUpperCase()) return replacement.toUpperCase();
	if (source[0] === source[0]?.toUpperCase())
		return replacement[0].toUpperCase() + replacement.slice(1);
	return replacement;
}

function normalizeSpellingInToken(token: string): string {
	return token.replace(/[a-z0-9]+/gi, (word) => {
		const replacement = spell[word.toLowerCase()];
		return replacement ? preserveCase(word, replacement) : word;
	});
}

function tokenKey(
	token: string,
	showPunct: boolean,
	showSpelling: boolean,
): string {
	let normalized = token;
	if (!showPunct) {
		normalized = normalized.toLowerCase().replace(/[^a-z0-9]/g, "");
	}
	if (!showSpelling) {
		if (showPunct) return normalizeSpellingInToken(normalized);
		normalized = spell[normalized] ?? normalized;
	}
	return normalized;
}

function tokenMatch(a: string, b: string): boolean {
	return tokenKey(a, false, false) === tokenKey(b, false, false);
}

function wordDiff(a: string, b: string): Token[] {
	const wa = a.match(/\S+\s*/g) || [];
	const wb = b.match(/\S+\s*/g) || [];
	const m = wa.length;
	const n = wb.length;

	const match = (i: number, j: number) => tokenMatch(wa[i], wb[j]);

	const dp: number[][] = Array.from({ length: m + 1 }, () =>
		new Array(n + 1).fill(0),
	);
	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			dp[i][j] = match(i - 1, j - 1)
				? dp[i - 1][j - 1] + 1
				: Math.max(dp[i - 1][j], dp[i][j - 1]);
		}
	}

	const result: Token[] = [];
	let i = m;
	let j = n;
	while (i > 0 || j > 0) {
		if (i > 0 && j > 0 && match(i - 1, j - 1)) {
			result.push({ leftText: wa[i - 1], rightText: wb[j - 1], type: "same" });
			i--;
			j--;
		} else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
			result.push({ rightText: wb[j - 1], type: "added" });
			j--;
		} else {
			result.push({ leftText: wa[i - 1], type: "removed" });
			i--;
		}
	}
	return result.reverse();
}

function chapterText(ch: Chapter, version: "1646" | "1788"): string {
	const key = version === "1646" ? "text1646" : ("text1788" as const);
	const numKey = version === "1646" ? "num1646" : ("num1788" as const);
	return ch.sections
		.filter((s) => s[key])
		.map((s) => {
			const n = s[numKey] ?? s.number;
			return n ? `${n}. ${s[key]}` : s[key];
		})
		.join("\n\n");
}

const neutralEditorial = {
	light: {
		"--page": "#f6f6f4",
		"--card": "#ffffff",
		"--panel": "#fbfbfa",
		"--text": "#1f1f1f",
		"--muted": "#6f6f68",
		"--border": "#deded8",
		"--border-strong": "#a8a8a0",
		"--accent": "#2f5f8f",
		"--accent-contrast": "#ffffff",
		"--removed-bg": "#f4dede",
		"--removed-text": "#7a2d2d",
		"--removed-border": "#e6bcbc",
		"--added-bg": "#dfeee3",
		"--added-text": "#2f643d",
		"--added-border": "#bddcc5",
	},
	dark: {
		"--page": "#252623",
		"--card": "#30312e",
		"--panel": "#373835",
		"--text": "#eeeeea",
		"--muted": "#bdbdb5",
		"--border": "#545550",
		"--border-strong": "#7d7e77",
		"--accent": "#8fb7dd",
		"--accent-contrast": "#1f2b36",
		"--removed-bg": "#5b3d3d",
		"--removed-text": "#f4d5d5",
		"--removed-border": "#7b5555",
		"--added-bg": "#3d523f",
		"--added-text": "#d9eddc",
		"--added-border": "#58725b",
	},
} satisfies { light: ThemeVars; dark: ThemeVars };

const removedClass =
	"rounded-sm border border-[var(--removed-border)] bg-[var(--removed-bg)] px-px text-[var(--removed-text)]";
const addedClass =
	"rounded-sm border border-[var(--added-border)] bg-[var(--added-bg)] px-px text-[var(--added-text)]";

function sameTokenClass(
	token: Token,
	side: "left" | "right",
	showPunct: boolean,
	showSpelling: boolean,
): string | undefined {
	if (!token.leftText || !token.rightText || token.leftText === token.rightText)
		return undefined;

	const differsByPunctOrCase =
		tokenKey(token.leftText, false, true) ===
		tokenKey(token.rightText, false, true);
	const differsBySpelling =
		tokenKey(token.leftText, false, false) ===
			tokenKey(token.rightText, false, false) &&
		tokenKey(token.leftText, false, true) !==
			tokenKey(token.rightText, false, true);

	if (
		(showPunct && differsByPunctOrCase) ||
		(showSpelling && differsBySpelling)
	) {
		return side === "left" ? removedClass : addedClass;
	}

	return undefined;
}

function DiffLine({
	tokens,
	side,
	showPunct,
	showSpelling,
}: {
	tokens: Token[];
	side: "left" | "right";
	showPunct: boolean;
	showSpelling: boolean;
}) {
	return (
		<p className="whitespace-pre-wrap break-words">
			{tokens.map((t, i) => {
				if (t.type === "same") {
					return (
						<span
							key={i}
							className={sameTokenClass(t, side, showPunct, showSpelling)}
						>
							{side === "left" ? t.leftText : t.rightText}
						</span>
					);
				}
				if (side === "left" && t.type === "removed") {
					return (
						<span key={i} className={removedClass}>
							{t.leftText}
						</span>
					);
				}
				if (side === "right" && t.type === "added") {
					return (
						<span key={i} className={addedClass}>
							{t.rightText}
						</span>
					);
				}
				return null;
			})}
		</p>
	);
}

function ChapterDiff({
	chapter,
	showPunct,
	showSpelling,
	textSize,
}: {
	chapter: Chapter;
	showPunct: boolean;
	showSpelling: boolean;
	textSize: number;
}) {
	const leftText = chapterText(chapter, "1646");
	const rightText = chapterText(chapter, "1788");

	const diff = useMemo(
		() => wordDiff(leftText, rightText),
		[leftText, rightText],
	);

	const leftTokens = diff;
	const rightTokens = diff;

	const hasHighlightedChanges = diff.some(
		(t) =>
			t.type !== "same" || sameTokenClass(t, "left", showPunct, showSpelling),
	);

	return (
		<section
			className={`border-t py-7 ${hasHighlightedChanges ? "border-[var(--border-strong)]" : "border-[var(--border)]"}`}
			id={`ch-${chapter.number}`}
		>
			<h2 className="mb-4 flex flex-wrap items-center gap-3 text-[1.15rem] font-bold leading-tight text-[var(--text)]">
				<span className="font-normal text-[var(--muted)]">
					Chapter {chapter.number}.
				</span>{" "}
				{chapter.title}
				{hasHighlightedChanges && (
					<span className="rounded border border-[var(--accent)] bg-[var(--accent)] px-2 py-0.5 text-[0.65rem] font-normal uppercase tracking-[0.08em] text-[var(--accent-contrast)]">
						changed
					</span>
				)}
			</h2>
			<div className="grid gap-6 md:grid-cols-2 md:gap-8">
				<div
					className="min-w-0 leading-[1.6]"
					style={{ fontSize: `${textSize}rem` }}
				>
					<div className="mb-3 border-b border-[var(--border)] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
						1646
					</div>
					<DiffLine
						tokens={leftTokens}
						side="left"
						showPunct={showPunct}
						showSpelling={showSpelling}
					/>
				</div>
				<div
					className="min-w-0 border-t border-[var(--border)] pt-5 leading-[1.6] md:border-l md:border-t-0 md:pl-8 md:pt-0"
					style={{ fontSize: `${textSize}rem` }}
				>
					<div className="mb-3 border-b border-[var(--border)] pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
						1788
					</div>
					<DiffLine
						tokens={rightTokens}
						side="right"
						showPunct={showPunct}
						showSpelling={showSpelling}
					/>
				</div>
			</div>
		</section>
	);
}

function TocItem({
	chapter,
	showPunct,
	showSpelling,
}: {
	chapter: Chapter;
	showPunct: boolean;
	showSpelling: boolean;
}) {
	const leftText = chapterText(chapter, "1646");
	const rightText = chapterText(chapter, "1788");
	const diff = useMemo(
		() => wordDiff(leftText, rightText),
		[leftText, rightText],
	);
	const hasHighlightedChanges = diff.some(
		(t) =>
			t.type !== "same" || sameTokenClass(t, "left", showPunct, showSpelling),
	);

	return (
		<li>
			<a
				className={`inline-flex gap-2 hover:text-[var(--accent)] ${hasHighlightedChanges ? "font-semibold text-[var(--accent)]" : ""}`}
				href={`#ch-${chapter.number}`}
			>
				<span className="tabular-nums">{chapter.number}.</span>
				<span>{chapter.title}</span>
			</a>
		</li>
	);
}

export default function ComparisonView() {
	const [showPunct, setShowPunct] = useState(false);
	const [showSpelling, setShowSpelling] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [textSize, setTextSize] = useState(0.85);
	const [themeReady, setThemeReady] = useState(false);

	const themeVars = useMemo(
		() => neutralEditorial[darkMode ? "dark" : "light"],
		[darkMode],
	);

	useEffect(() => {
		const saved = window.localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)",
		).matches;
		setDarkMode(saved ? saved === "dark" : prefersDark);
		setThemeReady(true);
	}, []);

	useEffect(() => {
		if (!themeReady) return;
		document.documentElement.classList.toggle("dark", darkMode);
		window.localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode, themeReady]);

	return (
		<main
			className="min-h-screen bg-[var(--page)] px-4 py-6 font-serif leading-relaxed text-[var(--text)] transition-colors sm:px-6"
			style={themeVars}
		>
			<div className="mx-auto max-w-[1200px]">
				<header
					id="top"
					className="mb-6 border-b border-[var(--border)] pb-5 text-center"
				>
					<div className="mb-4 flex flex-wrap justify-end gap-2">
						<button
							type="button"
							className="rounded border border-[var(--border)] bg-[var(--card)] p-1.5 text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)]"
							onClick={() => setDarkMode((value) => !value)}
							aria-pressed={darkMode}
							aria-label={
								darkMode ? "Switch to light mode" : "Switch to dark mode"
							}
						>
							{darkMode ? (
								<svg
									className="size-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<circle cx="12" cy="12" r="4" />
									<path d="M12 2v2" />
									<path d="M12 20v2" />
									<path d="m4.93 4.93 1.41 1.41" />
									<path d="m17.66 17.66 1.41 1.41" />
									<path d="M2 12h2" />
									<path d="M20 12h2" />
									<path d="m6.34 17.66-1.41 1.41" />
									<path d="m19.07 4.93-1.41 1.41" />
								</svg>
							) : (
								<svg
									className="size-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M20.7 15.4A8.5 8.5 0 0 1 8.6 3.3 8.5 8.5 0 1 0 20.7 15.4Z" />
								</svg>
							)}
						</button>
					</div>
					<h1 className="mb-1 text-2xl font-bold text-[var(--text)]">
						Westminster Confession of Faith
					</h1>
					<p className="mb-3 text-sm italic text-[var(--muted)]">
						1646 original &middot; 1788 American revision &mdash; word-level
						diff
					</p>
					<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--muted)]">
						<span className="flex items-center gap-1.5">
							<span className="inline-block size-3.5 rounded-sm border border-[var(--removed-border)] bg-[var(--removed-bg)]">
								&nbsp;
							</span>{" "}
							removed in 1788
						</span>
						<span className="flex items-center gap-1.5">
							<span className="inline-block size-3.5 rounded-sm border border-[var(--added-border)] bg-[var(--added-bg)]">
								&nbsp;
							</span>{" "}
							added in 1788
						</span>
						<label className="flex cursor-pointer select-none items-center gap-1.5">
							<input
								type="checkbox"
								checked={showPunct}
								onChange={(e) => setShowPunct(e.target.checked)}
							/>
							highlight punctuation &amp; capitalization changes
						</label>
						<label className="flex cursor-pointer select-none items-center gap-1.5">
							<input
								type="checkbox"
								checked={showSpelling}
								onChange={(e) => setShowSpelling(e.target.checked)}
							/>
							highlight spelling changes
						</label>
					</div>
				</header>

				<nav
					className="mb-6 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4"
					aria-label="Table of contents"
				>
					<h2 className="mb-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
						Contents
					</h2>
					<ol className="grid gap-x-4 gap-y-1 text-left text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-3">
						{chapters.map((chapter) => (
							<TocItem
								key={chapter.number}
								chapter={chapter}
								showPunct={showPunct}
								showSpelling={showSpelling}
							/>
						))}
					</ol>
				</nav>

				{chapters.map((ch) => (
					<ChapterDiff
						key={ch.number}
						chapter={ch}
						showPunct={showPunct}
						showSpelling={showSpelling}
						textSize={textSize}
					/>
				))}

				<footer className="mt-4 border-t border-[var(--border)] px-2 pb-2 pt-6 text-center text-xs text-[var(--muted)]">
					<p>
						Texts from the Westminster Assembly (1646) and the Presbyterian
						Church in the USA (1788). Proof texts omitted for brevity.
					</p>
				</footer>

				<div className="fixed bottom-4 right-4 flex overflow-hidden rounded border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] shadow-sm">
					<button
						type="button"
						className="px-2.5 py-2 text-xs font-semibold leading-none transition hover:bg-[var(--panel)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40"
						onClick={() =>
							setTextSize((value) =>
								Math.max(0.75, Number((value - 0.05).toFixed(2))),
							)
						}
						disabled={textSize <= 0.75}
						aria-label="Decrease text size"
					>
						-A
					</button>
					<button
						type="button"
						className="border-r border-[var(--border)] px-2.5 py-2 text-lg font-semibold leading-none transition hover:bg-[var(--panel)] hover:text-[var(--text)] disabled:cursor-not-allowed disabled:opacity-40"
						onClick={() =>
							setTextSize((value) =>
								Math.min(1.3, Number((value + 0.05).toFixed(2))),
							)
						}
						disabled={textSize >= 1.3}
						aria-label="Increase text size"
					>
						+A
					</button>
					<a
						className="px-3 py-2 text-lg leading-none transition hover:bg-[var(--panel)] hover:text-[var(--text)]"
						href="#top"
						aria-label="Return to top"
					>
						↑
					</a>
				</div>
			</div>
		</main>
	);
}
