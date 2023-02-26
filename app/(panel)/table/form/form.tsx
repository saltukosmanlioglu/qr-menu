"use client";
import React from "react";

import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
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
    <React.Fragment>
      <FormPage<TableRequest> {...props}>
        <Gutter>
          <TextField
            autoFocus
            errorMessage="Masa adı girmelisiniz"
            label="Masa adı"
            name="title"
            onChange={form.handleChange}
            placeholder="Masa adı girin"
            required
            value={form.values.title}
          />
        </Gutter>
      </FormPage>
    </React.Fragment>
  );
};

export default Form;
