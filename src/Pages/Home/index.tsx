import { Button } from "../../Components/Button";
import { ProductCard } from "../../Components/ProductCard";
import { useAnnouncements } from "../../Providers/Announcement";
import { Announcements, AnnouncementTitle, MainHeader } from "./styles";

export const Home = () => {
  const { cars, motorCycles } = useAnnouncements();

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
      <AnnouncementTitle
        className="heading-5-600 announcements__title"
        id="cars"
      >
        Carros
      </AnnouncementTitle>
      <Announcements>
        <div className="announcements__container">
          {cars.length > 0 ? (
            cars.map((announcement) => {
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
            })
          ) : (
            <h3>Estamos sem anúncios no momento"</h3>
          )}
        </div>
      </Announcements>
      <AnnouncementTitle
        className="heading-5-600 announcements__title"
        id="motorCycles"
      >
        Motos
      </AnnouncementTitle>
      <Announcements>
        <div className="announcements__container">
          {motorCycles.length > 0 ? (
            motorCycles.map((announcement) => {
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
            })
          ) : (
            <h3>Estamos sem anúncios no momento"</h3>
          )}
        </div>
      </Announcements>
    </>
  );
};
