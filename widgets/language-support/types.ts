export interface LanguageSupportProps<T> {
  children: () => JSX.Element;
  onSubmit: (values: T) => void;
}
