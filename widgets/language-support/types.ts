import { LanguageResponse } from "@/services/language";
import { UseFormProps } from "@/utils/hooks/form";

export interface LanguageSupportProps<T> {
  data?: LanguageResponse["data"];
  isLoading: boolean;
  children: (
    form: UseFormProps<T> & { values: T; handleChange: any }
  ) => JSX.Element;
  onSubmit: (values: T) => void;
}
