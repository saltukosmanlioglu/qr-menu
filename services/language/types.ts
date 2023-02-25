import { BaseProps } from "@/utils/types";

export interface Language extends BaseProps {
  code: string;
}

export interface LanguageRequest {
  code: string;
}

export interface LanguageResponse extends Array<Language> {}
