import { IChildren } from "../interfaces";
import { AnnouncementsProvider } from "./AdvertiserAds";

export const Providers = ({ children }: IChildren) => {
  return <AnnouncementsProvider>{children}</AnnouncementsProvider>;
};
