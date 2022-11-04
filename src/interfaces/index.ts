import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}


export interface IImages {
  id: string;
  img_url: string;
}

export interface IVehicle {
  id: string;
  title: string;
  description: string;
  ad_type: string;
  price: string;
  km: string;
  vehicle_type: string;
  year: number;
  images: IImages[];
  published: boolean;
  is_active: boolean;
  is_sold: boolean;
  created_at: Date;
}