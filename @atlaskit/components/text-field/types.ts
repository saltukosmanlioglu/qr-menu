import React from "react";

type HTMLInputTypeAttribute =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "time";

export interface TextFieldProps {
  autoFocus?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  label: string;
  name: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value: string | number | undefined;
}
