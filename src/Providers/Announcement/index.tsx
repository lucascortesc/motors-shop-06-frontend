import { createContext, useContext, useEffect, useState } from "react";
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
  announcements: IAnnouncement[];
  cars: IAnnouncement[];
  motorCycles: IAnnouncement[];
}

const AnnouncementContext = createContext<AnnouncementProvider>(
  {} as AnnouncementProvider
);

export const useAnnouncements = () => useContext(AnnouncementContext);

export const AnnouncementsProvider = ({ children }: IChildren) => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);
  const [cars, setCars] = useState<IAnnouncement[]>([]);
  const [motorCycles, setMotorCycle] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = async () => {
    try {
      const response = await api.get("announcement");

      setAnnouncements(response.data);

      const carsResponse: IAnnouncement[] = [];
      const motorCyclesResponse: IAnnouncement[] = [];

      response.data.forEach((announcement: IAnnouncement) => {
        if (announcement.vehicle_type === "car") {
          carsResponse.push(announcement);
        } else {
          motorCyclesResponse.push(announcement);
        }
      });

      setCars(carsResponse);
      setMotorCycle(motorCyclesResponse);
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado, tente novamente");
    }
  };

  const createAnnouncement = async (
    data: IAnnouncementRequest,
    setOpenModal: (arg: boolean) => void
  ) => {
    try {
      const response = await api.post("announcement", data);

      // setAnnouncements([...announcements, response.data]);
      getAnnouncements();

      toast.success("Anuncio criado com sucesso!");
      setOpenModal(false);
    } catch (err) {
      console.log(err);
      toast.error("Algo deu errado, tente novamente");
    }
  };

  return (
    <AnnouncementContext.Provider
      value={{ announcements, cars, motorCycles, createAnnouncement }}
    >
      {children}
    </AnnouncementContext.Provider>
  );
};
