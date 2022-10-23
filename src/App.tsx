import { useState } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import { Modal } from "./Components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const testSchema = yup.object().shape({
  test1: yup.string().required(),
  test2: yup.string().required(),
  test3: yup.string().required(),
});

function App() {
  interface schemaProps {
    test1: string;
    test2: string;
    test3: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({ resolver: yupResolver(testSchema) });

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
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <span>{errors.test1?.message}</span>
            <Input
              label={"Label"}
              placeholder={"Placeholder"}
              register={register("test1")}
              error={errors.test1}
              defaultValue={"abcdfgh"}
            />
            <Input
              label={"Label"}
              placeholder={"Placeholder"}
              width={"small"}
              register={register("test2")}
              error={errors.test2}
            />
            <Input
              label={"Label"}
              placeholder={"Placeholder"}
              type={"textArea"}
              register={register("test3")}
              error={errors.test3}
            />
            <Button type="submit" className="button_big-text" desing="grey1">
              Enviar
            </Button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default App;
