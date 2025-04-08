import type { FC, ReactNode } from 'react';
import { questionSchema, quizSchema } from './schema/quiz.schema';
import { z } from 'zod';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface DefaultFCProps {
  children: ReactNode;
  className: string;
}
export type FCProps<T = unknown> = Partial<DefaultFCProps> & T;
export type ExtendedFC<T = unknown> = FC<FCProps<T>>;

export type TLayout = FC<Pick<DefaultFCProps, 'children'>>;

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export type TPage = FC<Partial<PageProps>>;

export type TUser = {
  id: string;
  name: string;
  email: string;
};

export type TQuiz = z.infer<typeof quizSchema>;
export type TQuestion = z.infer<typeof questionSchema>;

export type FormFieldProps = {
  title: string;
  type: string;
  placeholder: string;
  name: ValidFieldNames<TQuiz>;
  register: UseFormRegister<TQuiz>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type QuestionFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames<TQuestion>;
  register: UseFormRegister<TQuestion>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  index: number;
  label?: string;
};

export type ValidFieldNames<T> = keyof T;

export type Prettify<T> = {
  [K in keyof T]: T[K];
};
