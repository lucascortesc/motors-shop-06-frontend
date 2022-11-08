import { Button } from "../Button";
import { ProductCard } from "../ProductCard";
import { ButtonsProductCard, StyledCarousel } from "./styles";
import { useState, useEffect } from "react";
import { IAnnouncementRequest } from "../../interfaces";
import axios from "axios";
import { useAnnouncements } from "../../Providers/AdvertiserAds";

interface CarouselProps {
  advertiser: boolean;
  name: string;
}

export const ProductCarousel: React.FC<CarouselProps> = (
  props: CarouselProps
) => {
  // const [car, setCar] = useState<IAnnouncementRequest[]>([]);

  const { cars, announcements } = useAnnouncements();
  if (cars.length > 0) {
    console.log(cars);
  }

  return (
    <StyledCarousel>
      <h3 className="heading-5-600">{props.name}</h3>
      <ul>
        {cars.map((item, index) =>
          item.ad_type == "venda" ? (
            <li key={index}>
              <ProductCard
                carImage={item.images[0].img_url}
                carTitle={item.title}
                carDescription={item.description}
                carKm={Number(item.km)}
                carYear={item.year}
                carPrice={item.price}
              />
              {props.advertiser ? (
                <ButtonsProductCard>
                  <Button desing="outline1" className="button_medium-text">
                    Editar
                  </Button>
                  <Button desing="outline1" className="button_big-text">
                    Ver como
                  </Button>
                </ButtonsProductCard>
              ) : undefined}
            </li>
          ) : undefined
        )}
      </ul>
    </StyledCarousel>
  );
};
