import service from "@/services/instance";
import { ReOrderRequest } from "@/utils/types";

import { BaseApiResponse } from "../types";
import { Language, LanguageRequest, LanguageResponse } from "./types";

export const create = (data: LanguageRequest) =>
  service.post("languages", data);

export const get = () => service.get<LanguageResponse>("languages");

export const getById = (id: string) =>
  service.get<BaseApiResponse<Language>>(`languages/${id}`);

export const remove = (id: string) => service.delete(`languages/${id}`);

export const reorder = (data: ReOrderRequest) =>
  service.post("languages/reorder", data);

export const update = (id: string, data: LanguageRequest) =>
  service.patch(`languages/${id}`, data);
