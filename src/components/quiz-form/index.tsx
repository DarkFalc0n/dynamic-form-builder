'use client';
import { TQuiz } from '@/lib/types';
import FormField from '../hook-form/formField';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import QuestionArrayField from '../hook-form/questionArrayField';
import { zodResolver } from '@hookform/resolvers/zod';
import { quizSchema } from '@/lib/schema/quiz.schema';

const QuizForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TQuiz>({
    resolver: zodResolver(quizSchema)
  });


  return (
    <div className="my-4 w-full h-fullI">
      <FormField
        title="Quiz Title"
        type="text"
        placeholder="Enter Quiz Title"
        name="title"
        register={register}
        error={errors.title}
      />

      <FormField
        title="Quiz Description"
        type="text"
        placeholder="Enter Quiz Description"
        name="description"
        register={register}
        error={errors.description}
      />

      <QuestionArrayField error={errors.questions} {...{ control, register }} />

      <Button
        type="button"
        variant="default"
        className="mt-8 bg-slate-600 text-white"
        onClick={handleSubmit((data) => {
            // Handle form submission logic here
        })}
      >
        Create
      </Button>
    </div>
  );
};

export default QuizForm;
