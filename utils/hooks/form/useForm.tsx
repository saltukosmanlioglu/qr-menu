import React, { useEffect, useState } from "react";

import { UseFormProps } from "./types";

const useForm = <T extends Record<string, any>>({
  initialValues,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((_values) => ({
      ..._values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFieldChange = (
    key: string,
    value: {
      label?: string | number | boolean;
      value?: string | number | boolean;
    }
  ) => {
    setValues((_values) => ({ ..._values, [key]: value.value || value.label }));
  };

  return { handleChange, handleFieldChange, values };
};

export default useForm;
