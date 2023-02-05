import service from "@/services/admin/instance";

import { Category, CategoryRequest, CategoryResponse } from "./types";

export const create = (data: CategoryRequest) => service.post("category", data);

export const get = () => service.get<CategoryResponse>("category");

export const getById = (id: string) => service.get<Category>(`category/${id}`);

export const remove = (id: string) => service.get(`category/${id}`);

export const update = (id: string, data: CategoryRequest) =>
  service.put(`category/${id}`, data);
