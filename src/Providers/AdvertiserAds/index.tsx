import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { IAnnouncement, IChildren } from "../../interfaces";
import { toast } from "react-hot-toast";
import axios from "axios";

interface AnnouncementProvider {
  announcements?: IAnnouncement[];
  cars: IAnnouncement[];
  motorCycles: IAnnouncement[];
}

const AnnouncementContext = createContext<AnnouncementProvider>(
  {} as AnnouncementProvider
);

export const useAnnouncements = () => useContext(AnnouncementContext);

export const AnnouncementsProvider = ({ children }: IChildren) => {
  const [cars, setCars] = useState<IAnnouncement[]>([]);
  const [motorCycles, setMotorCycle] = useState<IAnnouncement[]>([]);
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>([]);

  useEffect(() => {
    getAnnouncements();
  }, [announcements.length]);

  const getAnnouncements = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI1OWE2ZTUwLTlhMjUtNDI1Ny1hOWZlLWRlZjdhZWRmNGYxMyIsImlhdCI6MTY2Nzg0NTY4MCwiZXhwIjoxNjY3OTMyMDgwfQ.BCCJeyZGhub33Akdm_BdcQQP6_Mt-pZCuR6pURYuPqE";

    try {
      const response = await api.get("announcement/advertiser", {
        headers: { authorization: `Bearer ${token}` },
      });

      setAnnouncements(response.data);

      const carsResponse: IAnnouncement[] = [];
      const motorCyclesResponse: IAnnouncement[] = [];

      announcements.forEach((announcement: IAnnouncement) => {
        if (announcement.vehicle_type === "Carro") {
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

  return (
    <AnnouncementContext.Provider value={{ cars, motorCycles, announcements }}>
      {children}
    </AnnouncementContext.Provider>
  );
};
