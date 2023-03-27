import { BaseApiParams, BaseApiResponse, BaseProps } from "../types";

export interface SuggestionsAndComplaints extends BaseProps {
  fullName: string;
  message: string;
  phoneNumber: string;
  tableId: string;
}

export interface SuggestionsAndComplaintsParams extends BaseApiParams {}

export interface SuggestionsAndComplaintsResponse
  extends BaseApiResponse<Array<SuggestionsAndComplaints>> {}
