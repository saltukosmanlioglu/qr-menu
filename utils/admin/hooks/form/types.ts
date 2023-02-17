export interface UseFormProps<T> {
  initialValues?: T;
  onSubmit: (values: T) => void;
}
