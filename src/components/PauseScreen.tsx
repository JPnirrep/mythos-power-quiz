import { Button } from "@/components/ui/button";

interface PauseScreenProps {
  currentQuestionIndex: number;
  onContinue: () => void;
}

export function PauseScreen({ currentQuestionIndex, onContinue }: PauseScreenProps) {
  const part = Math.floor(currentQuestionIndex / 6);
  
  let pauseText = "Respirez un coup. Vous faites ça très bien.";
  if (part === 1) {
    pauseText = "Super ! La moitié du chemin est faite. Prenez une gorgée d'eau, et c'est reparti !";
  } else if (part === 2) {
    pauseText = "On y est presque ! Plus que quelques questions pour découvrir votre profil unique.";
  }

  return (
    <div className="screen-transition screen-visible min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-xl w-full text-center">
        {/* Breathing Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 rounded-full bg-pepps-mint/30 flex items-center justify-center animate-pulse-gentle">
            <div className="w-16 h-16 rounded-full bg-pepps-mint/50 flex items-center justify-center animate-zoom-in">
              <span className="text-3xl">🌸</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-pepps-title font-bold mb-6 text-pepps-indigo animate-slide-up">
          Petite pause ! 
        </h2>
        <p className="text-lg mb-8 text-pepps-gray font-pepps-body leading-relaxed animate-slide-up max-w-md mx-auto">
          {pauseText}
        </p>
        
        {/* Progress */}
        <div className="mb-8 animate-slide-up">
          <p className="text-sm text-pepps-gray/70 mb-3 font-pepps-body">
            Progression : <strong className="text-pepps-indigo">{currentQuestionIndex + 1}/30</strong>
          </p>
          <div className="w-full bg-pepps-mint/20 rounded-full h-2">
            <div 
              className="h-2 bg-pepps-indigo rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIndex + 1) / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        <Button 
          variant="pepps" 
          size="lg" 
          onClick={onContinue}
          className="text-lg px-10 py-4 h-14 rounded-xl font-pepps-title font-semibold animate-slide-up"
        >
          🌱 On continue en douceur ?
        </Button>
      </div>
    </div>
  );
}