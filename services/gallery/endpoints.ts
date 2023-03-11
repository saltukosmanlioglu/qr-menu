import service from "@/services/instance";
import { ReOrderRequest } from "@/utils/types";

import { BaseApiResponse } from "../types";
import { Gallery, GalleryRequest, GalleryResponse } from "./types";

export const create = (data: GalleryRequest) => service.post("galleries", data);

export const get = () => service.get<GalleryResponse>("galleries");

export const getById = (id: string) =>
  service.get<BaseApiResponse<Gallery>>(`galleries/${id}`);

export const remove = (id: string) => service.delete(`galleries/${id}`);

export const reorder = (data: ReOrderRequest) =>
  service.post("gallery/reorder", data);
