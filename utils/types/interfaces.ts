import { FormPageProps } from "@/widgets/form-page";

import { OperationType } from "./types";

export interface FormProps<T> {
  initialValues?: T;
  operation: OperationType;
  props: Omit<FormPageProps<T>, "children">;
}

export interface ReOrder {
  id: string;
  order: number;
}

export interface ReOrderRequest extends Array<ReOrder> {}
