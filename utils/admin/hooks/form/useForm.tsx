import React, { useCallback, useState } from "react";

import { UseFormProps } from "./types";

const useForm = <T extends Record<string, any>>({
  initialValues,
}: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((_values) => ({ ..._values, [e.target.name]: e.target.value }));
    },
    []
  );

  return { values, handleChange };
};

export default useForm;
