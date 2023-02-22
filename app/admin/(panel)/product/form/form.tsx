import React from "react";

import Gutter from "@/components/admin/gutter";
import TextField from "@/components/admin/text-field";
import TextArea from "@/components/admin/text-area";
import { ProductRequest } from "@/services/admin/product";
import useForm from "@/utils/admin/hooks/form";
import { FormProps } from "@/utils/admin/types";
import FormPage from "@/widgets/admin/form-page";

const Form = ({ props, initialValues }: FormProps<ProductRequest>) => {
  const form = useForm<ProductRequest>({
    initialValues: { ...initialValues } as ProductRequest,
    onSubmit: props.onSubmit,
  });

  return (
    <FormPage<ProductRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="You must enter a title"
          label="title"
          name="code"
          onChange={form.handleChange}
          placeholder="Enter a title"
          required
          value={form.values.title}
        />
        <TextArea
          errorMessage="You must enter a title"
          label="title"
          name="title"
          onChange={form.handleChange}
          placeholder="Enter a title"
          required
          value={form.values.description}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
