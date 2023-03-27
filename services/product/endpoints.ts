import service from "@/services/instance";
import { ReOrderRequest } from "@/utils/types";

import { BaseApiResponse } from "../types";
import {
  Product,
  ProductParams,
  ProductRequest,
  ProductResponse,
} from "./types";

export const create = (data: ProductRequest) => service.post("products", data);

export const get = (params?: ProductParams) =>
  service.get<ProductResponse>("products", {
    params: { ...params, pageIndex: 0, pageSize: 1000 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Product>>(`products/${id}`);

export const remove = (id: string) => service.delete(`products/${id}`);

export const reorder = (data: ReOrderRequest) =>
  service.post("products/reorder", data);

export const update = (id: string, data: ProductRequest) =>
  service.patch(`products/${id}`, data);
