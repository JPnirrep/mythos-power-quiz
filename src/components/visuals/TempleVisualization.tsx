import { TooltipProvider } from "@/components/ui/tooltip";
import { Pediment } from "./Pediment";
import { Column } from "./Column";
import { Base } from "./Base";

interface PersonalityScore {
  name: string;
  score: number;
  maxScore: number;
  deity: {
    name: string;
    image: string;
    description: string;
  };
}

interface TempleVisualizationProps {
  scores: PersonalityScore[];
}

export function TempleVisualization({ scores }: TempleVisualizationProps) {
  // Sort scores to identify dominant and secondary
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const topScore = sortedScores[0].score;
  const secondScore = sortedScores[1];
  
  // Find all scores that are equal to the top score (dominants)
  const dominantScores = sortedScores.filter(score => score.score === topScore);
  const isDominantTie = dominantScores.length > 1;
  // Check if second highest score is within 2 points of dominant (but not equal)
  const isSecondaryClose = !isDominantTie && (topScore - secondScore.score) <= 2 && (topScore - secondScore.score) > 0;
  
  // Calculate opacity for each column
  const getColumnProps = (score: PersonalityScore) => {
    const isDominant = dominantScores.some(dominant => dominant.name === score.name);
    
    if (isDominant) {
      return { 
        opacity: 1, 
        isDominant: true, 
        isSecondary: false 
      };
    } else if (isSecondaryClose && score.name === secondScore.name) {
      return { 
        opacity: 0.95, 
        isDominant: false, 
        isSecondary: true 
      };
    } else {
      return { 
        opacity: 0.4, 
        isDominant: false, 
        isSecondary: false 
      };
    }
  };

  return (
    <TooltipProvider>
      <div className="w-full max-w-4xl mx-auto py-8 px-4">
        {/* Style BD Header avec personnage central */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-pepps-yellow via-pepps-blue to-pepps-yellow rounded-3xl p-6 shadow-2xl border-4 border-pepps-indigo">
            <div className="text-center relative">
              {/* Personnage central style BD */}
              <div className="w-24 h-24 mx-auto mb-4 bg-pepps-cloud rounded-full flex items-center justify-center shadow-xl border-4 border-pepps-indigo animate-zoom-in">
                <span className="text-4xl">🏛️</span>
              </div>
              <h2 className="text-3xl font-pepps-title font-bold text-pepps-indigo mb-2">
                🎉 RÉVÉLATION DE VOS SUPER-POUVOIRS ! 🎉
              </h2>
              <p className="text-pepps-indigo font-pepps-body text-lg font-medium">
                Comme nos héros mythologiques, découvrez vos forces cachées
              </p>
              {/* Bulles style BD */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-pepps-yellow rounded-full border-2 border-pepps-indigo"></div>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-pepps-blue rounded-full border-2 border-pepps-indigo"></div>
              <div className="absolute -bottom-2 left-1/4 w-5 h-5 bg-pepps-mint rounded-full border-2 border-pepps-indigo"></div>
            </div>
          </div>
        </div>
        
        {/* Temple columns avec style BD */}
        <div className="flex justify-center items-end gap-4 md:gap-8 my-8 relative">
          {/* Bulles décoratives style BD */}
          <div className="absolute -top-8 left-0 w-8 h-8 bg-pepps-yellow/30 rounded-full animate-pulse-gentle"></div>
          <div className="absolute -top-12 right-0 w-6 h-6 bg-pepps-blue/30 rounded-full animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
          
          {scores.map((score) => {
            const columnProps = getColumnProps(score);
            return (
              <Column
                key={score.name}
                deity={score.deity}
                score={score.score}
                maxScore={score.maxScore}
                archetypeName={score.name}
                {...columnProps}
              />
            );
          })}
        </div>
        
        {/* Base avec style BD */}
        <div className="bg-pepps-cloud/80 backdrop-blur-sm rounded-2xl p-6 border-3 border-pepps-indigo shadow-xl">
          <Base description="🗿 Voici la carte de vos talents légendaires ! Vos scores les plus élevés révèlent vos super-pouvoirs dominants, prêts à conquérir le monde ! ⚡" />
        </div>
      </div>
    </TooltipProvider>
  );
}