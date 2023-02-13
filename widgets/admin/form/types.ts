import React from "react";

export type OperationType = "create" | "update";

export interface FormProps<T> {
  children: React.ReactNode;
  description: string;
  initialValues: T;
  onSubmit: (data: React.FormEvent<HTMLFormElement>) => void;
  operation: OperationType;
  title: string;
}
