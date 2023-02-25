"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service, { TableRequest } from "@/services/table";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateTable() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: TableRequest) => {
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
            buttonText: "Create table",
            description:
              "You can create a table by filling in the fields below",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Create a table",
          }}
        />
      </div>
    </main>
  );
}
