'use client';
import { useFieldArray } from 'react-hook-form';
import QuestionField from './questionField';
import { Button } from '../ui/button';

const QuestionArrayField = ({ error, control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions'
  });
  return (
    <div>
      {fields.map((item, index) => (
        <div
          key={item.id}
          className="my-4 rounded-lg border-2 border-slate-100 p-4"
        >
          <div className="flex justify-between">
            <div className="mb-4 text-xl font-semibold text-slate-700">
              Question {index + 1}
            </div>
            <Button variant={'destructive'} onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
          <QuestionField
            type="text"
            placeholder="Enter Question"
            name={`question`}
            index={index}
            register={register}
            label={`Question`}
            error={error?.[index]?.question}
          />
          <QuestionField
            type="text"
            placeholder="Enter Answer"
            name={`correctAnswer`}
            index={index}
            register={register}
            label={`Correct answer`}
            error={error?.[index]?.correctAnswer}
          />
        </div>
      ))}
      {error && <div className="mt-4 text-red-500">{error.message}</div>}
      <Button
        type="button"
        variant="outline"
        className="mt-4 w-full"
        onClick={() => {
          append({ question: '', answer: '' });
        }}
      >
        + Add Question{' '}
      </Button>
    </div>
  );
};

export default QuestionArrayField;
