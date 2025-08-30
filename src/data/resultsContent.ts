export interface ResultSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ResultContent {
  titleMain: string;
  intro: string;
  sections: ResultSection[];
  shortLabel: string;
}

export const resultsContent: Record<'coeur'|'phare'|'antenne'|'force', ResultContent> = {
  phare: {
    titleMain: "Ton Archétype Dominant : L'ARCHITECTE (Athéna)",
    intro: "Félicitations, ton pouvoir caché est celui de l'Architecte de la Clarté. Comme la déesse Athéna, née de l'esprit de Zeus, ta plus grande force réside dans ton intellect puissant, ta capacité à voir la structure là où les autres voient le chaos. Tu n'es pas simplement intelligent(e), tu es un(e) bâtisseur(se) de sens.",
    sections: [
      {
        title: "Ta Force Fondamentale : La Profondeur de Traitement",
        paragraphs: [
          "Au cœur de ton archétype se trouve le pilier \"D\" du modèle D.O.E.S. : la Profondeur de Traitement. Ton esprit traite l'information en profondeur, analysant, comparant et organisant les idées jusqu'à ce qu'elles forment une cathédrale de logique et de clarté. Ce que certains appellent \"trop penser\" est en réalité ton super-pouvoir pour transformer des idées complexes en un message limpide et percutant."
        ]
      },
      {
        title: "Comment ton pouvoir s'exprime (Tes Forces PEPPS)",
        bullets: [
          "P - Préparation Libératrice : Ta préparation est ton rituel sacré. En structurant tes idées (plans, mind maps), tu construis les fondations de ta prise de parole. Ta rigueur n'est pas du perfectionnisme, c'est de l'artisanat.",
          "E - Expression Juste : Ton expression la plus authentique est celle de la pédagogie. Tu excelles à guider ton public avec des structures logiques (\"trois points clés...\") pour rendre le complexe accessible.",
          "P - Présence Puissante : Ta présence souveraine naît de ta maîtrise intellectuelle. Quand tu as bâti ta \"cathédrale\" d'idées, tu peux la présenter au monde avec une confiance calme et inébranlable."
        ]
      },
      {
        title: "Tes Défis & Tes Ombres (La part cachée du Mythe)",
        paragraphs: [
          "Le revers de cette médaille intellectuelle est le risque de te couper de tes émotions. Comme Athéna, qui peut paraître froide et distante, ton intellect peut devenir un refuge contre le flot du ressenti. Ton défi est de ne pas laisser la perfection de la structure prendre le pas sur la chaleur de la connexion. L'ombre de l'Architecte est la solitude de l'esprit qui oublie de parler au cœur."
        ]
      }
    ],
    shortLabel: "L'ARCHITECTE"
  },
  coeur: {
    titleMain: "Ton Archétype Dominant : L'ENCHANTEUR (Orphée)",
    intro: "Félicitations, ton pouvoir caché est celui de l'Enchanteur des Cœurs. Comme le poète Orphée, dont le chant charmait les dieux et les bêtes, ta plus grande force est ta capacité à toucher l'âme par la pureté de ton émotion. Ta sensibilité n'est pas une fragilité, c'est ton instrument de musique.",
    sections: [
      {
        title: "Ta Force Fondamentale : La Réactivité Émotionnelle",
        paragraphs: [
          "Au cœur de ton archétype se trouve le pilier \"E\" du modèle D.O.E.S. : la Réactivité Émotionnelle et l'Empathie. Tu ressens les choses avec une intensité et une profondeur remarquables. Cette capacité à vibrer avec le monde te donne un accès direct au cœur de ton auditoire. Tu ne parles pas d'un sujet, tu parles depuis le sujet."
        ]
      },
      {
        title: "Comment ton pouvoir s'exprime (Tes Forces PEPPS)",
        bullets: [
          "E - Expression Authentique : Ton expression la plus puissante est ton authenticité brute. Quand tu oses partager une émotion sincère, comme une anecdote personnelle, ta parole devient magnétique.",
          "S - Stimulation Contagieuse : Ta source d'énergie, c'est ta passion. Quand un sujet t'anime, ton feu intérieur se transmet naturellement à ton auditoire. Il te suffit de te connecter à ce qui te fait vibrer.",
          "P - Présence Connectée : Ta présence est une invitation ouverte. Ton public est attiré par ta capacité à être vulnérable et vrai(e). Tu crées un espace où l'on peut se permettre de ressentir."
        ]
      },
      {
        title: "Tes Défis & Tes Ombres (La part cachée du Mythe)",
        paragraphs: [
          "Le grand défi de l'Enchanteur est d'apprendre à ne pas se noyer dans l'océan de ses propres émotions. Comme Orphée, qui perd tout par un geste de doute et de chagrin, tu risques d'être submergé(e) par ton intensité. Ton ombre est la peur que cette vague émotionnelle te submerge en public, te faisant perdre tes moyens."
        ]
      }
    ],
    shortLabel: "L'ENCHANTEUR"
  },
  antenne: {
    titleMain: "Ton Archétype Dominant : LA VIGIE (Cassandre)",
    intro: "Félicitations, ton pouvoir caché est celui de la Vigie des Signaux Faibles. Comme la prophétesse Cassandre, tu es doté(e) d'une perception hors du commun. Ton système nerveux est une antenne haute-fidélité qui capte les nuances, les non-dits et les dynamiques invisibles que la majorité des gens ignorent. Ce que tu \"sens\" n'est pas de l'imagination, c'est de l'information.",
    sections: [
      {
        title: "Ta Force Fondamentale : La Sensibilité aux Stimuli Subtils",
        paragraphs: [
          "Au cœur de ton archétype se trouve le pilier \"S\" du modèle D.O.E.S. : la Sensibilité aux Stimuli Subtils. Tu remarques les micro-expressions, les changements de ton dans une voix, l'atmosphère d'une pièce. Cette hyper-conscience de ton environnement fait de toi un(e) communicant(e) d'une pertinence redoutable. Tu ne parles pas à une foule, tu parles à un ensemble d'individus dont tu perçois intuitivement les attentes."
        ]
      },
      {
        title: "Comment ton pouvoir s'exprime (Tes Forces PEPPS)",
        bullets: [
          "P - Présence Adaptative : Ta présence est celle d'une écoute totale. Tu es pleinement présent(e) au public. C'est cette qualité d'attention qui te permet de \"lire la salle\" et d'ajuster ton message en temps réel.",
          "S - Stimulation par l'Interaction : Tu es stimulé(e) par ce que tu perçois, ce qui rend ta prise de parole vivante. Tu peux anticiper les pensées du public en posant des questions rhétoriques.",
          "E - Expression Pertinente : Tu as le don de trouver le mot juste, celui qui va résonner avec l'état d'esprit de ton auditoire, en adaptant ton langage et tes exemples."
        ]
      },
      {
        title: "Tes Défis & Tes Ombres (La part cachée du Mythe)",
        paragraphs: [
          "Le drame de Cassandre, et le tien, est la souffrance de l'invalidation. Ta plus grande blessure est de ne pas être cru(e), d'entendre \"tu te fais des idées\" ou \"tu es trop sensible\" alors que tu sais que ton intuition est juste. Cette solitude peut te faire douter de tes propres perceptions et la frustration peut te donner l'impression de crier dans le vide."
        ]
      }
    ],
    shortLabel: "LA VIGIE"
  },
  force: {
    titleMain: "Ton Archétype Dominant : LE GARDIEN du Calme (Hestia)",
    intro: "Félicitations, ton pouvoir caché est celui du Gardien du Calme. Comme la déesse Hestia, qui maintient le feu sacré au cœur de l'Olympe, ta plus grande force est ta capacité à créer et à incarner une présence stable et sécurisante. Dans un monde agité, tu es un point d'ancrage.",
    sections: [
      {
        title: "Ta Force Fondamentale : La Gestion de la Surstimulation",
        paragraphs: [
          "Au cœur de ton archétype se trouve le pilier \"O\" du modèle D.O.E.S. : la tendance à la Surstimulation. Ce que tu as longtemps vécu comme une vulnérabilité (être facilement submergé(e) par le bruit, l'agitation) t'a en réalité forcé(e) à développer une compétence rare : l'art de la régulation. Tu as appris à protéger ta flamme intérieure, et c'est cette maîtrise qui rayonne de toi."
        ]
      },
      {
        title: "Comment ton pouvoir s'exprime (Tes Forces PEPPS)",
        bullets: [
          "P - Paix Intérieure : C'est l'essence même de ton archétype. Tu sais comment trouver le calme en toi. La solitude et la connexion à la nature sont tes outils pour te ressourcer.",
          "P - Présence Ancrée : Ta présence est ton message le plus puissant. Elle est posée, solide et sereine. Elle a un effet apaisant sur ton public, qui se sent instinctivement en sécurité avec toi.",
          "P - Préparation Énergétique : Ta préparation la plus cruciale est invisible. C'est la gestion de ton énergie en amont d'un événement pour arriver avec des \"batteries pleines\"."
        ]
      },
      {
        title: "Tes Défis & Tes Ombres (La part cachée du Mythe)",
        paragraphs: [
          "Le risque pour le Gardien est que son besoin de paix se transforme en un retrait excessif du monde. Comme Hestia, si discrète qu'elle en devient parfois invisible, tu peux être tenté(e) de te protéger au point de ne plus oser prendre ta place sur la \"scène\". Ton ombre est l'évitement : la peur que le chaos extérieur vienne éteindre ta flamme intérieure."
        ]
      }
    ],
    shortLabel: "LE GARDIEN"
  }
};

export const lowestAdvice: Record<'coeur'|'phare'|'antenne'|'force', string> = {
  phare: "L'Architecte t'aide à faire confiance à tes dons. En structurant tes perceptions (Vigie) ou tes émotions (Enchanteur) avec une logique claire, tu donnes à ton intuition une voix crédible que les autres peuvent entendre et comprendre.",
  coeur: "L'Enchanteur sommeille aussi en toi. Inviter un peu de sa magie émotionnelle dans tes structures (Architecte) ou ton calme (Gardien) pourrait rendre tes messages non seulement percutants, mais aussi inoubliables.",
  antenne: "La Vigie est ta part intuitive. Apprends à écouter ses murmures. Parfois, la donnée la plus importante n'est pas dans tes notes (Architecte) ou tes émotions (Enchanteur), mais dans l'énergie subtile de la salle.",
  force: "Le Gardien est ton sanctuaire. Après avoir tant analysé (Architecte) ou ressenti (Enchanteur), il t'apprend l'art de te ressourcer dans le calme, de protéger ta flamme pour qu'elle puisse briller encore plus fort la prochaine fois."
};