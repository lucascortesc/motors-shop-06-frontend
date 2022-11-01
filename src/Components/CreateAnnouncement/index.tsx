import { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {
  setOpenModal: (arg: boolean) => void;
}

interface schemaProps {
  [props: string]: any;
}

const testSchema = yup.object().shape({
  test1: yup.string().required(),
  test2: yup.string().required(),
  test3: yup.string().required(),
});

export const CreateAnnouncement: React.FC<Props> = ({ setOpenModal }) => {
  const [announcementType, setAnnouncementType] = useState<String>("sell");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({ resolver: yupResolver(testSchema) });

  const handleSetType = (button: HTMLElement) => {
    const announcementButtonType: string = button.id;
    if (announcementButtonType === "sell") {
      setAnnouncementType("sell");
    } else {
      setAnnouncementType("auction");
    }
  };

  return (
    <Modal title="Criar anuncio" setOpenModal={setOpenModal}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p className="body-2-500">Tipo de anuncio</p>
        <div>
          <Button
            className="button_big-text"
            desing={announcementType === "sell" ? "brand1" : "outline2"}
            id={"sell"}
            onClick={(e) => handleSetType(e.target as HTMLElement)}
          >
            Venda
          </Button>
          <Button
            className="button_big-text"
            desing={announcementType === "sell" ? "outline2" : "brand1"}
            id={"auction"}
            onClick={(e) => handleSetType(e.target as HTMLElement)}
          >
            Leilão
          </Button>
        </div>
        <p className="body-2-500">Informações do veículo</p>
      </form>
    </Modal>
  );
};
