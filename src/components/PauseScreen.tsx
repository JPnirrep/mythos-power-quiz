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
    <div className="screen-transition screen-visible text-center">
      <h2 className="text-3xl font-bold mb-4 font-pepps-title text-primary">
        Petite pause ! 
      </h2>
      <p className="text-lg mb-8 text-muted-foreground font-pepps-body">
        {pauseText}
      </p>
      <Button 
        variant="pepps" 
        size="lg" 
        onClick={onContinue}
        className="text-lg px-10 py-4"
      >
        On continue ?
      </Button>
    </div>
  );
}