import { BaseProps } from "@/utils/types";

export interface Table extends Omit<BaseProps, "order"> {
  qrId: string;
  title: string;
}

export interface TableRequest {
  title: string;
}

export interface TableResponse extends Array<Table> {}
