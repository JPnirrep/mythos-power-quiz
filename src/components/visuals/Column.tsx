import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ImageWithFallback } from "./ImageWithFallback";

interface Deity {
  name: string;
  image: string;
  description: string;
}

interface ColumnProps {
  deity: Deity;
  score: number;
  maxScore: number;
  opacity: number;
  isDominant: boolean;
  isSecondary: boolean;
  archetypeName: string;
}

export function Column({ 
  deity, 
  score, 
  maxScore, 
  opacity, 
  isDominant, 
  isSecondary,
  archetypeName 
}: ColumnProps) {
  const heightPercentage = Math.max((score / maxScore) * 100, 15);
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div 
          className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none"
          style={{ opacity }}
          tabIndex={0}
          role="button"
          aria-label={`${archetypeName}: ${score}/${maxScore} points, divinité ${deity.name}`}
        >
          {/* Column */}
          <div 
            className={`
              relative w-16 md:w-20 bg-gradient-to-b from-temple-marble to-temple-stone 
              border-2 border-temple-gold/30 rounded-t-sm
              transition-all duration-300
              ${isDominant ? 'ring-2 ring-temple-gold shadow-lg shadow-temple-gold/30' : ''}
              ${isSecondary ? 'ring-1 ring-temple-gold/60' : ''}
              hover:shadow-lg hover:shadow-temple-gold/20
            `}
            style={{ 
              height: `${heightPercentage * 2}px`,
              minHeight: '30px'
            }}
          >
            {/* Column details */}
            <div className="absolute inset-x-0 top-2 h-1 bg-temple-gold/20 mx-1 rounded" />
            <div className="absolute inset-x-0 bottom-2 h-1 bg-temple-gold/20 mx-1 rounded" />
            
            {/* Deity image for dominant archetype */}
            {isDominant && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-temple-gold/20 p-1 ring-2 ring-temple-gold/50">
                  <ImageWithFallback
                    src={deity.image}
                    alt={deity.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          
          {/* Base */}
          <div className="w-20 md:w-24 h-3 bg-gradient-to-b from-temple-stone to-temple-gold/30 rounded-b-md border border-temple-gold/30" />
          
          {/* Label */}
          <div className="mt-2 text-center">
            <p className="text-xs font-semibold text-temple-stone">
              {archetypeName}
            </p>
            <p className="text-xs text-muted-foreground">
              {score}/{maxScore}
            </p>
          </div>
        </div>
      </TooltipTrigger>
      
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <p className="font-semibold">{archetypeName}</p>
          <p className="text-sm">Score: {score}/{maxScore}</p>
          <p className="text-sm font-medium text-temple-gold">{deity.name}</p>
          <p className="text-sm text-muted-foreground">{deity.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}