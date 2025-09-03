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
    <div className="screen-transition screen-visible">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-primary">
            Progression
          </span>
          <span className="text-sm font-medium text-primary">
            Question {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>
        <Progress 
          value={progressPercentage} 
          className="progress-bar-pepps"
        />
      </div>

      {/* Question */}
      <h2 className="text-2xl font-semibold my-6 text-center min-h-[100px] text-primary">
        {currentQuestion.question}
      </h2>

      {/* Answer Options */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8">
        {answerLabels.map((label) => (
          <div
            key={label.score}
            className={`answer-option ${
              userAnswers[currentQuestionIndex] === label.score
                ? "selected border-secondary bg-secondary/10"
                : "border-border hover:border-accent"
            }`}
            onClick={() => onAnswerSelect(currentQuestionIndex, label.score)}
          >
            <div className="w-16 h-16 mb-2 mx-auto">
              <img 
                src={label.emoji} 
                alt={label.text}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-sm">{label.text}</div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
          className={currentQuestionIndex === 0 ? "invisible" : ""}
        >
          Précédent
        </Button>
        <Button
          variant="default"
          onClick={onNext}
          disabled={!isAnswered}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}