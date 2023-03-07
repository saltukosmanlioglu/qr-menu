import { Category } from "@/services/category";
import { LanguageResponse } from "@/services/language";

export interface LanguageSupportProps<T> {
  category?: Category;
  children: () => JSX.Element;
  data?: LanguageResponse["data"];
  isLoading: boolean;
  onCreate: (values: T, langaugeCode: string) => void;
  removeLanguageSupport: (languageCode: string) => void;
  onUpdate: (values: T, langaugeCode: string) => void;
}
