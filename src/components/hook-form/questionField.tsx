import { QuestionFieldProps } from "@/lib/types";
import { Input } from "../ui/input";

const QuestionField: React.FC<QuestionFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  valueAsNumber,
  index,
  error,
  label
}) => {
  return (
    <div className="mb-4">
      {label && <label className="my-2 text-gray-700">{label}</label>}
      <Input
        type={type}
        placeholder={placeholder}
        {...register(`questions.${index}.${name}`)}
      />
      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
};

export default QuestionField;

