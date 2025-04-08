import { FormFieldProps } from '@/lib/types';
import { Input } from '../ui/input';

const FormField: React.FC<FormFieldProps> = ({
  title,
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber
}) => (
  <div className="mb-4">
    {title && (
      <label className="text-xl font-semibold text-gray-700">{title}</label>
    )}
    <Input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="mt-2"
    />
    {error && <div className="text-red-500">{error.message}</div>}
  </div>
);
export default FormField;
