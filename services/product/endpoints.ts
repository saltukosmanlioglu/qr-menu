import service from "@/services/instance";

import { Product, ProductRequest, ProductResponse } from "./types";

export const create = (data: ProductRequest) => service.post("products", data);

export const get = () => service.get<ProductResponse>("products");

export const getById = (id: number) => service.get<Product>(`products/${id}`);

export const remove = (id: number) => service.delete(`products/${id}`);

export const update = (id: number, data: ProductRequest) =>
  service.put(`products/${id}`, data);
