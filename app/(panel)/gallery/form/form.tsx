import React, { useEffect, useState } from "react";

import Select from "@/atlaskit/components/select";
import Gutter from "@/components/gutter";
import { GalleryRequest } from "@/services/gallery";
import productService, { ProductResponse } from "@/services/product";
import { status } from "@/utils/constants";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import FormPage from "@/widgets/form-page";

const Form = ({
  initialValues,
  operation,
  props,
}: FormProps<GalleryRequest>) => {
  const [products, setProducts] = useState<ProductResponse["data"]>();

  const form = useForm<GalleryRequest>({
    initialValues: { ...initialValues } as GalleryRequest,
  });

  useEffect(() => {
    productService
      .get({ onlyParent: true })
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormPage<GalleryRequest> {...props}>
      <Gutter>
        <Select
          label="Öne çıkan içerik"
          name="productId"
          onChange={(e) => form.handleFieldChange("productId", { ...e })}
          options={
            products?.map((product) => ({
              label: product.localizations[0].title,
              value: product.id,
            })) || []
          }
          placeholder="Öne çıkan içerik seçiniz"
          value={products?.find((product) =>
            product.id === form.values.productId
              ? {
                  label: product.localizations[0].title,
                  value: product.id,
                }
              : null
          )}
        />
        {operation === "update" && (
          <Select
            isRequired
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
