"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service, { ProductRequest } from "@/services/product";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  const onCreate = (values: any) => {
    setIsLoading(true);

    service
      .create({ ...values, categoryId: values.categoryId.value })
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <main>
      <PageInformation breadcrumbItems={breadcrumbItemList} />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          categoryId={categoryId || ""}
          operation="create"
          props={{
            buttonText: "Create product",
            description:
              "You can create a product by filling in the fields below",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Create a product",
          }}
        />
      </div>
    </main>
  );
}
