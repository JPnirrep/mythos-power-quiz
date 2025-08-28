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
          <span className="text-sm font-medium text-primary font-pepps-title">
            Progression
          </span>
          <span className="text-sm font-medium text-primary font-pepps-title">
            Question {currentQuestionIndex + 1} / {totalQuestions}
          </span>
        </div>
        <Progress 
          value={progressPercentage} 
          className="progress-bar-pepps"
        />
      </div>

      {/* Question */}
      <h2 className="text-2xl font-semibold my-6 text-center min-h-[100px] font-pepps-title text-primary">
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
            <div className="text-4xl mb-2">{label.emoji}</div>
            <div className="text-sm font-pepps-body">{label.text}</div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="pepps-blue"
          onClick={onPrevious}
          className={currentQuestionIndex === 0 ? "invisible" : ""}
        >
          Précédent
        </Button>
        <Button
          variant="pepps"
          onClick={onNext}
          disabled={!isAnswered}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}