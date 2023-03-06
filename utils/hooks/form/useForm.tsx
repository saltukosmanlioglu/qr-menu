import { useState } from "react";

import { UseFormProps } from "./types";

const useForm = <T extends Record<string, any>>({
  initialValues,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = (key: string, value: string) => {
    setValues((_values) => ({
      ..._values,
      [key]: value,
    }));
  };

  const handleFieldChange = (
    key: string,
    value: { label?: string; value?: string | number | boolean }
  ) => {
    setValues((_values) => ({ ..._values, [key]: value }));
  };

  return { handleChange, handleFieldChange, values };
};

export default useForm;
