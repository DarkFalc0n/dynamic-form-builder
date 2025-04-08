import { initialQuizState, useQuizStore } from '@/store/quiz';
import { v4 } from 'uuid';

const useQuiz = () => {
  const { quiz, setQuiz } = useQuizStore();

  const handleResetQuiz = () => {
    setQuiz(initialQuizState);
  };

  const handleAddTitle = (title: string) => {
    setQuiz({ ...quiz, title });
  };

  const handleAddDescription = (description: string) => {
    setQuiz({ ...quiz, description });
  };

  const handleAddQuestion = (question: string, correctAnswer: string) => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          id: v4(),
          question,
          correctAnswer
        }
      ]
    });
  };
  const handleRemoveQuestion = (questionId: string) => {
    setQuiz({
      ...quiz,
      questions: quiz.questions.filter((question) => question.id !== questionId)
    });
  };

  //TODO: Add a func to implement reordering of questions

  return { quiz, handleResetQuiz, handleAddTitle, handleAddDescription, handleAddQuestion, handleRemoveQuestion };
};

export { useQuiz };
