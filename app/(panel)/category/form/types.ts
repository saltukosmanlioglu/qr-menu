export type OperationType = "create" | "update";

export interface BaseFormProps {
  operation: OperationType;
  initialValues?: {};
}
