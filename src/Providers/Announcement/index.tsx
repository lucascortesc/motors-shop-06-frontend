import { createContext, useContext, useState } from "react";
import { IChildren } from "../../interfaces";

interface AnnouncementProvider {}

const AnnouncementContext = createContext<AnnouncementProvider>(
  {} as AnnouncementProvider
);

export const useAnnouncements = () => useContext(AnnouncementContext);

export const AnnouncementsProvider = ({ children }: IChildren) => {
  return (
    <AnnouncementContext.Provider value={{}}>
      {children}
    </AnnouncementContext.Provider>
  );
};
