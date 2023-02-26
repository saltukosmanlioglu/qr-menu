"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service, { LanguageRequest } from "@/services/language";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateLanguage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: LanguageRequest) => {
    setIsLoading(true);

    service
      .create(values)
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
              "Aşağıdaki formu doldurarak bir dil oluşturabilirsiniz.",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Dil oluştur",
          }}
        />
      </div>
    </main>
  );
}