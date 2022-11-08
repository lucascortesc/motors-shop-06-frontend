import { InputWrap } from "./styles";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  width?: string;
  defaultValue?: string;
  className?: string;
  register: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder,
  width = "default",
  defaultValue,
  register,
  error,
  className,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");

  return (
    <InputWrap type={type} width={width} className={className}>
      <label className="inputWrap__label">{label}</label>
      <input
        className={error ? "inputWrap__input error" : "inputWrap__input"}
        placeholder={placeholder}
        value={value}
        {...register}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrap>
  );
};
