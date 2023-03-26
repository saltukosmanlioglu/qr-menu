import React from "react";

export interface TextAreaProps {
  disabled?: boolean;
  errorMessage?: string;
  label: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  value: string | number | undefined;
}
