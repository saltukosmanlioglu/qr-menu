export interface TextFieldProps {
  isRequired: boolean;
  label: string;
  name: string;
  onChange: (value: React.FormEvent<Element>) => void;
  value: string | number;
}
