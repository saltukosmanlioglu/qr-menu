"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import languageService, { LanguageRequest } from "@/services/language";

import Form from "../form";

import { breadcrumbItemCreate } from "./constants";

export default function CreateLanguage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFlagcard, setIsFlagcard] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: LanguageRequest) => {
    setIsLoading(true);

    languageService
      .create(values)
      .then(() => router.push("/language/list"))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <PageInformation breadcrumbItems={breadcrumbItemCreate} />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          operation="create"
          props={{
            buttonText: "Kaydet",
            description:
              "Aşağıdaki formu doldurarak yeni bir dil oluşturabilirsiniz.",
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
