type Props = {
  name: string;
  label: string;
  type: string;
  className?: string;
  containerClassName?: string;
  maxLength?: number;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
};
export default function Input({
  name,
  label,
  type,
  defaultValue,
  maxLength,
  required,
  disabled,
  className,
  containerClassName
}: Props) {
  return (
    <div
      className={`flex flex-col ${
        containerClassName ? containerClassName : ""
      }`}
    >
      <label htmlFor={name} className='font-light text-md text-slate-500'>
        <span>{label}</span>
      </label>
      <input
        className={`border border-slate-300 h-7 rounded-md my-2 pl-2 outline-none shadow-sm
         ${disabled && "text-gray-400"} ${className?className:''}`}
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
}
