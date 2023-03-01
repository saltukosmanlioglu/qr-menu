import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import {
  Category,
  CategoryParams,
  CategoryRequest,
  CategoryResponse,
} from "./types";

export const create = (data: CategoryRequest) =>
  service.post("categories", data);

export const get = (params?: CategoryParams) =>
  service.get<CategoryResponse>("categories", { params });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Category>>(`categories/${id}`);

export const remove = (id: string) => service.delete(`categories/${id}`);

export const update = (id: string, data: CategoryRequest) =>
  service.patch(`categories/${id}`, data);
