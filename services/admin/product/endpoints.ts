import service from "@/services/admin/instance";

import { Product, ProductRequest, ProductResponse } from "./types";

export const create = (data: ProductRequest) => service.post("product", data);

export const get = () => service.get<ProductResponse>("product");

export const getById = (id: string) => service.get<Product>(`product/${id}`);

export const remove = (id: string) => service.get(`product/${id}`);

export const update = (id: string, data: ProductResponse) =>
  service.put(`product/${id}`, data);
