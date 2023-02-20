"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service from "@/services/admin/category";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateCategory() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: any) => {
    setIsLoading(true);

    service
      .create({ ...values, parentId: values.parentId.value })
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
            buttonText: "Create category",
            description:
              "You can create a category by filling in the fields below",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Create a category",
          }}
        />
      </div>
    </main>
  );
}
