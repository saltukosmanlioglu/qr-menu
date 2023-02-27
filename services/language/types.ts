import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Language extends BaseProps {
  code: string;
  isDefault: boolean;
}

export interface LanguageRequest {
  code: string;
  isDefault: boolean;
  status: StatusEnum;
}

export interface LanguageResponse extends BaseApiResponse<Array<Language>> {}
