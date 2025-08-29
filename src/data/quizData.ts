export interface QuizQuestion {
  question: string;
  category: 'coeur' | 'phare' | 'antenne' | 'force';
  inverted: boolean;
}

export interface AnswerLabel {
  score: number;
  text: string;
  emoji: string;
}

export interface Interpretation {
  name: string;
  power: string;
  description: string;
  declic: string;
}

export const quizData: QuizQuestion[] = [
  // Partie 1: Votre Relation au Monde Émotionnel
  { question: "Les histoires touchantes (films, livres, musique) me transportent et peuvent facilement me faire monter les larmes aux yeux.", category: 'coeur', inverted: false },
  { question: "Je ressens intensément les émotions des autres, parfois comme si elles étaient les miennes.", category: 'coeur', inverted: false },
  { question: "Après une conversation émotionnellement chargée, j'ai besoin d'un moment pour 'digérer' et retrouver mon calme.", category: 'coeur', inverted: false },
  { question: "J'ai un 'sixième sens' pour deviner l'humeur d'une personne, même si elle essaie de la cacher.", category: 'coeur', inverted: false },
  { question: "Les critiques négatives me touchent profondément et peuvent occuper mes pensées pendant un certain temps.", category: 'coeur', inverted: false },
  { question: "Je me sens généralement détaché(e) des montagnes russes émotionnelles de mon entourage.", category: 'coeur', inverted: true },
  
  // Partie 2: Votre Manière de Penser le Monde
  { question: "Avant de prendre une décision importante, j'aime explorer tous les angles et peser le pour et le contre en détail.", category: 'phare', inverted: false },
  { question: "On me dit souvent que j'ai un talent pour expliquer des choses compliquées de manière simple et claire.", category: 'phare', inverted: false },
  { question: "J'adore faire des liens entre des idées qui, à première vue, n'ont rien à voir entre elles.", category: 'phare', inverted: false },
  { question: "Un plan bien structuré me rassure et me donne la confiance nécessaire pour me lancer.", category: 'phare', inverted: false },
  { question: "L'analyse approfondie d'un sujet m'aide à me sentir plus en sécurité avant d'en parler.", category: 'phare', inverted: false },
  { question: "Je préfère largement improviser plutôt que de passer beaucoup de temps à préparer mes interventions.", category: 'phare', inverted: true },
  
  // Partie 3: Votre Interaction avec le Monde Sensoriel
  { question: "Je suis très sensible aux atmosphères et je peux sentir immédiatement si l'ambiance d'un lieu est tendue ou détendue.", category: 'antenne', inverted: false },
  { question: "Je remarque souvent des détails que les autres ne voient pas : un changement de décoration, une nouvelle coupe de cheveux, etc.", category: 'antenne', inverted: false },
  { question: "De légères variations (goût, odeur, son) que personne ne remarque peuvent être très présentes pour moi.", category: 'antenne', inverted: false },
  { question: "Un environnement esthétiquement beau et harmonieux a un effet direct et positif sur mon bien-être.", category: 'antenne', inverted: false },
  { question: "Je perçois intuitivement les 'non-dits' dans une conversation, juste en observant le langage corporel.", category: 'antenne', inverted: false },
  { question: "Les subtilités et les détails d'une situation ont tendance à m'échapper.", category: 'antenne', inverted: true },
  
  // Partie 4: Votre Façon de Gérer votre Énergie
  { question: "Face à l'agitation ou au bruit, je sais instinctivement comment créer un espace de calme à l'intérieur de moi.", category: 'force', inverted: false },
  { question: "Après une journée très active ou sociale, un moment de solitude n'est pas un luxe, c'est une nécessité vitale pour me recharger.", category: 'force', inverted: false },
  { question: "Je suis très conscient(e) de mes limites et je sais quand il est temps pour moi de faire une pause pour rester efficace.", category: 'force', inverted: false },
  { question: "Mon entourage me décrit souvent comme une présence apaisante et rassurante.", category: 'force', inverted: false },
  { question: "Je prends le temps de m'ancrer et de me recentrer avant un événement important ou une prise de parole.", category: 'force', inverted: false },
  { question: "Je puise mon énergie dans les environnements très stimulants et je m'y sens parfaitement à l'aise pendant des heures.", category: 'force', inverted: true }
];

export const answerLabels: AnswerLabel[] = [
  { score: 1, text: "Pas du tout moi", emoji: "/lovable-uploads/emoji-sad.png" },
  { score: 2, text: "Rarement moi", emoji: "/lovable-uploads/emoji-effort.png" },
  { score: 3, text: "Parfois moi", emoji: "/lovable-uploads/emoji-wise.png" },
  { score: 4, text: "Souvent moi", emoji: "/lovable-uploads/emoji-happy.png" },
  { score: 5, text: "Totalement moi", emoji: "/lovable-uploads/emoji-angel.png" }
];

export const interpretations: Record<string, Interpretation> = {
  coeur: {
    name: "Cœur Vibrant (Orphée)",
    power: "L'Enchanteur des Cœurs",
    description: "Poète et musicien légendaire, votre capacité à ressentir le monde est la source même de votre art. Vous transformez l'émotion brute en beauté universelle. Profondément émotif, votre amour et votre chagrin sont absolus, profonds et sincères. Votre empathie crée une connexion universelle, transcendant les barrières entre les règnes. Charismatique et persuasif, vous persuadez par la seule force de votre chant authentique. Votre courage par amour vous pousse à entreprendre l'impossible. Vos défis : vous pouvez être submergé par l'émotion au point qu'elle vous détruit. Votre anxiété et manque de confiance peuvent créer des doutes fatals. Votre mélancolie peut vous isoler, consumé par votre propre tristesse, incapable de surmonter les traumatismes. Votre idéalisme peut rendre impossible toute autre relation.",
    declic: "Osez le 'Déclic Expression'. Partagez une courte anecdote personnelle. C'est en osant une vulnérabilité maîtrisée que votre message devient universel et que votre authenticité émotionnelle devient votre plus grande force."
  },
  phare: {
    name: "Phare de Clarté (Athéna)",
    power: "L'Architecte de la Clarté",
    description: "Déesse de la sagesse et de la stratégie, née toute armée du crâne de Zeus, vous êtes une figure de l'intellect souverain. Rationnelle et logique, votre pensée est structurée, claire et orientée vers la résolution de problèmes. Stratège excellente, vous excellez dans la planification, la vision à long terme et l'élaboration de tactiques complexes. Juste et équitable, vous cherchez des solutions équilibrées. Pédagogue et mentor, vous guidez sans faire le travail à la place des autres. Maîtrisée, vous privilégiez la réflexion à l'impulsivité. Créative et technique, vous valorisez le savoir-faire. Vos défis : vous pouvez être froide et distante, privilégiant l'intellect sur l'émotion. Votre justice peut être impitoyable et vindicative. Très sûre de votre intellect, vous tolérez mal la compétition. Votre empathie est intellectuelle plutôt qu'émotionnelle.",
    declic: "Activez le 'Déclic Préparation'. Avant de parler, dessinez votre plan sur une feuille (votre 'blueprint'). Cet ancrage visuel libérera votre esprit, calmera votre trac et vous permettra de partager votre sagesse structurée."
  },
  antenne: {
    name: "Antenne Subtile (Cassandre)",
    power: "La Vigie des Signaux Faibles",
    description: "Princesse de Troie dotée du don de prophétie, vous êtes maudite : vos prédictions ne seront jamais crues. Extrêmement perceptive et intuitive, vous voyez la vérité cachée, les dangers futurs, les intentions dissimulées. Connectée à l'invisible, votre perception transcende la réalité matérielle, captant des informations inaccessibles au commun des mortels. Courageuse et intègre, malgré la certitude de ne pas être crue et le risque d'être traitée de folle, vous ne cessez jamais de dire la vérité. Lucide, vous avez une conscience aiguë et souvent douloureuse de la réalité. Vos défis : la malédiction vous condamne à une solitude radicale. Malgré votre savoir, vous ne pouvez rien changer, générant frustration et désespoir. L'intensité de vos visions vous fait passer pour hystérique. Vivre en percevant constamment les dangers sans pouvoir agir est une source d'angoisse permanente.",
    declic: "Entraînez votre 'Déclic Présence'. Ne scannez pas votre public, mais 'écoutez-le avec les yeux'. Faites confiance à vos perceptions subtiles et choisissez un ou deux visages bienveillants pour vous ancrer dans la connexion."
  },
  force: {
    name: "Force Tranquille (Hestia)",
    power: "Le Gardien du Foyer",
    description: "Déesse du foyer et du feu sacré, aînée des dieux de l'Olympe, vous êtes une figure discrète et pacifique. Centrée et stable, vous êtes le point d'ancrage, le centre immuable de la maison. Votre présence est apaisante et sécurisante. Paisible et non-conflictuelle, vous refusez de prendre part aux disputes, préservant l'harmonie par votre neutralité bienveillante. Autonome et digne, vous avez fait vœu de chasteté et trouvez votre complétude en vous-même. Constante et fiable, le feu du foyer que vous entretenez ne doit jamais s'éteindre. Vos défis : votre refus de participer au monde extérieur peut vous rendre passive. Vous êtes si discrète que vous devenez invisible, cédant même votre place. Votre recherche de paix peut se transformer en évitement du conflit. Votre calme peut être perçu comme un détachement du monde.",
    declic: "Priorisez le 'Déclic Paix Intérieure'. Avant de prendre la parole, ancrez-vous physiquement en sentant le sol sous vos pieds. Votre sanctuaire intérieur devient alors une force rayonnante qui apaise votre auditoire."
  }
};