import { Button } from "@/components/ui/button";

interface BreathingScreenProps {
  onContinue: () => void;
  questionNumber: number;
}

const breathingMessages = [
  {
    title: "Moment de Respiration",
    message: "Vous êtes sur la bonne voie ! Prenez une petite pause pour intégrer vos réponses.",
    emoji: "🌸",
    color: "pepps-mint",
  },
  {
    title: "Pause Bienveillante",
    message: "Excellent travail ! Votre sensibilité se révèle à travers vos choix authentiques.",
    emoji: "✨",
    color: "pepps-blue",
  },
  {
    title: "Respiration Profonde",
    message: "Félicitations ! Vous explorez vos super-pouvoirs avec courage et sincérité.",
    emoji: "🦋",
    color: "pepps-yellow",
  },
  {
    title: "Moment de Grâce",
    message: "Magnifique ! Chaque réponse vous rapproche de vos talents cachés de sensible.",
    emoji: "🌟",
    color: "pepps-mint",
  }
];

export function BreathingScreen({ onContinue, questionNumber }: BreathingScreenProps) {
  const breathingIndex = Math.floor((questionNumber - 1) / 6) % breathingMessages.length;
  const currentMessage = breathingMessages[breathingIndex];

  return (
    <div className="screen-transition screen-visible min-h-screen flex items-center justify-center px-4 animate-fade-in">
      <div className="max-w-2xl w-full text-center">
        {/* Breathing Animation Circle */}
        <div className="mb-8 flex justify-center">
          <div className={`relative w-32 h-32 rounded-full bg-${currentMessage.color}/20 flex items-center justify-center animate-pulse-gentle`}>
            <div className={`w-20 h-20 rounded-full bg-${currentMessage.color}/40 flex items-center justify-center animate-zoom-in`}>
              <span className="text-4xl">{currentMessage.emoji}</span>
            </div>
            {/* Breathing rings */}
            <div className={`absolute w-40 h-40 rounded-full border-2 border-${currentMessage.color}/30 animate-pulse`}></div>
            <div className={`absolute w-48 h-48 rounded-full border border-${currentMessage.color}/20 animate-pulse`} style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Message */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-pepps-title font-bold text-pepps-indigo mb-6">
            {currentMessage.title}
          </h2>
          <p className="text-lg md:text-xl text-pepps-gray leading-relaxed mb-8 font-pepps-body max-w-lg mx-auto">
            {currentMessage.message}
          </p>

          {/* Breathing Instruction */}
          <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pepps-mint/30">
            <p className="text-pepps-indigo font-pepps-body text-base mb-4">
              <strong>Respirez avec moi :</strong>
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-pepps-gray font-pepps-body">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pepps-blue/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-pepps-blue text-lg">↑</span>
                </div>
                <span>Inspirez 4s</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pepps-mint/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-pepps-gray text-lg">⏸</span>
                </div>
                <span>Retenez 4s</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-pepps-yellow/20 flex items-center justify-center mb-2 mx-auto">
                  <span className="text-pepps-indigo text-lg">↓</span>
                </div>
                <span>Expirez 6s</span>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="mb-8">
            <p className="text-sm text-pepps-gray/70 mb-3 font-pepps-body">
              Questions complétées : <strong className="text-pepps-indigo">{questionNumber}/30</strong>
            </p>
            <div className="w-full bg-pepps-mint/20 rounded-full h-2">
              <div 
                className="h-2 bg-pepps-indigo rounded-full transition-all duration-500"
                style={{ width: `${(questionNumber / 30) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Continue Button */}
          <Button 
            onClick={onContinue}
            variant="pepps"
            size="lg"
            className="text-lg h-12 px-8 rounded-xl font-pepps-title font-semibold"
          >
            🌱 Continuer mon voyage intérieur
          </Button>

          <p className="mt-4 text-sm text-pepps-gray/60 font-pepps-body italic">
            Prenez le temps qu'il vous faut... Votre rythme est parfait.
          </p>
        </div>
      </div>
    </div>
  );
}