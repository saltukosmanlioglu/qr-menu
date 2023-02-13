import { BaseProps } from "@/utils/ui/types";

export interface Language extends BaseProps {
  languageCode: string;
}

export interface LanguageRequest {
  languageCode: string;
}

export interface LanguageResponse extends Array<Language> {}
