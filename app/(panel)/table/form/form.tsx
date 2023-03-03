"use client";
import React from "react";

import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import { TableRequest } from "@/services/table";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import FormPage from "@/widgets/form-page";

const Form = ({ initialValues, props }: FormProps<TableRequest>) => {
  const form = useForm<TableRequest>({
    initialValues: { ...initialValues } as TableRequest,
    onSubmit: props.onSubmit,
  });

  return (
    <FormPage<TableRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="Masa adı girmelisiniz"
          label="Masa adı"
          name="title"
          onChange={(e) => form.handleChange("title", e.currentTarget.value)}
          placeholder="Masa adı girin"
          required
          value={form.values.title}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
