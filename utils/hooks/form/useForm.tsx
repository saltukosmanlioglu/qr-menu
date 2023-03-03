import React, { useEffect, useState } from "react";

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

  return { handleChange, values };
};

export default useForm;
