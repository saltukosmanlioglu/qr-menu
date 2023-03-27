import { StatusEnum } from "@/utils/types";

import { BaseApiParams, BaseApiResponse, BaseProps } from "../types";

export interface Language extends BaseProps {
  code: string;
}

export interface LanguageParams extends BaseApiParams {}

export interface LanguageRequest {
  code: string;
  status: StatusEnum;
}

export interface LanguageResponse extends BaseApiResponse<Array<Language>> {}
