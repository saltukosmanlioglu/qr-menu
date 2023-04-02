import { BaseApiParams, BaseApiResponse, BaseProps } from "../types";

export interface Suggestion extends BaseProps {
  fullName: string;
  message: string;
  phoneNumber: string;
  tableId: string;
}

export interface SuggestionParams extends BaseApiParams {}

export interface SuggestionResponse
  extends BaseApiResponse<Array<Suggestion>> {}
