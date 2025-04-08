import z from 'zod';

const questionSchema = z.object({
  id: z.string(),
  question: z.string().nonempty('Question is required'),
  correctAnswer: z.string().nonempty('Correct answer is required')
});

const quizSchema = z.object({
  id: z.string(),
  title: z.string().nonempty('Title is required'),
  description: z.string().optional(),
  questions: z.array(questionSchema).min(1, 'At least one question is required')
});

export { questionSchema, quizSchema };
