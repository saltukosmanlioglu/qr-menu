import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import {
  SuggestionsAndComplaints,
  SuggestionsAndComplaintsResponse,
} from "./types";

export const get = () =>
  service.get<SuggestionsAndComplaintsResponse>("suggestions-and-complaints");

export const getById = (id: string) =>
  service.get<BaseApiResponse<SuggestionsAndComplaints>>(
    `suggestions-and-complaints/${id}`
  );
