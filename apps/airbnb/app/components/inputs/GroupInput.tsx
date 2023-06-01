import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface GroupInputProps {
  id: string;
  label: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: boolean;
  autocomplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const GroupInput: React.FC<GroupInputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  autocomplete = 'on',
  placeholder = ' ',
  required,
  register,
  errors,
}) => {
  return (
    <div
      className={`relative bg-white overflow-hidden border-[1px] first-of-type:rounded-t-md last-of-type:rounded-b-md border-t-0 first-of-type:border-t-[1px]
        ${
          errors[id]
            ? 'border-rose-500 focus-within:border-rose-500'
            : 'border-neutral-400 focus-within:border-black'
        }
      `}
    >
      <input
        id={id}
        type={type}
        autoComplete={autocomplete}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        className={`peer w-full px-4 pt-7 pb-3 font-light bg-transparent outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        ${formatPrice ? 'pl-9' : 'pl-4'}

    `}
      />
      <label className="absolute left-4 top-3 text-xs opacity-70">{label}</label>
    </div>
  );
};

export default GroupInput;
