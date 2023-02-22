"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import service, { ProductRequest } from "@/services/admin/product";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function CreateProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: ProductRequest) => {
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
