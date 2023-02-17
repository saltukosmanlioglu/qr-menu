import React from "react";

import Gutter from "@/components/admin/gutter";
import TextField from "@/components/admin/text-field";
import { LanguageRequest } from "@/services/admin/language";
import useForm from "@/utils/admin/hooks/form";
import { FormProps } from "@/utils/admin/types";
import FormPage from "@/widgets/admin/form-page";

const Form = <T extends LanguageRequest>({
  props,
  initialValues,
}: FormProps<T>) => {
  const form = useForm<T>({
    initialValues: { ...initialValues } as T,
    onSubmit: props.onSubmit,
  });

  return (
    <FormPage<T> {...props}>
      <Gutter>
        <TextField
          errorMessage="You must enter a language code"
          label="Language code"
          name="code"
          onChange={form.handleChange}
          placeholder="Enter a language code"
          required
          value={form.values.code}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
