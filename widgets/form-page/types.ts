import React from "react";
import { ButtonProps } from "@atlaskit/button";

import { OperationType } from "@/utils/types";

export interface FormPageProps<T> {
  actions?: Array<ButtonProps>;
  buttonText: string;
  children: React.ReactNode;
  description?: string;
  isLoading?: boolean;
  onSubmit: (values: T) => void;
  operation: OperationType;
  title?: string;
}
