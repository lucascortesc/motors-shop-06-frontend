import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}


export interface IImages {
  id: string;
  img_url: string;
}

export interface IAnnouncementRequest {
  ad_type: string;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  vehicle_type: string;
  published: boolean;
  images: IImages[];
}

export interface IAnnouncement extends IAnnouncementRequest {
  id: string;
  is_sold: boolean;
  is_active: boolean;
  created_at: Date | string;
}