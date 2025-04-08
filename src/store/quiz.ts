import { TQuestion, TQuiz } from '@/lib/types';
import { create } from 'zustand';
import { v4 } from 'uuid';

type QuizStore = {
  quiz: TQuiz;
  setQuiz: (quiz: TQuiz) => void;
};

const initialQuizState = {
  id: v4(),
  title: '',
  description: '',
  questions: [
    {
      id: v4(),
      question: '',
      correctAnswer: ''
    } as TQuestion
  ]
};

const useQuizStore = create<QuizStore>((set) => ({
  quiz: initialQuizState,
  setQuiz: (quiz) => set({ quiz })
}));

export { useQuizStore, initialQuizState };
