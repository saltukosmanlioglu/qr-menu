import { SingleValue } from "react-select";

export interface Option {
  label: string;
  value: string | number | boolean;
}

export interface SelectProps {
  isLoading?: boolean;
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: (e: SingleValue<Option>) => void;
  options: Array<Option>;
  placeholder: string;
  value: any;
}
