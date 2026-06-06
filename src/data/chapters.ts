export interface Section {
  number: string
  text1646: string
  text1788: string
  num1646?: string
  num1788?: string
}

export interface Chapter {
  number: number
  title: string
  sections: Section[]
  hasDifferences: boolean
}

const ch20s4: Section = {
  number: "4",
  text1646:
    "And because the powers which God hath ordained, and the liberty which Christ hath purchased, are not intended by God to destroy, but mutually to uphold and preserve one another; they who, upon pretence of Christian liberty, shall oppose any lawful power, or the lawful exercise of it, whether it be civil or ecclesiastical, resist the ordinance of God. And, for their publishing of such opinions, or maintaining of such practices, as are contrary to the light of nature, or to the known principles of Christianity (whether concerning faith, worship, or conversation), or to the power of godliness; or, such erroneous opinions or practices, as either in their own nature, or in the manner of publishing or maintaining them, are destructive to the external peace and order which Christ hath established in the Church, they may lawfully be called to account, and proceeded against by the censures of the Church, and by the power of the civil magistrate.",
  text1788:
    "And because the powers which God hath ordained, and the liberty which Christ hath purchased, are not intended by God to destroy, but mutually to uphold and preserve one another, they who, upon pretense of Christian liberty, shall oppose any lawful power, or the lawful exercise of it, whether it be civil or ecclesiastical, resist the ordinance of God. And, for their publishing of such opinions, or maintaining of such practices, as are contrary to the light of nature, or to the known principles of Christianity (whether concerning faith, worship, or conversation), or to the power of godliness; or, such erroneous opinions or practices, as either in their own nature, or in the manner of publishing or maintaining them, are destructive to the external peace and order which Christ hath established in the church, they may lawfully be called to account, and proceeded against, by the censures of the church.",
}

const ch22s3: Section = {
  number: "3",
  text1646:
    "Whosoever taketh an oath ought duly to consider the weightiness of so solemn an act; and therein to avouch nothing, but what he is fully persuaded is the truth. Neither may any man bind himself by oath to anything but what is good and just, and what he believeth so to be, and what he is able and resolved to perform. Yet is it a sin to refuse an oath touching anything that is good and just, being imposed by lawful authority.",
  text1788:
    "Whosoever taketh an oath ought duly to consider the weightiness of so solemn an act, and therein to avouch nothing but what he is fully persuaded is the truth: neither may any man bind himself by oath to anything but what is good and just, and what he believeth so to be, and what he is able and resolved to perform.",
}

const ch23s3_1646 =
  "The civil magistrate may not assume to himself the administration of the Word and sacraments, or the power of the keys of the kingdom of heaven: yet he hath authority, and it is his duty, to take order, that unity and peace be preserved in the Church, that the truth of God be kept pure and entire; that all blasphemies and heresies be suppressed; all corruptions and abuses in worship and discipline prevented or reformed; and all the ordinances of God duly settled, administrated, and observed. For the better effecting whereof, he hath power to call synods, to be present at them, and to provide that whatsoever is transacted in them be according to the mind of God."

const ch23s3_1788 =
  "Civil magistrates may not assume to themselves the administration of the Word and sacraments; or the power of the keys of the kingdom of heaven; or, in the least, interfere in matters of faith. Yet, as nursing fathers, it is the duty of civil magistrates to protect the church of our common Lord, without giving the preference to any denomination of Christians above the rest, in such a manner that all ecclesiastical persons whatever shall enjoy the full, free, and unquestioned liberty of discharging every part of their sacred functions, without violence or danger. And, as Jesus Christ hath appointed a regular government and discipline in his church, no law of any commonwealth should interfere with, let, or hinder, the due exercise thereof, among the voluntary members of any denomination of Christians, according to their own profession and belief. It is the duty of civil magistrates to protect the person and good name of all their people, in such an effectual manner as that no person be suffered, either upon pretense of religion or of infidelity, to offer any indignity, violence, abuse, or injury to any other person whatsoever: and to take order, that all religious and ecclesiastical assemblies be held without molestation or disturbance."

const ch24s4_1646 =
  "Marriage ought not to be within the degrees of consanguinity or affinity forbidden by the Word; nor can such incestuous marriages ever be made lawful by any law of man or consent of parties, so as those persons may live together as man and wife. The man may not marry any of his wife's kindred nearer in blood than he may of his own; nor the woman of her husband's kindred nearer in blood than of her own."

const ch24s4_1788 =
  "Marriage ought not to be within the degrees of consanguinity or affinity forbidden by the Word. Nor can such incestuous marriages ever be made lawful by any law of man or consent of parties, so as those persons may live together as man and wife."

const ch25s6_1646 =
  "There is no other head of the Church, but the Lord Jesus Christ; nor can the Pope of Rome, in any sense, be head thereof; but is that Antichrist, that man of sin, and son of perdition, that exalteth himself, in the Church, against Christ and all that is called God."

const ch25s6_1788 =
  "There is no other head of the church but the Lord Jesus Christ. Nor can the pope of Rome, in any sense, be head thereof."

const ch31s2_1646 =
  "As magistrates may lawfully call a synod of ministers, and other fit persons, to consult and advise with, about matters of religion; so, if magistrates be open enemies to the Church, the ministers of Christ of themselves, by virtue of their office, or they, with other fit persons upon delegation from their Churches, may meet together in such assemblies."

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Of the Holy Scripture",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Although the light of nature and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men unexcusable; yet are they not sufficient to give that knowledge of God and of His will, which is necessary unto salvation. Therefore it pleased the Lord, at sundry times, and in divers manners, to reveal Himself, and to declare that His will unto His Church; and afterwards, for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the Church against the corruption of the flesh, and the malice of Satan and of the world, to commit the same wholly unto writing: which maketh the Holy Scripture to be most necessary; those former ways of God's revealing His will unto His people being now ceased.",
        text1788:
          "Although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men unexcusable; yet are they not sufficient to give that knowledge of God, and of his will, which is necessary unto salvation. Therefore it pleased the Lord, at sundry times, and in divers manners, to reveal himself, and to declare that his will unto his church; and afterwards, for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan and of the world, to commit the same wholly unto writing: which maketh the Holy Scripture to be most necessary; those former ways of God's revealing his will unto his people being now ceased.",
      },
      {
        number: "2",
        text1646:
          "Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testament, which are these: Of the Old Testament: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, I. Samuel, II. Samuel, I. Kings, II. Kings, I. Chronicles, II. Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Songs, Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi. Of the New Testament: The Gospels according to Matthew, Mark, Luke, John; The Acts of the Apostles; Paul's Epistles to the Romans, Corinthians I., Corinthians II., Galatians, Ephesians, Philippians, Colossians, Thessalonians I., Thessalonians II., To Timothy I., To Timothy II., To Titus, To Philemon; The Epistle to the Hebrews; The Epistle of James; The first and second Epistles of Peter; The first, second, and third Epistles of John; The Epistle of Jude; The Revelation of John. All which are given by inspiration of God, to be the rule of faith and life.",
        text1788:
          "Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are these: Of the Old Testament: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, 1 Samuel, 2 Samuel, 1 Kings, 2 Kings, 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Songs, Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi. Of the New Testament: The Gospels according to Matthew, Mark, Luke, John; the Acts of the Apostles; Paul's Epistles to the Romans, Corinthians 1, Corinthians 2, Galatians, Ephesians, Philippians, Colossians, Thessalonians 1, Thessalonians 2, to Timothy 1, to Timothy 2, to Titus, to Philemon; the Epistle to the Hebrews; the Epistle of James; the First and Second Epistles of Peter; the First, Second, and Third Epistles of John; the Epistle of Jude; the Revelation. All which are given by inspiration of God to be the rule of faith and life.",
      },
      {
        number: "3",
        text1646:
          "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture; and therefore are of no authority in the Church of God, nor to be any otherwise approved, or made use of, than other human writings.",
        text1788:
          "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture, and therefore are of no authority in the church of God, nor to be any otherwise approved, or made use of, than other human writings.",
      },
      {
        number: "4",
        text1646:
          "The authority of the Holy Scripture, for which it ought to be believed and obeyed, dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth itself) the author thereof: and therefore it is to be received because it is the Word of God.",
        text1788:
          "The authority of the Holy Scripture, for which it ought to be believed, and obeyed, dependeth not upon the testimony of any man, or church; but wholly upon God (who is truth itself) the author thereof: and therefore it is to be received, because it is the Word of God.",
      },
      {
        number: "5",
        text1646:
          "We may be moved and induced by the testimony of the Church to a high and reverent esteem of the Holy Scripture. And the heavenliness of the matter, the efficacy of the doctrine, the majesty of the style, the consent of all the parts, the scope of the whole (which is, to give all glory to God), the full discovery it makes of the only way of man's salvation, the many other incomparable excellencies, and the entire perfection thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God: yet notwithstanding, our full persuasion and assurance of the infallible truth and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts.",
        text1788:
          "We may be moved and induced by the testimony of the church to an high and reverent esteem of the Holy Scripture. And the heavenliness of the matter, the efficacy of the doctrine, the majesty of the style, the consent of all the parts, the scope of the whole (which is, to give all glory to God), the full discovery it makes of the only way of man's salvation, the many other incomparable excellencies, and the entire perfection thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God: yet notwithstanding, our full persuasion and assurance of the infallible truth and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts.",
      },
    ],
  },
  {
    number: 2,
    title: "Of God, and of the Holy Trinity",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "There is but one only, living, and true God: who is infinite in being and perfection, a most pure spirit, invisible, without body, parts, or passions, immutable, immense, eternal, incomprehensible, almighty, most wise, most holy, most free, most absolute; working all things according to the counsel of His own immutable and most righteous will, for His own glory; most loving, gracious, merciful, long-suffering, abundant in goodness and truth, forgiving iniquity, transgression, and sin; the rewarder of them that diligently seek Him; and withal, most just and terrible in His judgments, hating all sin, and who will by no means clear the guilty.",
        text1788:
          "There is but one only, living, and true God, who is infinite in being and perfection, a most pure spirit, invisible, without body, parts, or passions; immutable, immense, eternal, incomprehensible, almighty, most wise, most holy, most free, most absolute; working all things according to the counsel of his own immutable and most righteous will, for his own glory; most loving, gracious, merciful, long-suffering, abundant in goodness and truth, forgiving iniquity, transgression, and sin; the rewarder of them that diligently seek him; and withal, most just, and terrible in his judgments, hating all sin, and who will by no means clear the guilty.",
      },
    ],
  },
  {
    number: 3,
    title: "Of God's Eternal Decree",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "God from all eternity did, by the most wise and holy counsel of His own will, freely, and unchangeably ordain whatsoever comes to pass: yet so, as thereby neither is God the author of sin, nor is violence offered to the will of the creatures, nor is the liberty or contingency of second causes taken away, but rather established.",
        text1788:
          "God, from all eternity, did, by the most wise and holy counsel of his own will, freely, and unchangeably ordain whatsoever comes to pass: yet so, as thereby neither is God the author of sin, nor is violence offered to the will of the creatures; nor is the liberty or contingency of second causes taken away, but rather established.",
      },
    ],
  },
  {
    number: 4,
    title: "Of Creation",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "It pleased God the Father, Son, and Holy Ghost, for the manifestation of the glory of His eternal power, wisdom, and goodness, in the beginning, to create, or make of nothing, the world, and all things therein whether visible or invisible, in the space of six days; and all very good.",
        text1788:
          "It pleased God the Father, Son, and Holy Ghost, for the manifestation of the glory of his eternal power, wisdom, and goodness, in the beginning, to create, or make of nothing, the world, and all things therein whether visible or invisible, in the space of six days; and all very good.",
      },
      {
        number: "2",
        text1646:
          "After God had made all other creatures, He created man, male and female, with reasonable and immortal souls, endued with knowledge, righteousness, and true holiness, after His own image; having the law of God written in their hearts, and power to fulfil it: and yet under a possibility of transgressing, being left to the liberty of their own will, which was subject unto change. Beside this law written in their hearts, they received a command, not to eat of the tree of the knowledge of good and evil; which while they kept, they were happy in their communion with God, and had dominion over the creatures.",
        text1788:
          "After God had made all other creatures, he created man, male and female, with reasonable and immortal souls, endued with knowledge, righteousness, and true holiness, after his own image; having the law of God written in their hearts, and power to fulfill it: and yet under a possibility of transgressing, being left to the liberty of their own will, which was subject unto change. Beside this law written in their hearts, they received a command, not to eat of the tree of the knowledge of good and evil; which while they kept, they were happy in their communion with God, and had dominion over the creatures.",
      },
    ],
  },
  {
    number: 5,
    title: "Of Providence",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "God the great Creator of all things doth uphold, direct, dispose, and govern all creatures, actions, and things, from the greatest even to the least, by His most wise and holy providence, according to His infallible fore-knowledge, and the free and immutable counsel of His own will, to the praise of the glory of His wisdom, power, justice, goodness, and mercy.",
        text1788:
          "God the great Creator of all things doth uphold, direct, dispose, and govern all creatures, actions, and things, from the greatest even to the least, by his most wise and holy providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will, to the praise of the glory of his wisdom, power, justice, goodness, and mercy.",
      },
    ],
  },
  {
    number: 6,
    title: "Of the Fall of Man, of Sin, and of the Punishment Thereof",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Our first parents, being seduced by the subtilty and temptation of Satan, sinned, in eating the forbidden fruit. This their sin God was pleased, according to His wise and holy counsel, to permit, having purposed to order it to His own glory.",
        text1788:
          "Our first parents, being seduced by the subtlety and temptation of Satan, sinned, in eating the forbidden fruit. This their sin, God was pleased, according to his wise and holy counsel, to permit, having purposed to order it to his own glory.",
      },
    ],
  },
  {
    number: 7,
    title: "Of God's Covenant with Man",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "The distance between God and the creature is so great, that although reasonable creatures do owe obedience unto Him as their Creator, yet they could never have any fruition of Him as their blessedness and reward, but by some voluntary condescension on God's part, which He hath been pleased to express by way of covenant.",
        text1788:
          "The distance between God and the creature is so great, that although reasonable creatures do owe obedience unto him as their Creator, yet they could never have any fruition of him as their blessedness and reward, but by some voluntary condescension on God's part, which he hath been pleased to express by way of covenant.",
      },
    ],
  },
  {
    number: 8,
    title: "Of Christ the Mediator",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "It pleased God, in His eternal purpose, to choose and ordain the Lord Jesus, His only begotten Son, to be the Mediator between God and man, the Prophet, Priest, and King, the Head and Saviour of His Church, the Heir of all things, and Judge of the world: unto whom He did from all eternity give a people, to be His seed, and to be by Him in time redeemed, called, justified, sanctified, and glorified.",
        text1788:
          "It pleased God, in his eternal purpose, to choose and ordain the Lord Jesus, his only begotten Son, to be the Mediator between God and man, the Prophet, Priest, and King, the Head and Savior of his church, the Heir of all things, and Judge of the world: unto whom he did from all eternity give a people, to be his seed, and to be by him in time redeemed, called, justified, sanctified, and glorified.",
      },
    ],
  },
  {
    number: 9,
    title: "Of Free Will",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "God hath endued the will of man with that natural liberty, that it is neither forced, nor by any absolute necessity of nature determined to good or evil.",
        text1788:
          "God hath endued the will of man with that natural liberty, that it is neither forced, nor, by any absolute necessity of nature, determined to good, or evil.",
      },
    ],
  },
  {
    number: 10,
    title: "Of Effectual Calling",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "All those whom God hath predestinated unto life, and those only, He is pleased in His appointed and accepted time effectually to call, by His Word and Spirit, out of that state of sin and death, in which they are by nature, to grace and salvation by Jesus Christ; enlightening their minds spiritually and savingly to understand the things of God, taking away their heart of stone, and giving unto them a heart of flesh; renewing their wills, and, by His almighty power determining them to that which is good, and effectually drawing them to Jesus Christ: yet so, as they come most freely, being made willing by His grace.",
        text1788:
          "All those whom God hath predestinated unto life, and those only, he is pleased, in his appointed and accepted time, effectually to call, by his Word and Spirit, out of that state of sin and death, in which they are by nature, to grace and salvation, by Jesus Christ; enlightening their minds spiritually and savingly to understand the things of God, taking away their heart of stone, and giving unto them a heart of flesh; renewing their wills, and, by his almighty power, determining them to that which is good, and effectually drawing them to Jesus Christ: yet so, as they come most freely, being made willing by his grace.",
      },
    ],
  },
  {
    number: 11,
    title: "Of Justification",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Those whom God effectually calleth, He also freely justifieth: not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous; not for anything wrought in them, or done by them, but for Christ's sake alone; nor by imputing faith itself, the act of believing, or any other evangelical obedience to them, as their righteousness; but by imputing the obedience and satisfaction of Christ unto them, they receiving and resting on Him and His righteousness by faith; which faith they have not of themselves, it is the gift of God.",
        text1788:
          "Those whom God effectually calleth, he also freely justifieth: not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous; not for anything wrought in them, or done by them, but for Christ's sake alone; nor by imputing faith itself, the act of believing, or any other evangelical obedience to them, as their righteousness; but by imputing the obedience and satisfaction of Christ unto them, they receiving and resting on him and his righteousness, by faith; which faith they have not of themselves, it is the gift of God.",
      },
    ],
  },
  {
    number: 12,
    title: "Of Adoption",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "All those that are justified, God vouchsafeth, in and for His only Son Jesus Christ, to make partakers of the grace of adoption: by which they are taken into the number, and enjoy the liberties and privileges of the children of God, have His name put upon them, receive the spirit of adoption, have access to the throne of grace with boldness, are enabled to cry, Abba, Father, are pitied, protected, provided for, and chastened by Him as by a Father; yet never cast off, but sealed to the day of redemption, and inherit the promises, as heirs of everlasting salvation.",
        text1788:
          "All those that are justified, God vouchsafeth, in and for his only Son Jesus Christ, to make partakers of the grace of adoption, by which they are taken into the number, and enjoy the liberties and privileges of the children of God, have his name put upon them, receive the Spirit of adoption, have access to the throne of grace with boldness, are enabled to cry, Abba, Father, are pitied, protected, provided for, and chastened by him, as by a father: yet never cast off, but sealed to the day of redemption; and inherit the promises, as heirs of everlasting salvation.",
      },
    ],
  },
  {
    number: 13,
    title: "Of Sanctification",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "They who are once effectually called and regenerated, having a new heart and a new spirit created in them, are further sanctified, really and personally, through the virtue of Christ's death and resurrection, by His Word and Spirit dwelling in them: the dominion of the whole body of sin is destroyed, and the several lusts thereof are more and more weakened and mortified; and they more and more quickened and strengthened in all saving graces, to the practice of true holiness, without which no man shall see the Lord.",
        text1788:
          "They, who are once effectually called, and regenerated, having a new heart, and a new spirit created in them, are further sanctified, really and personally, through the virtue of Christ's death and resurrection, by his Word and Spirit dwelling in them: the dominion of the whole body of sin is destroyed, and the several lusts thereof are more and more weakened and mortified; and they more and more quickened and strengthened in all saving graces, to the practice of true holiness, without which no man shall see the Lord.",
      },
    ],
  },
  {
    number: 14,
    title: "Of Saving Faith",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "The grace of faith, whereby the elect are enabled to believe to the saving of their souls, is the work of the Spirit of Christ in their hearts; and is ordinarily wrought by the ministry of the Word: by which also, and by the administration of the sacraments, and prayer, it is increased and strengthened.",
        text1788:
          "The grace of faith, whereby the elect are enabled to believe to the saving of their souls, is the work of the Spirit of Christ in their hearts, and is ordinarily wrought by the ministry of the Word, by which also, and by the administration of the sacraments, and prayer, it is increased and strengthened.",
      },
    ],
  },
  {
    number: 15,
    title: "Of Repentance unto Life",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Repentance unto life is an evangelical grace, the doctrine whereof is to be preached by every minister of the Gospel, as well as that of faith in Christ.",
        text1788:
          "Repentance unto life is an evangelical grace, the doctrine whereof is to be preached by every minister of the gospel, as well as that of faith in Christ.",
      },
    ],
  },
  {
    number: 16,
    title: "Of Good Works",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Good works are only such as God hath commanded in His holy Word, and not such as, without the warrant thereof, are devised by men, out of blind zeal, or upon any pretence of good intention.",
        text1788:
          "Good works are only such as God hath commanded in his holy Word, and not such as, without the warrant thereof, are devised by men, out of blind zeal, or upon any pretense of good intention.",
      },
    ],
  },
  {
    number: 17,
    title: "Of the Perseverance of the Saints",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "They, whom God hath accepted in His Beloved, effectually called, and sanctified by His Spirit, can neither totally, nor finally, fall away from the state of grace: but shall certainly persevere therein to the end, and be eternally saved.",
        text1788:
          "They, whom God hath accepted in his Beloved, effectually called, and sanctified by his Spirit, can neither totally nor finally fall away from the state of grace, but shall certainly persevere therein to the end, and be eternally saved.",
      },
    ],
  },
  {
    number: 18,
    title: "Of the Assurance of Grace and Salvation",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Although hypocrites and other unregenerate men may vainly deceive themselves with false hopes and carnal presumptions of being in the favour of God, and estate of salvation; which hope of theirs shall perish: yet such as truly believe in the Lord Jesus, and love Him in sincerity, endeavouring to walk in all good conscience before Him, may, in this life, be certainly assured that they are in the state of grace, and may rejoice in the hope of the glory of God, which hope shall never make them ashamed.",
        text1788:
          "Although hypocrites and other unregenerate men may vainly deceive themselves with false hopes and carnal presumptions of being in the favor of God, and estate of salvation (which hope of theirs shall perish): yet such as truly believe in the Lord Jesus, and love him in sincerity, endeavoring to walk in all good conscience before him, may, in this life, be certainly assured that they are in the state of grace, and may rejoice in the hope of the glory of God, which hope shall never make them ashamed.",
      },
    ],
  },
  {
    number: 19,
    title: "Of the Law of God",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "God gave to Adam a law, as a covenant of works, by which He bound him and all his posterity to personal, entire, exact, and perpetual obedience; promised life upon the fulfilling, and threatened death upon the breach of it: and endued him with power and ability to keep it.",
        text1788:
          "God gave to Adam a law, as a covenant of works, by which he bound him and all his posterity to personal, entire, exact, and perpetual obedience, promised life upon the fulfilling, and threatened death upon the breach of it, and endued him with power and ability to keep it.",
      },
    ],
  },
  {
    number: 20,
    title: "Of Christian Liberty, and Liberty of Conscience",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "The liberty which Christ hath purchased for believers under the Gospel consists in their freedom from the guilt of sin, and condemning wrath of God, the curse of the moral law; and, in their being delivered from this present evil world, bondage to Satan, and dominion of sin; from the evil of afflictions, the sting of death, the victory of the grave, and everlasting damnation; as also, in their free access to God, and their yielding obedience unto Him, not out of slavish fear, but a child-like love and willing mind. All which were common also to believers under the law. But, under the new testament, the liberty of Christians is further enlarged, in their freedom from the yoke of the ceremonial law, to which the Jewish Church was subjected; and in greater boldness of access to the throne of grace, and in fuller communications of the free Spirit of God, than believers under the law did ordinarily partake of.",
        text1788:
          "The liberty which Christ hath purchased for believers under the gospel consists in their freedom from the guilt of sin, the condemning wrath of God, the curse of the moral law; and, in their being delivered from this present evil world, bondage to Satan, and dominion of sin; from the evil of afflictions, the sting of death, the victory of the grave, and everlasting damnation; as also, in their free access to God, and their yielding obedience unto him, not out of slavish fear, but a childlike love and willing mind. All which were common also to believers under the law. But, under the new testament, the liberty of Christians is further enlarged, in their freedom from the yoke of the ceremonial law, to which the Jewish church was subjected; and in greater boldness of access to the throne of grace, and in fuller communications of the free Spirit of God, than believers under the law did ordinarily partake of.",
      },
      {
        number: "2",
        text1646:
          "God alone is Lord of the conscience, and hath left it free from the doctrines and commandments of men, which are in any thing contrary to His Word; or beside it, if matters of faith or worship. So that, to believe such doctrines, or to obey such commands, out of conscience, is to betray true liberty of conscience: and the requiring of an implicit faith, and an absolute and blind obedience is to destroy liberty of conscience, and reason also.",
        text1788:
          "God alone is Lord of the conscience, and hath left it free from the doctrines and commandments of men, which are, in anything, contrary to his Word; or beside it, if matters of faith, or worship. So that, to believe such doctrines, or to obey such commands, out of conscience, is to betray true liberty of conscience: and the requiring of an implicit faith, and an absolute and blind obedience, is to destroy liberty of conscience, and reason also.",
      },
      {
        number: "3",
        text1646:
          "They who, upon pretence of Christian liberty, do practice any sin, or cherish any lust, do thereby destroy the end of Christian liberty, which is, that being delivered out of the hands of our enemies, we might serve the Lord without fear, in holiness and righteousness before Him, all the days of our life.",
        text1788:
          "They who, upon pretense of Christian liberty, do practice any sin, or cherish any lust, do thereby destroy the end of Christian liberty, which is, that being delivered out of the hands of our enemies, we might serve the Lord without fear, in holiness and righteousness before him, all the days of our life.",
      },
      ch20s4,
    ],
  },
  {
    number: 21,
    title: "Of Religious Worship, and the Sabbath Day",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "The light of nature showeth that there is a God, who hath lordship and sovereignty over all, is good, and doth good unto all, and is therefore to be feared, loved, praised, called upon, trusted in, and served, with all the heart, and with all the soul, and with all the might. But the acceptable way of worshipping the true God is instituted by Himself, and so limited by His own revealed will, that He may not be worshipped according to the imaginations and devices of men, or the suggestions of Satan, under any visible representation, or any other way not prescribed in the holy Scripture.",
        text1788:
          "The light of nature showeth that there is a God, who hath lordship and sovereignty over all, is good, and doth good unto all, and is therefore to be feared, loved, praised, called upon, trusted in, and served, with all the heart, and with all the soul, and with all the might. But the acceptable way of worshiping the true God is instituted by himself, and so limited by his own revealed will, that he may not be worshiped according to the imaginations and devices of men, or the suggestions of Satan, under any visible representation, or any other way not prescribed in the Holy Scripture.",
      },
    ],
  },
  {
    number: 22,
    title: "Of Lawful Oaths and Vows",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "A lawful oath is a part of religious worship, wherein, upon just occasion, the person swearing solemnly calleth God to witness what he asserteth, or promiseth, and to judge him according to the truth or falsehood of what he sweareth.",
        text1788:
          "A lawful oath is a part of religious worship, wherein, upon just occasion, the person swearing solemnly calleth God to witness what he asserteth, or promiseth, and to judge him according to the truth or falsehood of what he sweareth.",
      },
      {
        number: "2",
        text1646:
          "The name of God only is that by which men ought to swear; and therein it is to be used with all holy fear and reverence. Therefore, to swear vainly or rashly, by that glorious and dreadful Name; or, to swear at all by any other thing, is sinful, and to be abhorred. Yet, as in matters of weight and moment, an oath is warranted by the Word of God, under the New Testament, as well as under the Old; so a lawful oath, being imposed by lawful authority, in such matters ought to be taken.",
        text1788:
          "The name of God only is that by which men ought to swear, and therein it is to be used with all holy fear and reverence. Therefore, to swear vainly, or rashly, by that glorious and dreadful Name; or, to swear at all by any other thing, is sinful, and to be abhorred. Yet, as in matters of weight and moment, an oath is warranted by the Word of God, under the new testament as well as under the old; so a lawful oath, being imposed by lawful authority, in such matters, ought to be taken.",
      },
      ch22s3,
    ],
  },
  {
    number: 23,
    title: "Of the Civil Magistrate",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "God, the supreme Lord and King of all the world, hath ordained civil magistrates, to be, under Him, over the people, for His own glory, and the public good: and, to this end, hath armed them with the power of the sword, for the defence and encouragement of them that are good, and for the punishment of evil doers.",
        text1788:
          "God, the supreme Lord and King of all the world, hath ordained civil magistrates, to be, under him, over the people, for his own glory, and the public good: and, to this end, hath armed them with the power of the sword, for the defense and encouragement of them that are good, and for the punishment of evildoers.",
      },
      {
        number: "2",
        text1646:
          "It is lawful for Christians to accept and execute the office of a magistrate, when called thereunto; in the managing whereof, as they ought especially to maintain piety, justice, and peace, according to the wholesome laws of each commonwealth; so for that end, they may lawfully now, under the New Testament, wage war, upon just and necessary occasion.",
        text1788:
          "It is lawful for Christians to accept and execute the office of a magistrate, when called thereunto: in the managing whereof, as they ought especially to maintain piety, justice, and peace, according to the wholesome laws of each commonwealth; so, for that end, they may lawfully, now under the new testament, wage war, upon just and necessary occasion.",
      },
      {
        number: "3",
        text1646: ch23s3_1646,
        text1788: ch23s3_1788,
      },
      {
        number: "4",
        text1646:
          "It is the duty of people to pray for magistrates, to honour their persons, to pay them tribute or other dues, to obey their lawful commands, and to be subject to their authority, for conscience' sake. Infidelity, or difference in religion, doth not make void the magistrates' just and legal authority, nor free the people from their due obedience to them: from which ecclesiastical persons are not exempted, much less hath the Pope any power and jurisdiction over them in their dominions, or over any of their people; and, least of all, to deprive them of their dominions, or lives, if he shall judge them to be heretics, or upon any other pretence whatsoever.",
        text1788:
          "It is the duty of people to pray for magistrates, to honor their persons, to pay them tribute or other dues, to obey their lawful commands, and to be subject to their authority, for conscience' sake. Infidelity, or difference in religion, doth not make void the magistrates' just and legal authority, nor free the people from their due obedience to them: from which ecclesiastical persons are not exempted, much less hath the pope any power and jurisdiction over them in their dominions, or over any of their people; and, least of all, to deprive them of their dominions, or lives, if he shall judge them to be heretics, or upon any other pretense whatsoever.",
      },
    ],
  },
  {
    number: 24,
    title: "Of Marriage and Divorce",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "Marriage is to be between one man and one woman: neither is it lawful for any man to have more than one wife, nor for any woman to have more than one husband, at the same time.",
        text1788:
          "Marriage is to be between one man and one woman: neither is it lawful for any man to have more than one wife, nor for any woman to have more than one husband, at the same time.",
      },
      { number: "2", text1646: "Marriage was ordained for the mutual help of husband and wife, for the increase of mankind with a legitimate issue, and of the Church with an holy seed; and for preventing of uncleanness.", text1788: "Marriage was ordained for the mutual help of husband and wife, for the increase of mankind with legitimate issue, and of the church with an holy seed; and for preventing of uncleanness." },
      { number: "3", text1646: "It is lawful for all sorts of people to marry, who are able with judgment to give their consent. Yet is it the duty of Christians to marry only in the Lord: and therefore such as profess the true reformed religion should not marry with infidels, papists, or other idolaters: neither should such as are godly be unequally yoked, by marrying with such as are notoriously wicked in their life, or maintain damnable heresies.", text1788: "It is lawful for all sorts of people to marry, who are able with judgment to give their consent. Yet it is the duty of Christians to marry only in the Lord. And therefore such as profess the true reformed religion should not marry with infidels, papists, or other idolaters: neither should such as are godly be unequally yoked, by marrying with such as are notoriously wicked in their life, or maintain damnable heresies." },
      { number: "4", text1646: ch24s4_1646, text1788: ch24s4_1788 },
      { number: "5", text1646: "Adultery or fornication committed after a contract, being detected before marriage, giveth just occasion to the innocent party to dissolve that contract. In the case of adultery after marriage, it is lawful for the innocent party to sue out a divorce: and, after the divorce, to marry another, as if the offending party were dead.", text1788: "Adultery or fornication committed after a contract, being detected before marriage, giveth just occasion to the innocent party to dissolve that contract. In the case of adultery after marriage, it is lawful for the innocent party to sue out a divorce: and, after the divorce, to marry another, as if the offending party were dead." },
      { number: "6", text1646: "Although the corruption of man be such as is apt to study arguments unduly to put asunder those whom God hath joined together in marriage: yet nothing but adultery, or such wilful desertion as can no way be remedied by the Church or civil magistrate, is cause sufficient of dissolving the bond of marriage: wherein, a public and orderly course of proceeding is to be observed; and the persons concerned in it not left to their own wills and discretion, in their own case.", text1788: "Although the corruption of man be such as is apt to study arguments unduly to put asunder those whom God hath joined together in marriage: yet, nothing but adultery, or such willful desertion as can no way be remedied by the church, or civil magistrate, is cause sufficient of dissolving the bond of marriage: wherein, a public and orderly course of proceeding is to be observed; and the persons concerned in it not left to their own wills, and discretion, in their own case." },
    ],
  },
  {
    number: 25,
    title: "Of the Church",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "The catholic or universal Church which is invisible, consists of the whole number of the elect, that have been, are, or shall be gathered into one, under Christ the Head thereof; and is the spouse, the body, the fulness of Him that filleth all in all.",
        text1788:
          "The catholic or universal church, which is invisible, consists of the whole number of the elect, that have been, are, or shall be gathered into one, under Christ the Head thereof; and is the spouse, the body, the fullness of him that filleth all in all.",
      },
      {
        number: "2",
        text1646:
          "The visible Church, which is also catholic or universal under the Gospel (not confined to one nation as before under the law), consists of all those throughout the world that profess the true religion; and of their children: and is the kingdom of the Lord Jesus Christ, the house and family of God, out of which there is no ordinary possibility of salvation.",
        text1788:
          "The visible church, which is also catholic or universal under the gospel (not confined to one nation, as before under the law), consists of all those throughout the world that profess the true religion; and of their children: and is the kingdom of the Lord Jesus Christ, the house and family of God, out of which there is no ordinary possibility of salvation.",
      },
      {
        number: "6",
        text1646: ch25s6_1646,
        text1788: ch25s6_1788,
      },
    ],
  },
  {
    number: 26,
    title: "Of the Communion of Saints",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "All saints, that are united to Jesus Christ their Head by His Spirit and by faith, have fellowship with Him in His grace, sufferings, death, resurrection, and glory: and, being united to one another in love, they have communion in each other's gifts and graces, and are obliged to the performance of such duties, public and private, as do conduce to their mutual good, both in the inward and outward man.",
        text1788:
          "All saints, that are united to Jesus Christ their Head, by his Spirit, and by faith, have fellowship with him in his graces, sufferings, death, resurrection, and glory: and, being united to one another in love, they have communion in each other's gifts and graces, and are obliged to the performance of such duties, public and private, as do conduce to their mutual good, both in the inward and outward man.",
      },
    ],
  },
  {
    number: 27,
    title: "Of the Sacraments",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Sacraments are holy signs and seals of the covenant of grace, immediately instituted by God, to represent Christ and His benefits; and to confirm our interest in Him; as also, to put a visible difference between those that belong unto the Church, and the rest of the world; and solemnly to engage them to the service of God in Christ, according to His Word.",
        text1788:
          "Sacraments are holy signs and seals of the covenant of grace, immediately instituted by God, to represent Christ and his benefits; and to confirm our interest in him; as also, to put a visible difference between those that belong unto the church, and the rest of the world; and solemnly to engage them to the service of God in Christ, according to his Word.",
      },
    ],
  },
  {
    number: 28,
    title: "Of Baptism",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Baptism is a sacrament of the New Testament, ordained by Jesus Christ, not only for the solemn admission of the party baptized into the visible Church; but also, to be unto him a sign and seal of the covenant of grace, of his ingrafting into Christ, of regeneration, of remission of sins, and of his giving up unto God through Jesus Christ, to walk in the newness of life. Which sacrament is, by Christ's own appointment, to be continued in His Church until the end of the world.",
        text1788:
          "Baptism is a sacrament of the New Testament, ordained by Jesus Christ, not only for the solemn admission of the party baptized into the visible church; but also, to be unto him a sign and seal of the covenant of grace, of his ingrafting into Christ, of regeneration, of remission of sins, and of his giving up unto God through Jesus Christ, to walk in newness of life. Which sacrament is, by Christ's own appointment, to be continued in his church until the end of the world.",
      },
    ],
  },
  {
    number: 29,
    title: "Of the Lord's Supper",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "Our Lord Jesus, in the night wherein He was betrayed, instituted the sacrament of His body and blood, called the Lord's Supper, to be observed in His Church, unto the end of the world, for the perpetual remembrance of the sacrifice of Himself in His death; the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in Him, their further engagement in and to all duties which they owe unto Him; and to be a bond and pledge of their communion with Him, and with each other, as members of His mystical body.",
        text1788:
          "Our Lord Jesus, in the night wherein he was betrayed, instituted the sacrament of his body and blood, called the Lord's Supper, to be observed in his church, unto the end of the world, for the perpetual remembrance of the sacrifice of himself in his death; the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in him, their further engagement in and to all duties which they owe unto him; and to be a bond and pledge of their communion with him, and with each other, as members of his mystical body.",
      },
    ],
  },
  {
    number: 30,
    title: "Of Church Censures",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "The Lord Jesus, as King and Head of His Church, hath therein appointed a government, in the hand of Church officers, distinct from the civil magistrate.",
        text1788:
          "The Lord Jesus, as King and Head of his church, hath therein appointed a government, in the hand of church officers, distinct from the civil magistrate.",
      },
    ],
  },
  {
    number: 31,
    title: "Of Synods and Councils",
    hasDifferences: true,
    sections: [
      {
        number: "1",
        text1646:
          "For the better government, and further edification of the Church, there ought to be such assemblies as are commonly called synods or councils.",
        text1788:
          "For the better government, and further edification of the church, there ought to be such assemblies as are commonly called synods or councils.",
      },
      {
        number: "2",
        num1646: "2",
        num1788: "",
        text1646: ch31s2_1646,
        text1788: "",
      },
      {
        number: "3",
        num1646: "3",
        num1788: "2",
        text1646:
          "It belongs to synods and councils, ministerially to determine controversies of faith and cases of conscience; to set down rules and directions for the better ordering of the public worship of God, and government of his Church; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the Word of God, are to be received with reverence and submission; not only for their agreement with the Word, but also for the power whereby they are made, as being an ordinance of God appointed thereunto in His Word.",
        text1788:
          "It belongeth to synods and councils, ministerially to determine controversies of faith, and cases of conscience; to set down rules and directions for the better ordering of the public worship of God, and government of his church; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the Word of God, are to be received with reverence and submission; not only for their agreement with the Word, but also for the power whereby they are made, as being an ordinance of God appointed thereunto in his Word.",
      },
      {
        number: "4",
        num1646: "4",
        num1788: "3",
        text1646:
          "All synods or councils, since the Apostles' times, whether general or particular, may err; and many have erred. Therefore they are not to be made the rule of faith, or practice; but to be used as a help in both.",
        text1788:
          "All synods or councils, since the Apostles' times, whether general or particular, may err; and many have erred. Therefore they are not to be made the rule of faith, or practice; but to be used as a help in both.",
      },
      {
        number: "5",
        num1646: "5",
        num1788: "4",
        text1646:
          "Synods and councils are to handle, or conclude, nothing, but that which is ecclesiastical: and are not to intermeddle with civil affairs which concern the commonwealth; unless by way of humble petition, in cases extraordinary; or by way of advice, for satisfaction of conscience, if they be thereunto required by the civil magistrate.",
        text1788:
          "Synods and councils are to handle, or conclude nothing, but that which is ecclesiastical: and are not to intermeddle with civil affairs which concern the commonwealth, unless by way of humble petition in cases extraordinary; or, by way of advice, for satisfaction of conscience, if they be thereunto required by the civil magistrate.",
      },
    ],
  },
  {
    number: 32,
    title: "Of the State of Men after Death, and of the Resurrection of the Dead",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "The bodies of men, after death, return to dust and see corruption: but their souls (which neither die nor sleep) having an immortal subsistence, immediately return to God who gave them: the souls of the righteous, being then made perfect in holiness, are received into the highest heavens, where they behold the face of God, in light and glory, waiting for the full redemption of their bodies. And the souls of the wicked are cast into hell, where they remain in torments and utter darkness, reserved to the judgment of the great day. Beside these two places, for souls separated from their bodies, the Scripture acknowledgeth none.",
        text1788:
          "The bodies of men, after death, return to dust, and see corruption: but their souls, which neither die nor sleep, having an immortal subsistence, immediately return to God who gave them: the souls of the righteous, being then made perfect in holiness, are received into the highest heavens, where they behold the face of God, in light and glory, waiting for the full redemption of their bodies. And the souls of the wicked are cast into hell, where they remain in torments and utter darkness, reserved to the judgment of the great day. Besides these two places, for souls separated from their bodies, the Scripture acknowledgeth none.",
      },
    ],
  },
  {
    number: 33,
    title: "Of the Last Judgment",
    hasDifferences: false,
    sections: [
      {
        number: "1",
        text1646:
          "God hath appointed a day, wherein He will judge the world in righteousness, by Jesus Christ, to whom all power and judgment is given of the Father. In which day, not only the apostate angels shall be judged, but likewise all persons that have lived upon earth shall appear before the tribunal of Christ, to give an account of their thoughts, words, and deeds; and to receive according to what they have done in the body, whether good or evil.",
        text1788:
          "God hath appointed a day, wherein he will judge the world, in righteousness, by Jesus Christ, to whom all power and judgment is given of the Father. In which day, not only the apostate angels shall be judged, but likewise all persons that have lived upon earth shall appear before the tribunal of Christ, to give an account of their thoughts, words, and deeds; and to receive according to what they have done in the body, whether good or evil.",
      },
    ],
  },
]
