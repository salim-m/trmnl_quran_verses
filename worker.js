const verses = [
  {
    id: 1,
    reference: "Al-Baqarah 2:286",
    arabic:
      "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ",
    english: "Allah does not burden a soul beyond that it can bear.",
    explanation:
      "A source of hope and resilience — Allah never places on anyone more than they can handle, reminding believers that every trial is within their capacity to endure.",
  },
  {
    id: 2,
    reference: "Az-Zumar 39:53",
    arabic:
      "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ",
    english:
      "Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.",
    explanation:
      "One of the most comforting verses in the Quran — no matter how great one's sins, the door of repentance and Allah's mercy is always open.",
  },
  {
    id: 3,
    reference: "Ar-Ra'd 13:28",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    english: "Verily, in the remembrance of Allah do hearts find rest.",
    explanation:
      "True inner peace comes not from wealth or status, but from the constant remembrance of Allah — a timeless remedy for anxiety and restlessness.",
  },
  {
    id: 4,
    reference: "Ash-Sharh 94:5-6",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۞ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english:
      "For indeed, with hardship will be ease. Indeed, with hardship will be ease.",
    explanation:
      "Allah repeats this promise twice in the same surah for emphasis — ease is inseparable from hardship, and relief always follows difficulty.",
  },
  {
    id: 5,
    reference: "Al-Baqarah 2:153",
    arabic:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    english:
      "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    explanation:
      "Patience and prayer are prescribed as the believer's greatest tools in times of hardship, with a divine assurance that Allah stands with those who persevere.",
  },
  {
    id: 6,
    reference: "At-Talaq 65:3",
    arabic:
      "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
    english:
      "And whoever relies upon Allah — then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a decreed extent.",
    explanation:
      "A powerful promise of tawakkul (trust in God) — whoever places full reliance on Allah will find Him fully sufficient, for Allah's plan always unfolds perfectly.",
  },
  {
    id: 7,
    reference: "Al-Baqarah 2:152",
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    english:
      "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    explanation:
      "A mutual promise between Allah and the believer — remembrance and gratitude are not just acts of worship, but a direct path to Allah's attention and blessings.",
  },
  {
    id: 8,
    reference: "Al-Hadid 57:4",
    arabic:
      "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    english:
      "And He is with you wherever you are. And Allah, of what you do, is Seeing.",
    explanation:
      "Allah's presence and awareness are boundless — this verse encourages sincerity in all actions, knowing that no deed goes unnoticed by the All-Seeing.",
  },
  {
    id: 9,
    reference: "Al-Baqarah 2:201",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    english:
      "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
    explanation:
      "One of the most comprehensive supplications in the Quran, balancing both worldly wellbeing and eternal salvation in a single, concise prayer.",
  },
  {
    id: 10,
    reference: "Al-Imran 3:139",
    arabic:
      "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    english:
      "Do not weaken and do not grieve, and you will be superior if you are true believers.",
    explanation:
      "A rallying call for believers not to succumb to despair or weakness — true faith grants inner elevation and dignity regardless of outward circumstances.",
  },
  {
    id: 11,
    reference: "Al-Fatiha 1:1-3",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۞ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمَٰنِ الرَّحِيمِ",
    english:
      "In the name of Allah, the Most Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds. The Most Merciful, the Especially Merciful.",
    explanation:
      "The opening of the Quran establishes Allah's defining attributes — absolute sovereignty paired with boundless mercy, setting the tone for the entire revelation.",
  },
  {
    id: 12,
    reference: "Al-Baqarah 2:255 (Ayat al-Kursi)",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
    english:
      "Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth.",
    explanation:
      "Considered the greatest verse in the Quran, Ayat al-Kursi declares Allah's absolute, uninterrupted dominion over all of creation — a verse of immense protection and spiritual power.",
  },
  {
    id: 13,
    reference: "Al-Baqarah 2:222",
    arabic: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
    english:
      "Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.",
    explanation:
      "Repentance is not a one-time act but a continuous journey — Allah's love is drawn to those who keep returning to Him with sincerity and strive for purity.",
  },
  {
    id: 14,
    reference: "Ad-Duha 93:3",
    arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
    english: "Your Lord has not abandoned you, nor has He detested you.",
    explanation:
      "Revealed during a period of silence in revelation, this verse is a tender divine reassurance — Allah never abandons those He loves, even when His signs seem absent.",
  },
  {
    id: 15,
    reference: "Ash-Sharh 94:7-8",
    arabic: "فَإِذَا فَرَغْتَ فَانصَبْ ۞ وَإِلَىٰ رَبِّكَ فَارْغَب",
    english:
      "So when you have finished your duties, then stand up for worship. And to your Lord direct your longing.",
    explanation:
      "A guidance on continuous devotion — once worldly tasks are done, the believer immediately turns toward worship, keeping the heart perpetually oriented to Allah.",
  },
  {
    id: 16,
    reference: "Yusuf 12:87",
    arabic:
      "إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    english:
      "Indeed, no one despairs of relief from Allah except the disbelieving people.",
    explanation:
      "From the story of Prophet Ya'qub — despair in Allah's relief is not the trait of a believer. Hope in Allah's mercy must be unwavering, no matter how bleak things appear.",
  },
  {
    id: 17,
    reference: "Luqman 31:17",
    arabic:
      "يَا بُنَيَّ أَقِمِ الصَّلَاةَ وَأْمُرْ بِالْمَعْرُوفِ وَانْهَ عَنِ الْمُنكَرِ وَاصْبِرْ عَلَىٰ مَا أَصَابَكَ ۖ إِنَّ ذَٰلِكَ مِنَ الْأُمُورِ",
    english:
      "O my son, establish prayer, enjoin what is right, forbid what is wrong, and be patient over what befalls you. Indeed, all that is of the matters requiring determination.",
    explanation:
      "The timeless fatherly wisdom of Luqman — prayer, moral responsibility, and patience form the foundation of a principled and determined Muslim life.",
  },
  {
    id: 18,
    reference: "At-Talaq 65:7",
    arabic: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا",
    english: "Allah will bring about, after hardship, ease.",
    explanation:
      "A concise yet profound divine promise — ease is not a possibility but a certainty. What follows difficulty is always relief, by Allah's guarantee.",
  },
  {
    id: 19,
    reference: "Al-Hujurat 49:13",
    arabic:
      "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",
    english:
      "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another. Indeed, the most noble of you in the sight of Allah is the most righteous of you.",
    explanation:
      "Diversity in race and tribe is a divine design for acquaintance, not superiority. True nobility before Allah is measured solely by taqwa (God-consciousness), not lineage.",
  },
  {
    id: 20,
    reference: "Ta-Ha 20:25-28",
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي ۞ وَيَسِّرْ لِي أَمْرِي ۞ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۞ يَفْقَهُوا قَوْلِي",
    english:
      "My Lord, expand for me my breast (ease my task). And ease for me my task. And untie the knot from my tongue. That they may understand my speech.",
    explanation:
      "The dua of Prophet Musa before facing Pharaoh — a perfect supplication for anyone about to take on a daunting task, asking Allah for clarity of mind, ease, and effective speech.",
  },
  {
    id: 21,
    reference: "Qaf 50:16",
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    english: "And We are closer to him than his jugular vein.",
    explanation:
      "A profound reminder that Allah is never distant. He knows every thought, fear, and prayer even before it is spoken.",
  },
  {
    id: 22,
    reference: "Al-Baqarah 2:186",
    arabic:
      "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    english:
      "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
    explanation:
      "One of the most intimate verses in the Quran — Allah directly declares His nearness and His willingness to answer those who sincerely call upon Him.",
  },
  {
    id: 23,
    reference: "Ghafir 40:60",
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    english: "And your Lord says: Call upon Me; I will respond to you.",
    explanation:
      "A direct divine invitation to make du'a. Allah Himself commands believers to ask Him and promises a response.",
  },
  {
    id: 24,
    reference: "Ad-Duha 93:5",
    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    english: "And your Lord is going to give you, and you will be satisfied.",
    explanation:
      "A beautiful promise of future goodness. What Allah has prepared for His servants will ultimately bring contentment and fulfillment.",
  },
  {
    id: 25,
    reference: "Ibrahim 14:7",
    arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    english: "If you are grateful, I will surely increase you.",
    explanation:
      "A powerful principle of life — gratitude attracts more blessings, both spiritual and worldly.",
  },
  {
    id: 26,
    reference: "Al-Ahzab 33:43",
    arabic:
      "هُوَ الَّذِي يُصَلِّي عَلَيْكُمْ وَمَلَائِكَتُهُ لِيُخْرِجَكُم مِّنَ الظُّلُمَاتِ إِلَى النُّور",
    english:
      "He is the One who sends blessings upon you, and His angels as well, to bring you out of darkness into the light.",
    explanation:
      "A deeply moving verse showing Allah's care for believers, guiding them from confusion, hardship, and darkness toward light.",
  },
  {
    id: 27,
    reference: "Ash-Shura 42:19",
    arabic: "اللَّهُ لَطِيفٌ بِعِبَادِهِ",
    english: "Allah is Subtle and Kind to His servants.",
    explanation:
      "Even when His wisdom is hidden from us, Allah's kindness is constantly surrounding His servants through blessings, protection, and guidance.",
  },
  {
    id: 28,
    reference: "Yusuf 12:64",
    arabic: "فَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
    english:
      "Allah is the best Guardian, and He is the Most Merciful of the merciful.",
    explanation:
      "A beautiful statement of trust — ultimate protection belongs to Allah alone, whose mercy surpasses all mercy.",
  },
  {
    id: 29,
    reference: "Ghafir 40:44",
    arabic:
      "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ ۚ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ",
    english:
      "And I entrust my affair to Allah. Indeed, Allah is Seeing of His servants.",
    explanation:
      "One of the strongest expressions of tawakkul — handing over every concern to Allah while trusting His perfect knowledge.",
  },
  {
    id: 30,
    reference: "Al-Anbiya 21:87-88",
    arabic:
      "فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ ۞ فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ ۚ وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ",
    english:
      "Then he called out within the darknesses, 'There is no deity except You; exalted are You. Indeed, I have been among the wrongdoers.' So We responded to him and saved him from distress. And thus do We save the believers.",
    explanation:
      "The complete story in three verses: Prophet Yunus left his people, found himself surrounded by layers of darkness, then turned to Allah with one of the greatest supplications ever recorded in the Quran. Allah immediately answered him, rescued him from distress, and gave a timeless promise to all believers: just as He saved Yunus, He saves those who sincerely turn to Him.",
  },
  {
    id: 31,
    reference: "Al-Qasas 28:24",
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    english:
      "My Lord, indeed I am, for whatever good You would send down to me, in need.",
    explanation:
      "The humble prayer of Prophet Musa, expressing complete dependence upon Allah and need for His blessings.",
  },
  {
    id: 32,
    reference: "Al-Fath 48:4",
    arabic: "هُوَ الَّذِي أَنزَلَ السَّكِينَةَ فِي قُلُوبِ الْمُؤْمِنِينَ",
    english:
      "He is the One who sent down tranquility into the hearts of the believers.",
    explanation:
      "True peace is a gift from Allah. He places calmness and reassurance in the hearts of those who believe.",
  },
  {
    id: 33,
    reference: "Al-Baqarah 2:216",
    arabic:
      "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
    english:
      "But perhaps you hate a thing and it is good for you; and perhaps you love a thing and it is bad for you. And Allah knows, while you know not.",
    explanation:
      "A powerful reminder of divine wisdom — our perspective is limited, but Allah's knowledge is absolute. Trusting His choices brings immense comfort during unexpected shifts in life.",
  },
  {
    id: 34,
    reference: "Az-Zumar 39:36",
    arabic: "أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ",
    english: "Is not Allah sufficient for His servant?",
    explanation:
      "A profound rhetorical question that cuts through worry and anxiety. It reassures the believer that having Allah on their side is entirely enough to face any worldly challenge.",
  },
  {
    id: 35,
    reference: "Ali 'Imran 3:173",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    english:
      "Sufficient for us is Allah, and [He is] the best Disposer of affairs.",
    explanation:
      "The ultimate statement of reliance and peace. When faced with overwhelming odds or heavy responsibilities, leaving the outcome to the best Caretaker removes the weight from your shoulders.",
  },
  {
    id: 36,
    reference: "Al-Kahf 18:10",
    arabic:
      "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    english:
      "Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.",
    explanation:
      "The du'a of the People of the Cave when they fled an impossible situation. It is a beautiful prayer for divine mercy and clarity when navigating complex transitions or uncertain paths.",
  },
  {
    id: 37,
    reference: "Al-Furqan 25:58",
    arabic: "وَتَوَكَّلْ عَلَى الْحَيِّ الَّذِي لَا يَمُوتُ",
    english: "And rely upon the Ever-Living who does not die.",
    explanation:
      "People, platforms, and circumstances change or fade away, but anchoring your trust in the Ever-Living ensures your foundation never shakes.",
  },
  {
    id: 38,
    reference: "Al-Insan 76:22",
    arabic: "إِنَّ هَٰذَا كَانَ لَكُمْ جَزَاءً وَكَانَ سَعْيُكُم مَّشْكُورًا",
    english:
      "Indeed, this is for you a reward, and your effort has been appreciated.",
    explanation:
      "Deeply moving reassurance that no effort goes unnoticed. Even if worldly outcomes don't show immediate results, Allah sees and fully appreciates every bit of sincere work and patience.",
  },
  {
    id: 39,
    reference: "Taha 20:46",
    arabic: "قَالَ لَا تَخَافَا ۖ إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ",
    english:
      "He said, 'Do not be afraid. Indeed, I am with you both; I hear and I see.'",
    explanation:
      "Spoken to Musa and Harun before a daunting confrontation, this verse offers overwhelming comfort by reminding us that we are never working or struggling in isolation.",
  },
  {
    id: 40,
    reference: "Al-An'am 6:17",
    arabic:
      "وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ فَلَا كَاشِفَ لَهُ إِلَّا هُوَ ۖ وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    english:
      "And if Allah should touch you with adversity, there is no remover of it except Him. And if He touches you with good — then He is over all things competent.",
    explanation:
      "A liberating verse that shifts all focus to the Source. It clarifies that both hardship and ease are entirely in His hands, streamlining the believer's focus toward seeking help only from Him.",
  },
];

export default {
  fetch(request) {
    const verse = verses[Math.floor(Math.random() * verses.length)];
    return new Response(
      JSON.stringify({
        verse,
        event: "",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store, no-cache, must-revalidate",
          "Pragma": "no-cache",
          "Expires": "0",
        },
      },
    );
  },
};
