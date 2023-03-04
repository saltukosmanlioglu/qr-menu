import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Language extends BaseProps {
  code: string;
}

export interface LanguageRequest {
  code: string;
  status: StatusEnum;
}

export interface LanguageResponse extends BaseApiResponse<Array<Language>> {}
