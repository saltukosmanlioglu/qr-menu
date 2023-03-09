import { LanguageResponse } from "@/services/language";

export interface LanguageSupportProps<T> {
  relatedData: any;
  children: () => JSX.Element;
  data?: LanguageResponse["data"];
  isLoading: boolean;
  onCreate: (values: T, langaugeCode: string) => void;
  removeLanguageSupport: (languageCode: string) => void;
  onUpdate: (values: T, langaugeCode: string) => void;
}
