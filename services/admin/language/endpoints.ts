import service from "@/services/admin/instance";

import { Language, LanguageRequest, LanguageResponse } from "./types";

export const create = (data: LanguageRequest) => service.post("language", data);

export const get = () => service.get<LanguageResponse>("language");

export const getById = (id: string) => service.get<Language>(`language/${id}`);

export const remove = (id: string) => service.get(`language/${id}`);

export const update = (id: string, data: LanguageResponse) =>
  service.put(`language/${id}`, data);
