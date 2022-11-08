import { useState } from "react";
import { CreateAnnouncement } from "./Components/CreateAnnouncement";
import { Toaster } from "react-hot-toast";
import { Home } from "./Pages/Home";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(true);
  return (
    <div className="App">
      <Toaster />
      <Home />
      {openModal && <CreateAnnouncement setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
