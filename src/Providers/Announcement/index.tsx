import { createContext, useContext, useState } from "react";
import {
  IAnnouncement,
  IAnnouncementRequest,
  IChildren,
} from "../../interfaces";
import { api } from "../../Services/api";
import { toast } from "react-hot-toast";

interface AnnouncementProvider {
  createAnnouncement: (
    data: IAnnouncementRequest,
    setOpenModal: (arg: boolean) => void
  ) => void;
}

const AnnouncementContext = createContext<AnnouncementProvider>(
  {} as AnnouncementProvider
);

export const useAnnouncements = () => useContext(AnnouncementContext);

export const AnnouncementsProvider = ({ children }: IChildren) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const createAnnouncement = async (
    data: IAnnouncementRequest,
    setOpenModal: (arg: boolean) => void
  ) => {
    try {
      const response = await api.post("announcement", data);

      setAnnouncements([...announcements, response.data]);
      toast.success("Anuncio criado com sucesso!");
      setOpenModal(false);
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado, tente novamente");
    }
  };

  return (
    <AnnouncementContext.Provider value={{ createAnnouncement }}>
      {children}
    </AnnouncementContext.Provider>
  );
};
