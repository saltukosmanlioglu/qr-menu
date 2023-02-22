"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import service, { Product, ProductRequest } from "@/services/admin/product";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function UpdateProduct({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Product>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    service
      .remove(Number(params.id))
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const onUpdate = (values: ProductRequest) => {
    setIsLoading(true);

    service
      .update(Number(params.id), values)
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    service
      .getById(Number(params.id))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => {});
  }, [params.id]);

  return data ? (
    <main>
      <PageInformation
        actions={
          <ModalDialog
            appearance="danger"
            buttonText="Delete product"
            body="If you delete a product, all dependencies related to the product are destroyed. Are you sure you want to delete ?"
            onClick={onRemove}
            title="Product is going to delete !"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Dil desteğini Güncelle"
      />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          initialValues={data}
          operation="update"
          props={{
            buttonText: "Update product",
            description:
              "You can update this product by filling in the fields below",
            isLoading,
            onSubmit: onUpdate,
            operation: "update",
            title: `Update product: ${data?.title}`,
          }}
        />
      </div>
    </main>
  ) : null;
}
