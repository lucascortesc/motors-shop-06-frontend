import { Button } from "../../Components/Button";
import { ProductCard } from "../../Components/ProductCard";
import { useAnnouncements } from "../../Providers/Announcement";
import { Announcements, MainHeader } from "./styles";

export const Home = () => {
  const { announcements, cars, motorCycles } = useAnnouncements();

  return (
    <>
      <MainHeader>
        <div className="mainHeader__container">
          <h1 className="heading-1-700 mainHeader__title">
            Velocidade e experiência em um lugar feito para você
          </h1>
          <p className="body-1-400 mainHeader__body">
            Um ambiente feito para você explorar o seu melhor
          </p>
          <div className="mainHeader__buttons-container">
            <Button
              className="button_big-text mainHeader__button"
              desing={"outineLight"}
            >
              Leilão
            </Button>
            <Button
              className="button_big-text mainHeader__button"
              desing={"outineLight"}
            >
              Carros
            </Button>
            <Button
              className="button_big-text mainHeader__button"
              desing={"outineLight"}
            >
              Motos
            </Button>
          </div>
        </div>
      </MainHeader>
      <Announcements>
        <h2 className="heading-5-600 announcements__title">Carros</h2>
        <div className="announcements__container">
          {cars.map((announcement) => {
            return (
              <ProductCard
                key={announcement.id}
                carTitle={announcement.title}
                carDescription={announcement.description}
                carPrice={announcement.price}
                carKm={announcement.km}
                carYear={announcement.year}
                carImage={announcement.images[0].img_url}
              />
            );
          })}
        </div>
      </Announcements>
      <Announcements>
        <h2 className="heading-5-600 announcements__title">Motos</h2>
        <div className="announcements__container">
          {motorCycles.map((announcement) => {
            return (
              <ProductCard
                key={announcement.id}
                carTitle={announcement.title}
                carDescription={announcement.description}
                carPrice={announcement.price}
                carKm={announcement.km}
                carYear={announcement.year}
                carImage={announcement.images[0].img_url}
              />
            );
          })}
        </div>
      </Announcements>
    </>
  );
};
