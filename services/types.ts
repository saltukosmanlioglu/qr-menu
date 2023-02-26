import { StatusEnum } from "@/utils/types";

export interface Audit {
  createdAt: string;
  createdBy: string;
  modifiedAt: string;
  modifiedBy: string;
  status: StatusEnum;
}

export interface BaseProps {
  id: string;
  audit: Audit;
  order: number;
}

export interface BaseApiResponse<T> {
  data: T;
  errorCode: number;
  message: string;
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  success: boolean;
  totalCount: number;
}

export interface BaseErrorProps {
  errorCode: number;
  message: string;
  success: boolean;
}

export interface LanguageSupportBaseProps {
  code: string;
}
