import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizData, answerLabels } from "@/data/quizData";

interface QuizScreenProps {
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  onAnswerSelect: (questionIndex: number, score: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function QuizScreen({
  currentQuestionIndex,
  userAnswers,
  onAnswerSelect,
  onNext,
  onPrevious,
}: QuizScreenProps) {
  const currentQuestion = quizData[currentQuestionIndex];
  const totalQuestions = quizData.length;
  const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
  const isAnswered = userAnswers[currentQuestionIndex] !== null;

  return (
    <div className="screen-transition screen-visible min-h-screen flex flex-col justify-center px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto w-full">
        {/* Progress Header */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pepps-mint/30 animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-pepps-body font-medium text-pepps-indigo">
              🌟 Votre voyage de découverte
            </span>
            <span className="text-sm font-pepps-body font-medium text-pepps-indigo bg-pepps-yellow/20 px-3 py-1 rounded-full">
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
          <div className="w-full bg-pepps-mint/20 rounded-full h-3">
            <div 
              className="h-3 bg-gradient-to-r from-pepps-indigo to-pepps-blue rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="mt-2 text-xs text-pepps-gray/70 font-pepps-body text-center">
            {Math.round(progressPercentage)}% complétés - Vous êtes formidable ! ✨
          </div>
        </div>

        {/* Question Card */}
        <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-pepps-mint/30 shadow-xl animate-zoom-in">
          <h2 className="text-2xl md:text-3xl font-pepps-title font-semibold text-center min-h-[120px] flex items-center justify-center text-pepps-indigo leading-relaxed">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 animate-slide-up">
          {answerLabels.map((label, index) => (
            <div
              key={label.score}
              className={`answer-option cursor-pointer p-4 border-2 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                userAnswers[currentQuestionIndex] === label.score
                  ? "border-pepps-yellow bg-pepps-yellow/10 scale-105 shadow-lg ring-2 ring-pepps-yellow/30"
                  : "border-pepps-mint/40 bg-white/80 hover:border-pepps-blue hover:bg-pepps-blue/5"
              }`}
              onClick={() => onAnswerSelect(currentQuestionIndex, label.score)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-3 mx-auto">
                <img 
                  src={label.emoji} 
                  alt={label.text}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs md:text-sm font-pepps-body font-medium text-pepps-gray">
                {label.text}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center animate-slide-up">
          <Button
            variant="outline"
            onClick={onPrevious}
            className={`h-12 px-6 rounded-xl border-pepps-mint/40 text-pepps-indigo hover:bg-pepps-mint/10 hover:border-pepps-blue font-pepps-body ${currentQuestionIndex === 0 ? "invisible" : ""}`}
          >
            ← Précédent
          </Button>
          
          {/* Encouragement message */}
          <div className="text-center hidden md:block">
            <p className="text-sm text-pepps-gray/70 font-pepps-body italic">
              {!isAnswered ? "Choisissez la réponse qui vous correspond le mieux ✨" : "Excellent choix ! 🌟"}
            </p>
          </div>
          
          <Button
            variant="pepps"
            onClick={onNext}
            disabled={!isAnswered}
            className="h-12 px-6 rounded-xl font-pepps-body font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant →
          </Button>
        </div>

        {/* Bottom encouragement for mobile */}
        <div className="mt-4 text-center md:hidden">
          <p className="text-sm text-pepps-gray/70 font-pepps-body italic">
            {!isAnswered ? "Choisissez la réponse qui vous correspond le mieux ✨" : "Excellent choix ! 🌟"}
          </p>
        </div>
      </div>
    </div>
  );
}