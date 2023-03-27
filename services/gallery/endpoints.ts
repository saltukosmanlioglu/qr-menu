import service from "@/services/instance";
import { ReOrderRequest } from "@/utils/types";

import { BaseApiResponse } from "../types";
import {
  Gallery,
  GalleryParams,
  GalleryRequest,
  GalleryResponse,
} from "./types";

export const create = (data: GalleryRequest) => service.post("galleries", data);

export const get = (params?: GalleryParams) =>
  service.get<GalleryResponse>("galleries", {
    params: { ...params, pageSize: 1000, pageIndex: 0 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Gallery>>(`galleries/${id}`);

export const remove = (id: string) => service.delete(`galleries/${id}`);

export const reorder = (data: ReOrderRequest) =>
  service.post("gallery/reorder", data);
