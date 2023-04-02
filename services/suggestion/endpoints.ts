import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import { Suggestion, SuggestionParams, SuggestionResponse } from "./types";

export const get = (params?: SuggestionParams) =>
  service.get<SuggestionResponse>("suggestion", {
    params: { ...params, pageIndex: 0, pageSize: 20 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Suggestion>>(`suggestion/${id}`);
