import { AuctionCarousel } from "../../Components/AuctionCarousel";
import { Button } from "../../Components/Button";
import { ProductCarousel } from "../../Components/ProductCarousel";
import { Advertiser } from "./styles";

export const AdvertiserPage = () => {
  return (
    <Advertiser>
      <div className="background">
        <section className="infoModal">
          <div className="initials-name">LH</div>
          <h2 className="heading-6-600">
            Luis Henrique <span className="body-2-500">Anunciante</span>
          </h2>
          <p className="advertiser-description body-1-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            molestias neque? Voluptatem, consequuntur nobis.
          </p>
          <Button desing={"outlineBrand1"} className="button_medium-text">
            Criar anuncio
          </Button>
        </section>
      </div>
      <AuctionCarousel advertiser />
      <ProductCarousel advertiser name="Carros" />
      <ProductCarousel advertiser name="Motos" />
    </Advertiser>
  );
};
