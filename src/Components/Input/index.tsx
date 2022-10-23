import { InputWrap } from "./styles";
import { IChildren } from "../../interfaces/index";

interface Props {
  label: string;
  placeholder?: string;
  type?: string;
  width?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type = "text",
  placeholder,
  width = "default",
}) => {
  return (
    <InputWrap type={type} width={width}>
      <label className="inputWrap__label">{label}</label>
      <input className="inputWrap__input" placeholder={placeholder}></input>
    </InputWrap>
  );
};
