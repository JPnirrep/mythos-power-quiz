import { Button } from "@/components/ui/button";
import { interpretations } from "@/data/quizData";
import { resultsContent, lowestAdvice } from "@/data/resultsContent";
import { TempleVisualization } from "@/components/visuals/TempleVisualization";



interface Scores {
  coeur: number;
  phare: number;
  antenne: number;
  force: number;
}

interface ResultsScreenProps {
  scores: Scores;
}

export function ResultsScreen({ scores }: ResultsScreenProps) {
  // Logique de tri améliorée avec gestion des égalités
  const sortedScores = Object.entries(scores)
    .sort(([keyA, scoreA], [keyB, scoreB]) => {
      // Tri principal par score décroissant
      if (scoreB !== scoreA) {
        return scoreB - scoreA;
      }
      
      // En cas d'égalité parfaite, utiliser un ordre fixe mais logique
      // Basé sur l'ordre des "forces" dans la mythologie
      const orderPriority = { 'phare': 4, 'coeur': 3, 'antenne': 2, 'force': 1 };
      return orderPriority[keyB as keyof typeof orderPriority] - orderPriority[keyA as keyof typeof orderPriority];
    });
    
  // Détection d'égalité pour information
  const topScore = sortedScores[0][1];
  const dominantArchetypes = sortedScores.filter(([, score]) => score === topScore);
  const hasEquality = dominantArchetypes.length > 1;
  
  const dominantKey = sortedScores[0][0] as keyof typeof resultsContent;
  const lowestKey = sortedScores[3][0] as keyof typeof lowestAdvice;
  const dominantContent = resultsContent[dominantKey];
  const lowestContent = lowestAdvice[lowestKey];
  
  // En cas d'égalité, préparer le contenu des deux archétypes
  const secondDominantKey = hasEquality ? sortedScores[1][0] as keyof typeof resultsContent : null;
  const secondDominantContent = secondDominantKey ? resultsContent[secondDominantKey] : null;

  // Deity mapping for temple visualization
  const deityMap = {
    coeur: { name: "Orphée", image: "/lovable-uploads/7f6db2df-2b62-4afa-a91d-a2a4335760e1.png", description: "Dieu de la musique et de l'enchantement" },
    phare: { name: "Athéna", image: "/lovable-uploads/7678f9d2-1fce-452d-a8a3-43d0ed272960.png", description: "Déesse de la sagesse et de la stratégie" },
    antenne: { name: "Cassandre", image: "/lovable-uploads/ae64f01e-7a72-45ef-9592-f1fec8e5b883.png", description: "Prophétesse de la vérité et de l'intuition" },
    force: { name: "Hestia", image: "/lovable-uploads/e2b37deb-d4d6-4d7d-97c3-b168817b9444.png", description: "Déesse du foyer et de la tranquillité" }
  };

  const archetypeNameMap = {
    coeur: "L'ENCHANTEUR (Orphée)",
    phare: "L'ARCHITECTE (Athéna)", 
    antenne: "LA VIGIE (Cassandre)",
    force: "LE GARDIEN (Hestia)"
  };

  // Prepare data for temple visualization
  const scoresForTemple = Object.entries(scores).map(([key, score]) => ({
    name: archetypeNameMap[key as keyof typeof archetypeNameMap],
    score,
    maxScore: 30,
    deity: deityMap[key as keyof typeof deityMap]
  }));

  return (
    <div className="screen-transition screen-visible text-center">
      {/* Temple Visualization */}
      <div className="w-full mb-8">
        <TempleVisualization scores={scoresForTemple} />
      </div>

      {/* Results Interpretation */}
      <div className="text-left space-y-6">
        {/* Dominant Archetype(s) */}
        {hasEquality ? (
          // Cas d'égalité - Afficher les deux archétypes dominants
          <div className="space-y-6">
            <div className="p-6 rounded-lg border-2 border-secondary bg-secondary/10">
              <h3 className="font-bold text-2xl text-primary font-pepps-title mb-4">
                🎉 Archétypes Co-Dominants : Profil Hybride Exceptionnel !
              </h3>
              <p className="font-pepps-body text-foreground mb-6 text-lg leading-relaxed">
                Félicitations ! Vous avez un profil rare avec deux archétypes dominants à égalité. 
                Cette dualité est votre super-pouvoir : vous pouvez puiser dans les forces des deux archétypes selon les situations.
              </p>
            </div>
            
            {/* Premier archétype dominant */}
            <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
              <h3 className="font-bold text-xl text-primary font-pepps-title mb-4">
                {dominantContent.titleMain}
              </h3>
              <p className="font-pepps-body text-foreground mb-4 leading-relaxed">
                {dominantContent.intro}
              </p>
              <div className="text-sm">
                <h4 className="font-bold text-primary font-pepps-title mb-2">
                  Vos forces clés :
                </h4>
                <p className="font-pepps-body text-foreground leading-relaxed">
                  <strong>Déclic PEPPS :</strong> {interpretations[dominantKey].declic}
                </p>
              </div>
            </div>
            
            {/* Deuxième archétype dominant */}
            {secondDominantContent && (
              <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
                <h3 className="font-bold text-xl text-primary font-pepps-title mb-4">
                  {secondDominantContent.titleMain}
                </h3>
                <p className="font-pepps-body text-foreground mb-4 leading-relaxed">
                  {secondDominantContent.intro}
                </p>
                <div className="text-sm">
                  <h4 className="font-bold text-primary font-pepps-title mb-2">
                    Vos forces clés :
                  </h4>
                  <p className="font-pepps-body text-foreground leading-relaxed">
                    <strong>Déclic PEPPS :</strong> {interpretations[secondDominantKey!].declic}
                  </p>
                </div>
              </div>
            )}
            
            {/* Message spécial pour les profils hybrides */}
            <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/30">
              <h4 className="font-bold text-lg text-primary font-pepps-title mb-3">
                Votre Super-Pouvoir Hybride
              </h4>
              <p className="font-pepps-body text-foreground leading-relaxed">
                Cette égalité révèle une capacité d'adaptation remarquable. Vous pouvez naviguer entre 
                {dominantContent.shortLabel} et {secondDominantContent?.shortLabel}, utilisant chaque facette 
                selon les besoins de la situation. C'est une richesse rare !
              </p>
            </div>
          </div>
        ) : (
          // Cas normal - Un seul archétype dominant
          <div className="p-6 rounded-lg border-2 border-secondary bg-secondary/10">
            <h3 className="font-bold text-2xl text-primary font-pepps-title mb-4">
              {dominantContent.titleMain}
            </h3>
            <p className="font-pepps-body text-foreground mb-6 text-lg leading-relaxed">
              {dominantContent.intro}
            </p>
            
            {dominantContent.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-bold text-lg text-primary font-pepps-title mb-3">
                  {section.title}
                </h4>
                {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="font-pepps-body text-foreground mb-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 ml-4">
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="font-pepps-body text-foreground leading-relaxed list-disc">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            {/* Déclic PEPPS - Keep original text */}
            <div className="mt-6">
              <h4 className="font-bold text-lg text-primary font-pepps-title mb-3">
                Ton Levier de Croissance (Le « Déclic PEPPS »)
              </h4>
              <p className="font-pepps-body text-foreground leading-relaxed">
                <strong>Votre Déclic PEPPS :</strong> {interpretations[sortedScores[0][0]].declic}
              </p>
            </div>
          </div>
        )}

        {/* Growth Area */}
        <div className="p-4 rounded-lg border border-border bg-muted/30">
          <h3 className="font-bold text-xl text-primary font-pepps-title mb-3">
            Ton archétype à explorer : {resultsContent[lowestKey].shortLabel}
          </h3>
          <p className="font-pepps-body text-foreground leading-relaxed">
            {lowestContent}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 p-6 rounded-lg bg-muted">
        <h3 className="text-2xl font-bold mb-2 text-primary font-pepps-title">
          Cette exploration vous a parlé ?
        </h3>
        <p className="mb-4 text-muted-foreground font-pepps-body">
          Ce n'est que le début. Lors de notre webinaire exclusif, nous vous donnerons les outils 
          concrets pour maîtriser votre profil unique.
        </p>
        <Button variant="pepps" size="lg" className="text-lg">
          S'inscrire au webinaire du 7 octobre
        </Button>
      </div>
    </div>
  );
}