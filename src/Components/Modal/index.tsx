import { Background, StyledModal } from "./styles";
import { IChildren } from "../../interfaces";

interface Props extends IChildren {
  title: string;
  setOpenModal: (arg: boolean) => void;
}

export const Modal: React.FC<Props> = ({ children, title, setOpenModal }) => {
  return (
    <Background>
      <StyledModal>
        <div className="modal__header">
          <h1 className="heading-7-500">{title}</h1>
          <p onClick={() => setOpenModal(false)}>X</p>
        </div>
        <div className="modal__body">{children}</div>
      </StyledModal>
    </Background>
  );
};
