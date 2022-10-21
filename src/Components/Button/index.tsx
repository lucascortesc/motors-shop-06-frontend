import { StyledButton } from "./styles";
import { IChildren } from "../../interfaces";

interface IProps extends IChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  desing: string;
  [props: string]: any;
}

export const Button: React.FC<IProps> = (props) => {
  const { className, onClick, children, desing, ...rest } = props;

  return (
    <StyledButton onClick={onClick} desing={desing} className={className} {...rest}>
      {children}
    </StyledButton>
  );
};
