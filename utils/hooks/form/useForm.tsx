import React, { useEffect, useState } from "react";

import { UseFormProps } from "./types";

const useForm = <T extends object>({ initialValues }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((_values) => ({
      ..._values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFieldChange = (key: string, value: any) => {
    setValues((_values) => ({ ..._values, [key]: value }));
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return { handleChange, handleFieldChange, values };
};

export default useForm;
