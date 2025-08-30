import { useState } from "react";
import { StartScreen } from "./StartScreen";
import { QuizScreen } from "./QuizScreen";
import { PauseScreen } from "./PauseScreen";
import { ResultsScreen } from "./ResultsScreen";
import { quizData } from "@/data/quizData";

interface UserInfo {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface Scores {
  coeur: number;
  phare: number;
  antenne: number;
  force: number;
}

type Screen = 'start' | 'quiz' | 'pause' | 'results';

export function QuizContainer() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [scores, setScores] = useState<Scores>({ coeur: 0, phare: 0, antenne: 0, force: 0 });

  const handleStart = (info: UserInfo) => {
    setUserInfo(info);
    setCurrentScreen('quiz');
  };

  const handleAnswerSelect = (questionIndex: number, score: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = score;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex >= quizData.length) {
      // Quiz completed - calculate results
      calculateResults();
      setCurrentScreen('results');
    } else if (nextIndex % 6 === 0 && nextIndex > 0) {
      // Show pause screen every 6 questions
      setCurrentQuestionIndex(nextIndex);
      setCurrentScreen('pause');
    } else {
      // Continue to next question
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleContinueAfterPause = () => {
    setCurrentScreen('quiz');
  };

  const calculateResults = () => {
    const newScores = { coeur: 0, phare: 0, antenne: 0, force: 0 };

    quizData.forEach((question, index) => {
      let score = userAnswers[index] || 0;
      if (question.inverted) {
        score = 6 - score;
      }
      newScores[question.category] += score;
    });

    setScores(newScores);
    
    // Send data to Google Sheets (commented out - replace with actual URL)
    // sendDataToGoogleSheet(newScores);
  };

  /*
  const sendDataToGoogleSheet = (calculatedScores: Scores) => {
    // Replace with your Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const formData = new FormData();
    formData.append('timestamp', new Date().toISOString());
    formData.append('firstname', userInfo?.firstname || '');
    formData.append('lastname', userInfo?.lastname || '');
    formData.append('email', userInfo?.email || '');
    formData.append('phone', userInfo?.phone || '');
    formData.append('consent_communications', userInfo?.consent ? 'true' : 'false');
    
    // Add answers and scores
    userAnswers.forEach((answer, i) => {
      formData.append(`answer_${i+1}`, answer?.toString() || '');
    });
    Object.entries(calculatedScores).forEach(([key, value]) => {
      formData.append(`score_${key}`, value.toString());
    });

    console.log("Preparing to send data:", Object.fromEntries(formData));

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error sending data!', error.message));
  };
  */

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <header className="mb-8">
        <img 
          src="/lovable-uploads/c58dc642-4e1d-4b82-bb6f-de625e871e9c.png"
          alt="Logo La Fabrique PEPPS" 
          className="w-64 md:w-80"
        />
      </header>

      <main className="w-full max-w-3xl quiz-card">
        {currentScreen === 'start' && (
          <StartScreen onStart={handleStart} />
        )}

        {currentScreen === 'quiz' && (
          <QuizScreen
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentScreen === 'pause' && (
          <PauseScreen
            currentQuestionIndex={currentQuestionIndex}
            onContinue={handleContinueAfterPause}
          />
        )}

        {currentScreen === 'results' && (
          <ResultsScreen scores={scores} />
        )}
      </main>
    </div>
  );
}