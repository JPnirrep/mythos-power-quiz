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
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const dominantKey = sortedScores[0][0] as keyof typeof resultsContent;
  const lowestKey = sortedScores[3][0] as keyof typeof lowestAdvice;
  const dominantContent = resultsContent[dominantKey];
  const lowestContent = lowestAdvice[lowestKey];

  // Deity mapping for temple visualization (using placeholder images)
  const deityMap = {
    coeur: { name: "Orphée", image: "/placeholder.svg", description: "Dieu de la musique et de l'enchantement" },
    phare: { name: "Athéna", image: "/placeholder.svg", description: "Déesse de la sagesse et de la stratégie" },
    antenne: { name: "Cassandre", image: "/placeholder.svg", description: "Prophétesse de la vérité et de l'intuition" },
    force: { name: "Hestia", image: "/placeholder.svg", description: "Déesse du foyer et de la tranquillité" }
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
        {/* Dominant Archetype */}
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