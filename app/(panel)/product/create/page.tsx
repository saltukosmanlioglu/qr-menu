"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import productService, {
  ProductLocalization,
  ProductRequest,
} from "@/services/product";

import Form from "../form";

import { breadcrumbItemList } from "./constants";

export default function CreateProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const params = useSearchParams();
  const categoryId = params.get("categoryId");

  const onCreate = (values: ProductRequest) => {
    setIsLoading(true);

    const parentId = values?.parentId && Object.values(values.parentId)[1];

    let localizations: Array<ProductLocalization> = [];

    localizations.push({
      description: values.description,
      languageCode: null,
      specifications: { allergens: values.allergens },
      title: values.title,
    });

    if (categoryId) {
      productService
        .create({
          ...values,
          localizations,
          parentId,
          categoryId,
        })
        .then(() => router.push(`/category/${categoryId}`))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
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
