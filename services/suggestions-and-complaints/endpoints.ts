import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import {
  SuggestionsAndComplaints,
  SuggestionsAndComplaintsParams,
  SuggestionsAndComplaintsResponse,
} from "./types";

export const get = (params?: SuggestionsAndComplaintsParams) =>
  service.get<SuggestionsAndComplaintsResponse>("suggestions-and-complaints", {
    params: { ...params, pageIndex: 0, pageSize: 20 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<SuggestionsAndComplaints>>(
    `suggestions-and-complaints/${id}`
  );
