import React, { useEffect, useState } from "react";

import Select from "@/atlaskit/components/select";
import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import categoryService, {
  CategoryRequest,
  CategoryResponse,
} from "@/services/category";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import { status } from "@/utils/constants";
import FormPage from "@/widgets/form-page";

const Form = ({
  initialValues,
  operation,
  props,
}: FormProps<CategoryRequest>) => {
  const [categories, setCategories] = useState<CategoryResponse["data"]>();

  const form = useForm<CategoryRequest>({
    initialValues: { ...initialValues } as CategoryRequest,
    onSubmit: props.onSubmit,
  });

  useEffect(() => {
    categoryService
      .get({ onlyParent: true })
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormPage<CategoryRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="Kategori adı girmelisiniz"
          label="Kategori adı"
          name="title"
          onChange={(e) => form.handleChange("title", e.currentTarget.value)}
          placeholder="Kategori adı girin"
          required
          value={form.values.title}
        />
        <TextField
          errorMessage="Kategori rengi girmelisiniz"
          label="Kategori rengi"
          name="color"
          onChange={(e) => form.handleChange("color", e.currentTarget.value)}
          placeholder="Kategori rengi girin"
          required
          value={form.values.color}
        />
        <Select
          label="Üst kategori"
          name="parentId"
          onChange={(e) => form.handleChange("parentId", e?.value as any)}
          options={
            categories?.map((category) => ({
              label: category.title,
              value: category.id,
            })) || []
          }
          placeholder="Üst kategori seçiniz"
          value={categories?.find((category) =>
            category.id === form.values.parentId
              ? {
                  label: category.title,
                  value: category.id,
                }
              : null
          )}
        />
        {operation === "update" && (
          <Select
            label="Durumu"
            name="status"
            onChange={(e) => form.handleChange("status", e?.value as any)}
            options={status.map((statu) => ({ ...statu })) || []}
            placeholder="Durum seçiniz"
            value={status.find((statu) =>
              statu.value === form.values.status ? { ...statu } : null
            )}
          />
        )}
      </Gutter>
    </FormPage>
  );
};

export default Form;
