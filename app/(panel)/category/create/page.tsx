"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import categoryService, { CategoryRequest } from "@/services/category";

import Form from "../form";

import { breadcrumbItemList } from "./constants";

export default function CreateCategory() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: CategoryRequest) => {
    return console.log(values);

    setIsLoading(true);

    const languageCode =
      values.languageCode && Object.values(values.languageCode)[1];
    const parentId = values.parentId && Object.values(values.parentId)[1];

    categoryService
      .create({
        ...values,
        languageCode,
        parentId,
      })
      .then(() => router.back())
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
              "Aşağıdaki formu doldurarak bir kategori oluşturabilirsiniz.",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Kategori oluştur",
          }}
        />
      </div>
    </main>
  );
}