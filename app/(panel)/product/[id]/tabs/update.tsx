import React from "react";

import productService, {
  ProductLocalization,
  ProductRequest,
} from "@/services/product";

import Form from "../../form";

import { UpdateProps } from "./types";

const Update: React.FunctionComponent<UpdateProps> = ({
  data,
  isLoading,
  params,
  router,
}) => {
  const onUpdate = (values: ProductRequest) => {
    const parentId = Object.values(values.parentId)[1];
    const status = Object.values(values.status)[1];

    let localizations: Array<ProductLocalization> = [];

    localizations.push({
      description: values.localizations[0].description,
      languageCode: null,
      specifications: {
        allergens: values.localizations[0].specifications.allergens,
      },
      title: values.localizations[0].title,
    });

    productService
      .update(params.id, {
        ...values,
        localizations,
        parentId,
        status,
      })
      .then(() => router.push("/category/list"))
      .catch((err) => console.log(err));
  };

  return data ? (
    <Form
      initialValues={{
        ...data,
        allergens: data.localizations[0].specifications?.allergens,
        description: data.localizations[0].description,
        status: data.audit.status,
        title: data.localizations[0].title,
      }}
      operation="update"
      props={{
        buttonText: "Düzenle",
        description:
          "Aşağıdaki formu doldurarak geçerli ürünü düzenleyebilirsiniz.",
        isLoading,
        onSubmit: onUpdate,
        operation: "update",
        title: `Ürün: ${data?.localizations[0].title}`,
      }}
    />
  ) : null;
};

export default Update;
