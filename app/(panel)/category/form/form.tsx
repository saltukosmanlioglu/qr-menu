import React, { useEffect, useState } from "react";

import Select from "@/atlaskit/components/select";
import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
import categoryService, {
  CategoryRequest,
  CategoryResponse,
} from "@/services/category";
import { FormProps } from "@/utils/types";
import useForm from "@/utils/hooks/form";
import FormPage from "@/widgets/form-page";

const Form = ({ props, initialValues }: FormProps<CategoryRequest>) => {
  const [data, setData] = useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<CategoryRequest>({
    initialValues: { ...initialValues } as CategoryRequest,
    onSubmit: props.onSubmit,
  });

  useEffect(() => {
    setIsLoading(true);

    categoryService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <FormPage<CategoryRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus={true}
          errorMessage="You must enter a category name"
          label="Category name"
          name="title"
          onChange={form.handleChange}
          placeholder="Enter a language code"
          required
          value={form.values.title}
        />
        <TextField
          errorMessage="You must enter a color"
          label="Color"
          name="color"
          onChange={form.handleChange}
          placeholder="Enter a color"
          required
          value={form.values.color}
        />
        <Select
          isLoading={isLoading}
          label="Top category name"
          name="parentId"
          onChange={(e) => form.handleFieldChange("parentId", { ...e })}
          options={
            data?.map((category) => ({
              label: category.title,
              value: category.id,
            })) || []
          }
          placeholder="Choose a top category"
          value={{
            label: data?.find(
              (category) => category.id === form.values.parentId
            )?.title,
            value: data?.find(
              (category) => category.id === form.values.parentId
            )?.id,
          }}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
