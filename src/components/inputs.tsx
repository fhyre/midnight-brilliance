import { twMerge } from "tailwind-merge";

type RoundedInputProps = {
  placeholder: string;
  className?: string;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const RoundedInput = ({
  placeholder,
  className,
  type,
  onChange,
  required,
}: RoundedInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(
        "border-gray-299 rounded-xl border px-2 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black",
        className,
      )}
      onChange={onChange}
      required={required}
    />
  );
};
