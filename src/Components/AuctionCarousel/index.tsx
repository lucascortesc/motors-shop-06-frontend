import { AuctionCard } from "../AuctionCard";
import { StyledCarouselAuction } from "./styles";
import { useState } from "react";
import { IVehicle } from "../../interfaces";

interface IAuctionProps {
  advertiser?: boolean;
}

export const AuctionCarousel = (props: IAuctionProps) => {
  const { advertiser } = props;
  const [car, setCar] = useState<IVehicle[]>([]);

  return (
    <StyledCarouselAuction>
      <h3 className="heading-5-600">Leilão</h3>
      <ul className="carousel">
        {car.map((item) =>
          item.ad_type == "leilao" ? (
            <AuctionCard
              advertiserPage={advertiser}
              image={item.images[0].img_url}
              title={item.title}
              description={item.description}
              year={item.year}
              km={item.km}
              price={item.price}
            />
          ) : undefined
        )}
      </ul>
    </StyledCarouselAuction>
  );
};
