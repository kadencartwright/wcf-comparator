import { useState, useMemo } from "react"
import { chapters, type Chapter } from "../data/chapters"

function highlightDifferences(text1646: string, text1788: string) {
  if (text1646 === text1788) {
    return { text1646, text1788, same: true }
  }
  return { text1646, text1788, same: false }
}

function SectionView({
  section,
  showBoth,
}: {
  section: { number: string; text1646: string; text1788: string; no1788?: boolean }
  showBoth: boolean
}) {
  const { text1646, text1788, same } = useMemo(
    () => highlightDifferences(section.text1646, section.text1788),
    [section.text1646, section.text1788],
  )

  if (same && !showBoth) {
    return (
      <div className="section">
        <span className="section-number">{section.number}.</span>
        <p>{text1646}</p>
      </div>
    )
  }

  return (
    <div className="section diff">
      <span className="section-number">{section.number}.</span>
      <div className="side-by-side">
        <div className="side">
          <div className="side-label">1646</div>
          <p>{text1646}</p>
        </div>
        <div className="side">
          <div className="side-label">1788</div>
          {section.no1788 ? <p className="empty">(omitted)</p> : <p>{text1788}</p>}
        </div>
      </div>
    </div>
  )
}

function ChapterCard({
  chapter,
  showBoth,
}: {
  chapter: Chapter
  showBoth: boolean
}) {
  const diffSections = chapter.sections.filter(
    (s) => s.text1646 !== s.text1788,
  )

  return (
    <div className={`chapter-card ${chapter.hasDifferences ? "has-diffs" : ""}`} id={`ch-${chapter.number}`}>
      <h2 className="chapter-title">
        Chapter {chapter.number}. {chapter.title}
        {chapter.hasDifferences && (
          <span className="diff-badge">Amended 1788</span>
        )}
      </h2>
      {!chapter.hasDifferences && !showBoth ? (
        <div className="section">
          <p className="identical-note">
            Identical in both versions (with minor capitalization and
            spelling differences).
          </p>
        </div>
      ) : (
        chapter.sections.map((section) => (
          <SectionView
            key={section.number}
            section={section}
            showBoth={showBoth || chapter.hasDifferences}
          />
        ))
      )}
    </div>
  )
}

const diffChapters = chapters.filter((c) => c.hasDifferences)

export default function ComparisonView() {
  const [activeChapter, setActiveChapter] = useState<number>(1)
  const [showAll, setShowAll] = useState(false)
  const [showBoth, setShowBoth] = useState(false)

  const chapter = chapters[activeChapter - 1]

  return (
    <div className="comparison-container">
      <header className="header">
        <h1>Westminster Confession of Faith</h1>
        <p className="subtitle">Comparison of the 1646 and 1788 (American Revision) Texts</p>
      </header>

      <div className="diff-summary">
        <h3>Chapters Amended in 1788</h3>
        <div className="diff-chapters-list">
          {diffChapters.map((c) => (
            <button
              key={c.number}
              className={`diff-chapter-btn ${activeChapter === c.number ? "active" : ""}`}
              onClick={() => setActiveChapter(c.number)}
            >
              Ch. {c.number} — {c.title}
            </button>
          ))}
        </div>
      </div>

      <nav className="chapter-nav">
        <div className="chapter-selector">
          <label htmlFor="chapter-select">Jump to chapter: </label>
          <select
            id="chapter-select"
            value={activeChapter}
            onChange={(e) => setActiveChapter(Number(e.target.value))}
          >
            {chapters.map((c) => (
              <option key={c.number} value={c.number}>
                {c.number}. {c.title} {c.hasDifferences ? "✱" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="view-controls">
          <label>
            <input
              type="checkbox"
              checked={showBoth}
              onChange={(e) => setShowBoth(e.target.checked)}
            />
            Show both versions side by side (including identical sections)
          </label>
        </div>
      </nav>

      <ChapterCard chapter={chapter} showBoth={showBoth} />
    </div>
  )
}
