import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import { Category, CategoryRequest, CategoryResponse } from "./types";

export const create = (data: CategoryRequest) => {
  typeof data.parentId === "object" && delete data.parentId;

  return service.post("categories", data);
};

export const get = () => service.get<CategoryResponse>("categories");

export const getById = (id: string | number) =>
  service.get<BaseApiResponse<Category>>(`categories/${id}`);

export const remove = (id: string | number) =>
  service.delete(`categories/${id}`);

export const update = (id: string | number, data: CategoryRequest) =>
  service.patch(`categories/${id}`, data);
