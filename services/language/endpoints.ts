import service from "@/services/instance";
import { ReOrderRequest } from "@/utils/types";

import { BaseApiResponse } from "../types";
import {
  Language,
  LanguageParams,
  LanguageRequest,
  LanguageResponse,
} from "./types";

export const create = (data: LanguageRequest) =>
  service.post("languages", data);

export const get = (params?: LanguageParams) =>
  service.get<LanguageResponse>("languages", {
    params: { ...params, pageIndex: 0, pageSize: 1000 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Language>>(`languages/${id}`);

export const remove = (id: string) => service.delete(`languages/${id}`);

export const reorder = (data: ReOrderRequest) =>
  service.post("languages/reorder", data);

export const update = (id: string, data: LanguageRequest) =>
  service.patch(`languages/${id}`, data);
