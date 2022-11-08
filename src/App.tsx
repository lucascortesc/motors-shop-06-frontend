import { useState } from "react";
import { CreateAnnouncement } from "./Components/CreateAnnouncement";
import { Toaster } from "react-hot-toast";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="App">
      <Toaster />
      {openModal && <CreateAnnouncement setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
