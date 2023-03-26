import { BaseApiResponse, BaseProps } from "../types";

export interface SuggestionsAndComplaints extends BaseProps {
  fullName: string;
  message: string;
  phoneNumber: string;
  tableId: string;
}

export interface SuggestionsAndComplaintsResponse
  extends BaseApiResponse<Array<SuggestionsAndComplaints>> {}
