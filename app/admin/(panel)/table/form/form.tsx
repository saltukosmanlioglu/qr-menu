"use client";
import React from "react";

import Gutter from "@/components/admin/gutter";
import TextField from "@/components/admin/text-field";
import { TableRequest } from "@/services/admin/table";
import useForm from "@/utils/admin/hooks/form";
import { FormProps } from "@/utils/admin/types";
import FormPage from "@/widgets/admin/form-page";

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
            errorMessage="You must enter a table name"
            label="Table name"
            name="title"
            onChange={form.handleChange}
            placeholder="Enter a table name"
            required
            value={form.values.title}
          />
        </Gutter>
      </FormPage>
    </React.Fragment>
  );
};

export default Form;
