import { Button } from "./Components/Button";
import { ProductCard } from "./Components/ProductCard";

function App() {
  return (
    <div className="App">
      <Button
        desing={"brand1"}
        onClick={() => console.log("Text Button")}
        className="button_big-text"
      >
        Text Button
      </Button>

      <ProductCard
        carDescription={
          "fnwej ekfmew enfirfmf fniewfrnmf nefrgnwim fnieqemfnc iefmniemn nfiewn"
        }
        carKm={32}
        carTitle={"Ford Ka"}
        carPrice={55000}
        carYear={2019}
        carImage={
          "https://http2.mlstatic.com/D_NQ_NP_976319-MLB41007342936_032020-O.jpg"
        }
      />
    </div>
  );
}

export default App;
