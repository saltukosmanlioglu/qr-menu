import service from "@/services/instance";

import { Gallery, GalleryRequest, GalleryResponse } from "./types";

export const create = (data: GalleryRequest) => service.post("gallery", data);

export const get = () => service.get<GalleryResponse>("gallery");

export const getById = (id: string) => service.get<Gallery>(`gallery/${id}`);

export const remove = (id: string) => service.get(`gallery/${id}`);

export const update = (id: string, data: GalleryResponse) =>
  service.put(`gallery/${id}`, data);
