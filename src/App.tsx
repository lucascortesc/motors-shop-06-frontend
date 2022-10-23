import { useState } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Modal } from "./Components/Modal";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="App">
      <Button
        onClick={() => setOpenModal(true)}
        className={"button_big-text"}
        desing={"brand1"}
      >
        Open Modal
      </Button>
      {openModal && (
        <Modal setOpenModal={setOpenModal} title={"Criar anuncio"}>
          <Input label={"Label"} placeholder={"Placeholder"} />
          <Input label={"Label"} placeholder={"Placeholder"} width={"small"} />
          <Input
            label={"Label"}
            placeholder={"Placeholder"}
            type={"textArea"}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
