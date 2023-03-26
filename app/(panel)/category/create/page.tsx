"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import categoryService, {
  CategoryLocalization,
  CategoryRequest,
} from "@/services/category";

import Form from "../form";

import { breadcrumbItemList } from "./constants";

export default function CreateCategory() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: CategoryRequest) => {
    setIsLoading(true);

    const parentId = values?.parentId && Object.values(values.parentId)[1];

    let localizations: Array<CategoryLocalization> = [];

    localizations.push({
      languageCode: null,
      title: values.title,
    });

    categoryService
      .create({
        ...values,
        localizations,
        parentId,
      })
      .then(() => router.push("/category/list"))
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
              "Aşağıdaki formu doldurarak yeni bir kategori oluşturabilirsiniz.",
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
