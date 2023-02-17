import { BaseProps } from "@/utils/ui/types";

export interface Table extends Omit<BaseProps, "order"> {
  qrId: string;
  title: string;
}

export interface TableRequest {
  qrId: string;
  title: string;
}

export interface TableResponse extends Array<Table> {}
