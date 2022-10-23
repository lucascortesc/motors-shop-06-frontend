import { InputWrap } from "./styles";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  type?: string;
  width?: string;
  defaultValue?: string;
  register: UseFormRegisterReturn;
  error: FieldError | undefined;
}

export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder,
  width = "default",
  defaultValue,
  register,
  error,
}) => {
  const [value, setValue] = useState<string>(defaultValue ? defaultValue : "");

  return (
    <InputWrap type={type} width={width}>
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
