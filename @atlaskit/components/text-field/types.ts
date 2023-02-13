import { FormEvent } from "react";

export interface TextFieldProps {
  isRequired: boolean;
  label: string;
  name: string;
  onChange: (value: FormEvent<Element>) => void;
  value: string | number;
}
