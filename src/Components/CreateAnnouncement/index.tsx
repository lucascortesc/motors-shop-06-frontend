import { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { StyledForm } from "./styles";
import { Input } from "../Input";
import { createAnnouncementSchema } from "../../Validation";
import { IAnnouncementRequest, IImages } from "../../interfaces";
import { useAnnouncements } from "../../Providers/Announcement";

interface Props {
  setOpenModal: (arg: boolean) => void;
}

interface schemaProps {
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  imgFront?: string;
  [value: string]: any;
}

export const CreateAnnouncement: React.FC<Props> = ({ setOpenModal }) => {
  const [announcementType, setAnnouncementType] = useState<string>("sell");
  const [vehicleType, setVehicleType] = useState<string>("car");
  const [imgQuantity, setImgQuantity] = useState<number[]>([1]);

  const { createAnnouncement } = useAnnouncements();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    resolver: yupResolver(createAnnouncementSchema),
    mode: "onSubmit",
    context: { imgQuantity: imgQuantity },
  });

  const handleSetAnnouncementType = (button: HTMLElement) => {
    const announcementButtonType: string = button.id;
    if (announcementButtonType === "sell") {
      setAnnouncementType("sell");
    } else {
      setAnnouncementType("auction");
    }
  };

  const handleSetVehicleType = (button: HTMLElement) => {
    const vehicleButtonType: string = button.id;
    if (vehicleButtonType === "car") {
      setVehicleType("car");
    } else {
      setVehicleType("motorcycle");
    }
  };

  const handleCreateAnnouncement = (data: schemaProps) => {
    const imgFront: string = data.imgFront ? data.imgFront : "";

    const images: IImages[] = [
      { img_url: imgFront },
      ...imgQuantity.map((position: number) => {
        const img = data[`img${position}`];
        delete data[`img${position}`];
        return {
          img_url: img as string,
        };
      }),
    ];

    delete data.imgFront;

    const newAnnouncement: IAnnouncementRequest = {
      ...data,
      ad_type: announcementType,
      vehicle_type: vehicleType,
      published: true,
      images: images,
    };

    createAnnouncement(newAnnouncement, setOpenModal);
  };

  return (
    <Modal title="Criar anuncio" setOpenModal={setOpenModal}>
      <StyledForm onSubmit={handleSubmit(handleCreateAnnouncement)}>
        <p className="body-2-500 button__types">Tipo de anuncio</p>
        <div className="button__wrap">
          <Button
            className="button_big-text"
            desing={announcementType === "sell" ? "brand1" : "outline2"}
            id={"sell"}
            onClick={(e) => handleSetAnnouncementType(e.target as HTMLElement)}
            width="228px"
            type="button"
          >
            Venda
          </Button>
          <Button
            className="button_big-text"
            desing={announcementType === "sell" ? "outline2" : "brand1"}
            id={"auction"}
            onClick={(e) => handleSetAnnouncementType(e.target as HTMLElement)}
            width="228px"
            type="button"
          >
            Leilão
          </Button>
        </div>
        <p className="body-2-500">Informações do veículo</p>
        <Input
          label="Título"
          register={register("title")}
          error={errors.title}
          placeholder="Digitar título"
        />
        <div className="createAnnouncement__inputs-wrap">
          <Input
            label="Ano"
            register={register("year")}
            error={errors.year}
            placeholder="Digitar ano"
            width="small"
          />
          <Input
            label="Quilometragem"
            register={register("km")}
            error={errors.km}
            placeholder="0"
            width="small"
          />
          <Input
            label="Preço"
            register={register("price")}
            error={errors.price}
            placeholder="Digitar preço"
            width="small"
            className="createAnnouncement__inputs-mobile"
          />
        </div>
        <Input
          label="Descrição"
          register={register("description")}
          error={errors.description}
          placeholder="Digitar descrição"
          type="textArea"
        />
        <p className="body-2-500 button__types">Tipo de veículo</p>
        <div className="button__wrap">
          <Button
            className="button_big-text"
            desing={vehicleType === "car" ? "brand1" : "outline2"}
            id={"car"}
            onClick={(e) => handleSetVehicleType(e.target as HTMLElement)}
            width="228px"
            type="button"
          >
            Carro
          </Button>
          <Button
            className="button_big-text"
            desing={vehicleType === "car" ? "outline2" : "brand1"}
            id={"motorcycle"}
            onClick={(e) => handleSetVehicleType(e.target as HTMLElement)}
            width="228px"
            type="button"
          >
            Moto
          </Button>
        </div>
        <Input
          label="Imagem da capa"
          register={register("imgFront")}
          error={errors.imgFront}
          placeholder="Inserir URL da imagem"
        />
        {imgQuantity.map((position) => {
          return (
            <Input
              key={`img${position}`}
              label={`${position}° Imagem da galeria`}
              register={register(`img${position}`)}
              error={errors[`img${position}`]}
              placeholder="Inserir URL da imagem"
            />
          );
        })}

        <button
          className="createAnnouncement__image-add"
          type="button"
          onClick={() =>
            setImgQuantity([...imgQuantity, imgQuantity.length + 1])
          }
          disabled={imgQuantity.length === 6}
        >
          Adicionar campo para imagem da galeria
        </button>
        <div className="createAnnouncement__submit-buttons">
          <Button
            className="button_big-text"
            desing="negative"
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            className="button_big-text"
            desing="brand1"
            // disabled={!isValid}
          >
            Criar anúncio
          </Button>
        </div>
      </StyledForm>
    </Modal>
  );
};
