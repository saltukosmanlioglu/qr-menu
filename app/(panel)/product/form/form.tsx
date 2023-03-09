import React, { useEffect, useState } from "react";

import Select from "@/atlaskit/components/select";
import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import productService, {
  ProductRequest,
  ProductResponse,
} from "@/services/product";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import { status } from "@/utils/constants";
import FormPage from "@/widgets/form-page";
import TextArea from "@/atlaskit/components/text-area";

const Form = ({
  initialValues,
  operation,
  props,
}: FormProps<ProductRequest>) => {
  const [products, setProducts] = useState<ProductResponse["data"]>();

  const form = useForm<ProductRequest>({
    initialValues: { ...initialValues } as ProductRequest,
  });

  useEffect(() => {
    productService
      .get({ onlyParent: true })
      .then((res) => setProducts(res.data.data))
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
          type="file"
          value={form.values.image}
        />
        <Select
          label="Üst ürün"
          name="parentId"
          onChange={(e) => form.handleFieldChange("parentId", { ...e })}
          options={
            products?.map((product) => ({
              label: product.localizations[0].title,
              value: product.id,
            })) || []
          }
          placeholder="Üst ürün seçiniz"
          value={products?.find((product) =>
            product.id === form.values.parentId
              ? {
                  label: product.localizations[0].title,
                  value: product.id,
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
          required
          value={form.values.description}
        />
        <TextArea
          label="Ürün alerjeni"
          name="allergens"
          onChange={(e) =>
            form.handleChange("allergens", e.currentTarget.value)
          }
          placeholder="Ürün açıklaması girin"
          required
          value={form.values.allergens}
        />
        {operation === "update" && (
          <Select
            label="Durumu"
            name="status"
            onChange={(e) => form.handleFieldChange("status", { ...e })}
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
