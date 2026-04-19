import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Lightbulb, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useLanguagePrefix } from "@/hooks/useLanguagePrefix";
import danielBeasts from "@/assets/daniel-beasts.png";
import revelationDragon from "@/assets/revelation-dragon.png";
import sanctuary from "@/assets/sanctuary.png";
import prophecyTimeline from "@/assets/prophecy-timeline.png";
import lambZion from "@/assets/lamb-zion.png";
import threeAngels from "@/assets/three-angels.png";
import nebuchadnezzarStatue from "@/assets/nebuchadnezzar-statue.png";
import newJerusalem from "@/assets/new-jerusalem.png";
import investigativeJudgment from "@/assets/investigative-judgment.png";
import ellenWhite from "@/assets/ellen-white.png";
import sabbathDay from "@/assets/sabbath-day.png";
import timelineImage from "@/assets/2300-day-timeline.png";

const topicHeroImages: Record<string, string> = {
  "daniels-statue": nebuchadnezzarStatue,
  "four-beasts": danielBeasts,
  "seven-seals": lambZion,
  "three-angels": threeAngels,
  "sanctuary": sanctuary,
  "investigative-judgment": investigativeJudgment,
  "time-of-end": prophecyTimeline,
  "new-jerusalem": newJerusalem,
  "ellen-white": ellenWhite,
  "sabbath-day": sabbathDay,
};

// English content
const topicsContentEn: Record<string, any> = {
  "daniels-statue": {
    title: "Daniel's Statue Dream",
    subtitle: "Nebuchadnezzar's Amazing Vision",
    book: "Daniel 2",
    emoji: "🗿",
    heroColor: "from-amber-500 to-yellow-600",
    intro: "King Nebuchadnezzar had a dream that troubled him so much he couldn't sleep! Only Daniel, with God's help, could tell him what the dream meant.",
    sections: [
      { title: "The Dream", content: "The king saw a gigantic statue made of different metals. It was so tall and bright that it was terrifying! But then something amazing happened - a stone, not cut by human hands, struck the statue and it crumbled to dust.", icon: "👁️" },
      { title: "What Each Part Means", content: "God showed Daniel that each part of the statue represents a world kingdom:", icon: "🔍",
        list: [
          { label: "Gold Head", value: "Babylon (605-539 BC)", color: "bg-amber-500" },
          { label: "Silver Chest & Arms", value: "Medo-Persia (539-331 BC)", color: "bg-gray-400" },
          { label: "Bronze Belly & Thighs", value: "Greece (331-168 BC)", color: "bg-orange-600" },
          { label: "Iron Legs", value: "Rome (168 BC - 476 AD)", color: "bg-gray-600" },
          { label: "Iron & Clay Feet", value: "Divided Nations (476 AD - Today)", color: "bg-stone-500" }
        ]
      },
      { title: "The Stone Kingdom", content: "The stone that destroyed the statue represents God's eternal kingdom! Just like the prophecy said, these kingdoms rose and fell exactly as predicted. This shows us that God knows the future and His Word is true!", icon: "⛰️" }
    ],
    scripture: {
      reference: "Daniel 2:1-18 (NKJV)",
      text: `1 Now in the second year of Nebuchadnezzar's reign, Nebuchadnezzar had dreams; and his spirit was so troubled that his sleep left him. 2 Then the king gave the command to call the magicians, the astrologers, the sorcerers, and the Chaldeans to tell the king his dreams. So they came and stood before the king. 3 And the king said to them, "I have had a dream, and my spirit is anxious to know the dream."

4 Then the Chaldeans spoke to the king in Aramaic, "O king, live forever! Tell your servants the dream, and we will give the interpretation."

5 The king answered and said to the Chaldeans, "My decision is firm: if you do not make known the dream to me, and its interpretation, you shall be cut in pieces, and your houses shall be made an ash heap. 6 However, if you tell the dream and its interpretation, you shall receive from me gifts, rewards, and great honor. Therefore tell me the dream and its interpretation."

7 They answered again and said, "Let the king tell his servants the dream, and we will give its interpretation."

8 The king answered and said, "I know for certain that you would gain time, because you see that my decision is firm: 9 if you do not make known the dream to me, there is only one decree for you! For you have agreed to speak lying and corrupt words before me till the time has changed. Therefore tell me the dream, and I shall know that you can give me its interpretation."

10 The Chaldeans answered the king, and said, "There is not a man on earth who can tell the king's matter; therefore no king, lord, or ruler has ever asked such things of any magician, astrologer, or Chaldean. 11 It is a difficult thing that the king requests, and there is no other who can tell it to the king except the gods, whose dwelling is not with flesh."

12 For this reason the king was angry and very furious, and gave the command to destroy all the wise men of Babylon. 13 So the decree went out, and they began killing the wise men; and they sought Daniel and his companions, to kill them.

14 Then with counsel and wisdom Daniel answered Arioch, the captain of the king's guard, who had gone out to kill the wise men of Babylon; 15 he answered and said to Arioch the king's captain, "Why is the decree from the king so urgent?" Then Arioch made the decision known to Daniel.

16 So Daniel went in and asked the king to give him time, that he might tell the king the interpretation. 17 Then Daniel went to his house, and made the decision known to Hananiah, Mishael, and Azariah, his companions, 18 that they might seek mercies from the God of heaven concerning this secret, so that Daniel and his companions might not perish with the rest of the wise men of Babylon.`
    },
    funFact: "Every single kingdom in this prophecy has come and gone exactly as God said - and we're now living in the time of the divided nations (the feet of iron and clay)!",
    keyVerse: "In the days of those kings, the God of heaven will set up a kingdom that will never be destroyed. - Daniel 2:44"
  },
  "four-beasts": {
    title: "The Four Beasts", subtitle: "Daniel's Nighttime Vision", book: "Daniel 7", emoji: "🦁", heroColor: "from-orange-500 to-red-600",
    intro: "Daniel had a dream about four strange beasts coming out of the sea. These beasts represented the same kingdoms as the statue, but with more exciting details!",
    sections: [
      { title: "The Four Beasts", content: "Each beast in Daniel's vision was unique and represented a powerful kingdom:", icon: "🌊",
        list: [
          { label: "Lion with Eagle Wings", value: "Babylon - The majestic kingdom", color: "bg-amber-500" },
          { label: "Bear with 3 Ribs", value: "Medo-Persia - The conquering power", color: "bg-stone-600" },
          { label: "Leopard with 4 Wings", value: "Greece - Super fast conquests!", color: "bg-yellow-600" },
          { label: "Terrifying Beast", value: "Rome - The iron kingdom", color: "bg-gray-700" }
        ]
      },
      { title: "The Little Horn", content: "A small horn grew up among ten horns on the fourth beast. This little horn spoke against God and tried to change His laws. But don't worry - God showed Daniel that this power would only last for a time!", icon: "📯" },
      { title: "The Son of Man", content: "The best part of Daniel's vision was seeing 'one like a son of man' coming on the clouds to receive an everlasting kingdom! This is Jesus, and He will reign forever!", icon: "👑" }
    ],
    funFact: "Alexander the Great conquered the known world in just 13 years - that's why Greece is shown as a leopard with wings, representing super speed!",
    keyVerse: "The saints of the Most High will receive the kingdom and will possess it forever. - Daniel 7:18"
  },
  "seven-seals": {
    title: "The Lamb & Seven Seals", subtitle: "Heaven's Most Important Book", book: "Revelation 5-6", emoji: "🐑", heroColor: "from-blue-500 to-indigo-600",
    intro: "John saw a scroll with seven seals in heaven. No one could open it except Jesus, the Lamb who was slain. Each seal reveals something about history and the future!",
    sections: [
      { title: "The Sealed Scroll", content: "John wept because no one could open the scroll. But then an elder said, 'Don't cry! The Lion of Judah has triumphed!' When John looked, he saw a Lamb - Jesus, who alone is worthy!", icon: "📜" },
      { title: "The Seven Seals", content: "As Jesus opens each seal, different things happen:", icon: "🔓",
        list: [
          { label: "White Horse", value: "The gospel goes forth!", color: "bg-white border border-gray-300" },
          { label: "Red Horse", value: "War and conflict", color: "bg-red-500" },
          { label: "Black Horse", value: "Famine and hardship", color: "bg-gray-900" },
          { label: "Pale Horse", value: "Death and troubles", color: "bg-green-200" },
          { label: "Martyrs Cry", value: "'How long, O Lord?'", color: "bg-purple-500" },
          { label: "Great Earthquake", value: "Signs in the heavens", color: "bg-orange-500" },
          { label: "Silence", value: "Jesus is coming!", color: "bg-amber-400" }
        ]
      },
      { title: "The 144,000", content: "Before the seventh seal, God seals His faithful people. They are protected and ready for Jesus to come!", icon: "✨" }
    ],
    scripture: {
      reference: "Revelation 6:1-17 (NIV)",
      text: `1 I watched as the Lamb opened the first of the seven seals. Then I heard one of the four living creatures say in a voice like thunder, "Come!" 2 I looked, and there before me was a white horse! Its rider held a bow, and he was given a crown, and he rode out as a conqueror bent on conquest.

3 When the Lamb opened the second seal, I heard the second living creature say, "Come!" 4 Then another horse came out, a fiery red one. Its rider was given power to take peace from the earth and to make people kill each other. To him was given a large sword.

5 When the Lamb opened the third seal, I heard the third living creature say, "Come!" I looked, and there before me was a black horse! Its rider was holding a pair of scales in his hand. 6 Then I heard what sounded like a voice among the four living creatures, saying, "Two pounds of wheat for a day's wages, and six pounds of barley for a day's wages, and do not damage the oil and the wine!"

7 When the Lamb opened the fourth seal, I heard the voice of the fourth living creature say, "Come!" 8 I looked, and there before me was a pale horse! Its rider was named Death, and Hades was following close behind him. They were given power over a fourth of the earth to kill by sword, famine and plague, and by the wild beasts of the earth.

9 When he opened the fifth seal, I saw under the altar the souls of those who had been slain because of the word of God and the testimony they had maintained. 10 They called out in a loud voice, "How long, Sovereign Lord, holy and true, until you judge the inhabitants of the earth and avenge our blood?" 11 Then each of them was given a white robe, and they were told to wait a little longer, until the full number of their fellow servants, their brothers and sisters, were killed just as they had been.

12 I watched as he opened the sixth seal. There was a great earthquake. The sun turned black like sackcloth made of goat hair, the whole moon turned blood red, 13 and the stars in the sky fell to earth, as figs drop from a fig tree when shaken by a strong wind. 14 The heavens receded like a scroll being rolled up, and every mountain and island was removed from its place.

15 Then the kings of the earth, the princes, the generals, the rich, the mighty, and everyone else, both slave and free, hid in caves and among the rocks of the mountains. 16 They called to the mountains and the rocks, "Fall on us and hide us from the face of him who sits on the throne and from the wrath of the Lamb! 17 For the great day of their wrath has come, and who can withstand it?"`
    },
    funFact: "The whole universe sings a song to Jesus in Revelation 5 - billions of angels saying 'Worthy is the Lamb!'",
    keyVerse: "Worthy is the Lamb who was slain, to receive power and wealth and wisdom and strength! - Revelation 5:12"
  },
  "three-angels": {
    title: "The Three Angels' Messages", subtitle: "God's Final Call to the World", book: "Revelation 14", emoji: "👼", heroColor: "from-purple-500 to-pink-600",
    intro: "Three angels fly across the sky with urgent messages for everyone on Earth. These messages are so important that they're meant for 'every nation, tribe, language and people!'",
    sections: [
      { title: "First Angel's Message", content: "The first angel shouts with a loud voice: 'Fear God and give Him glory, because the hour of His judgment has come!' This angel calls everyone to worship God as the Creator who made the heavens and earth.", icon: "1️⃣" },
      { title: "Second Angel's Message", content: "The second angel announces: 'Fallen! Fallen is Babylon the Great!' This message warns people to come out of false religious systems and follow God's truth.", icon: "2️⃣" },
      { title: "Third Angel's Message", content: "The third angel gives a solemn warning about the beast and its mark. Those who follow God and keep His commandments will be protected. This message helps us choose to be on God's side!", icon: "3️⃣" },
      { title: "The Result", content: "After the three angels' messages, we see Jesus coming on the clouds! These messages prepare people for Jesus' return.", icon: "☁️" }
    ],
    funFact: "Seventh-day Adventists believe they have a special mission to share these three angels' messages with the whole world before Jesus comes!",
    keyVerse: "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus. - Revelation 14:12",
    egwQuote: {
      text: "Several have written me, inquiring if the message of justification by faith is the third angel's message, and I have answered, \"It is the third angel's message in verity.\"",
      source: "Review & Herald, April 1, 1890"
    }
  },
  "sanctuary": {
    title: "The Heavenly Sanctuary", subtitle: "Where Jesus Ministers for Us", book: "Hebrews 8-9", emoji: "⛪", heroColor: "from-green-500 to-emerald-600",
    intro: "The earthly sanctuary that Moses built was a copy of something real in heaven! Jesus is our High Priest there, working to save us.",
    sections: [
      { title: "The Earthly Sanctuary", content: "God told Moses exactly how to build the sanctuary. It had two rooms: the Holy Place (where priests served daily) and the Most Holy Place (where only the high priest could enter once a year).", icon: "🏕️",
        list: [
          { label: "Courtyard", value: "Altar of sacrifice, Laver", color: "bg-amber-600" },
          { label: "Holy Place", value: "Lampstand, Table, Incense Altar", color: "bg-yellow-500" },
          { label: "Most Holy Place", value: "Ark of the Covenant", color: "bg-amber-400" }
        ]
      },
      { title: "Jesus Our High Priest", content: "Everything in the earthly sanctuary pointed to Jesus! The lamb sacrificed? That's Jesus dying for our sins. The high priest? That's Jesus praying for us in heaven right now!", icon: "🙏" },
      { title: "The Day of Atonement", content: "Once a year, the high priest entered the Most Holy Place to cleanse the sanctuary. This pointed to a special time when Jesus would cleanse the heavenly sanctuary and prepare for His return!", icon: "📅" }
    ],
    funFact: "The Ark of the Covenant contained the Ten Commandments, showing that God's law is at the very center of His throne!",
    keyVerse: "We have such a high priest, who sat down at the right hand of the throne of the Majesty in heaven. - Hebrews 8:1"
  },
  "new-jerusalem": {
    title: "The New Jerusalem", subtitle: "Our Forever Home", book: "Revelation 21-22", emoji: "🌟", heroColor: "from-cyan-500 to-blue-600",
    intro: "At the end of Revelation, John sees the most beautiful city ever - the New Jerusalem coming down from heaven! This is the home Jesus is preparing for those who love Him.",
    sections: [
      { title: "A Beautiful City", content: "The New Jerusalem is stunning! It's made of pure gold that looks like clear glass. The walls are decorated with precious stones, and each of the 12 gates is made from a single giant pearl!", icon: "💎",
        list: [
          { label: "Size", value: "1,400 miles in each direction!", color: "bg-blue-500" },
          { label: "Walls", value: "Jasper - 216 feet high", color: "bg-green-500" },
          { label: "Foundations", value: "12 precious stones", color: "bg-purple-500" },
          { label: "Gates", value: "12 pearls", color: "bg-pink-300" },
          { label: "Streets", value: "Pure gold like glass", color: "bg-amber-400" }
        ]
      },
      { title: "No More Tears", content: "In this city, God will wipe away every tear. There will be no more death, sadness, crying, or pain. Everything sad will become untrue!", icon: "😊" },
      { title: "The River & Tree of Life", content: "A crystal-clear river flows from God's throne, and the Tree of Life grows along its banks. It has 12 kinds of fruit and its leaves heal the nations. We will live forever with God!", icon: "🌳" }
    ],
    funFact: "The city is so big that it could fit more than half of the United States! There's room for everyone who wants to come!",
    keyVerse: "God himself will be with them and be their God. He will wipe every tear from their eyes. - Revelation 21:3-4"
  },
  "investigative-judgment": {
    title: "The Investigative Judgment", subtitle: "Jesus Reviews the Records", book: "Daniel 7-8", emoji: "⚖️", heroColor: "from-violet-500 to-purple-600",
    intro: "Before Jesus comes back, there is a special judgment happening in heaven. Jesus is reviewing everyone's life to show the universe who has accepted His gift of salvation.",
    sections: [
      { title: "The Judgment Scene", content: "Daniel 7 describes a courtroom in heaven with the Ancient of Days (God) on His throne. Books are opened containing the records of everyone's life.", icon: "📖" },
      { title: "When Did It Start?", content: "The 2,300-day prophecy in Daniel 8:14 points to 1844 as the year when the heavenly sanctuary began to be cleansed - the start of the investigative judgment.", icon: "📅" },
      { title: "What It Means for Us", content: "This judgment shows God is fair. He wants the whole universe to see that He saves everyone who trusts in Jesus. It's not about fear - it's about God proving His love!", icon: "❤️" }
    ],
    funFact: "The investigative judgment is like a cosmic courtroom drama where Jesus is both our lawyer (advocate) and our friend!",
    keyVerse: "The court was seated, and the books were opened. - Daniel 7:10"
  },
  "time-of-end": {
    title: "Time of the End", subtitle: "Signs of Jesus' Return", book: "Daniel 12", emoji: "⏰", heroColor: "from-rose-500 to-red-600",
    intro: "Daniel 12 talks about a special 'time of the end' when knowledge will increase and many will understand the prophecies that were sealed until the last days.",
    sections: [
      { title: "The Sealed Book", content: "God told Daniel to seal the book of his prophecy until 'the time of the end.' This means some prophecies would only be fully understood in the last days of earth's history.", icon: "📕" },
      { title: "Signs of the End", content: "Daniel 12 mentions that in the time of the end, people will travel far and wide, and knowledge will increase greatly. Look around - this is happening today!", icon: "🌍" },
      { title: "The Resurrection Promise", content: "The best part of Daniel 12 is the promise that 'those who sleep in the dust of the earth will awake' - God's people will be raised to everlasting life when Jesus returns!", icon: "🌅" }
    ],
    funFact: "Daniel 12:4 predicted the explosion of knowledge and travel - in the last 100 years, we've gone from horses to rockets!",
    keyVerse: "Those who are wise will shine like the brightness of the heavens. - Daniel 12:3"
  },
  "ellen-white": {
    title: "Ellen G. White",
    subtitle: "God's End-Time Messenger",
    book: "Spirit of Prophecy",
    emoji: "📖",
    heroColor: "from-purple-500 to-violet-600",
    intro: "Ellen Gould Harmon was born at Gorham, Maine, on November 26, 1827. Her parents, Robert and Eunice Harmon, were devoted members of the Methodist Episcopal Church. All eight of their children were converted and gathered into the fold of Christ.",
    sections: [
      {
        title: "A Life-Changing Accident",
        content: "At the age of nine, while crossing a common in Portland, Maine, a girl about thirteen years of age threw a stone that hit Ellen on the nose. She was stunned by the blow and fell senseless to the ground. She lay in a stupor for three weeks, and no one but her mother thought she would recover. When she awoke, she was reduced almost to a skeleton and had to lie in a special cradle for many weeks.",
        icon: "💔"
      },
      {
        title: "Turning to God",
        content: "During her recovery, Ellen began to pray earnestly for forgiveness of her sins. She felt a peace of mind and loved everyone, desiring that all should have their sins forgiven and love Jesus as she did. Her nervous system was so affected that her hand trembled, and she could barely write or study. Her teachers eventually advised her to leave school.",
        icon: "🙏"
      },
      {
        title: "William Miller's Lectures",
        content: "In March 1840, William Miller visited Portland, Maine, and gave lectures on the second coming of Christ. These produced a great sensation. Mr. Miller traced down the prophecies with exactness, dwelling on the prophetic periods and bringing many proofs. His solemn appeals held the crowds as if spellbound. Ellen attended these meetings with her friends.",
        icon: "📢"
      },
      {
        title: "A Scrap of Paper",
        content: "Four years before Miller's lectures, on her way to school, Ellen had picked up a scrap of paper about a man in England preaching that the earth would be consumed in about thirty years. She was seized with terror and could scarcely sleep for several nights, praying continually to be ready when Jesus came.",
        icon: "📄"
      },
      {
        title: "Seeking the Saviour",
        content: "When sinners were invited forward at special meetings, Ellen pressed through the crowd and took her place with the seekers. But she felt she could never become worthy to be called a child of God. A terrible sadness rested on her heart, and a lack of confidence prevented her from seeking advice from Christian friends.",
        icon: "😢"
      },
      {
        title: "Finding Peace at Camp Meeting",
        content: "At the Methodist camp meeting at Buxton, Maine, Ellen was encouraged by a sermon from Esther 4:16: 'If I perish, I perish.' The speaker counseled those wavering between hope and fear to surrender to God and venture upon His mercy without delay. All that was required was to put forth the hand of faith and touch the scepter of His grace. These words comforted her and showed her the way to be saved.",
        icon: "⛺"
      }
    ],
    scripture: {
      reference: "Esther 4:16 (NKJV)",
      text: "\"Go, gather all the Jews who are present in Shushan, and fast for me; neither eat nor drink for three days, night or day. My maids and I will fast likewise. And so I will go to the king, which is against the law; and if I perish, I perish!\""
    },
    funFact: "Ellen White had a twin sister! They were crossing a common together when the accident happened that changed Ellen's life forever.",
    keyVerse: "Jesus alone cleanses from sin; He only can forgive our transgressions. He has pledged Himself to listen to the petition and grant the prayer of those who come to Him in faith."
  },
  "sabbath-day": {
    title: "The Sabbath Day",
    subtitle: "God's Special Day of Rest",
    book: "Exodus 20:8-11",
    emoji: "🕊️",
    heroColor: "from-teal-500 to-cyan-600",
    intro: "From the very beginning, God set apart a special day for us to rest and remember Him. The Sabbath is a gift of love from our Creator!",
    sections: [
      { title: "Created at Creation", content: "After making the world in six days, God rested on the seventh day and blessed it. The Sabbath was made for everyone, even before sin entered the world!", icon: "🌅" },
      { title: "The Fourth Commandment", content: "God wrote the Sabbath command with His own finger on stone! It's part of His eternal law and reminds us that He is our Creator.", icon: "📜" },
      { title: "Jesus Kept the Sabbath", content: "Jesus, our perfect example, kept the Sabbath every week. He showed us how to make it a delight by doing good and worshiping His Father.", icon: "✝️" }
    ],
    scripture: {
      reference: "Exodus 20:8-11 (NKJV)",
      text: `8 "Remember the Sabbath day, to keep it holy. 9 Six days you shall labor and do all your work, 10 but the seventh day is the Sabbath of the Lord your God. In it you shall do no work: you, nor your son, nor your daughter, nor your male servant, nor your female servant, nor your cattle, nor your stranger who is within your gates. 11 For in six days the Lord made the heavens and the earth, the sea, and all that is in them, and rested the seventh day. Therefore the Lord blessed the Sabbath day and hallowed it."`
    },
    funFact: "The Sabbath is the only day of the week that God gave a special name - all other days are just numbered!",
    keyVerse: "Remember the Sabbath day, to keep it holy. - Exodus 20:8"
  },
};

// French content
const topicsContentFr: Record<string, any> = {
  "daniels-statue": {
    title: "Le Rêve de la Statue de Daniel",
    subtitle: "La Vision Incroyable de Nebucadnetsar",
    book: "Daniel 2",
    emoji: "🗿",
    heroColor: "from-amber-500 to-yellow-600",
    intro: "Le roi Nebucadnetsar a fait un rêve qui le troublait tellement qu'il ne pouvait pas dormir ! Seul Daniel, avec l'aide de Dieu, pouvait lui dire ce que signifiait le rêve.",
    sections: [
      { title: "Le Rêve", content: "Le roi vit une statue gigantesque faite de différents métaux. Elle était si grande et brillante qu'elle était terrifiante ! Mais alors quelque chose d'incroyable s'est produit - une pierre, non taillée par des mains humaines, a frappé la statue et elle s'est écroulée en poussière.", icon: "👁️" },
      { title: "Ce que Chaque Partie Signifie", content: "Dieu a montré à Daniel que chaque partie de la statue représente un royaume mondial :", icon: "🔍",
        list: [
          { label: "Tête d'Or", value: "Babylone (605-539 av. J.-C.)", color: "bg-amber-500" },
          { label: "Poitrine et Bras d'Argent", value: "Médo-Perse (539-331 av. J.-C.)", color: "bg-gray-400" },
          { label: "Ventre et Cuisses de Bronze", value: "Grèce (331-168 av. J.-C.)", color: "bg-orange-600" },
          { label: "Jambes de Fer", value: "Rome (168 av. J.-C. - 476 ap. J.-C.)", color: "bg-gray-600" },
          { label: "Pieds de Fer et d'Argile", value: "Nations Divisées (476 ap. J.-C. - Aujourd'hui)", color: "bg-stone-500" }
        ]
      },
      { title: "Le Royaume de Pierre", content: "La pierre qui a détruit la statue représente le royaume éternel de Dieu ! Tout comme la prophétie l'a dit, ces royaumes se sont levés et sont tombés exactement comme prédit. Cela nous montre que Dieu connaît l'avenir et que Sa Parole est vraie !", icon: "⛰️" }
    ],
    funFact: "Chaque royaume de cette prophétie est venu et reparti exactement comme Dieu l'a dit - et nous vivons maintenant au temps des nations divisées (les pieds de fer et d'argile) !",
    keyVerse: "Dans le temps de ces rois, le Dieu des cieux suscitera un royaume qui ne sera jamais détruit. - Daniel 2:44"
  },
  "four-beasts": {
    title: "Les Quatre Bêtes", subtitle: "La Vision Nocturne de Daniel", book: "Daniel 7", emoji: "🦁", heroColor: "from-orange-500 to-red-600",
    intro: "Daniel a fait un rêve de quatre bêtes étranges sortant de la mer. Ces bêtes représentaient les mêmes royaumes que la statue, mais avec plus de détails passionnants !",
    sections: [
      { title: "Les Quatre Bêtes", content: "Chaque bête dans la vision de Daniel était unique et représentait un royaume puissant :", icon: "🌊",
        list: [
          { label: "Lion aux Ailes d'Aigle", value: "Babylone - Le royaume majestueux", color: "bg-amber-500" },
          { label: "Ours avec 3 Côtes", value: "Médo-Perse - La puissance conquérante", color: "bg-stone-600" },
          { label: "Léopard à 4 Ailes", value: "Grèce - Des conquêtes ultra rapides !", color: "bg-yellow-600" },
          { label: "Bête Terrifiante", value: "Rome - Le royaume de fer", color: "bg-gray-700" }
        ]
      },
      { title: "La Petite Corne", content: "Une petite corne a poussé parmi dix cornes sur la quatrième bête. Cette petite corne parlait contre Dieu et essayait de changer Ses lois. Mais ne vous inquiétez pas - Dieu a montré à Daniel que ce pouvoir ne durerait qu'un temps !", icon: "📯" },
      { title: "Le Fils de l'Homme", content: "La meilleure partie de la vision de Daniel était de voir 'quelqu'un comme un fils de l'homme' venant sur les nuages pour recevoir un royaume éternel ! C'est Jésus, et Il régnera pour toujours !", icon: "👑" }
    ],
    funFact: "Alexandre le Grand a conquis le monde connu en seulement 13 ans - c'est pourquoi la Grèce est représentée comme un léopard avec des ailes, symbolisant une vitesse extraordinaire !",
    keyVerse: "Les saints du Très-Haut recevront le royaume et le posséderont pour toujours. - Daniel 7:18"
  },
  "seven-seals": {
    title: "L'Agneau et les Sept Sceaux", subtitle: "Le Livre le Plus Important du Ciel", book: "Apocalypse 5-6", emoji: "🐑", heroColor: "from-blue-500 to-indigo-600",
    intro: "Jean a vu un rouleau avec sept sceaux au ciel. Personne ne pouvait l'ouvrir sauf Jésus, l'Agneau immolé. Chaque sceau révèle quelque chose sur l'histoire et l'avenir !",
    sections: [
      { title: "Le Rouleau Scellé", content: "Jean pleura parce que personne ne pouvait ouvrir le rouleau. Mais alors un ancien dit : 'Ne pleure pas ! Le Lion de Juda a triomphé !' Quand Jean regarda, il vit un Agneau - Jésus, seul digne !", icon: "📜" },
      { title: "Les Sept Sceaux", content: "À mesure que Jésus ouvre chaque sceau, différentes choses se produisent :", icon: "🔓",
        list: [
          { label: "Cheval Blanc", value: "L'Évangile se répand !", color: "bg-white border border-gray-300" },
          { label: "Cheval Rouge", value: "Guerre et conflit", color: "bg-red-500" },
          { label: "Cheval Noir", value: "Famine et épreuves", color: "bg-gray-900" },
          { label: "Cheval Pâle", value: "Mort et troubles", color: "bg-green-200" },
          { label: "Cri des Martyrs", value: "'Jusques à quand, Seigneur ?'", color: "bg-purple-500" },
          { label: "Grand Tremblement", value: "Signes dans les cieux", color: "bg-orange-500" },
          { label: "Silence", value: "Jésus revient !", color: "bg-amber-400" }
        ]
      },
      { title: "Les 144 000", content: "Avant le septième sceau, Dieu scelle Son peuple fidèle. Ils sont protégés et prêts pour la venue de Jésus !", icon: "✨" }
    ],
    funFact: "L'univers entier chante un cantique à Jésus dans Apocalypse 5 - des milliards d'anges disant 'Digne est l'Agneau !'",
    keyVerse: "Digne est l'Agneau qui a été immolé, de recevoir la puissance, la richesse, la sagesse et la force ! - Apocalypse 5:12"
  },
  "three-angels": {
    title: "Les Messages des Trois Anges", subtitle: "L'Appel Final de Dieu au Monde", book: "Apocalypse 14", emoji: "👼", heroColor: "from-purple-500 to-pink-600",
    intro: "Trois anges traversent le ciel avec des messages urgents pour tous sur Terre. Ces messages sont si importants qu'ils sont destinés à 'chaque nation, tribu, langue et peuple !'",
    sections: [
      { title: "Message du Premier Ange", content: "Le premier ange crie d'une voix forte : 'Craignez Dieu et donnez-Lui gloire, car l'heure de Son jugement est venue !' Cet ange appelle chacun à adorer Dieu comme le Créateur qui a fait les cieux et la terre.", icon: "1️⃣" },
      { title: "Message du Deuxième Ange", content: "Le deuxième ange annonce : 'Elle est tombée ! Elle est tombée, Babylone la Grande !' Ce message avertit les gens de sortir des faux systèmes religieux et de suivre la vérité de Dieu.", icon: "2️⃣" },
      { title: "Message du Troisième Ange", content: "Le troisième ange donne un avertissement solennel concernant la bête et sa marque. Ceux qui suivent Dieu et gardent Ses commandements seront protégés. Ce message nous aide à choisir d'être du côté de Dieu !", icon: "3️⃣" },
      { title: "Le Résultat", content: "Après les messages des trois anges, nous voyons Jésus venir sur les nuages ! Ces messages préparent les gens au retour de Jésus.", icon: "☁️" }
    ],
    funFact: "Les Adventistes du Septième Jour croient qu'ils ont une mission spéciale de partager ces messages des trois anges avec le monde entier avant que Jésus ne revienne !",
    keyVerse: "C'est ici la persévérance des saints, ceux qui gardent les commandements de Dieu et la foi de Jésus. - Apocalypse 14:12",
    egwQuote: {
      text: "Plusieurs m'ont écrit, demandant si le message de la justification par la foi est le message du troisième ange, et j'ai répondu : « C'est le message du troisième ange en vérité. »",
      source: "Review & Herald, 1er avril 1890"
    }
  },
  "sanctuary": {
    title: "Le Sanctuaire Céleste", subtitle: "Où Jésus Officie pour Nous", book: "Hébreux 8-9", emoji: "⛪", heroColor: "from-green-500 to-emerald-600",
    intro: "Le sanctuaire terrestre que Moïse a construit était une copie de quelque chose de réel au ciel ! Jésus est notre Souverain Sacrificateur là-bas, travaillant pour nous sauver.",
    sections: [
      { title: "Le Sanctuaire Terrestre", content: "Dieu a dit à Moïse exactement comment construire le sanctuaire. Il avait deux pièces : le Lieu Saint (où les prêtres servaient quotidiennement) et le Lieu Très Saint (où seul le souverain sacrificateur pouvait entrer une fois par an).", icon: "🏕️",
        list: [
          { label: "Parvis", value: "Autel des sacrifices, Cuve", color: "bg-amber-600" },
          { label: "Lieu Saint", value: "Chandelier, Table, Autel des parfums", color: "bg-yellow-500" },
          { label: "Lieu Très Saint", value: "Arche de l'Alliance", color: "bg-amber-400" }
        ]
      },
      { title: "Jésus Notre Souverain Sacrificateur", content: "Tout dans le sanctuaire terrestre pointait vers Jésus ! L'agneau sacrifié ? C'est Jésus mourant pour nos péchés. Le souverain sacrificateur ? C'est Jésus priant pour nous au ciel en ce moment !", icon: "🙏" },
      { title: "Le Jour des Expiations", content: "Une fois par an, le souverain sacrificateur entrait dans le Lieu Très Saint pour purifier le sanctuaire. Cela pointait vers un temps spécial où Jésus purifierait le sanctuaire céleste et préparerait Son retour !", icon: "📅" }
    ],
    funFact: "L'Arche de l'Alliance contenait les Dix Commandements, montrant que la loi de Dieu est au centre même de Son trône !",
    keyVerse: "Nous avons un tel souverain sacrificateur, qui s'est assis à la droite du trône de la Majesté dans les cieux. - Hébreux 8:1"
  },
  "new-jerusalem": {
    title: "La Nouvelle Jérusalem", subtitle: "Notre Maison Éternelle", book: "Apocalypse 21-22", emoji: "🌟", heroColor: "from-cyan-500 to-blue-600",
    intro: "À la fin de l'Apocalypse, Jean voit la plus belle ville jamais vue - la Nouvelle Jérusalem descendant du ciel ! C'est la maison que Jésus prépare pour ceux qui L'aiment.",
    sections: [
      { title: "Une Ville Magnifique", content: "La Nouvelle Jérusalem est éblouissante ! Elle est faite d'or pur qui ressemble à du verre clair. Les murs sont décorés de pierres précieuses, et chacune des 12 portes est faite d'une seule perle géante !", icon: "💎",
        list: [
          { label: "Taille", value: "2 250 km dans chaque direction !", color: "bg-blue-500" },
          { label: "Murs", value: "Jaspe - 66 mètres de haut", color: "bg-green-500" },
          { label: "Fondations", value: "12 pierres précieuses", color: "bg-purple-500" },
          { label: "Portes", value: "12 perles", color: "bg-pink-300" },
          { label: "Rues", value: "Or pur comme du verre", color: "bg-amber-400" }
        ]
      },
      { title: "Plus de Larmes", content: "Dans cette ville, Dieu essuiera toute larme. Il n'y aura plus de mort, de tristesse, de pleurs ni de douleur. Tout ce qui est triste deviendra faux !", icon: "😊" },
      { title: "Le Fleuve et l'Arbre de Vie", content: "Un fleuve d'eau cristalline coule du trône de Dieu, et l'Arbre de Vie pousse le long de ses rives. Il porte 12 sortes de fruits et ses feuilles guérissent les nations. Nous vivrons pour toujours avec Dieu !", icon: "🌳" }
    ],
    funFact: "La ville est si grande qu'elle pourrait contenir plus de la moitié de l'Europe ! Il y a de la place pour tous ceux qui veulent venir !",
    keyVerse: "Dieu lui-même sera avec eux et sera leur Dieu. Il essuiera toute larme de leurs yeux. - Apocalypse 21:3-4"
  },
  "investigative-judgment": {
    title: "Le Jugement Investigatif", subtitle: "Jésus Examine les Archives", book: "Daniel 7-8", emoji: "⚖️", heroColor: "from-violet-500 to-purple-600",
    intro: "Avant que Jésus ne revienne, un jugement spécial a lieu au ciel. Jésus examine la vie de chacun pour montrer à l'univers qui a accepté Son don du salut.",
    sections: [
      { title: "La Scène du Jugement", content: "Daniel 7 décrit un tribunal au ciel avec l'Ancien des Jours (Dieu) sur Son trône. Des livres sont ouverts contenant les archives de la vie de chacun.", icon: "📖" },
      { title: "Quand a-t-il Commencé ?", content: "La prophétie des 2 300 jours dans Daniel 8:14 pointe vers 1844 comme l'année où le sanctuaire céleste a commencé à être purifié - le début du jugement investigatif.", icon: "📅" },
      { title: "Ce que Cela Signifie pour Nous", content: "Ce jugement montre que Dieu est juste. Il veut que l'univers entier voie qu'Il sauve tous ceux qui font confiance à Jésus. Ce n'est pas une question de peur - c'est Dieu prouvant Son amour !", icon: "❤️" }
    ],
    funFact: "Le jugement investigatif est comme un drame judiciaire cosmique où Jésus est à la fois notre avocat (défenseur) et notre ami !",
    keyVerse: "Le tribunal était assis et les livres furent ouverts. - Daniel 7:10"
  },
  "time-of-end": {
    title: "Le Temps de la Fin", subtitle: "Signes du Retour de Jésus", book: "Daniel 12", emoji: "⏰", heroColor: "from-rose-500 to-red-600",
    intro: "Daniel 12 parle d'un 'temps de la fin' spécial où la connaissance augmentera et beaucoup comprendront les prophéties qui étaient scellées jusqu'aux derniers jours.",
    sections: [
      { title: "Le Livre Scellé", content: "Dieu a dit à Daniel de sceller le livre de sa prophétie jusqu'au 'temps de la fin.' Cela signifie que certaines prophéties ne seraient pleinement comprises que dans les derniers jours de l'histoire terrestre.", icon: "📕" },
      { title: "Signes de la Fin", content: "Daniel 12 mentionne qu'au temps de la fin, les gens voyageront loin et la connaissance augmentera grandement. Regardez autour de vous - cela se produit aujourd'hui !", icon: "🌍" },
      { title: "La Promesse de la Résurrection", content: "La meilleure partie de Daniel 12 est la promesse que 'ceux qui dorment dans la poussière de la terre se réveilleront' - le peuple de Dieu sera ressuscité pour la vie éternelle quand Jésus reviendra !", icon: "🌅" }
    ],
    funFact: "Daniel 12:4 a prédit l'explosion de la connaissance et des voyages - en 100 ans, nous sommes passés des chevaux aux fusées !",
    keyVerse: "Ceux qui auront été intelligents brilleront comme la splendeur du firmament. - Daniel 12:3"
  },
  "sabbath-day": {
    title: "Le Jour du Sabbat",
    subtitle: "Le Jour Spécial de Repos de Dieu",
    book: "Exode 20:8-11",
    emoji: "🕊️",
    heroColor: "from-teal-500 to-cyan-600",
    intro: "Dès le commencement, Dieu a mis à part un jour spécial pour que nous nous reposions et que nous nous souvenions de Lui. Le sabbat est un cadeau d'amour de notre Créateur !",
    sections: [
      { title: "Créé à la Création", content: "Après avoir fait le monde en six jours, Dieu s'est reposé le septième jour et l'a béni. Le sabbat a été fait pour tout le monde, même avant que le péché n'entre dans le monde !", icon: "🌅" },
      { title: "Le Quatrième Commandement", content: "Dieu a écrit le commandement du sabbat avec Son propre doigt sur la pierre ! Il fait partie de Sa loi éternelle et nous rappelle qu'Il est notre Créateur.", icon: "📜" },
      { title: "Jésus Gardait le Sabbat", content: "Jésus, notre exemple parfait, gardait le sabbat chaque semaine. Il nous a montré comment en faire un délice en faisant le bien et en adorant Son Père.", icon: "✝️" }
    ],
    scripture: {
      reference: "Exode 20:8-11 (Louis Segond)",
      text: `8 « Souviens-toi du jour du sabbat, pour le sanctifier. 9 Tu travailleras six jours et tu feras tout ton ouvrage, 10 mais le septième jour est le sabbat de l'Éternel, ton Dieu. Tu ne feras aucun travail : ni toi, ni ton fils, ni ta fille, ni ton serviteur, ni ta servante, ni ton bétail, ni l'étranger qui est dans tes portes. 11 Car en six jours le Seigneur a fait les cieux et la terre, la mer et tout ce qui s'y trouve, et il s'est reposé le septième jour. C'est pourquoi le Seigneur a béni le jour du sabbat et l'a sanctifié. »`
    },
    funFact: "Le sabbat est le seul jour de la semaine auquel Dieu a donné un nom spécial - tous les autres jours sont simplement numérotés !",
    keyVerse: "Souviens-toi du jour du sabbat, pour le sanctifier. - Exode 20:8"
  },
};

// Spanish content
const topicsContentEs: Record<string, any> = {
  "daniels-statue": {
    title: "El Sueño de la Estatua de Daniel",
    subtitle: "La Visión Increíble de Nabucodonosor",
    book: "Daniel 2",
    emoji: "🗿",
    heroColor: "from-amber-500 to-yellow-600",
    intro: "¡El rey Nabucodonosor tuvo un sueño que lo perturbó tanto que no podía dormir! Solo Daniel, con la ayuda de Dios, pudo decirle lo que significaba el sueño.",
    sections: [
      { title: "El Sueño", content: "El rey vio una estatua gigantesca hecha de diferentes metales. ¡Era tan alta y brillante que era aterradora! Pero entonces algo increíble sucedió: una piedra, no cortada por manos humanas, golpeó la estatua y se desmoronó en polvo.", icon: "👁️" },
      { title: "Lo que Significa Cada Parte", content: "Dios le mostró a Daniel que cada parte de la estatua representa un reino mundial:", icon: "🔍",
        list: [
          { label: "Cabeza de Oro", value: "Babilonia (605-539 a.C.)", color: "bg-amber-500" },
          { label: "Pecho y Brazos de Plata", value: "Medo-Persia (539-331 a.C.)", color: "bg-gray-400" },
          { label: "Vientre y Muslos de Bronce", value: "Grecia (331-168 a.C.)", color: "bg-orange-600" },
          { label: "Piernas de Hierro", value: "Roma (168 a.C. - 476 d.C.)", color: "bg-gray-600" },
          { label: "Pies de Hierro y Barro", value: "Naciones Divididas (476 d.C. - Hoy)", color: "bg-stone-500" }
        ]
      },
      { title: "El Reino de Piedra", content: "¡La piedra que destruyó la estatua representa el reino eterno de Dios! Tal como dijo la profecía, estos reinos surgieron y cayeron exactamente como se predijo. ¡Esto nos muestra que Dios conoce el futuro y Su Palabra es verdad!", icon: "⛰️" }
    ],
    funFact: "¡Cada reino de esta profecía ha venido y se ha ido exactamente como Dios lo dijo, y ahora vivimos en el tiempo de las naciones divididas (los pies de hierro y barro)!",
    keyVerse: "En los días de estos reyes, el Dios del cielo levantará un reino que nunca será destruido. - Daniel 2:44"
  },
  "four-beasts": {
    title: "Las Cuatro Bestias", subtitle: "La Visión Nocturna de Daniel", book: "Daniel 7", emoji: "🦁", heroColor: "from-orange-500 to-red-600",
    intro: "Daniel tuvo un sueño sobre cuatro bestias extrañas que salían del mar. ¡Estas bestias representaban los mismos reinos que la estatua, pero con más detalles emocionantes!",
    sections: [
      { title: "Las Cuatro Bestias", content: "Cada bestia en la visión de Daniel era única y representaba un reino poderoso:", icon: "🌊",
        list: [
          { label: "León con Alas de Águila", value: "Babilonia - El reino majestuoso", color: "bg-amber-500" },
          { label: "Oso con 3 Costillas", value: "Medo-Persia - El poder conquistador", color: "bg-stone-600" },
          { label: "Leopardo con 4 Alas", value: "Grecia - ¡Conquistas ultra rápidas!", color: "bg-yellow-600" },
          { label: "Bestia Aterradora", value: "Roma - El reino de hierro", color: "bg-gray-700" }
        ]
      },
      { title: "El Cuerno Pequeño", content: "Un cuerno pequeño creció entre diez cuernos en la cuarta bestia. Este cuerno pequeño habló contra Dios y trató de cambiar Sus leyes. ¡Pero no te preocupes, Dios le mostró a Daniel que este poder solo duraría un tiempo!", icon: "📯" },
      { title: "El Hijo del Hombre", content: "¡La mejor parte de la visión de Daniel fue ver a 'uno como un hijo del hombre' viniendo en las nubes para recibir un reino eterno! ¡Este es Jesús, y Él reinará para siempre!", icon: "👑" }
    ],
    funFact: "Alejandro Magno conquistó el mundo conocido en solo 13 años - ¡por eso Grecia se muestra como un leopardo con alas, representando velocidad extraordinaria!",
    keyVerse: "Los santos del Altísimo recibirán el reino y lo poseerán para siempre. - Daniel 7:18"
  },
  "seven-seals": {
    title: "El Cordero y los Siete Sellos", subtitle: "El Libro Más Importante del Cielo", book: "Apocalipsis 5-6", emoji: "🐑", heroColor: "from-blue-500 to-indigo-600",
    intro: "Juan vio un rollo con siete sellos en el cielo. ¡Nadie podía abrirlo excepto Jesús, el Cordero inmolado! ¡Cada sello revela algo sobre la historia y el futuro!",
    sections: [
      { title: "El Rollo Sellado", content: "Juan lloró porque nadie podía abrir el rollo. Pero entonces un anciano dijo: '¡No llores! ¡El León de Judá ha triunfado!' Cuando Juan miró, vio un Cordero: ¡Jesús, el único digno!", icon: "📜" },
      { title: "Los Siete Sellos", content: "A medida que Jesús abre cada sello, suceden diferentes cosas:", icon: "🔓",
        list: [
          { label: "Caballo Blanco", value: "¡El evangelio se extiende!", color: "bg-white border border-gray-300" },
          { label: "Caballo Rojo", value: "Guerra y conflicto", color: "bg-red-500" },
          { label: "Caballo Negro", value: "Hambre y dificultades", color: "bg-gray-900" },
          { label: "Caballo Pálido", value: "Muerte y problemas", color: "bg-green-200" },
          { label: "Clamor de los Mártires", value: "'¿Hasta cuándo, Señor?'", color: "bg-purple-500" },
          { label: "Gran Terremoto", value: "Señales en los cielos", color: "bg-orange-500" },
          { label: "Silencio", value: "¡Jesús viene!", color: "bg-amber-400" }
        ]
      },
      { title: "Los 144.000", content: "Antes del séptimo sello, Dios sella a Su pueblo fiel. ¡Están protegidos y listos para la venida de Jesús!", icon: "✨" }
    ],
    funFact: "¡El universo entero canta una canción a Jesús en Apocalipsis 5: miles de millones de ángeles diciendo '¡Digno es el Cordero!'",
    keyVerse: "¡Digno es el Cordero que fue inmolado, de recibir poder, riquezas, sabiduría y fuerza! - Apocalipsis 5:12"
  },
  "three-angels": {
    title: "Los Mensajes de los Tres Ángeles", subtitle: "El Llamado Final de Dios al Mundo", book: "Apocalipsis 14", emoji: "👼", heroColor: "from-purple-500 to-pink-600",
    intro: "Tres ángeles vuelan por el cielo con mensajes urgentes para todos en la Tierra. ¡Estos mensajes son tan importantes que están destinados a 'toda nación, tribu, lengua y pueblo'!",
    sections: [
      { title: "Mensaje del Primer Ángel", content: "El primer ángel grita con gran voz: '¡Temed a Dios y dadle gloria, porque la hora de Su juicio ha llegado!' Este ángel llama a todos a adorar a Dios como el Creador que hizo los cielos y la tierra.", icon: "1️⃣" },
      { title: "Mensaje del Segundo Ángel", content: "El segundo ángel anuncia: '¡Ha caído! ¡Ha caído Babilonia la Grande!' Este mensaje advierte a la gente que salga de los falsos sistemas religiosos y siga la verdad de Dios.", icon: "2️⃣" },
      { title: "Mensaje del Tercer Ángel", content: "El tercer ángel da una advertencia solemne sobre la bestia y su marca. Los que siguen a Dios y guardan Sus mandamientos serán protegidos. ¡Este mensaje nos ayuda a elegir estar del lado de Dios!", icon: "3️⃣" },
      { title: "El Resultado", content: "Después de los mensajes de los tres ángeles, ¡vemos a Jesús viniendo en las nubes! Estos mensajes preparan a la gente para el regreso de Jesús.", icon: "☁️" }
    ],
    funFact: "¡Los Adventistas del Séptimo Día creen que tienen una misión especial de compartir estos mensajes de los tres ángeles con todo el mundo antes de que Jesús venga!",
    keyVerse: "Aquí está la paciencia de los santos, los que guardan los mandamientos de Dios y la fe de Jesús. - Apocalipsis 14:12",
    egwQuote: {
      text: "Varios me han escrito preguntando si el mensaje de la justificación por la fe es el mensaje del tercer ángel, y he respondido: «Es el mensaje del tercer ángel en verdad».",
      source: "Review & Herald, 1 de abril de 1890"
    }
  },
  "sanctuary": {
    title: "El Santuario Celestial", subtitle: "Donde Jesús Ministra por Nosotros", book: "Hebreos 8-9", emoji: "⛪", heroColor: "from-green-500 to-emerald-600",
    intro: "¡El santuario terrenal que Moisés construyó era una copia de algo real en el cielo! Jesús es nuestro Sumo Sacerdote allí, trabajando para salvarnos.",
    sections: [
      { title: "El Santuario Terrenal", content: "Dios le dijo a Moisés exactamente cómo construir el santuario. Tenía dos habitaciones: el Lugar Santo (donde los sacerdotes servían diariamente) y el Lugar Santísimo (donde solo el sumo sacerdote podía entrar una vez al año).", icon: "🏕️",
        list: [
          { label: "Atrio", value: "Altar de sacrificio, Fuente", color: "bg-amber-600" },
          { label: "Lugar Santo", value: "Candelabro, Mesa, Altar del incienso", color: "bg-yellow-500" },
          { label: "Lugar Santísimo", value: "Arca del Pacto", color: "bg-amber-400" }
        ]
      },
      { title: "Jesús Nuestro Sumo Sacerdote", content: "¡Todo en el santuario terrenal señalaba a Jesús! ¿El cordero sacrificado? Eso es Jesús muriendo por nuestros pecados. ¿El sumo sacerdote? ¡Eso es Jesús orando por nosotros en el cielo ahora mismo!", icon: "🙏" },
      { title: "El Día de la Expiación", content: "Una vez al año, el sumo sacerdote entraba al Lugar Santísimo para purificar el santuario. ¡Esto señalaba a un tiempo especial cuando Jesús purificaría el santuario celestial y prepararía Su regreso!", icon: "📅" }
    ],
    funFact: "¡El Arca del Pacto contenía los Diez Mandamientos, mostrando que la ley de Dios está en el centro mismo de Su trono!",
    keyVerse: "Tenemos tal sumo sacerdote, que se sentó a la diestra del trono de la Majestad en los cielos. - Hebreos 8:1"
  },
  "new-jerusalem": {
    title: "La Nueva Jerusalén", subtitle: "Nuestro Hogar Eterno", book: "Apocalipsis 21-22", emoji: "🌟", heroColor: "from-cyan-500 to-blue-600",
    intro: "Al final del Apocalipsis, Juan ve la ciudad más hermosa jamás vista: ¡la Nueva Jerusalén descendiendo del cielo! Este es el hogar que Jesús está preparando para los que Le aman.",
    sections: [
      { title: "Una Ciudad Hermosa", content: "¡La Nueva Jerusalén es deslumbrante! Está hecha de oro puro que parece cristal transparente. Los muros están decorados con piedras preciosas, ¡y cada una de las 12 puertas está hecha de una sola perla gigante!", icon: "💎",
        list: [
          { label: "Tamaño", value: "¡2.250 km en cada dirección!", color: "bg-blue-500" },
          { label: "Muros", value: "Jaspe - 66 metros de alto", color: "bg-green-500" },
          { label: "Fundamentos", value: "12 piedras preciosas", color: "bg-purple-500" },
          { label: "Puertas", value: "12 perlas", color: "bg-pink-300" },
          { label: "Calles", value: "Oro puro como cristal", color: "bg-amber-400" }
        ]
      },
      { title: "No Más Lágrimas", content: "En esta ciudad, Dios enjugará toda lágrima. No habrá más muerte, tristeza, llanto ni dolor. ¡Todo lo triste dejará de existir!", icon: "😊" },
      { title: "El Río y el Árbol de la Vida", content: "Un río de agua cristalina fluye del trono de Dios, y el Árbol de la Vida crece a lo largo de sus orillas. Tiene 12 tipos de frutos y sus hojas sanan las naciones. ¡Viviremos para siempre con Dios!", icon: "🌳" }
    ],
    funFact: "¡La ciudad es tan grande que podría contener más de la mitad de Europa! ¡Hay espacio para todos los que quieran venir!",
    keyVerse: "Dios mismo estará con ellos y será su Dios. Enjugará toda lágrima de sus ojos. - Apocalipsis 21:3-4"
  },
  "investigative-judgment": {
    title: "El Juicio Investigador", subtitle: "Jesús Examina los Registros", book: "Daniel 7-8", emoji: "⚖️", heroColor: "from-violet-500 to-purple-600",
    intro: "Antes de que Jesús regrese, hay un juicio especial en el cielo. Jesús está examinando la vida de cada persona para mostrar al universo quién ha aceptado Su don de salvación.",
    sections: [
      { title: "La Escena del Juicio", content: "Daniel 7 describe un tribunal en el cielo con el Anciano de Días (Dios) en Su trono. Los libros son abiertos conteniendo los registros de la vida de cada persona.", icon: "📖" },
      { title: "¿Cuándo Comenzó?", content: "La profecía de los 2.300 días en Daniel 8:14 señala a 1844 como el año en que el santuario celestial comenzó a ser purificado: el inicio del juicio investigador.", icon: "📅" },
      { title: "Lo que Significa para Nosotros", content: "Este juicio muestra que Dios es justo. Él quiere que todo el universo vea que salva a todos los que confían en Jesús. No se trata de miedo: ¡se trata de que Dios prueba Su amor!", icon: "❤️" }
    ],
    funFact: "¡El juicio investigador es como un drama judicial cósmico donde Jesús es tanto nuestro abogado (defensor) como nuestro amigo!",
    keyVerse: "El tribunal se sentó y los libros fueron abiertos. - Daniel 7:10"
  },
  "time-of-end": {
    title: "El Tiempo del Fin", subtitle: "Señales del Regreso de Jesús", book: "Daniel 12", emoji: "⏰", heroColor: "from-rose-500 to-red-600",
    intro: "Daniel 12 habla de un 'tiempo del fin' especial cuando el conocimiento aumentará y muchos entenderán las profecías que estaban selladas hasta los últimos días.",
    sections: [
      { title: "El Libro Sellado", content: "Dios le dijo a Daniel que sellara el libro de su profecía hasta 'el tiempo del fin.' Esto significa que algunas profecías solo serían completamente entendidas en los últimos días de la historia terrestre.", icon: "📕" },
      { title: "Señales del Fin", content: "Daniel 12 menciona que en el tiempo del fin, la gente viajará por todas partes y el conocimiento aumentará grandemente. ¡Mira a tu alrededor: esto está sucediendo hoy!", icon: "🌍" },
      { title: "La Promesa de la Resurrección", content: "¡La mejor parte de Daniel 12 es la promesa de que 'los que duermen en el polvo de la tierra despertarán': el pueblo de Dios será resucitado para vida eterna cuando Jesús regrese!", icon: "🌅" }
    ],
    funFact: "Daniel 12:4 predijo la explosión del conocimiento y los viajes: ¡en 100 años, hemos pasado de los caballos a los cohetes!",
    keyVerse: "Los sabios resplandecerán como el resplandor del firmamento. - Daniel 12:3"
  },
  "sabbath-day": {
    title: "El Día de Reposo",
    subtitle: "El Día Especial de Descanso de Dios",
    book: "Éxodo 20:8-11",
    emoji: "🕊️",
    heroColor: "from-teal-500 to-cyan-600",
    intro: "Desde el principio, Dios apartó un día especial para que descansáramos y nos acordáramos de Él. ¡El sábado es un regalo de amor de nuestro Creador!",
    sections: [
      { title: "Creado en la Creación", content: "Después de hacer el mundo en seis días, Dios descansó el séptimo día y lo bendijo. ¡El sábado fue hecho para todos, incluso antes de que el pecado entrara en el mundo!", icon: "🌅" },
      { title: "El Cuarto Mandamiento", content: "¡Dios escribió el mandamiento del sábado con Su propio dedo en piedra! Es parte de Su ley eterna y nos recuerda que Él es nuestro Creador.", icon: "📜" },
      { title: "Jesús Guardó el Sábado", content: "Jesús, nuestro ejemplo perfecto, guardaba el sábado cada semana. Nos mostró cómo hacerlo un deleite haciendo el bien y adorando a Su Padre.", icon: "✝️" }
    ],
    scripture: {
      reference: "Éxodo 20:8-11 (RVR1960)",
      text: `8 "Acuérdate del día de reposo para santificarlo. 9 Seis días trabajarás, y harás toda tu obra; 10 mas el séptimo día es reposo para Jehová tu Dios; no hagas en él obra alguna, tú, ni tu hijo, ni tu hija, ni tu siervo, ni tu criada, ni tu bestia, ni tu extranjero que está dentro de tus puertas. 11 Porque en seis días hizo Jehová los cielos y la tierra, el mar, y todas las cosas que en ellos hay, y reposó en el séptimo día; por tanto, Jehová bendijo el día de reposo y lo santificó."`
    },
    funFact: "¡El sábado es el único día de la semana al que Dios le dio un nombre especial - todos los demás días solo están numerados!",
    keyVerse: "Acuérdate del día de reposo para santificarlo. - Éxodo 20:8"
  },
};

// Haitian Creole content
const topicsContentHt: Record<string, any> = {
  "daniels-statue": {
    title: "Rèv Estati Danyèl la",
    subtitle: "Vizyon Etònan Nèbikadneza",
    book: "Danyèl 2",
    emoji: "🗿",
    heroColor: "from-amber-500 to-yellow-600",
    intro: "Wa Nèbikadneza te fè yon rèv ki te twouble l tèlman li pa t kapab dòmi! Se sèlman Danyèl, ak èd Bondye, ki te kapab di l sa rèv la te vle di.",
    sections: [
      { title: "Rèv la", content: "Wa a te wè yon estati jigan ki fèt ak diferan metal. Li te tèlman wo ak klere ke li te fè pè! Men apre sa yon bagay etònan rive — yon wòch, ki pa t taye pa men moun, frape estati a epi li tounen pousyè.", icon: "👁️" },
      { title: "Sa Chak Pati Vle Di", content: "Bondye montre Danyèl ke chak pati nan estati a reprezante yon wayòm mondyal:", icon: "🔍",
        list: [
          { label: "Tèt an Lò", value: "Babilòn (605-539 av. J.-C.)", color: "bg-amber-500" },
          { label: "Pwatrin ak Bra an Ajan", value: "Medo-Pès (539-331 av. J.-C.)", color: "bg-gray-400" },
          { label: "Vant ak Kwis an Bwonz", value: "Grès (331-168 av. J.-C.)", color: "bg-orange-600" },
          { label: "Janm an Fè", value: "Wòm (168 av. J.-C. - 476 ap. J.-C.)", color: "bg-gray-600" },
          { label: "Pye an Fè ak Ajil", value: "Nasyon Divize (476 ap. J.-C. - Jodi a)", color: "bg-stone-500" }
        ]
      },
      { title: "Wayòm Wòch la", content: "Wòch ki te detwi estati a reprezante wayòm etènèl Bondye a! Menm jan pwofesi a te di, wayòm sa yo leve epi tonbe egzakteman jan yo te predi. Sa montre nou ke Bondye konnen lavni epi Pawòl Li se verite!", icon: "⛰️" }
    ],
    funFact: "Chak wayòm nan pwofesi sa a vini epi ale egzakteman jan Bondye te di — epi nou ap viv kounye a nan tan nasyon divize yo (pye fè ak ajil yo)!",
    keyVerse: "Nan jou wa sa yo, Bondye nan syèl la va leve yon wayòm ki p ap janm detwi. - Danyèl 2:44"
  },
  "four-beasts": {
    title: "Kat Bèt yo", subtitle: "Vizyon Lannwit Danyèl la", book: "Danyèl 7", emoji: "🦁", heroColor: "from-orange-500 to-red-600",
    intro: "Danyèl te fè yon rèv sou kat bèt etranj ki t ap soti nan lanmè. Bèt sa yo te reprezante menm wayòm yo ak estati a, men ak plis detay eksite!",
    sections: [
      { title: "Kat Bèt yo", content: "Chak bèt nan vizyon Danyèl la te inik epi te reprezante yon wayòm pwisan:", icon: "🌊",
        list: [
          { label: "Lyon ak Zèl Èg", value: "Babilòn - Wayòm majestye a", color: "bg-amber-500" },
          { label: "Lous ak 3 Zo Kòt", value: "Medo-Pès - Pouvwa konkeran an", color: "bg-stone-600" },
          { label: "Leyopa ak 4 Zèl", value: "Grès - Konkit iltra rapid!", color: "bg-yellow-600" },
          { label: "Bèt Terib", value: "Wòm - Wayòm fè a", color: "bg-gray-700" }
        ]
      },
      { title: "Ti Kòn nan", content: "Yon ti kòn te grandi pami dis kòn sou katriyèm bèt la. Ti kòn sa a te pale kont Bondye epi te eseye chanje lwa Li yo. Men pa enkyete w — Bondye te montre Danyèl ke pouvwa sa a t ap dire sèlman yon tan!", icon: "📯" },
      { title: "Pitit Gason Lòm nan", content: "Pi bon pati vizyon Danyèl la se te wè 'youn tankou yon pitit gason lòm' k ap vini sou nyaj yo pou resevwa yon wayòm etènèl! Sa se Jezi, epi L ap gouvène pou tout tan!", icon: "👑" }
    ],
    funFact: "Aleksann Gran te konkeri mond li te konnen an nan sèlman 13 an — se poutèt sa Grès parèt tankou yon leyopa ak zèl, ki reprezante vitès ekstraòdinè!",
    keyVerse: "Sen Trè Wo yo va resevwa wayòm nan epi yo va posede l pou tout tan. - Danyèl 7:18"
  },
  "seven-seals": {
    title: "Ti Mouton an ak Sèt So yo", subtitle: "Liv Pi Enpòtan nan Syèl la", book: "Revelasyon 5-6", emoji: "🐑", heroColor: "from-blue-500 to-indigo-600",
    intro: "Jan te wè yon woulo ak sèt so nan syèl la. Pèsonn pa t kapab ouvri l sof Jezi, Ti Mouton ki te touye a. Chak so revele yon bagay sou istwa ak lavni!",
    sections: [
      { title: "Woulo Sele a", content: "Jan te kriye paske pèsonn pa t kapab ouvri woulo a. Men apre sa yon ansyen di: 'Pa kriye! Lyon Jida a genyen!' Lè Jan gade, li wè yon Ti Mouton — Jezi, sèl ki diy!", icon: "📜" },
      { title: "Sèt So yo", content: "Pandan Jezi ouvri chak so, diferan bagay rive:", icon: "🔓",
        list: [
          { label: "Cheval Blan", value: "Levanjil la gaye!", color: "bg-white border border-gray-300" },
          { label: "Cheval Wouj", value: "Lagè ak konfli", color: "bg-red-500" },
          { label: "Cheval Nwa", value: "Grangou ak difikilte", color: "bg-gray-900" },
          { label: "Cheval Pàl", value: "Lanmò ak twoub", color: "bg-green-200" },
          { label: "Rèl Mati yo", value: "'Jiskilè, Senyè?'", color: "bg-purple-500" },
          { label: "Gwo Tranblemanntè", value: "Siy nan syèl la", color: "bg-orange-500" },
          { label: "Silans", value: "Jezi ap vini!", color: "bg-amber-400" }
        ]
      },
      { title: "144 000 yo", content: "Anvan setyèm so a, Bondye sele pèp fidèl Li a. Yo pwoteje epi yo pare pou Jezi vini!", icon: "✨" }
    ],
    funFact: "Tout linivè chante yon chante pou Jezi nan Revelasyon 5 — milya zanj k ap di 'Diy se Ti Mouton an!'",
    keyVerse: "Diy se Ti Mouton ki te touye a, pou resevwa pouvwa, richès, sajès ak fòs! - Revelasyon 5:12"
  },
  "three-angels": {
    title: "Mesaj Twa Zanj yo", subtitle: "Dènye Apèl Bondye bay Mond lan", book: "Revelasyon 14", emoji: "👼", heroColor: "from-purple-500 to-pink-600",
    intro: "Twa zanj vole nan syèl la ak mesaj ijan pou tout moun sou Latè. Mesaj sa yo tèlman enpòtan ke yo fèt pou 'chak nasyon, tribi, lang ak pèp!'",
    sections: [
      { title: "Mesaj Premye Zanj lan", content: "Premye zanj lan rele ak yon gwo vwa: 'Pè Bondye epi ba Li glwa, paske lè jijman Li rive!' Zanj sa a rele tout moun pou adore Bondye kòm Kreyatè ki fè syèl la ak latè a.", icon: "1️⃣" },
      { title: "Mesaj Dezyèm Zanj lan", content: "Dezyèm zanj lan anonse: 'Li tonbe! Li tonbe, Babilòn Gran an!' Mesaj sa a avèti moun pou yo soti nan fo sistèm relijye epi swiv verite Bondye.", icon: "2️⃣" },
      { title: "Mesaj Twazyèm Zanj lan", content: "Twazyèm zanj lan bay yon avètisman solanèl sou bèt la ak mak li. Moun ki swiv Bondye epi kenbe kòmandman Li yo ap pwoteje. Mesaj sa a ede nou chwazi pou nou sou bò Bondye!", icon: "3️⃣" },
      { title: "Rezilta a", content: "Apre mesaj twa zanj yo, nou wè Jezi k ap vini sou nyaj yo! Mesaj sa yo prepare moun pou retou Jezi.", icon: "☁️" }
    ],
    funFact: "Adventis Setyèm Jou kwè yo gen yon misyon espesyal pou pataje mesaj twa zanj sa yo ak tout mond lan anvan Jezi vini!",
    keyVerse: "Men pasyans sen yo: men moun ki kenbe kòmandman Bondye ak lafwa Jezi. - Revelasyon 14:12",
    egwQuote: {
      text: "Plizyè moun ekri m, mande si mesaj jistifikasyon pa lafwa a se mesaj twazyèm zanj lan, epi mwen reponn: « Se mesaj twazyèm zanj lan an verite. »",
      source: "Review & Herald, 1ye Avril 1890"
    }
  },
  "sanctuary": {
    title: "Sanktyè Syèl la", subtitle: "Kote Jezi Travay pou Nou", book: "Ebre 8-9", emoji: "⛪", heroColor: "from-green-500 to-emerald-600",
    intro: "Sanktyè latè a ke Moyiz te bati a te yon kopi yon bagay reyèl nan syèl la! Jezi se Souverèn Sakrifikatè nou la, l ap travay pou sove nou.",
    sections: [
      { title: "Sanktyè Latè a", content: "Bondye te di Moyiz egzakteman kijan pou l bati sanktyè a. Li te gen de chanm: Kote Sen an (kote prèt yo te sèvi chak jou) ak Kote Trè Sen an (kote sèlman souverèn sakrifikatè a te kapab antre yon fwa pa ane).", icon: "🏕️",
        list: [
          { label: "Lakou a", value: "Otèl sakrifis, Basen", color: "bg-amber-600" },
          { label: "Kote Sen an", value: "Chandelye, Tab, Otèl lansan", color: "bg-yellow-500" },
          { label: "Kote Trè Sen an", value: "Lach Alyans lan", color: "bg-amber-400" }
        ]
      },
      { title: "Jezi Souverèn Sakrifikatè Nou", content: "Tout bagay nan sanktyè latè a te montre Jezi! Ti mouton ki te sakrifye a? Se Jezi k ap mouri pou peche nou. Souverèn sakrifikatè a? Se Jezi k ap priye pou nou nan syèl la kounye a!", icon: "🙏" },
      { title: "Jou Ekspyasyon an", content: "Yon fwa pa ane, souverèn sakrifikatè a te antre nan Kote Trè Sen an pou pirifye sanktyè a. Sa te montre yon tan espesyal lè Jezi t ap pirifye sanktyè syèl la epi prepare retou Li!", icon: "📅" }
    ],
    funFact: "Lach Alyans lan te gen Dis Kòmandman yo ladan l, sa montre ke lwa Bondye nan sant menm twòn Li an!",
    keyVerse: "Nou gen yon souverèn sakrifikatè konsa, ki chita adwat twòn Majeste a nan syèl la. - Ebre 8:1"
  },
  "new-jerusalem": {
    title: "Nouvo Jerizalèm nan", subtitle: "Kay Etènèl Nou an", book: "Revelasyon 21-22", emoji: "🌟", heroColor: "from-cyan-500 to-blue-600",
    intro: "Nan fen Revelasyon, Jan wè pi bèl vil ki janm egziste — Nouvo Jerizalèm nan k ap desann sot nan syèl la! Sa se kay Jezi ap prepare pou moun ki renmen L yo.",
    sections: [
      { title: "Yon Bèl Vil", content: "Nouvo Jerizalèm nan bèl anpil! Li fèt ak lò pi ki sanble ak vè klè. Mi yo dekore ak pyè presye, epi chak nan 12 pòt yo fèt ak yon sèl gwo pèl!", icon: "💎",
        list: [
          { label: "Gwosè", value: "2 250 km nan chak direksyon!", color: "bg-blue-500" },
          { label: "Mi yo", value: "Jasp — 66 mèt wotè", color: "bg-green-500" },
          { label: "Fondasyon", value: "12 pyè presye", color: "bg-purple-500" },
          { label: "Pòt yo", value: "12 pèl", color: "bg-pink-300" },
          { label: "Ri yo", value: "Lò pi tankou vè", color: "bg-amber-400" }
        ]
      },
      { title: "Pa Gen Dlo Nan Je Ankò", content: "Nan vil sa a, Bondye va siye tout dlo nan je. P ap gen lanmò, tristès, kriye oswa doulè ankò. Tout bagay tris ap disparèt!", icon: "😊" },
      { title: "Rivyè a ak Pyebwa Lavi a", content: "Yon rivyè dlo klè tankou kristal koule soti nan twòn Bondye a, epi Pyebwa Lavi a grandi bò rivyè a. Li gen 12 kalite fwi epi fèy li geri nasyon yo. Nou va viv pou tout tan ak Bondye!", icon: "🌳" }
    ],
    funFact: "Vil la tèlman gwo ke li ta kapab kenbe plis pase mwatye Ewòp! Gen plas pou tout moun ki vle vini!",
    keyVerse: "Bondye li menm ap avèk yo epi l ap Bondye yo. L ap siye tout dlo nan je yo. - Revelasyon 21:3-4"
  },
  "investigative-judgment": {
    title: "Jijman Envestigatif la", subtitle: "Jezi Revize Achiv yo", book: "Danyèl 7-8", emoji: "⚖️", heroColor: "from-violet-500 to-purple-600",
    intro: "Anvan Jezi retounen, gen yon jijman espesyal k ap pase nan syèl la. Jezi ap revize lavi chak moun pou montre linivè ki moun ki aksepte kado sali a.",
    sections: [
      { title: "Sèn Jijman an", content: "Danyèl 7 dekri yon tribinal nan syèl la ak Ansyen Jou yo (Bondye) sou twòn Li. Liv yo louvri ki gen dosye lavi chak moun.", icon: "📖" },
      { title: "Ki Lè Li Te Kòmanse?", content: "Pwofesi 2 300 jou nan Danyèl 8:14 montre 1844 kòm ane lè sanktyè syèl la te kòmanse pirifye — kòmansman jijman envestigatif la.", icon: "📅" },
      { title: "Sa Sa Vle Di pou Nou", content: "Jijman sa a montre Bondye jis. Li vle tout linivè wè ke Li sove tout moun ki mete konfyans nan Jezi. Se pa yon kesyon laperèz — se Bondye k ap pwouve lanmou Li!", icon: "❤️" }
    ],
    funFact: "Jijman envestigatif la tankou yon dram jiridik kosmik kote Jezi se ni avoka nou (defansè) ak zanmi nou!",
    keyVerse: "Tribinal la te chita epi liv yo te louvri. - Danyèl 7:10"
  },
  "time-of-end": {
    title: "Tan Lafen an", subtitle: "Siy Retou Jezi", book: "Danyèl 12", emoji: "⏰", heroColor: "from-rose-500 to-red-600",
    intro: "Danyèl 12 pale de yon 'tan lafen' espesyal lè konesans ap ogmante epi anpil moun ap konprann pwofesi ki te sele jiska dènye jou yo.",
    sections: [
      { title: "Liv Sele a", content: "Bondye te di Danyèl pou l sele liv pwofesi l la jiskaske 'tan lafen an.' Sa vle di kèk pwofesi t ap sèlman konprann nèt nan dènye jou istwa latè a.", icon: "📕" },
      { title: "Siy Lafen an", content: "Danyèl 12 mansyone ke nan tan lafen an, moun ap vwayaje toupatou epi konesans ap ogmante anpil. Gade toutotou ou — sa ap pase jodi a!", icon: "🌍" },
      { title: "Pwomès Rezireksyon an", content: "Pi bon pati Danyèl 12 se pwomès ke 'moun ki dòmi nan pousyè tè a ap leve' — pèp Bondye a ap leve pou lavi etènèl lè Jezi retounen!", icon: "🌅" }
    ],
    funFact: "Danyèl 12:4 te predi eksplozyon konesans ak vwayaj — nan 100 ane, nou pase soti nan cheval rive nan fize!",
    keyVerse: "Moun ki saj yo ap briye tankou klate syèl la. - Danyèl 12:3"
  },
  "sabbath-day": {
    title: "Jou Saba a",
    subtitle: "Jou Espesyal Repo Bondye a",
    book: "Egzòd 20:8-11",
    emoji: "🕊️",
    heroColor: "from-teal-500 to-cyan-600",
    intro: "Depi nan kòmansman, Bondye te mete yon jou espesyal apa pou nou repoze epi sonje L. Saba a se yon kado lanmou ki soti nan Kreyatè nou an!",
    sections: [
      { title: "Kreye nan Kreyasyon an", content: "Apre Li te fin fè mond lan nan sis jou, Bondye te repoze nan setyèm jou a epi Li te beni li. Saba a te fèt pou tout moun, menm anvan peche te antre nan mond lan!", icon: "🌅" },
      { title: "Katriyèm Kòmandman an", content: "Bondye te ekri kòmandman saba a ak pwòp dwèt Li sou wòch! Li fè pati lwa etènèl Li epi li raple nou ke Li se Kreyatè nou.", icon: "📜" },
      { title: "Jezi te Kenbe Saba a", content: "Jezi, egzanp pafè nou an, te kenbe saba a chak semèn. Li te montre nou kijan pou fè li yon plezi pa fè byen epi adore Papa L.", icon: "✝️" }
    ],
    scripture: {
      reference: "Egzòd 20:8-11 (Bib la)",
      text: `8 "Sonje jou Saba a pou ou ka mete l apa pou Bondye. 9 W ap travay sis jou, w ap fè tout sa ou gen pou fè. 10 Men, setyèm jou a se jou repo ki apa pou Senyè a, Bondye ou. Jou sa a, ou pa fèt pou fè ankenn travay, ni ou menm, ni pitit gason ou, ni pitit fi ou, ni domestik ou, ni bèt ou yo, ni etranje ki lakay ou. 11 Paske, nan sis jou, Senyè a te fè syèl la, tè a, lanmè a ak tout sa ki ladan yo. Apre sa, sou setyèm jou a, li pran repo. Se poutèt sa, Senyè a beni jou repo a, li mete l apa pou li."`
    },
    funFact: "Saba a se sèl jou nan semèn nan ke Bondye bay yon non espesyal — tout lòt jou yo gen sèlman nimewo!",
    keyVerse: "Sonje jou Saba a pou ou ka mete l apa pou Bondye. - Egzòd 20:8"
  },
};

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { t, i18n } = useTranslation();
  const { prefix } = useLanguagePrefix();
  
  const contentMap = i18n.language === "fr" ? topicsContentFr : i18n.language === "es" ? topicsContentEs : i18n.language === "ht" ? topicsContentHt : topicsContentEn;
  const topic = contentMap[topicId as string];

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">{t("topicPage.notFound")}</h1>
          <p className="text-muted-foreground mb-6">{t("topicPage.notFoundDesc")}</p>
          <Link to={prefix}>
            <Button variant="hero">{t("topicPage.goHome")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className={`pt-24 pb-16 bg-gradient-to-br ${topic.heroColor} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        {topicHeroImages[topicId as string] && (
          <div className="absolute inset-0 z-0">
            <img
              src={topicHeroImages[topicId as string]}
              alt={topic.title}
              className="w-full h-full object-cover opacity-25"
            />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <Link to={`${prefix}/#topics`} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t("topicPage.backToTopics")}
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-6xl mb-4 block">{topic.emoji}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{topic.title}</h1>
            <p className="text-xl text-white/90 mb-4">{topic.subtitle}</p>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              <BookOpen className="w-4 h-4" />
              {topic.book}
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            {topic.intro}
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {topicId === "time-of-end" && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border overflow-hidden"
              >
                <h3 className="text-xl font-display font-bold mb-4 text-center">📅 2300 Year Prophecy Timeline</h3>
                <img 
                  src={timelineImage} 
                  alt="2300 year prophecy timeline from 457 BC to 1844 AD" 
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            )}
            {topic.sections.map((section: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl p-6 md:p-8 shadow-card border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{section.content}</p>
                {section.list && (
                  <div className="grid gap-3 mt-6">
                    {section.list.map((item: any, i: number) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 bg-muted/50 rounded-2xl p-4">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <div>
                          <span className="font-bold">{item.label}</span>
                          <span className="text-muted-foreground"> - {item.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {topic.scripture && (
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-card rounded-3xl p-6 md:p-8 shadow-card border border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-display font-bold">{topic.scripture.reference}</h3>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed whitespace-pre-line italic text-sm md:text-base">
                {topic.scripture.text}
              </blockquote>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} className="max-w-2xl mx-auto bg-card rounded-3xl p-6 md:p-8 shadow-card border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-display font-bold">{t("topicPage.funFact")}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{topic.funFact}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <Star className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-4">{t("topicPage.memoryVerse")}</h3>
            <blockquote className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
              "{topic.keyVerse}"
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`${prefix}/#topics`}>
              <Button variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {t("topicPage.exploreMore")}
              </Button>
            </Link>
            <Link to={`${prefix}/#quiz`}>
              <Button variant="hero" size="lg" className="gap-2">
                <CheckCircle className="w-4 h-4" />
                {t("topicPage.takeQuiz")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TopicPage;
