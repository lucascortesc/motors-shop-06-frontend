import { useState } from "react";
import { CreateAnnouncement } from "./Components/CreateAnnouncement";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="App">
      <CreateAnnouncement setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;
