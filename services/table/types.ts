import { BaseApiParams, BaseApiResponse, BaseProps } from "../types";

export interface Table extends Omit<BaseProps, "order"> {
  title: string;
}

export interface TableParams extends BaseApiParams {}

export interface TableRequest {
  title: string;
}

export interface TableResponse extends BaseApiResponse<Array<Table>> {}
