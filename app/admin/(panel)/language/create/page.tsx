"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service, { LanguageRequest } from "@/services/admin/language";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateLanguage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: LanguageRequest) => {
    setIsLoading(true);

    service
      .create(values)
      .then((res) => router.back())
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
            buttonText: "Create language",
            description:
              "You can create a language by filling in the fields below",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Create a language",
          }}
        />
      </div>
    </main>
  );
}
