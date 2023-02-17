import React from "react";

export interface TextAreaProps {
  errorMessage?: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  style?: React.CSSProperties;
  value: string;
}
