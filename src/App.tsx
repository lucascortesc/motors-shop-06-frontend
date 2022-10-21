import { Button } from "./Components/Button";

function App() {
  return (
    <div className="App">
      <Button desing={"brand1"} onClick={() => console.log("Text Button")} className="button_big-text">
        Text Button
      </Button>
    </div>
  );
}

export default App;
