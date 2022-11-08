import { Header } from "../../Components/Header";
import car from "../../assets/car1.png";
import { Button } from "../../Components/Button";

import {
  Main,
  DivMain,
  SectionImg,
  SectionDetails,
  SectionDescription,
  SectionComments,
  SectionCommentUser,
  H2,
  DivFooter,
  DivContent,
  Aside,
  DivUser,
  DivComment,
  DivName,
  DivSuggestions,
  Ul,
  Overlay,
  DivSection
} from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const VehicleDetails = () => {
  return (
    <>
      <Header />

      <Main>
        <DivMain>
          <DivContent>
            <SectionImg>
              <div>
                <img src={car} alt="car"/>
              </div>
            </SectionImg>
            <SectionDetails>
              <H2>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200
              </H2>
              <DivFooter>
                <div>
                  <div>
                    <span>2013</span>
                    <span>0 KM</span>
                  </div>
                  <span>R$ 00,000.00</span>
                </div>

                <Button desing={"brand1"} className={"body-1-600"} width={"100px"}>
                  Comprar
                </Button>
              </DivFooter>
            </SectionDetails>

            <SectionDescription>
              <H2>Descrição</H2>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </SectionDescription>
          </DivContent>
          <Aside>
            <div>
              <H2>Fotos</H2>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <SwiperSlide className="mySlide">
                    <img src={car} alt="car" key={item} id={"imgcar"}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <DivUser>
              <div>SL</div>
              <span>Samuel Leao</span>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>

              <Button
                desing={"grey1"} className={"button_big-text"} width={"206px"}
              >
                Ver todos anuncios
              </Button>
            </DivUser>
          </Aside>
        </DivMain>
        <SectionComments>
          <Overlay />
        </SectionComments>

        <SectionCommentUser>
          <DivSection>
            <div>
              <DivName>
                <div>SL</div>
                <span>Samuel Leão</span>
              </DivName>

              <DivComment>
                <textarea placeholder="Digite seu comentario" />
                <Button
                  desing={"brand1"} className={"body-1-600"} width={"108px"} 
                >
                  Comentar
                </Button>
              </DivComment>
            </div>

            <DivSuggestions>
              <span>Gostei muito!</span>
              <span>Incrivel</span>
              <span>Recomendarei para meus amigos!</span>
            </DivSuggestions>
          </DivSection>
          <Overlay />
        </SectionCommentUser>
      </Main>
    </>
  );
};

export default VehicleDetails;