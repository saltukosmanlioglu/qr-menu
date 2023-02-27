import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import { Category, CategoryRequest, CategoryResponse } from "./types";

export const create = (data: CategoryRequest) => {
  typeof data.parentId === "object" && delete data.parentId;

  return service.post("TR/categories", data);
};

export const get = () => service.get<CategoryResponse>("TR/categories");

export const getById = (id: string | number) =>
  service.get<BaseApiResponse<Category>>(`TR/categories/${id}`);

export const remove = (id: string | number) =>
  service.delete(`TR/categories/${id}`);

export const update = (id: string | number, data: CategoryRequest) =>
  service.patch(`TR/categories/${id}`, data);
