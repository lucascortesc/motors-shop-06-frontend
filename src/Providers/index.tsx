import { IChildren } from "../interfaces";
import { AnnouncementsProvider } from "./Announcement";

export const Providers = ({ children }: IChildren) => {
  return <AnnouncementsProvider>{children}</AnnouncementsProvider>;
};
