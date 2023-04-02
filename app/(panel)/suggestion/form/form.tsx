import React from "react";

import TextArea from "@/atlaskit/components/text-area";
import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import { Suggestion } from "@/services/suggestion";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import FormPage from "@/widgets/form-page";

const Form = ({ initialValues, props }: FormProps<Suggestion>) => {
  const form = useForm<Suggestion>({
    initialValues: { ...initialValues } as Suggestion,
  });

  return (
    <FormPage<Suggestion> {...props}>
      <Gutter>
        <TextField
          disabled
          label="Müşteri İsim - Soyisim"
          name="fullName"
          value={form.values.fullName}
        />
        <TextField
          disabled
          label="Müşteri telefon numarası"
          name="phoneNumber"
          value={form.values.phoneNumber}
        />
        <TextArea
          disabled
          label="Müşteri yorumu"
          name="message"
          value={form.values.message}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
