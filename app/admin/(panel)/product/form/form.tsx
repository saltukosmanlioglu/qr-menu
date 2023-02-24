import React, { useEffect, useState } from "react";

import Gutter from "@/components/admin/gutter";
import Select from "@/atlaskit/components/select";
import TextField from "@/components/admin/text-field";
import TextArea from "@/components/admin/text-area";
import categoryService, { CategoryResponse } from "@/services/admin/category";
import { ProductRequest } from "@/services/admin/product";
import useForm from "@/utils/admin/hooks/form";
import { FormProps } from "@/utils/admin/types";
import FormPage from "@/widgets/admin/form-page";

const Form = ({
  categoryId,
  initialValues,
  props,
}: FormProps<ProductRequest> & { categoryId?: string }) => {
  const [data, setData] = useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ProductRequest>({
    initialValues: { ...initialValues } as ProductRequest,
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
    <FormPage<ProductRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="You must enter a title"
          label="Title"
          name="title"
          onChange={form.handleChange}
          placeholder="Enter a title"
          required
          value={form.values.title}
        />
        <TextField
          autoFocus
          errorMessage="You must enter a price"
          label="Price"
          name="price"
          onChange={form.handleChange}
          placeholder="Enter a price"
          required
          value={form.values.price}
        />
        <Select
          isLoading={isLoading}
          isRequired
          label="Category name"
          name="categoryId"
          onChange={(e) => form.handleFieldChange("categoryId", { ...e })}
          options={
            data?.map((category) => ({
              label: category.title,
              value: category.id,
            })) || []
          }
          placeholder="Choose a top category"
          value={{
            label: data?.find((category) =>
              form.values.categoryId
                ? category.id === form.values.categoryId
                : category.id === Number(categoryId)
            )?.title,
            value: data?.find((category) =>
              form.values.categoryId
                ? category.id === form.values.categoryId
                : category.id === Number(categoryId)
            )?.id,
          }}
        />
        <TextField
          autoFocus
          label="Image"
          name="image"
          onChange={form.handleChange}
          placeholder="Choose an image"
          type="file"
          value={form.values.image}
        />
        <TextArea
          errorMessage="Enter a description"
          label="Description"
          name="description"
          onChange={form.handleChange}
          placeholder="Enter a description"
          value={form.values.description}
        />
        <TextArea
          errorMessage="Enter allergens"
          label="Allergens"
          name="specifications.allergens"
          onChange={form.handleChange}
          placeholder="Enter allergens"
          value={form.values.specifications?.allergens}
        />
      </Gutter>
    </FormPage>
  );
};

export default Form;
