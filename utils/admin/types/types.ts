import { FormPageProps } from "@/widgets/admin/form-page";

export type OperationType = "create" | "update";

export interface FormProps<T> {
  initialValues?: T;
  operation: OperationType;
  props: Omit<FormPageProps<T>, "children">;
}
