import { BaseApiResponse, BaseProps } from "../types";

export interface Table extends Omit<BaseProps, "order"> {
  title: string;
}

export interface TableRequest {
  title: string;
}

export interface TableResponse extends BaseApiResponse<Array<Table>> {}
