import service from "@/services/instance";

import {
  SubProduct,
  SubProductLanguageSupportRequest,
  SubProductRequest,
  SubProductResponse,
} from "./types";

export const create = (data: SubProductRequest) =>
  service.post("sub-products", data);

export const createLanguage = (data: SubProductLanguageSupportRequest) =>
  service.post("sub-products/language", data);

export const get = () => service.get<SubProductResponse>("sub-products");

export const getById = (id: number) =>
  service.get<SubProduct>(`sub-products/${id}`);

export const remove = (id: number) => service.delete(`sub-products/${id}`);

export const update = (id: number, data: SubProductRequest) =>
  service.put(`sub-products/${id}`, data);
