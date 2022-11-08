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


interface IPropsProductCard{
  carTitle: string;
  carDescription: string;
  carPrice: number;
  carKm: number;
  carYear: number;
  carImage: string;
}

export const ProductCard: React.FC<IPropsProductCard> = (props) => {
  const {
    carDescription,
    carKm,
    carTitle,
    carPrice,
    carYear,
    carImage,
  } = props;

  return (
    <Container>
      <Figure>
        <img src={carImage} alt={carTitle} />
      </Figure>
      <Title>{carTitle}</Title>
      <Description>{carDescription}</Description>
      <CardFooter>
        <ContainerTags>
          <Button>
            {carKm} KM
          </Button>
          <Button>
            {carYear}
          </Button>
        </ContainerTags>
        <Price>R$ {carPrice},00</Price>
      </CardFooter>
    </Container>
  );
};
