import { AuctionCard } from "../AuctionCard";
import { StyledCarouselAuction } from "./styles";
import { useEffect, useState } from "react";
import { IAnnouncementRequest } from "../../interfaces";
import axios from "axios";

interface IAuctionProps {
  advertiser?: boolean;
}

export const AuctionCarousel = (props: IAuctionProps) => {
  const { advertiser } = props;
  const [car, setCar] = useState<IAnnouncementRequest[]>([]);

  return (
    <StyledCarouselAuction>
      <h3 className="heading-5-600">Leilão</h3>
      <ul className="carousel">
        {car.map((item, index) =>
          item.ad_type == "leilao" ? (
            <AuctionCard
              key={index}
              advertiserPage={advertiser}
              image={item.images[0].img_url}
              title={item.title}
              description={item.description}
              year={item.year}
              km={String(item.km)}
              price={String(item.price)}
            />
          ) : undefined
        )}
      </ul>
    </StyledCarouselAuction>
  );
};
