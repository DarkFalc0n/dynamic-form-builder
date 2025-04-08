import QuizForm from '@/components/quiz-form';
import constants from './constants';

const CreateQuizForm = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-200 p-8">
      <div className="h-full w-3/4 rounded-lg bg-white px-8 py-10 overflow-y-scroll">
        <h2 className="text-3xl font-bold text-slate-800">{constants.title}</h2>
        <div className="p-4 rounded-lg border-2 border-slate-100">
          <QuizForm />
        </div>
      </div>
    </div>
  );
};

export default CreateQuizForm;
