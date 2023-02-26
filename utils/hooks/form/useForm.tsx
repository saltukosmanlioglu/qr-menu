import React, { useCallback, useState } from "react";

import { UseFormProps } from "./types";

const useForm = <T extends object>({
  initialValues,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((_values) => ({ ..._values, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleFieldChange = useCallback(
    (key: string, value: { label?: string; value?: string | number }) => {
      setValues((_values) => ({ ..._values, [key]: value.value }));
    },
    []
  );

  return { handleChange, handleFieldChange, values };
};

export default useForm;
