import React from "react";
import {
  CardFooter,
  Container,
  ContainerTags,
  Description,
  Figure,
  Price,
  Title,
  Button,
} from "./styles";

interface IPropsProductCard {
  carTitle: string;
  carDescription: string;
  carPrice: number;
  carKm: number;
  carYear: number;
  carImage: string;
  [props: string]: any;
}

export const ProductCard: React.FC<IPropsProductCard> = (props) => {
  const { carDescription, carKm, carTitle, carPrice, carYear, carImage } =
    props;

  return (
    <Container>
      <Figure>
        <img src={carImage} alt={carTitle} />
      </Figure>
      <Title className="heading-7-500">{carTitle}</Title>
      <Description className="body-2-400">{carDescription}</Description>
      <CardFooter>
        <ContainerTags>
          <Button className="body-2-500">{carKm} KM</Button>
          <Button className="body-2-500">{carYear}</Button>
        </ContainerTags>
        <Price>
          R${" "}
          {carPrice.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
      </CardFooter>
    </Container>
  );
};
