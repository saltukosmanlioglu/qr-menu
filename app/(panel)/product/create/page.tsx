"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import productService, { ProductRequest } from "@/services/product";

import Form from "../form";

import { breadcrumbItemList } from "./constants";

export default function CreateProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: ProductRequest) => {
    setIsLoading(true);

    const languageCode =
      values.languageCode && Object.values(values.languageCode)[1];
    const parentId = values.parentId && Object.values(values.parentId)[1];

    productService
      .create({
        ...values,
        languageCode,
        parentId,
      })
      .then(() => router.push("/product/list"))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <PageInformation breadcrumbItems={breadcrumbItemList} />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          operation="create"
          props={{
            buttonText: "Kaydet",
            description:
              "Aşağıdaki formu doldurarak bir ürün oluşturabilirsiniz.",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Ürün oluştur",
          }}
        />
      </div>
    </main>
  );
}
