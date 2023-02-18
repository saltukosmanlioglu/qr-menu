import React from "react";

import Gutter from "@/components/admin/gutter";
import TextField from "@/components/admin/text-field";
import { LanguageRequest } from "@/services/admin/language";
import useForm from "@/utils/admin/hooks/form";
import { FormProps } from "@/utils/admin/types";
import FormPage from "@/widgets/admin/form-page";

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
