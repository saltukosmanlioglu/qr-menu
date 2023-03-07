import React from "react";

import productService, { ProductRequest } from "@/services/product";

import Form from "../../form";

import { UpdateProps } from "./types";

const Update: React.FunctionComponent<UpdateProps> = ({
  data,
  params,
  router,
}) => {
  const onUpdate = (values: ProductRequest) => {
    const languageCode = Object.values(values.languageCode)[1];
    const parentId = Object.values(values.parentId)[1];

    productService
      .update(params.id, {
        ...values,
        languageCode,
        parentId,
      })
      .then(() => router.push("/product/list"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        initialValues={
          data
            ? {
                ...data,
                status: data.audit.status,
                allergens: data.specifications.allergens,
              }
            : undefined
        }
        operation="update"
        props={{
          buttonText: "Güncelle",
          description:
            "Aşağıdaki formu doldurarak geçerli ürünü güncelleyebilirsiniz.",
          onSubmit: onUpdate,
          operation: "update",
          title: `Ürün: ${data?.title}`,
        }}
      />
    </div>
  );
};

export default Update;
