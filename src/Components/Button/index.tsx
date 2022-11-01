import { StyledButton } from "./styles";
import { IChildren } from "../../interfaces";

interface IProps extends IChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  desing: string;
  width?: string;
  [props: string]: any;
}

export const Button: React.FC<IProps> = (props) => {
  const { className, onClick, children, desing, width, ...rest } = props;

  return (
    <StyledButton
      onClick={onClick}
      desing={desing}
      className={className}
      width={width}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
