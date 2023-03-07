import React, { useEffect, useState } from "react";

import Select from "@/atlaskit/components/select";
import TextArea from "@/atlaskit/components/text-area";
import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import categoryService, { CategoryResponse } from "@/services/category";
import { ProductRequest } from "@/services/product";
import FormPage from "@/widgets/form-page";
import { status } from "@/utils/constants";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";

const Form = ({
  initialValues,
  operation,
  props,
}: FormProps<ProductRequest>) => {
  const [categories, setCategories] = useState<CategoryResponse["data"]>();

  const form = useForm<ProductRequest>({
    initialValues: { ...initialValues } as ProductRequest,
  });

  useEffect(() => {
    categoryService
      .get({ onlyParent: true })
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormPage<ProductRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="Ürün adı girmelisiniz"
          label="Ürün adı"
          name="title"
          onChange={(e) => form.handleChange("title", e.currentTarget.value)}
          placeholder="Ürün adı girin"
          required
          value={form.values.title}
        />
        <TextField
          errorMessage="Ürün fiyatı girmelisiniz"
          label="Ürün fiyatı"
          name="price"
          onChange={(e) => form.handleChange("price", e.currentTarget.value)}
          placeholder="Ürün fiyatı girin"
          required
          value={form.values.price}
        />
        <TextField
          label="Ürün görseli"
          name="image"
          onChange={(e) => form.handleChange("image", e.currentTarget.value)}
          placeholder="Ürün görseli seçin"
          value={form.values.image}
        />
        <Select
          label="Üst kategori"
          name="parentId"
          onChange={(e) => form.handleChange("parentId", e?.value as any)}
          options={
            categories?.map((category) => ({
              label: category.localizations[0].title,
              value: category.id,
            })) || []
          }
          placeholder="Üst kategori seçiniz"
          value={categories?.find((category) =>
            category.id === form.values.parentId
              ? {
                  label: category.localizations[0].title,
                  value: category.id,
                }
              : null
          )}
        />
        <TextArea
          label="Ürün açıklaması"
          name="description"
          onChange={(e) =>
            form.handleChange("description", e.currentTarget.value)
          }
          placeholder="Ürün açıklaması girin"
          value={form.values.description}
        />
        <TextArea
          label="Ürün alerjeni"
          name="specifications.allergens"
          onChange={(e) =>
            form.handleChange("specifications.allergens", e.currentTarget.value)
          }
          placeholder="Ürün alerjeni girin"
          value={form.values.allergens}
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
