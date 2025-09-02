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
        {/* Pediment */}
        <Pediment title="🎉 Vos Super-Pouvoirs de Sensibles ! 🎉" />
        
        {/* Temple columns */}
        <div className="flex justify-center items-end gap-4 md:gap-8 my-8">
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
        
        {/* Base */}
        <Base description="Voici la carte de vos talents. Vos scores les plus élevés sont vos super-pouvoirs dominants." />
      </div>
    </TooltipProvider>
  );
}