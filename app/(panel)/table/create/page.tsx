"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import tableService, { TableRequest } from "@/services/table";

import { breadcrumbItemCreate } from "./constants";
import Form from "../form";

export default function CreateTable() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: TableRequest) => {
    setIsLoading(true);

    tableService
      .create(values)
      .then(() => router.push("/table/list"))
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
              "Aşağıdaki formu doldurarak yeni bir masa oluşturabilirsiniz.",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Masa oluştur",
          }}
        />
      </div>
    </main>
  );
}
