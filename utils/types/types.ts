import { FormPageProps } from "@/widgets/form-page";

export type OperationType = "create" | "update";

export interface FormProps<T> {
  initialValues?: T;
  operation: OperationType;
  props: Omit<FormPageProps<T>, "children">;
}

export interface BaseProps {
  id: number;
  createdDate: string;
  order: number;
  updatedDate: string;
}
