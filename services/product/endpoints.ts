import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import {
  Product,
  ProductParams,
  ProductRequest,
  ProductResponse,
} from "./types";

export const create = (data: ProductRequest) => service.post("products", data);

export const get = (params?: ProductParams) =>
  service.get<ProductResponse>("products", { params });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Product>>(`products/${id}`);

export const remove = (id: string) => service.delete(`products/${id}`);

export const update = (id: string, data: ProductRequest) =>
  service.patch(`products/${id}`, data);
