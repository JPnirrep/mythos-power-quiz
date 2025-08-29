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
    description: "Votre hypersensibilité artistique est la source même de votre art oratoire. Vous transformez l'émotion brute en beauté universelle. Votre capacité à ressentir profondément vous permet de créer une connexion authentique qui transcende les barrières. Votre empathie et votre charisme naturel persuadent par la seule force de votre sincérité émotionnelle. Votre défi : éviter d'être submergé par l'intensité de vos émotions et apprendre à vous réguler après des moments intenses.",
    declic: "Osez le 'Déclic Expression'. Partagez une courte anecdote personnelle. C'est en osant une vulnérabilité maîtrisée que votre message devient universel et que votre authenticité émotionnelle devient votre plus grande force."
  },
  phare: {
    name: "Phare de Clarté (Athéna)",
    power: "L'Architecte de la Clarté",
    description: "Votre pensée est structurée, claire et orientée vers la résolution de problèmes. Vous excellez dans la planification et l'élaboration de stratégies complexes. Votre super-pouvoir est de transformer la complexité en clarté limpide, guidant et conseillant sans faire le travail à la place des autres. Votre maîtrise émotionnelle vous permet de privilégier la réflexion à l'impulsivité. Votre défi : éviter la sur-intellectualisation qui pourrait vous couper de votre ressenti et créer une distance avec les autres.",
    declic: "Activez le 'Déclic Préparation'. Avant de parler, dessinez votre plan sur une feuille (votre 'blueprint'). Cet ancrage visuel libérera votre esprit, calmera votre trac et vous permettra de partager votre sagesse structurée."
  },
  antenne: {
    name: "Antenne Subtile (Cassandre)",
    power: "La Vigie des Signaux Faibles",
    description: "Vous percevez la vérité cachée, les dynamiques invisibles et les non-dits que 90% des gens ignorent. Votre perception transcende la réalité matérielle et vous capte des informations inaccessibles au commun des mortels. Votre courage vous pousse à dire cette vérité malgré le risque d'être incompris. Votre défi : apprendre à faire confiance à vos perceptions même quand elles ne sont pas validées par l'extérieur, et éviter l'isolement dû à l'incompréhension.",
    declic: "Entraînez votre 'Déclic Présence'. Ne scannez pas votre public, mais 'écoutez-le avec les yeux'. Faites confiance à vos perceptions subtiles et choisissez un ou deux visages bienveillants pour vous ancrer dans la connexion."
  },
  force: {
    name: "Force Tranquille (Hestia)",
    power: "Le Gardien du Foyer",
    description: "Vous êtes le point d'ancrage, le centre stable qui apaise et sécurise votre entourage. Votre présence paisible et non-conflictuelle préserve l'harmonie. Vous avez la capacité remarquable de créer et maintenir un sanctuaire intérieur qui vous protège du chaos extérieur. Votre constance et votre fiabilité donnent un poids immense à chacune de vos paroles. Votre défi : éviter le retrait excessif du monde et partager vos dons apaisants sans vous effacer.",
    declic: "Priorisez le 'Déclic Paix Intérieure'. Avant de prendre la parole, ancrez-vous physiquement en sentant le sol sous vos pieds. Votre sanctuaire intérieur devient alors une force rayonnante qui apaise votre auditoire."
  }
};