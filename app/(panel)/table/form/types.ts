export type OperationType = "create" | "update";

export interface BaseFormProps {
  initialValues?: {};
  operation: OperationType;
}
