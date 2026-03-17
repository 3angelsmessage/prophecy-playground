// Game data translations for EN, FR, ES

export type Lang = "en" | "fr" | "es" | "ht";

// ==================== UI Strings ====================
const gameUI = {
  en: {
    score: "Score",
    playAgain: "Play Again",
    perfectScore: "Perfect Score!",
    greatTry: "Great Try!",
    greatJob: "Great Job!",
    greatStudy: "Great Study!",
    youScored: "You scored",
    outOf: "out of",
    points: "points!",
    correct: "correct!",
    selectBeast: "🦁 Select a Beast",
    matchEmpire: "🏛️ Match the Empire",
    buildStatue: "🗿 Build the Statue",
    choosePiece: "📦 Choose a Piece",
    placeHere: "Place here",
    placePiece: "Place Piece! 🏗️",
    buildTimeline: "📜 Build the Timeline",
    chooseEvent: "🎯 Choose an Event",
    placeOnTimeline: "Place on Timeline! 📍",
    placeNextEvent: "Place next event here",
    chronologicalOrder: "Put events in chronological order!",
    buildTopToBottom: "Build from top to bottom!",
    youBuiltStatue: "You Built the Statue!",
    statueDescription: "The statue represents world empires from Babylon to the end of time!",
    timelineMaster: "Timeline Master!",
    timelineDescription: "God's prophecies happened exactly as predicted!",
    symbolMaster: "Symbol Master!",
    foundAll: "You found all",
    symbols: "symbols!",
    symbolDescription: "Each symbol teaches us about Bible prophecy!",
    clickHidden: "Click on hidden symbols in the scene!",
    found: "Found",
    hints: "💡 Hints",
    hint: "💡 Hint",
    gotIt: "Got it!",
    verse: "Verse",
    of: "of",
    versesCorrect: "verses correct!",
    checkAnswer: "Check Answer ✓",
    quizComplete: "Quiz Complete!",
    question: "Question",
    orderBooks: "📚 Order the Books",
    chooseBook: "📖 Choose a Book",
    placeBook: "Place Book 📖",
    book: "Book",
    perfect: "Perfect!",
    youKnowBooks: "You know your Bible books!",
    startMemorizing: "Start Memorizing! 🧠",
    clickBlanks: "Click blanks to reveal words. Try to remember them all!",
    reset: "Reset",
    sanctuaryItems: "🏛️ Sanctuary Items",
    placeInLocation: "📍 Place in Location",
    sanctuaryExpert: "Sanctuary Expert!",
    youKnowSanctuary: "You know the sanctuary layout!",
    nameNineFruits: "Name the 9 Fruits of the Spirit!",
    typeFruit: "Type a fruit...",
    submit: "Submit",
    fruitExpert: "Fruit Expert!",
    youKnowFruits: "You know all 9 fruits of the Spirit!",
    orderCommandments: "📜 Order the Commandments",
    chooseNext: "⚖️ Choose Next",
    place: "Place ✓",
    youKnowLaw: "You Know the Law!",
    allTenInOrder: "All 10 commandments in order!",
    creationWeek: "🌍 Creation Week",
    chooseDay: "📖 Choose a Day",
    day: "Day",
    placeDay: "Place Day",
    creationMaster: "Creation Master!",
    youKnowCreation: "You know the creation week!",
    selectSymbol: "📖 Select a Symbol",
    matchMeaning: "🎯 Match the Meaning",
    visionMaster: "Vision Master!",
    visionsDescription: "Daniel's visions reveal God's plan through history!",
    matchSymbolsHint: "Match symbols from Daniel 8 & 10 to their meanings!",
    selectSymbolD7: "🦁 Select a Symbol",
    daniel7Master: "Daniel 7 Master!",
    daniel7Description: "Daniel 7 reveals God's plan from Babylon to eternity!",
    matchBeastsHint: "Match beasts from Daniel 7 to their meanings!",
    buildTimelineD11: "📜 Build the Timeline",
    chooseEventD11: "👑 Choose an Event",
    placeEventD11: "Place Event! 📍",
    historyMaster: "History Master!",
    daniel11Description: "Daniel 11 reveals history from Persia to the end of time!",
    putEventsOrder: "Put the events in chronological order!",
    buildStory: "📖 Build the Story",
    chooseElement: "👼 Choose an Element",
    placeElement: "Place Element! 📍",
    revelationExpert: "Revelation Expert!",
    littleBookDescription: "The little book represents the reopening of Daniel's prophecies!",
    step: "Step",
    placeNextElement: "Place next element",
    putElementsOrder: "Put elements in order as they appear in Revelation 10!",
    buildProphecy: "📜 Build the 2300-Day Prophecy",
    chooseElementIJ: "⚖️ Choose an Element",
    placeElementIJ: "Place on Timeline! 📍",
    prophecyScholar: "Prophecy Scholar!",
    judgmentDescription: "Jesus is our High Priest, cleansing the heavenly sanctuary and preparing to return!",
    putProphecyOrder: "Put the prophecy events in chronological order!",
    buildDaniel12: "📜 Build Daniel 12 Prophecy",
    chooseEventTE: "⏰ Choose an Event",
    endTimeScholar: "End-Time Scholar!",
    daniel12Description: "Daniel 12 shows us that God's people will be delivered when Jesus returns!",
    putDaniel12Order: "Put events in order from Daniel 12!",
  },
  ht: {
    score: "Nòt",
    playAgain: "Jwe Ankò",
    perfectScore: "Nòt Pafè!",
    greatTry: "Bon Eseye!",
    greatJob: "Ekselan!",
    greatStudy: "Bèl Etid!",
    youScored: "Ou te fè",
    outOf: "sou",
    points: "pwen!",
    correct: "kòrèk!",
    selectBeast: "🦁 Chwazi yon Bèt",
    matchEmpire: "🏛️ Asosye Anpi a",
    buildStatue: "🗿 Bati Estati a",
    choosePiece: "📦 Chwazi yon Pyès",
    placeHere: "Mete isit la",
    placePiece: "Mete Pyès la! 🏗️",
    buildTimeline: "📜 Bati Liy Tan an",
    chooseEvent: "🎯 Chwazi yon Evènman",
    placeOnTimeline: "Mete nan Liy Tan an! 📍",
    placeNextEvent: "Mete pwochen evènman an isit la",
    chronologicalOrder: "Mete evènman yo nan lòd kwonolojik!",
    buildTopToBottom: "Bati soti anwo rive anba!",
    youBuiltStatue: "Ou Bati Estati a!",
    statueDescription: "Estati a reprezante anpi mondyal yo soti Babilòn rive nan fen tan an!",
    timelineMaster: "Mèt Liy Tan!",
    timelineDescription: "Pwofesi Bondye yo rive egzakteman jan yo te predi!",
    symbolMaster: "Mèt Senbòl!",
    foundAll: "Ou jwenn tout",
    symbols: "senbòl!",
    symbolDescription: "Chak senbòl anseye nou sou pwofesi biblik!",
    clickHidden: "Klike sou senbòl kache nan sèn nan!",
    found: "Jwenn",
    hints: "💡 Endis",
    hint: "💡 Endis",
    gotIt: "Konprann!",
    verse: "Vèsè",
    of: "sou",
    versesCorrect: "vèsè kòrèk!",
    checkAnswer: "Verifye ✓",
    quizComplete: "Quiz Fini!",
    question: "Kesyon",
    orderBooks: "📚 Mete Liv yo nan Lòd",
    chooseBook: "📖 Chwazi yon Liv",
    placeBook: "Mete Liv la 📖",
    book: "Liv",
    perfect: "Pafè!",
    youKnowBooks: "Ou konnen liv Bib ou yo!",
    startMemorizing: "Kòmanse Memorize! 🧠",
    clickBlanks: "Klike sou espas vid yo pou revele mo yo. Eseye sonje yo tout!",
    reset: "Rekòmanse",
    sanctuaryItems: "🏛️ Objè Sanktyè",
    placeInLocation: "📍 Mete nan Kote a",
    sanctuaryExpert: "Ekspè Sanktyè!",
    youKnowSanctuary: "Ou konnen plan sanktyè a!",
    nameNineFruits: "Site 9 Fwi Lespri a!",
    typeFruit: "Tape yon fwi...",
    submit: "Soumèt",
    fruitExpert: "Ekspè Fwi!",
    youKnowFruits: "Ou konnen tout 9 fwi Lespri a!",
    orderCommandments: "📜 Mete Kòmandman yo nan Lòd",
    chooseNext: "⚖️ Chwazi Pwochen",
    place: "Mete ✓",
    youKnowLaw: "Ou Konnen Lalwa!",
    allTenInOrder: "Tout 10 kòmandman nan lòd!",
    creationWeek: "🌍 Semèn Kreyasyon",
    chooseDay: "📖 Chwazi yon Jou",
    day: "Jou",
    placeDay: "Mete Jou a",
    creationMaster: "Mèt Kreyasyon!",
    youKnowCreation: "Ou konnen semèn kreyasyon an!",
    selectSymbol: "📖 Chwazi yon Senbòl",
    matchMeaning: "🎯 Asosye Siyifikasyon an",
    visionMaster: "Mèt Vizyon!",
    visionsDescription: "Vizyon Danyèl yo revele plan Bondye nan istwa!",
    matchSymbolsHint: "Asosye senbòl Danyèl 8 ak 10 ak siyifikasyon yo!",
    selectSymbolD7: "🦁 Chwazi yon Senbòl",
    daniel7Master: "Mèt Danyèl 7!",
    daniel7Description: "Danyèl 7 revele plan Bondye soti Babilòn rive nan letènite!",
    matchBeastsHint: "Asosye bèt Danyèl 7 yo ak siyifikasyon yo!",
    buildTimelineD11: "📜 Bati Liy Tan an",
    chooseEventD11: "👑 Chwazi yon Evènman",
    placeEventD11: "Mete Evènman an! 📍",
    historyMaster: "Mèt Istwa!",
    daniel11Description: "Danyèl 11 revele istwa soti Pès rive nan fen tan an!",
    putEventsOrder: "Mete evènman yo nan lòd kwonolojik!",
    buildStory: "📖 Bati Istwa a",
    chooseElement: "👼 Chwazi yon Eleman",
    placeElement: "Mete Eleman an! 📍",
    revelationExpert: "Ekspè Revelasyon!",
    littleBookDescription: "Ti liv la reprezante re-ouvèti pwofesi Danyèl yo!",
    step: "Etap",
    placeNextElement: "Mete pwochen eleman an",
    putElementsOrder: "Mete eleman yo nan lòd Revelasyon 10!",
    buildProphecy: "📜 Bati Pwofesi 2300 Jou a",
    chooseElementIJ: "⚖️ Chwazi yon Eleman",
    placeElementIJ: "Mete nan Liy Tan an! 📍",
    prophecyScholar: "Savanan Pwofesi!",
    judgmentDescription: "Jezi se Souverèn Sakrifikatè nou, l ap pirifye sanktyè syèl la epi prepare retou Li!",
    putProphecyOrder: "Mete evènman pwofetik yo nan lòd kwonolojik!",
    buildDaniel12: "📜 Bati Pwofesi Danyèl 12",
    chooseEventTE: "⏰ Chwazi yon Evènman",
    endTimeScholar: "Savanan Tan Lafen!",
    daniel12Description: "Danyèl 12 montre nou ke pèp Bondye a ap delivre lè Jezi retounen!",
    putDaniel12Order: "Mete evènman Danyèl 12 nan lòd!",
  },
  fr: {
    score: "Score",
    playAgain: "Rejouer",
    perfectScore: "Score Parfait !",
    greatTry: "Bon Essai !",
    greatJob: "Excellent !",
    greatStudy: "Belle Étude !",
    youScored: "Vous avez marqué",
    outOf: "sur",
    points: "points !",
    correct: "correct !",
    selectBeast: "🦁 Choisir une Bête",
    matchEmpire: "🏛️ Associer l'Empire",
    buildStatue: "🗿 Construire la Statue",
    choosePiece: "📦 Choisir une Pièce",
    placeHere: "Placer ici",
    placePiece: "Placer la Pièce ! 🏗️",
    buildTimeline: "📜 Construire la Chronologie",
    chooseEvent: "🎯 Choisir un Événement",
    placeOnTimeline: "Placer sur la Chronologie ! 📍",
    placeNextEvent: "Placer le prochain événement ici",
    chronologicalOrder: "Mettez les événements dans l'ordre chronologique !",
    buildTopToBottom: "Construisez de haut en bas !",
    youBuiltStatue: "Vous avez Construit la Statue !",
    statueDescription: "La statue représente les empires mondiaux de Babylone à la fin des temps !",
    timelineMaster: "Maître de la Chronologie !",
    timelineDescription: "Les prophéties de Dieu se sont réalisées exactement comme prédit !",
    symbolMaster: "Maître des Symboles !",
    foundAll: "Vous avez trouvé les",
    symbols: "symboles !",
    symbolDescription: "Chaque symbole nous enseigne la prophétie biblique !",
    clickHidden: "Cliquez sur les symboles cachés dans la scène !",
    found: "Trouvés",
    hints: "💡 Indices",
    hint: "💡 Indice",
    gotIt: "Compris !",
    verse: "Verset",
    of: "sur",
    versesCorrect: "versets corrects !",
    checkAnswer: "Vérifier ✓",
    quizComplete: "Quiz Terminé !",
    question: "Question",
    orderBooks: "📚 Ordonner les Livres",
    chooseBook: "📖 Choisir un Livre",
    placeBook: "Placer le Livre 📖",
    book: "Livre",
    perfect: "Parfait !",
    youKnowBooks: "Vous connaissez vos livres de la Bible !",
    startMemorizing: "Commencer à Mémoriser ! 🧠",
    clickBlanks: "Cliquez sur les espaces vides pour révéler les mots. Essayez de tous les retenir !",
    reset: "Réinitialiser",
    sanctuaryItems: "🏛️ Objets du Sanctuaire",
    placeInLocation: "📍 Placer dans le Lieu",
    sanctuaryExpert: "Expert du Sanctuaire !",
    youKnowSanctuary: "Vous connaissez le plan du sanctuaire !",
    nameNineFruits: "Nommez les 9 Fruits de l'Esprit !",
    typeFruit: "Tapez un fruit...",
    submit: "Valider",
    fruitExpert: "Expert des Fruits !",
    youKnowFruits: "Vous connaissez les 9 fruits de l'Esprit !",
    orderCommandments: "📜 Ordonner les Commandements",
    chooseNext: "⚖️ Choisir le Suivant",
    place: "Placer ✓",
    youKnowLaw: "Vous Connaissez la Loi !",
    allTenInOrder: "Les 10 commandements dans l'ordre !",
    creationWeek: "🌍 Semaine de la Création",
    chooseDay: "📖 Choisir un Jour",
    day: "Jour",
    placeDay: "Placer le Jour",
    creationMaster: "Maître de la Création !",
    youKnowCreation: "Vous connaissez la semaine de la création !",
    selectSymbol: "📖 Choisir un Symbole",
    matchMeaning: "🎯 Associer la Signification",
    visionMaster: "Maître des Visions !",
    visionsDescription: "Les visions de Daniel révèlent le plan de Dieu à travers l'histoire !",
    matchSymbolsHint: "Associez les symboles de Daniel 8 et 10 à leurs significations !",
    selectSymbolD7: "🦁 Choisir un Symbole",
    daniel7Master: "Maître de Daniel 7 !",
    daniel7Description: "Daniel 7 révèle le plan de Dieu de Babylone à l'éternité !",
    matchBeastsHint: "Associez les bêtes de Daniel 7 à leurs significations !",
    buildTimelineD11: "📜 Construire la Chronologie",
    chooseEventD11: "👑 Choisir un Événement",
    placeEventD11: "Placer l'Événement ! 📍",
    historyMaster: "Maître de l'Histoire !",
    daniel11Description: "Daniel 11 révèle l'histoire de la Perse à la fin des temps !",
    putEventsOrder: "Mettez les événements dans l'ordre chronologique !",
    buildStory: "📖 Construire l'Histoire",
    chooseElement: "👼 Choisir un Élément",
    placeElement: "Placer l'Élément ! 📍",
    revelationExpert: "Expert de l'Apocalypse !",
    littleBookDescription: "Le petit livre représente la réouverture des prophéties de Daniel !",
    step: "Étape",
    placeNextElement: "Placer le prochain élément",
    putElementsOrder: "Mettez les éléments dans l'ordre d'Apocalypse 10 !",
    buildProphecy: "📜 Construire la Prophétie des 2300 Jours",
    chooseElementIJ: "⚖️ Choisir un Élément",
    placeElementIJ: "Placer sur la Chronologie ! 📍",
    prophecyScholar: "Érudit de la Prophétie !",
    judgmentDescription: "Jésus est notre Souverain Sacrificateur, purifiant le sanctuaire céleste et préparant Son retour !",
    putProphecyOrder: "Mettez les événements prophétiques dans l'ordre chronologique !",
    buildDaniel12: "📜 Construire la Prophétie de Daniel 12",
    chooseEventTE: "⏰ Choisir un Événement",
    endTimeScholar: "Érudit des Derniers Temps !",
    daniel12Description: "Daniel 12 nous montre que le peuple de Dieu sera délivré au retour de Jésus !",
    putDaniel12Order: "Mettez les événements de Daniel 12 dans l'ordre !",
  },
  es: {
    score: "Puntuación",
    playAgain: "Jugar de Nuevo",
    perfectScore: "¡Puntuación Perfecta!",
    greatTry: "¡Buen Intento!",
    greatJob: "¡Excelente!",
    greatStudy: "¡Gran Estudio!",
    youScored: "Obtuviste",
    outOf: "de",
    points: "¡puntos!",
    correct: "¡correcto!",
    selectBeast: "🦁 Elige una Bestia",
    matchEmpire: "🏛️ Asocia el Imperio",
    buildStatue: "🗿 Construye la Estatua",
    choosePiece: "📦 Elige una Pieza",
    placeHere: "Colocar aquí",
    placePiece: "¡Colocar Pieza! 🏗️",
    buildTimeline: "📜 Construir la Línea de Tiempo",
    chooseEvent: "🎯 Elige un Evento",
    placeOnTimeline: "¡Colocar en la Línea de Tiempo! 📍",
    placeNextEvent: "Colocar el siguiente evento aquí",
    chronologicalOrder: "¡Pon los eventos en orden cronológico!",
    buildTopToBottom: "¡Construye de arriba hacia abajo!",
    youBuiltStatue: "¡Construiste la Estatua!",
    statueDescription: "¡La estatua representa los imperios mundiales desde Babilonia hasta el fin del tiempo!",
    timelineMaster: "¡Maestro de la Línea de Tiempo!",
    timelineDescription: "¡Las profecías de Dios se cumplieron exactamente como se predijo!",
    symbolMaster: "¡Maestro de Símbolos!",
    foundAll: "¡Encontraste los",
    symbols: "símbolos!",
    symbolDescription: "¡Cada símbolo nos enseña sobre la profecía bíblica!",
    clickHidden: "¡Haz clic en los símbolos escondidos en la escena!",
    found: "Encontrados",
    hints: "💡 Pistas",
    hint: "💡 Pista",
    gotIt: "¡Entendido!",
    verse: "Versículo",
    of: "de",
    versesCorrect: "¡versículos correctos!",
    checkAnswer: "Verificar ✓",
    quizComplete: "¡Quiz Completado!",
    question: "Pregunta",
    orderBooks: "📚 Ordena los Libros",
    chooseBook: "📖 Elige un Libro",
    placeBook: "Colocar Libro 📖",
    book: "Libro",
    perfect: "¡Perfecto!",
    youKnowBooks: "¡Conoces tus libros de la Biblia!",
    startMemorizing: "¡Empieza a Memorizar! 🧠",
    clickBlanks: "Haz clic en los espacios para revelar palabras. ¡Intenta recordarlas todas!",
    reset: "Reiniciar",
    sanctuaryItems: "🏛️ Objetos del Santuario",
    placeInLocation: "📍 Colocar en el Lugar",
    sanctuaryExpert: "¡Experto del Santuario!",
    youKnowSanctuary: "¡Conoces el diseño del santuario!",
    nameNineFruits: "¡Nombra los 9 Frutos del Espíritu!",
    typeFruit: "Escribe un fruto...",
    submit: "Enviar",
    fruitExpert: "¡Experto en Frutos!",
    youKnowFruits: "¡Conoces los 9 frutos del Espíritu!",
    orderCommandments: "📜 Ordena los Mandamientos",
    chooseNext: "⚖️ Elige el Siguiente",
    place: "Colocar ✓",
    youKnowLaw: "¡Conoces la Ley!",
    allTenInOrder: "¡Los 10 mandamientos en orden!",
    creationWeek: "🌍 Semana de la Creación",
    chooseDay: "📖 Elige un Día",
    day: "Día",
    placeDay: "Colocar Día",
    creationMaster: "¡Maestro de la Creación!",
    youKnowCreation: "¡Conoces la semana de la creación!",
    selectSymbol: "📖 Elige un Símbolo",
    matchMeaning: "🎯 Asocia el Significado",
    visionMaster: "¡Maestro de Visiones!",
    visionsDescription: "¡Las visiones de Daniel revelan el plan de Dios a través de la historia!",
    matchSymbolsHint: "¡Asocia los símbolos de Daniel 8 y 10 con sus significados!",
    selectSymbolD7: "🦁 Elige un Símbolo",
    daniel7Master: "¡Maestro de Daniel 7!",
    daniel7Description: "¡Daniel 7 revela el plan de Dios desde Babilonia hasta la eternidad!",
    matchBeastsHint: "¡Asocia las bestias de Daniel 7 con sus significados!",
    buildTimelineD11: "📜 Construir la Línea de Tiempo",
    chooseEventD11: "👑 Elige un Evento",
    placeEventD11: "¡Colocar Evento! 📍",
    historyMaster: "¡Maestro de la Historia!",
    daniel11Description: "¡Daniel 11 revela la historia desde Persia hasta el fin del tiempo!",
    putEventsOrder: "¡Pon los eventos en orden cronológico!",
    buildStory: "📖 Construir la Historia",
    chooseElement: "👼 Elige un Elemento",
    placeElement: "¡Colocar Elemento! 📍",
    revelationExpert: "¡Experto en Apocalipsis!",
    littleBookDescription: "¡El librito representa la reapertura de las profecías de Daniel!",
    step: "Paso",
    placeNextElement: "Colocar el siguiente elemento",
    putElementsOrder: "¡Pon los elementos en orden de Apocalipsis 10!",
    buildProphecy: "📜 Construir la Profecía de los 2300 Días",
    chooseElementIJ: "⚖️ Elige un Elemento",
    placeElementIJ: "¡Colocar en la Línea de Tiempo! 📍",
    prophecyScholar: "¡Erudito de la Profecía!",
    judgmentDescription: "¡Jesús es nuestro Sumo Sacerdote, purificando el santuario celestial y preparando Su regreso!",
    putProphecyOrder: "¡Pon los eventos proféticos en orden cronológico!",
    buildDaniel12: "📜 Construir la Profecía de Daniel 12",
    chooseEventTE: "⏰ Elige un Evento",
    endTimeScholar: "¡Erudito del Tiempo del Fin!",
    daniel12Description: "¡Daniel 12 nos muestra que el pueblo de Dios será liberado cuando Jesús regrese!",
    putDaniel12Order: "¡Pon los eventos de Daniel 12 en orden!",
  },
};

// ==================== Game Data ====================

const beastMatchData = {
  en: [
    { beast: "🦁 Lion", empire: "Babylon" },
    { beast: "🐻 Bear", empire: "Medo-Persia" },
    { beast: "🐆 Leopard", empire: "Greece" },
    { beast: "🦷 Terrible Beast", empire: "Rome" },
  ],
  fr: [
    { beast: "🦁 Lion", empire: "Babylone" },
    { beast: "🐻 Ours", empire: "Médo-Perse" },
    { beast: "🐆 Léopard", empire: "Grèce" },
    { beast: "🦷 Bête Terrible", empire: "Rome" },
  ],
  es: [
    { beast: "🦁 León", empire: "Babilonia" },
    { beast: "🐻 Oso", empire: "Medo-Persia" },
    { beast: "🐆 Leopardo", empire: "Grecia" },
    { beast: "🦷 Bestia Terrible", empire: "Roma" },
  ],
  ht: [
    { beast: "🦁 Lyon", empire: "Babilòn" },
    { beast: "🐻 Lous", empire: "Medo-Pès" },
    { beast: "🐆 Leyopa", empire: "Grès" },
    { beast: "🦷 Bèt Terib", empire: "Wòm" },
  ],
};

const statuePiecesData = {
  en: [
    { id: "head", name: "Head of Gold", metal: "🥇 Gold", empire: "Babylon", position: 0, color: "from-yellow-400 to-yellow-600" },
    { id: "chest", name: "Chest & Arms of Silver", metal: "🥈 Silver", empire: "Medo-Persia", position: 1, color: "from-gray-300 to-gray-400" },
    { id: "belly", name: "Belly & Thighs of Bronze", metal: "🥉 Bronze", empire: "Greece", position: 2, color: "from-amber-600 to-amber-700" },
    { id: "legs", name: "Legs of Iron", metal: "⚙️ Iron", empire: "Rome", position: 3, color: "from-gray-500 to-gray-700" },
    { id: "feet", name: "Feet of Iron & Clay", metal: "🧱 Iron & Clay", empire: "Divided Nations", position: 4, color: "from-gray-400 to-orange-400" },
  ],
  fr: [
    { id: "head", name: "Tête d'Or", metal: "🥇 Or", empire: "Babylone", position: 0, color: "from-yellow-400 to-yellow-600" },
    { id: "chest", name: "Poitrine et Bras d'Argent", metal: "🥈 Argent", empire: "Médo-Perse", position: 1, color: "from-gray-300 to-gray-400" },
    { id: "belly", name: "Ventre et Cuisses de Bronze", metal: "🥉 Bronze", empire: "Grèce", position: 2, color: "from-amber-600 to-amber-700" },
    { id: "legs", name: "Jambes de Fer", metal: "⚙️ Fer", empire: "Rome", position: 3, color: "from-gray-500 to-gray-700" },
    { id: "feet", name: "Pieds de Fer et d'Argile", metal: "🧱 Fer et Argile", empire: "Nations Divisées", position: 4, color: "from-gray-400 to-orange-400" },
  ],
  es: [
    { id: "head", name: "Cabeza de Oro", metal: "🥇 Oro", empire: "Babilonia", position: 0, color: "from-yellow-400 to-yellow-600" },
    { id: "chest", name: "Pecho y Brazos de Plata", metal: "🥈 Plata", empire: "Medo-Persia", position: 1, color: "from-gray-300 to-gray-400" },
    { id: "belly", name: "Vientre y Muslos de Bronce", metal: "🥉 Bronce", empire: "Grecia", position: 2, color: "from-amber-600 to-amber-700" },
    { id: "legs", name: "Piernas de Hierro", metal: "⚙️ Hierro", empire: "Roma", position: 3, color: "from-gray-500 to-gray-700" },
    { id: "feet", name: "Pies de Hierro y Barro", metal: "🧱 Hierro y Barro", empire: "Naciones Divididas", position: 4, color: "from-gray-400 to-orange-400" },
  ],
};

const timelineEventsData = {
  en: [
    { id: "babylon", event: "Babylon Rules", year: "605 BC", emoji: "🦁", order: 0, description: "Daniel is taken captive" },
    { id: "medopersia", event: "Medo-Persia Conquers", year: "539 BC", emoji: "🐻", order: 1, description: "Cyrus defeats Babylon" },
    { id: "greece", event: "Greece Takes Over", year: "331 BC", emoji: "🐆", order: 2, description: "Alexander the Great conquers" },
    { id: "rome", event: "Rome Rules the World", year: "168 BC", emoji: "🦅", order: 3, description: "Rome becomes the superpower" },
    { id: "gods-kingdom", event: "God Sets Up His Kingdom", year: "Future", emoji: "👑", order: 4, description: "God's eternal kingdom replaces all earthly kingdoms" },
  ],
  fr: [
    { id: "babylon", event: "Babylone Règne", year: "605 av. J.-C.", emoji: "🦁", order: 0, description: "Daniel est emmené captif" },
    { id: "medopersia", event: "La Médo-Perse Conquiert", year: "539 av. J.-C.", emoji: "🐻", order: 1, description: "Cyrus défait Babylone" },
    { id: "greece", event: "La Grèce Prend le Pouvoir", year: "331 av. J.-C.", emoji: "🐆", order: 2, description: "Alexandre le Grand conquiert" },
    { id: "rome", event: "Rome Domine le Monde", year: "168 av. J.-C.", emoji: "🦅", order: 3, description: "Rome devient la superpuissance" },
    { id: "gods-kingdom", event: "Dieu Établit Son Royaume", year: "Futur", emoji: "👑", order: 4, description: "Le royaume éternel de Dieu remplace tous les royaumes terrestres" },
  ],
  es: [
    { id: "babylon", event: "Babilonia Reina", year: "605 a.C.", emoji: "🦁", order: 0, description: "Daniel es llevado cautivo" },
    { id: "medopersia", event: "Medo-Persia Conquista", year: "539 a.C.", emoji: "🐻", order: 1, description: "Ciro derrota a Babilonia" },
    { id: "greece", event: "Grecia Toma el Poder", year: "331 a.C.", emoji: "🐆", order: 2, description: "Alejandro Magno conquista" },
    { id: "rome", event: "Roma Domina el Mundo", year: "168 a.C.", emoji: "🦅", order: 3, description: "Roma se convierte en superpotencia" },
    { id: "gods-kingdom", event: "Dios Establece Su Reino", year: "Futuro", emoji: "👑", order: 4, description: "El reino eterno de Dios reemplaza todos los reinos terrenales" },
  ],
};

const hiddenSymbolsData = {
  en: [
    { id: "lion", name: "Lion", emoji: "🦁", hint: "King of beasts - represents Babylon", x: 15, y: 20 },
    { id: "bear", name: "Bear", emoji: "🐻", hint: "Raised on one side - represents Medo-Persia", x: 70, y: 35 },
    { id: "leopard", name: "Leopard", emoji: "🐆", hint: "Four wings - represents Greece", x: 40, y: 60 },
    { id: "horn", name: "Little Horn", emoji: "📯", hint: "Speaks great things - a persecuting power", x: 85, y: 15 },
    { id: "lamb", name: "Lamb", emoji: "🐑", hint: "The Lamb of God who takes away sin", x: 25, y: 75 },
    { id: "scroll", name: "Sealed Scroll", emoji: "📜", hint: "Seven seals opened by Jesus", x: 60, y: 25 },
    { id: "trumpet", name: "Trumpet", emoji: "🎺", hint: "Seven trumpets announce judgments", x: 50, y: 80 },
    { id: "star", name: "Morning Star", emoji: "⭐", hint: "Jesus is the bright morning star", x: 80, y: 65 },
  ],
  fr: [
    { id: "lion", name: "Lion", emoji: "🦁", hint: "Roi des bêtes - représente Babylone", x: 15, y: 20 },
    { id: "bear", name: "Ours", emoji: "🐻", hint: "Levé d'un côté - représente la Médo-Perse", x: 70, y: 35 },
    { id: "leopard", name: "Léopard", emoji: "🐆", hint: "Quatre ailes - représente la Grèce", x: 40, y: 60 },
    { id: "horn", name: "Petite Corne", emoji: "📯", hint: "Parle avec arrogance - un pouvoir persécuteur", x: 85, y: 15 },
    { id: "lamb", name: "Agneau", emoji: "🐑", hint: "L'Agneau de Dieu qui ôte le péché", x: 25, y: 75 },
    { id: "scroll", name: "Rouleau Scellé", emoji: "📜", hint: "Sept sceaux ouverts par Jésus", x: 60, y: 25 },
    { id: "trumpet", name: "Trompette", emoji: "🎺", hint: "Sept trompettes annoncent les jugements", x: 50, y: 80 },
    { id: "star", name: "Étoile du Matin", emoji: "⭐", hint: "Jésus est la brillante étoile du matin", x: 80, y: 65 },
  ],
  es: [
    { id: "lion", name: "León", emoji: "🦁", hint: "Rey de las bestias - representa Babilonia", x: 15, y: 20 },
    { id: "bear", name: "Oso", emoji: "🐻", hint: "Levantado de un lado - representa Medo-Persia", x: 70, y: 35 },
    { id: "leopard", name: "Leopardo", emoji: "🐆", hint: "Cuatro alas - representa Grecia", x: 40, y: 60 },
    { id: "horn", name: "Cuerno Pequeño", emoji: "📯", hint: "Habla con arrogancia - un poder perseguidor", x: 85, y: 15 },
    { id: "lamb", name: "Cordero", emoji: "🐑", hint: "El Cordero de Dios que quita el pecado", x: 25, y: 75 },
    { id: "scroll", name: "Rollo Sellado", emoji: "📜", hint: "Siete sellos abiertos por Jesús", x: 60, y: 25 },
    { id: "trumpet", name: "Trompeta", emoji: "🎺", hint: "Siete trompetas anuncian juicios", x: 50, y: 80 },
    { id: "star", name: "Estrella de la Mañana", emoji: "⭐", hint: "Jesús es la brillante estrella de la mañana", x: 80, y: 65 },
  ],
};

const verseScrambleDataAll = {
  en: [
    { verse: "For God so loved the world", reference: "John 3:16", words: ["For", "God", "so", "loved", "the", "world"] },
    { verse: "The Lord is my shepherd", reference: "Psalm 23:1", words: ["The", "Lord", "is", "my", "shepherd"] },
    { verse: "I can do all things through Christ", reference: "Philippians 4:13", words: ["I", "can", "do", "all", "things", "through", "Christ"] },
  ],
  fr: [
    { verse: "Car Dieu a tant aimé le monde", reference: "Jean 3:16", words: ["Car", "Dieu", "a", "tant", "aimé", "le", "monde"] },
    { verse: "L'Éternel est mon berger", reference: "Psaume 23:1", words: ["L'Éternel", "est", "mon", "berger"] },
    { verse: "Je puis tout par celui qui me fortifie", reference: "Philippiens 4:13", words: ["Je", "puis", "tout", "par", "celui", "qui", "me", "fortifie"] },
  ],
  es: [
    { verse: "Porque de tal manera amó Dios al mundo", reference: "Juan 3:16", words: ["Porque", "de", "tal", "manera", "amó", "Dios", "al", "mundo"] },
    { verse: "Jehová es mi pastor", reference: "Salmo 23:1", words: ["Jehová", "es", "mi", "pastor"] },
    { verse: "Todo lo puedo en Cristo que me fortalece", reference: "Filipenses 4:13", words: ["Todo", "lo", "puedo", "en", "Cristo", "que", "me", "fortalece"] },
  ],
};

const prophetQuizDataAll = {
  en: [
    { question: "Who was thrown in the lion's den?", answer: "Daniel", options: ["Moses", "Daniel", "David", "Elijah"] },
    { question: "Who interpreted Pharaoh's dreams?", answer: "Joseph", options: ["Joseph", "Jacob", "Abraham", "Moses"] },
    { question: "Who built the ark?", answer: "Noah", options: ["Adam", "Noah", "Abraham", "Moses"] },
    { question: "Who parted the Red Sea?", answer: "Moses", options: ["Joshua", "Moses", "Elijah", "David"] },
    { question: "Who killed Goliath?", answer: "David", options: ["Saul", "David", "Solomon", "Jonathan"] },
  ],
  fr: [
    { question: "Qui a été jeté dans la fosse aux lions ?", answer: "Daniel", options: ["Moïse", "Daniel", "David", "Élie"] },
    { question: "Qui a interprété les rêves de Pharaon ?", answer: "Joseph", options: ["Joseph", "Jacob", "Abraham", "Moïse"] },
    { question: "Qui a construit l'arche ?", answer: "Noé", options: ["Adam", "Noé", "Abraham", "Moïse"] },
    { question: "Qui a ouvert la mer Rouge ?", answer: "Moïse", options: ["Josué", "Moïse", "Élie", "David"] },
    { question: "Qui a tué Goliath ?", answer: "David", options: ["Saül", "David", "Salomon", "Jonathan"] },
  ],
  es: [
    { question: "¿Quién fue arrojado al foso de los leones?", answer: "Daniel", options: ["Moisés", "Daniel", "David", "Elías"] },
    { question: "¿Quién interpretó los sueños del Faraón?", answer: "José", options: ["José", "Jacob", "Abraham", "Moisés"] },
    { question: "¿Quién construyó el arca?", answer: "Noé", options: ["Adán", "Noé", "Abraham", "Moisés"] },
    { question: "¿Quién abrió el Mar Rojo?", answer: "Moisés", options: ["Josué", "Moisés", "Elías", "David"] },
    { question: "¿Quién mató a Goliat?", answer: "David", options: ["Saúl", "David", "Salomón", "Jonatán"] },
  ],
};

const bibleBooksDataAll = {
  en: [
    { name: "Genesis", order: 1 },
    { name: "Exodus", order: 2 },
    { name: "Leviticus", order: 3 },
    { name: "Numbers", order: 4 },
    { name: "Deuteronomy", order: 5 },
  ],
  fr: [
    { name: "Genèse", order: 1 },
    { name: "Exode", order: 2 },
    { name: "Lévitique", order: 3 },
    { name: "Nombres", order: 4 },
    { name: "Deutéronome", order: 5 },
  ],
  es: [
    { name: "Génesis", order: 1 },
    { name: "Éxodo", order: 2 },
    { name: "Levítico", order: 3 },
    { name: "Números", order: 4 },
    { name: "Deuteronomio", order: 5 },
  ],
};

const memoryVerseDataAll = {
  en: { verse: "Trust in the LORD with all your heart", reference: "Proverbs 3:5", words: ["Trust", "in", "the", "LORD", "with", "all", "your", "heart"] },
  fr: { verse: "Confie-toi en l'Éternel de tout ton cœur", reference: "Proverbes 3:5", words: ["Confie-toi", "en", "l'Éternel", "de", "tout", "ton", "cœur"] },
  es: { verse: "Confía en Jehová de todo tu corazón", reference: "Proverbios 3:5", words: ["Confía", "en", "Jehová", "de", "todo", "tu", "corazón"] },
  ht: { verse: "Mete konfyans ou nan Senyè a ak tout kè ou", reference: "Pwovèb 3:5", words: ["Mete", "konfyans", "ou", "nan", "Senyè", "a", "ak", "tout", "kè", "ou"] },
};

const sanctuaryPartsData = {
  en: [
    { id: "altar", name: "Altar of Burnt Offering", location: "Courtyard", emoji: "🔥" },
    { id: "laver", name: "Laver", location: "Courtyard", emoji: "💧" },
    { id: "table", name: "Table of Showbread", location: "Holy Place", emoji: "🍞" },
    { id: "lampstand", name: "Golden Lampstand", location: "Holy Place", emoji: "🕯️" },
    { id: "incense", name: "Altar of Incense", location: "Holy Place", emoji: "💨" },
    { id: "ark", name: "Ark of the Covenant", location: "Most Holy Place", emoji: "📦" },
  ],
  fr: [
    { id: "altar", name: "Autel des Holocaustes", location: "Parvis", emoji: "🔥" },
    { id: "laver", name: "Cuve", location: "Parvis", emoji: "💧" },
    { id: "table", name: "Table des Pains", location: "Lieu Saint", emoji: "🍞" },
    { id: "lampstand", name: "Chandelier d'Or", location: "Lieu Saint", emoji: "🕯️" },
    { id: "incense", name: "Autel des Parfums", location: "Lieu Saint", emoji: "💨" },
    { id: "ark", name: "Arche de l'Alliance", location: "Lieu Très Saint", emoji: "📦" },
  ],
  es: [
    { id: "altar", name: "Altar de Holocaustos", location: "Atrio", emoji: "🔥" },
    { id: "laver", name: "Fuente", location: "Atrio", emoji: "💧" },
    { id: "table", name: "Mesa de los Panes", location: "Lugar Santo", emoji: "🍞" },
    { id: "lampstand", name: "Candelabro de Oro", location: "Lugar Santo", emoji: "🕯️" },
    { id: "incense", name: "Altar del Incienso", location: "Lugar Santo", emoji: "💨" },
    { id: "ark", name: "Arca del Pacto", location: "Lugar Santísimo", emoji: "📦" },
  ],
};

const sanctuaryLocationsData = {
  en: ["Courtyard", "Holy Place", "Most Holy Place"],
  fr: ["Parvis", "Lieu Saint", "Lieu Très Saint"],
  es: ["Atrio", "Lugar Santo", "Lugar Santísimo"],
  ht: ["Lakou", "Kote Sen", "Kote Trè Sen"],
};

const fruitOfSpiritData = {
  en: ["Love", "Joy", "Peace", "Patience", "Kindness", "Goodness", "Faithfulness", "Gentleness", "Self-control"],
  fr: ["Amour", "Joie", "Paix", "Patience", "Bonté", "Bienveillance", "Fidélité", "Douceur", "Maîtrise de soi"],
  es: ["Amor", "Gozo", "Paz", "Paciencia", "Benignidad", "Bondad", "Fe", "Mansedumbre", "Templanza"],
  ht: ["Lanmou", "Lajwa", "Lapè", "Pasyans", "Bonte", "Byenveyans", "Fidelite", "Dousè", "Metriz tèt"],
};

const commandmentsData = {
  en: ["No other gods", "No idols", "Don't misuse God's name", "Keep Sabbath holy", "Honor parents", "Don't murder", "Don't commit adultery", "Don't steal", "Don't lie", "Don't covet"],
  fr: ["Pas d'autres dieux", "Pas d'idoles", "Ne pas prendre le nom de Dieu en vain", "Sanctifier le sabbat", "Honorer ses parents", "Tu ne tueras point", "Tu ne commettras pas d'adultère", "Tu ne voleras point", "Tu ne mentiras point", "Tu ne convoiteras point"],
  es: ["No otros dioses", "No ídolos", "No usar el nombre de Dios en vano", "Santificar el sábado", "Honrar a los padres", "No matarás", "No cometerás adulterio", "No robarás", "No mentirás", "No codiciarás"],
  ht: ["Pa gen lòt bondye", "Pa gen zidòl", "Pa sèvi non Bondye pou granmesi", "Kenbe Saba a sen", "Onore paran ou", "Pa touye", "Pa fè adiltè", "Pa vòlè", "Pa bay manti", "Pa anvye"],
};

const creationDaysData = {
  en: [
    { day: 1, created: "Light", emoji: "💡" },
    { day: 2, created: "Sky & Waters", emoji: "🌊" },
    { day: 3, created: "Land & Plants", emoji: "🌱" },
    { day: 4, created: "Sun, Moon, Stars", emoji: "☀️" },
    { day: 5, created: "Fish & Birds", emoji: "🐟" },
    { day: 6, created: "Animals & Humans", emoji: "👫" },
    { day: 7, created: "Sabbath Rest", emoji: "😴" },
  ],
  fr: [
    { day: 1, created: "Lumière", emoji: "💡" },
    { day: 2, created: "Ciel et Eaux", emoji: "🌊" },
    { day: 3, created: "Terre et Plantes", emoji: "🌱" },
    { day: 4, created: "Soleil, Lune, Étoiles", emoji: "☀️" },
    { day: 5, created: "Poissons et Oiseaux", emoji: "🐟" },
    { day: 6, created: "Animaux et Humains", emoji: "👫" },
    { day: 7, created: "Repos du Sabbat", emoji: "😴" },
  ],
  es: [
    { day: 1, created: "Luz", emoji: "💡" },
    { day: 2, created: "Cielo y Aguas", emoji: "🌊" },
    { day: 3, created: "Tierra y Plantas", emoji: "🌱" },
    { day: 4, created: "Sol, Luna, Estrellas", emoji: "☀️" },
    { day: 5, created: "Peces y Aves", emoji: "🐟" },
    { day: 6, created: "Animales y Humanos", emoji: "👫" },
    { day: 7, created: "Reposo Sabático", emoji: "😴" },
  ],
};

const danielsVisionsData = {
  en: [
    { symbol: "🐏 Ram with Two Horns", meaning: "Medo-Persia", chapter: "8:20", description: "The two horns represent the kings of Media and Persia" },
    { symbol: "🐐 Goat with Great Horn", meaning: "Greece (Alexander)", chapter: "8:21", description: "The goat is Greece, the great horn is its first king" },
    { symbol: "🔱 Four Horns", meaning: "Four Kingdoms", chapter: "8:22", description: "The kingdom divided into four after Alexander" },
    { symbol: "📍 Little Horn", meaning: "Antichrist Power", chapter: "8:9-12", description: "A power that magnifies itself against God" },
    { symbol: "👼 Gabriel", meaning: "Messenger Angel", chapter: "8:16, 10:21", description: "The angel who explains the visions to Daniel" },
    { symbol: "🌟 Man in Linen", meaning: "Christ/Divine Being", chapter: "10:5-6", description: "A glorious being by the Tigris river" },
    { symbol: "👑 Prince of Persia", meaning: "Spiritual Battle", chapter: "10:13", description: "A fallen angel opposing God's messenger" },
    { symbol: "📅 2,300 Days", meaning: "Prophetic Time", chapter: "8:14", description: "Then the sanctuary shall be cleansed" },
  ],
  fr: [
    { symbol: "🐏 Bélier à Deux Cornes", meaning: "Médo-Perse", chapter: "8:20", description: "Les deux cornes représentent les rois de Médie et de Perse" },
    { symbol: "🐐 Bouc à Grande Corne", meaning: "Grèce (Alexandre)", chapter: "8:21", description: "Le bouc est la Grèce, la grande corne est son premier roi" },
    { symbol: "🔱 Quatre Cornes", meaning: "Quatre Royaumes", chapter: "8:22", description: "Le royaume divisé en quatre après Alexandre" },
    { symbol: "📍 Petite Corne", meaning: "Pouvoir Antichristique", chapter: "8:9-12", description: "Un pouvoir qui s'élève contre Dieu" },
    { symbol: "👼 Gabriel", meaning: "Ange Messager", chapter: "8:16, 10:21", description: "L'ange qui explique les visions à Daniel" },
    { symbol: "🌟 Homme en Lin", meaning: "Christ/Être Divin", chapter: "10:5-6", description: "Un être glorieux au bord du Tigre" },
    { symbol: "👑 Prince de Perse", meaning: "Bataille Spirituelle", chapter: "10:13", description: "Un ange déchu s'opposant au messager de Dieu" },
    { symbol: "📅 2 300 Jours", meaning: "Temps Prophétique", chapter: "8:14", description: "Alors le sanctuaire sera purifié" },
  ],
  es: [
    { symbol: "🐏 Carnero con Dos Cuernos", meaning: "Medo-Persia", chapter: "8:20", description: "Los dos cuernos representan los reyes de Media y Persia" },
    { symbol: "🐐 Macho Cabrío con Gran Cuerno", meaning: "Grecia (Alejandro)", chapter: "8:21", description: "El macho cabrío es Grecia, el gran cuerno es su primer rey" },
    { symbol: "🔱 Cuatro Cuernos", meaning: "Cuatro Reinos", chapter: "8:22", description: "El reino se dividió en cuatro después de Alejandro" },
    { symbol: "📍 Cuerno Pequeño", meaning: "Poder Anticristo", chapter: "8:9-12", description: "Un poder que se engrandece contra Dios" },
    { symbol: "👼 Gabriel", meaning: "Ángel Mensajero", chapter: "8:16, 10:21", description: "El ángel que explica las visiones a Daniel" },
    { symbol: "🌟 Hombre de Lino", meaning: "Cristo/Ser Divino", chapter: "10:5-6", description: "Un ser glorioso junto al río Tigris" },
    { symbol: "👑 Príncipe de Persia", meaning: "Batalla Espiritual", chapter: "10:13", description: "Un ángel caído oponiéndose al mensajero de Dios" },
    { symbol: "📅 2.300 Días", meaning: "Tiempo Profético", chapter: "8:14", description: "Entonces el santuario será purificado" },
  ],
};

const daniel7BeastsData = {
  en: [
    { beast: "🦁 Lion with Eagle Wings", meaning: "Babylon", verse: "7:4", description: "Wings plucked, made to stand like a man" },
    { beast: "🐻 Bear Raised on One Side", meaning: "Medo-Persia", verse: "7:5", description: "Three ribs in its mouth" },
    { beast: "🐆 Leopard with Four Wings", meaning: "Greece", verse: "7:6", description: "Four heads representing four kingdoms" },
    { beast: "🦷 Dreadful Beast with Iron Teeth", meaning: "Rome", verse: "7:7", description: "Ten horns representing divided kingdoms" },
    { beast: "📍 Little Horn", meaning: "Antichrist Power", verse: "7:8", description: "Eyes like a man, speaking great things" },
    { beast: "👴 Ancient of Days", meaning: "God the Father", verse: "7:9", description: "Garment white as snow, throne of fire" },
    { beast: "☁️ Son of Man on Clouds", meaning: "Jesus Christ", verse: "7:13", description: "Given everlasting dominion" },
  ],
  fr: [
    { beast: "🦁 Lion aux Ailes d'Aigle", meaning: "Babylone", verse: "7:4", description: "Ailes arrachées, fait se tenir comme un homme" },
    { beast: "🐻 Ours Levé d'un Côté", meaning: "Médo-Perse", verse: "7:5", description: "Trois côtes dans sa gueule" },
    { beast: "🐆 Léopard à Quatre Ailes", meaning: "Grèce", verse: "7:6", description: "Quatre têtes représentant quatre royaumes" },
    { beast: "🦷 Bête Terrible aux Dents de Fer", meaning: "Rome", verse: "7:7", description: "Dix cornes représentant des royaumes divisés" },
    { beast: "📍 Petite Corne", meaning: "Pouvoir Antichristique", verse: "7:8", description: "Des yeux comme ceux d'un homme, parlant avec arrogance" },
    { beast: "👴 Ancien des Jours", meaning: "Dieu le Père", verse: "7:9", description: "Vêtement blanc comme neige, trône de feu" },
    { beast: "☁️ Fils de l'Homme sur les Nuées", meaning: "Jésus-Christ", verse: "7:13", description: "Reçoit une domination éternelle" },
  ],
  es: [
    { beast: "🦁 León con Alas de Águila", meaning: "Babilonia", verse: "7:4", description: "Alas arrancadas, hecho pararse como hombre" },
    { beast: "🐻 Oso Levantado de un Lado", meaning: "Medo-Persia", verse: "7:5", description: "Tres costillas en su boca" },
    { beast: "🐆 Leopardo con Cuatro Alas", meaning: "Grecia", verse: "7:6", description: "Cuatro cabezas representando cuatro reinos" },
    { beast: "🦷 Bestia Espantosa con Dientes de Hierro", meaning: "Roma", verse: "7:7", description: "Diez cuernos representando reinos divididos" },
    { beast: "📍 Cuerno Pequeño", meaning: "Poder Anticristo", verse: "7:8", description: "Ojos como de hombre, hablando con arrogancia" },
    { beast: "👴 Anciano de Días", meaning: "Dios el Padre", verse: "7:9", description: "Vestido blanco como nieve, trono de fuego" },
    { beast: "☁️ Hijo del Hombre en las Nubes", meaning: "Jesucristo", verse: "7:13", description: "Recibe dominio eterno" },
  ],
};

const daniel11EventsData = {
  en: [
    { id: "greece", name: "Mighty King of Greece", emoji: "🏛️", description: "Alexander the Great", order: 0 },
    { id: "divided", name: "Kingdom Divided Four Ways", emoji: "🗺️", description: "Four Generals", order: 1 },
    { id: "south", name: "King of the South", emoji: "👑", description: "Egypt (Ptolemy)", order: 2 },
    { id: "north", name: "King of the North", emoji: "⚔️", description: "Syria (Seleucids)", order: 3 },
    { id: "glorious", name: "Glorious Land Conquered", emoji: "🏰", description: "Rome Takes Judea", order: 4 },
    { id: "prince", name: "Prince of the Covenant", emoji: "✝️", description: "Jesus Christ", order: 5 },
    { id: "end", name: "Time of the End", emoji: "📅", description: "Final Events", order: 6 },
  ],
  fr: [
    { id: "greece", name: "Roi Puissant de Grèce", emoji: "🏛️", description: "Alexandre le Grand", order: 0 },
    { id: "divided", name: "Royaume Divisé en Quatre", emoji: "🗺️", description: "Quatre Généraux", order: 1 },
    { id: "south", name: "Roi du Sud", emoji: "👑", description: "Égypte (Ptolémée)", order: 2 },
    { id: "north", name: "Roi du Nord", emoji: "⚔️", description: "Syrie (Séleucides)", order: 3 },
    { id: "glorious", name: "Pays Glorieux Conquis", emoji: "🏰", description: "Rome Prend la Judée", order: 4 },
    { id: "prince", name: "Prince de l'Alliance", emoji: "✝️", description: "Jésus-Christ", order: 5 },
    { id: "end", name: "Temps de la Fin", emoji: "📅", description: "Événements Finaux", order: 6 },
  ],
  es: [
    { id: "greece", name: "Rey Poderoso de Grecia", emoji: "🏛️", description: "Alejandro Magno", order: 0 },
    { id: "divided", name: "Reino Dividido en Cuatro", emoji: "🗺️", description: "Cuatro Generales", order: 1 },
    { id: "south", name: "Rey del Sur", emoji: "👑", description: "Egipto (Ptolomeo)", order: 2 },
    { id: "north", name: "Rey del Norte", emoji: "⚔️", description: "Siria (Seléucidas)", order: 3 },
    { id: "glorious", name: "Tierra Gloriosa Conquistada", emoji: "🏰", description: "Roma Toma Judea", order: 4 },
    { id: "prince", name: "Príncipe del Pacto", emoji: "✝️", description: "Jesucristo", order: 5 },
    { id: "end", name: "Tiempo del Fin", emoji: "📅", description: "Eventos Finales", order: 6 },
  ],
};

const revelation10ElementsData = {
  en: [
    { id: "angel", name: "Mighty Angel", description: "Robed in a cloud with a rainbow above his head", emoji: "👼", order: 0 },
    { id: "rainbow", name: "Rainbow", description: "Above the angel's head - God's covenant promise", emoji: "🌈", order: 1 },
    { id: "scroll", name: "Little Book (Open)", description: "The scroll open in the angel's hand", emoji: "📜", order: 2 },
    { id: "sea-land", name: "Stands on Sea & Land", description: "Right foot on sea, left on land - worldwide message", emoji: "🌊", order: 3 },
    { id: "thunders", name: "Seven Thunders", description: "Spoke but John was told not to write them", emoji: "⚡", order: 4 },
    { id: "sweet-bitter", name: "Sweet then Bitter", description: "The scroll tasted sweet but made stomach bitter", emoji: "🍯", order: 5 },
  ],
  fr: [
    { id: "angel", name: "Ange Puissant", description: "Vêtu d'une nuée avec un arc-en-ciel au-dessus de sa tête", emoji: "👼", order: 0 },
    { id: "rainbow", name: "Arc-en-ciel", description: "Au-dessus de la tête de l'ange - promesse d'alliance de Dieu", emoji: "🌈", order: 1 },
    { id: "scroll", name: "Petit Livre (Ouvert)", description: "Le rouleau ouvert dans la main de l'ange", emoji: "📜", order: 2 },
    { id: "sea-land", name: "Debout sur Mer et Terre", description: "Pied droit sur la mer, gauche sur la terre - message mondial", emoji: "🌊", order: 3 },
    { id: "thunders", name: "Sept Tonnerres", description: "Ont parlé mais Jean ne devait pas les écrire", emoji: "⚡", order: 4 },
    { id: "sweet-bitter", name: "Doux puis Amer", description: "Le rouleau était doux mais a rendu l'estomac amer", emoji: "🍯", order: 5 },
  ],
  es: [
    { id: "angel", name: "Ángel Poderoso", description: "Vestido de una nube con un arco iris sobre su cabeza", emoji: "👼", order: 0 },
    { id: "rainbow", name: "Arco Iris", description: "Sobre la cabeza del ángel - promesa del pacto de Dios", emoji: "🌈", order: 1 },
    { id: "scroll", name: "Librito (Abierto)", description: "El rollo abierto en la mano del ángel", emoji: "📜", order: 2 },
    { id: "sea-land", name: "De Pie sobre Mar y Tierra", description: "Pie derecho sobre el mar, izquierdo sobre la tierra - mensaje mundial", emoji: "🌊", order: 3 },
    { id: "thunders", name: "Siete Truenos", description: "Hablaron pero a Juan se le dijo que no los escribiera", emoji: "⚡", order: 4 },
    { id: "sweet-bitter", name: "Dulce luego Amargo", description: "El rollo sabía dulce pero amargó el estómago", emoji: "🍯", order: 5 },
  ],
};

const judgmentElementsData = {
  en: [
    { id: "2300", name: "2300 Day Prophecy", emoji: "📅", description: "Daniel 8:14 - 'Unto 2300 days, then shall the sanctuary be cleansed'", order: 0 },
    { id: "457bc", name: "457 BC - Decree", emoji: "📜", description: "Artaxerxes' decree to restore Jerusalem (starting point)", order: 1 },
    { id: "27ad", name: "27 AD - Jesus Baptized", emoji: "💧", description: "Jesus anointed as Messiah, 69 weeks fulfilled", order: 2 },
    { id: "31ad", name: "31 AD - Cross", emoji: "✝️", description: "Jesus crucified, 'midst of the week' (Daniel 9:27)", order: 3 },
    { id: "34ad", name: "34 AD - Gospel Spread", emoji: "🌍", description: "Stoning of Stephen, gospel goes to Gentiles, 70 weeks end", order: 4 },
    { id: "1844", name: "1844 - Judgment Begins", emoji: "⚖️", description: "2300 years end, Jesus enters Most Holy Place in heaven", order: 5 },
    { id: "blotting", name: "Names Reviewed", emoji: "📖", description: "Jesus reviews the books, sins blotted out (Acts 3:19)", order: 6 },
    { id: "return", name: "Jesus Returns", emoji: "👑", description: "After judgment, Jesus comes to take His people home!", order: 7 },
  ],
  fr: [
    { id: "2300", name: "Prophétie des 2300 Jours", emoji: "📅", description: "Daniel 8:14 - 'Jusqu'à 2300 soirs et matins, puis le sanctuaire sera purifié'", order: 0 },
    { id: "457bc", name: "457 av. J.-C. - Décret", emoji: "📜", description: "Décret d'Artaxerxès pour restaurer Jérusalem (point de départ)", order: 1 },
    { id: "27ad", name: "27 ap. J.-C. - Baptême de Jésus", emoji: "💧", description: "Jésus oint comme Messie, 69 semaines accomplies", order: 2 },
    { id: "31ad", name: "31 ap. J.-C. - La Croix", emoji: "✝️", description: "Jésus crucifié, 'milieu de la semaine' (Daniel 9:27)", order: 3 },
    { id: "34ad", name: "34 ap. J.-C. - L'Évangile se Répand", emoji: "🌍", description: "Lapidation d'Étienne, l'évangile va aux païens, fin des 70 semaines", order: 4 },
    { id: "1844", name: "1844 - Le Jugement Commence", emoji: "⚖️", description: "Fin des 2300 ans, Jésus entre dans le Lieu Très Saint au ciel", order: 5 },
    { id: "blotting", name: "Noms Examinés", emoji: "📖", description: "Jésus examine les livres, les péchés effacés (Actes 3:19)", order: 6 },
    { id: "return", name: "Jésus Revient", emoji: "👑", description: "Après le jugement, Jésus vient chercher Son peuple !", order: 7 },
  ],
  es: [
    { id: "2300", name: "Profecía de los 2300 Días", emoji: "📅", description: "Daniel 8:14 - 'Hasta 2300 tardes y mañanas, luego el santuario será purificado'", order: 0 },
    { id: "457bc", name: "457 a.C. - Decreto", emoji: "📜", description: "Decreto de Artajerjes para restaurar Jerusalén (punto de partida)", order: 1 },
    { id: "27ad", name: "27 d.C. - Bautismo de Jesús", emoji: "💧", description: "Jesús ungido como Mesías, 69 semanas cumplidas", order: 2 },
    { id: "31ad", name: "31 d.C. - La Cruz", emoji: "✝️", description: "Jesús crucificado, 'a la mitad de la semana' (Daniel 9:27)", order: 3 },
    { id: "34ad", name: "34 d.C. - El Evangelio se Extiende", emoji: "🌍", description: "Apedreamiento de Esteban, el evangelio va a los gentiles, fin de las 70 semanas", order: 4 },
    { id: "1844", name: "1844 - Comienza el Juicio", emoji: "⚖️", description: "Terminan los 2300 años, Jesús entra al Lugar Santísimo en el cielo", order: 5 },
    { id: "blotting", name: "Nombres Revisados", emoji: "📖", description: "Jesús revisa los libros, pecados borrados (Hechos 3:19)", order: 6 },
    { id: "return", name: "Jesús Regresa", emoji: "👑", description: "¡Después del juicio, Jesús viene a llevar a Su pueblo a casa!", order: 7 },
  ],
};

const timeOfEndElementsData = {
  en: [
    { id: "michael", name: "Michael Stands Up", emoji: "⚔️", description: "Michael (Christ) stands to deliver God's people (Dan 12:1)", order: 0 },
    { id: "trouble", name: "Time of Trouble", emoji: "🌪️", description: "A time of trouble such as never was (Dan 12:1)", order: 1 },
    { id: "delivered", name: "God's People Delivered", emoji: "🛡️", description: "Everyone written in the book shall be delivered (Dan 12:1)", order: 2 },
    { id: "resurrection", name: "Special Resurrection", emoji: "⬆️", description: "Many who sleep in the dust shall awake (Dan 12:2)", order: 3 },
    { id: "shine", name: "Wise Shall Shine", emoji: "✨", description: "The wise shall shine like the stars forever (Dan 12:3)", order: 4 },
    { id: "sealed", name: "Book Sealed", emoji: "📕", description: "Seal the book until the time of the end (Dan 12:4)", order: 5 },
    { id: "knowledge", name: "Knowledge Increased", emoji: "📚", description: "Many shall run to and fro, knowledge increased (Dan 12:4)", order: 6 },
    { id: "blessed", name: "Blessed Who Waits", emoji: "🙏", description: "Blessed is he who waits and comes to 1335 days (Dan 12:12)", order: 7 },
  ],
  fr: [
    { id: "michael", name: "Michaël Se Lève", emoji: "⚔️", description: "Michaël (Christ) se lève pour délivrer le peuple de Dieu (Dan 12:1)", order: 0 },
    { id: "trouble", name: "Temps de Détresse", emoji: "🌪️", description: "Un temps de détresse tel qu'il n'y en a jamais eu (Dan 12:1)", order: 1 },
    { id: "delivered", name: "Le Peuple de Dieu Délivré", emoji: "🛡️", description: "Quiconque est inscrit dans le livre sera délivré (Dan 12:1)", order: 2 },
    { id: "resurrection", name: "Résurrection Spéciale", emoji: "⬆️", description: "Plusieurs de ceux qui dorment dans la poussière se réveilleront (Dan 12:2)", order: 3 },
    { id: "shine", name: "Les Sages Brilleront", emoji: "✨", description: "Les sages brilleront comme les étoiles pour toujours (Dan 12:3)", order: 4 },
    { id: "sealed", name: "Livre Scellé", emoji: "📕", description: "Scelle le livre jusqu'au temps de la fin (Dan 12:4)", order: 5 },
    { id: "knowledge", name: "La Connaissance Augmente", emoji: "📚", description: "Plusieurs courront çà et là, la connaissance augmentera (Dan 12:4)", order: 6 },
    { id: "blessed", name: "Bienheureux Celui Qui Attend", emoji: "🙏", description: "Heureux celui qui attend et parvient à 1335 jours (Dan 12:12)", order: 7 },
  ],
  es: [
    { id: "michael", name: "Miguel Se Levanta", emoji: "⚔️", description: "Miguel (Cristo) se levanta para liberar al pueblo de Dios (Dan 12:1)", order: 0 },
    { id: "trouble", name: "Tiempo de Angustia", emoji: "🌪️", description: "Un tiempo de angustia como nunca hubo (Dan 12:1)", order: 1 },
    { id: "delivered", name: "El Pueblo de Dios Liberado", emoji: "🛡️", description: "Todo el que esté escrito en el libro será liberado (Dan 12:1)", order: 2 },
    { id: "resurrection", name: "Resurrección Especial", emoji: "⬆️", description: "Muchos de los que duermen en el polvo despertarán (Dan 12:2)", order: 3 },
    { id: "shine", name: "Los Sabios Brillarán", emoji: "✨", description: "Los sabios brillarán como las estrellas para siempre (Dan 12:3)", order: 4 },
    { id: "sealed", name: "Libro Sellado", emoji: "📕", description: "Sella el libro hasta el tiempo del fin (Dan 12:4)", order: 5 },
    { id: "knowledge", name: "El Conocimiento Aumenta", emoji: "📚", description: "Muchos correrán de aquí para allá, el conocimiento aumentará (Dan 12:4)", order: 6 },
    { id: "blessed", name: "Bienaventurado el Que Espera", emoji: "🙏", description: "Bienaventurado el que espera y llega a 1335 días (Dan 12:12)", order: 7 },
  ],
};

const gameContentData = {
  en: {
    "match-the-beasts": { title: "Match the Beasts", description: "Match Daniel's beasts to the empires they represent!" },
    "prophecy-timeline": { title: "Prophecy Timeline", description: "Put the prophecies in the right order through history!" },
    "symbol-hunter": { title: "Symbol Hunter", description: "Find the prophetic symbols hidden in the picture!" },
    "kingdom-builder": { title: "Kingdom Builder", description: "Build the statue from Daniel's dream piece by piece!" },
    "verse-scramble": { title: "Verse Scramble", description: "Unscramble the words to complete the Bible verse!" },
    "prophet-quiz": { title: "Prophet Quiz", description: "Quick-fire quiz about Bible prophets!" },
    "bible-books": { title: "Bible Books Order", description: "Put the first 5 books of the Bible in order!" },
    "memory-verse": { title: "Memory Verse", description: "Memorize and recall Bible verses!" },
    "sanctuary-explorer": { title: "Sanctuary Explorer", description: "Match sanctuary items to their correct locations!" },
    "fruit-of-spirit": { title: "Fruit of the Spirit", description: "Name all 9 fruits of the Spirit from Galatians 5!" },
    "ten-commandments": { title: "Ten Commandments", description: "Put the Ten Commandments in order!" },
    "creation-days": { title: "Creation Week", description: "Order the 7 days of creation correctly!" },
    "daniels-visions": { title: "Daniel's Visions", description: "Explore Daniel's prophetic visions from chapters 8 and 10!" },
    "daniel-7-beasts": { title: "Daniel 7 Beasts", description: "Match the four beasts from Daniel's dream to their meanings!" },
    "daniel-11-kings": { title: "Daniel 11 Kings", description: "Learn about the Kings of the North and South prophecy!" },
    "revelation-10": { title: "Revelation 10: The Little Book", description: "Learn about the mighty angel and the sweet & bitter scroll!" },
    "investigative-judgment": { title: "Investigative Judgment", description: "Learn about Jesus' work in the heavenly sanctuary since 1844!" },
    "time-of-end": { title: "Time of the End", description: "Explore Daniel 12's prophecies about the last days!" },
  },
  fr: {
    "match-the-beasts": { title: "Associer les Bêtes", description: "Associez les bêtes de Daniel aux empires qu'elles représentent !" },
    "prophecy-timeline": { title: "Chronologie Prophétique", description: "Mettez les prophéties dans le bon ordre à travers l'histoire !" },
    "symbol-hunter": { title: "Chasseur de Symboles", description: "Trouvez les symboles prophétiques cachés dans l'image !" },
    "kingdom-builder": { title: "Bâtisseur de Royaume", description: "Construisez la statue du rêve de Daniel pièce par pièce !" },
    "verse-scramble": { title: "Verset Mélangé", description: "Remettez les mots dans l'ordre pour compléter le verset !" },
    "prophet-quiz": { title: "Quiz des Prophètes", description: "Quiz rapide sur les prophètes de la Bible !" },
    "bible-books": { title: "Ordre des Livres", description: "Mettez les 5 premiers livres de la Bible dans l'ordre !" },
    "memory-verse": { title: "Verset à Mémoriser", description: "Mémorisez et rappelez des versets bibliques !" },
    "sanctuary-explorer": { title: "Explorateur du Sanctuaire", description: "Associez les objets du sanctuaire à leurs emplacements !" },
    "fruit-of-spirit": { title: "Fruit de l'Esprit", description: "Nommez les 9 fruits de l'Esprit de Galates 5 !" },
    "ten-commandments": { title: "Dix Commandements", description: "Mettez les Dix Commandements dans l'ordre !" },
    "creation-days": { title: "Semaine de la Création", description: "Ordonnez les 7 jours de la création correctement !" },
    "daniels-visions": { title: "Visions de Daniel", description: "Explorez les visions prophétiques de Daniel des chapitres 8 et 10 !" },
    "daniel-7-beasts": { title: "Bêtes de Daniel 7", description: "Associez les quatre bêtes du rêve de Daniel à leurs significations !" },
    "daniel-11-kings": { title: "Rois de Daniel 11", description: "Apprenez la prophétie des Rois du Nord et du Sud !" },
    "revelation-10": { title: "Apocalypse 10 : Le Petit Livre", description: "Découvrez l'ange puissant et le rouleau doux et amer !" },
    "investigative-judgment": { title: "Jugement Investigatif", description: "Découvrez l'œuvre de Jésus dans le sanctuaire céleste depuis 1844 !" },
    "time-of-end": { title: "Le Temps de la Fin", description: "Explorez les prophéties de Daniel 12 sur les derniers jours !" },
  },
  es: {
    "match-the-beasts": { title: "Asociar las Bestias", description: "¡Asocia las bestias de Daniel con los imperios que representan!" },
    "prophecy-timeline": { title: "Línea de Tiempo Profética", description: "¡Pon las profecías en el orden correcto a través de la historia!" },
    "symbol-hunter": { title: "Cazador de Símbolos", description: "¡Encuentra los símbolos proféticos escondidos en la imagen!" },
    "kingdom-builder": { title: "Constructor de Reinos", description: "¡Construye la estatua del sueño de Daniel pieza por pieza!" },
    "verse-scramble": { title: "Versículo Desordenado", description: "¡Ordena las palabras para completar el versículo bíblico!" },
    "prophet-quiz": { title: "Quiz de Profetas", description: "¡Quiz rápido sobre los profetas de la Biblia!" },
    "bible-books": { title: "Orden de los Libros", description: "¡Pon los primeros 5 libros de la Biblia en orden!" },
    "memory-verse": { title: "Versículo para Memorizar", description: "¡Memoriza y recuerda versículos bíblicos!" },
    "sanctuary-explorer": { title: "Explorador del Santuario", description: "¡Asocia los objetos del santuario con sus ubicaciones!" },
    "fruit-of-spirit": { title: "Fruto del Espíritu", description: "¡Nombra los 9 frutos del Espíritu de Gálatas 5!" },
    "ten-commandments": { title: "Diez Mandamientos", description: "¡Pon los Diez Mandamientos en orden!" },
    "creation-days": { title: "Semana de la Creación", description: "¡Ordena los 7 días de la creación correctamente!" },
    "daniels-visions": { title: "Visiones de Daniel", description: "¡Explora las visiones proféticas de Daniel de los capítulos 8 y 10!" },
    "daniel-7-beasts": { title: "Bestias de Daniel 7", description: "¡Asocia las cuatro bestias del sueño de Daniel con sus significados!" },
    "daniel-11-kings": { title: "Reyes de Daniel 11", description: "¡Aprende sobre la profecía de los Reyes del Norte y del Sur!" },
    "revelation-10": { title: "Apocalipsis 10: El Librito", description: "¡Aprende sobre el ángel poderoso y el rollo dulce y amargo!" },
    "investigative-judgment": { title: "Juicio Investigador", description: "¡Aprende sobre la obra de Jesús en el santuario celestial desde 1844!" },
    "time-of-end": { title: "El Tiempo del Fin", description: "¡Explora las profecías de Daniel 12 sobre los últimos días!" },
  },
};

// ==================== Exports ====================

export function getGameUI(lang: string) {
  return gameUI[lang as Lang] || gameUI.en;
}

export function getBeastMatchData(lang: string) {
  return (beastMatchData[lang as Lang] || beastMatchData.en).map(b => ({ ...b, matched: false }));
}

export function getStatuePieces(lang: string) {
  return statuePiecesData[lang as Lang] || statuePiecesData.en;
}

export function getTimelineEvents(lang: string) {
  return timelineEventsData[lang as Lang] || timelineEventsData.en;
}

export function getHiddenSymbols(lang: string) {
  return (hiddenSymbolsData[lang as Lang] || hiddenSymbolsData.en).map(s => ({ ...s, found: false }));
}

export function getVerseScrambleData(lang: string) {
  return verseScrambleDataAll[lang as Lang] || verseScrambleDataAll.en;
}

export function getProphetQuizData(lang: string) {
  return prophetQuizDataAll[lang as Lang] || prophetQuizDataAll.en;
}

export function getBibleBooksData(lang: string) {
  return bibleBooksDataAll[lang as Lang] || bibleBooksDataAll.en;
}

export function getMemoryVerseData(lang: string) {
  return memoryVerseDataAll[lang as Lang] || memoryVerseDataAll.en;
}

export function getSanctuaryParts(lang: string) {
  return sanctuaryPartsData[lang as Lang] || sanctuaryPartsData.en;
}

export function getSanctuaryLocations(lang: string) {
  return sanctuaryLocationsData[lang as Lang] || sanctuaryLocationsData.en;
}

export function getFruitOfSpirit(lang: string) {
  return fruitOfSpiritData[lang as Lang] || fruitOfSpiritData.en;
}

export function getCommandments(lang: string) {
  return commandmentsData[lang as Lang] || commandmentsData.en;
}

export function getCreationDays(lang: string) {
  return creationDaysData[lang as Lang] || creationDaysData.en;
}

export function getDanielsVisions(lang: string) {
  return danielsVisionsData[lang as Lang] || danielsVisionsData.en;
}

export function getDaniel7Beasts(lang: string) {
  return daniel7BeastsData[lang as Lang] || daniel7BeastsData.en;
}

export function getDaniel11Events(lang: string) {
  return daniel11EventsData[lang as Lang] || daniel11EventsData.en;
}

export function getRevelation10Elements(lang: string) {
  return revelation10ElementsData[lang as Lang] || revelation10ElementsData.en;
}

export function getJudgmentElements(lang: string) {
  return judgmentElementsData[lang as Lang] || judgmentElementsData.en;
}

export function getTimeOfEndElements(lang: string) {
  return timeOfEndElementsData[lang as Lang] || timeOfEndElementsData.en;
}

export function getGameContentMeta(lang: string) {
  return gameContentData[lang as Lang] || gameContentData.en;
}
