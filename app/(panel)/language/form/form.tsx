import React from "react";

import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
import { LanguageRequest } from "@/services/language";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import FormPage from "@/widgets/form-page";

const Form = ({ props, initialValues }: FormProps<LanguageRequest>) => {
  const form = useForm<LanguageRequest>({
    initialValues: { ...initialValues } as LanguageRequest,
    onSubmit: props.onSubmit,
  });

  return (
    <FormPage<LanguageRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="Dil kodu girmelisiniz"
          label="Dil kodu"
          name="code"
          onChange={form.handleChange}
          placeholder="Dil kodu gir"
          required
          value={form.values.code}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
