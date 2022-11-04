import { AdvertiserButtons, ButtonPageUser, StyledAuction } from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { Button } from "../Button";

interface IAuctionProps {
  advertiserPage?: boolean;
  title?: string;
  description?: string;
  image?: string;
  advertiser?: string;
  year?: number;
  km?: string;
  price?: string;
  id?: string;
  created_at?: Date;
}

export const AuctionCard: React.FC<IAuctionProps> = (props: IAuctionProps) => {
  // let arr = props.advertiser.split(" ");
  // arr.map((item) => console.log(item[0]));

  return (
    <StyledAuction
      image={
        props.image ||
        "https://www.webmotors.com.br/imagens/prod/349119/AUDI_A3_2.0_40_TFSI_MHEV_SPORTBACK_S_LINE_STRONIC_34911913194794470.webp?s=fill&w=130&h=97&q=70&t=true"
      }
    >
      <div className="timer">
        <MdOutlineWatchLater size={"20px"} color={"var(--brand1)"} />
        <span className="heading-7-500">01:58:00</span>
      </div>
      <div className="container-auction">
        <h2 className="heading-6-600">
          {props.title || "MBenz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"}
        </h2>
        <p className="body-1-400 auction-description">
          {props.description ||
            "Lorem ipsum dolor sdddddddddit amet consectetur adipisicing elit. Voluptate dadaadaea aadnsgsgaadsdskdi."}
        </p>
        <div className="auction-advertiser">
          <span className="body-2-500">LH</span>
          <h4 className="body-2-500">{props.advertiser || "Luis Henrique"}</h4>
        </div>
        <div className="product-details">
          <div className="year-km">
            <span className="body-2-500">{props.year || 2013}</span>
            <span className="body-2-500">{props.km || 0} KM</span>
          </div>
          <p className="heading-7-500">R$ {props.price || "00.000,00"}</p>
        </div>
      </div>
      {props.advertiserPage ? (
        <AdvertiserButtons>
          <Button desing="outineLight" className="button_medium-text">
            Editar
          </Button>
          <Button desing="outineLight" className="button_medium-text">
            Ver como
          </Button>
        </AdvertiserButtons>
      ) : (
        <ButtonPageUser className="button_big-text">
          Acessar Página do leilão
          <AiOutlineArrowRight size={"25px"} />
        </ButtonPageUser>
      )}
    </StyledAuction>
  );
};
