import service from "@/services/admin/instance";

import { Language, LanguageRequest, LanguageResponse } from "./types";

export const create = (data: LanguageRequest) =>
  service.post("languages", data);

export const get = () => service.get<LanguageResponse>("languages");

export const getById = (id: string | number) =>
  service.get<Language>(`languages/${id}`);

export const remove = (id: string | number) =>
  service.delete(`languages/${id}`);

export const update = (id: string | number, data: LanguageRequest) =>
  service.put(`languages/${id}`, data);
