"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import galleryService, { GalleryRequest } from "@/services/gallery";

import Form from "../form";

import { breadcrumbItemCreate } from "./constants";

export default function CreateGallery() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onCreate = (values: GalleryRequest) => {
    setIsLoading(true);

    const productId = values?.productId && Object.values(values.productId)[1];

    galleryService
      .create({ ...values, productId })
      .then(() => router.push("/gallery/list"))
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
              "Aşağıdaki formu doldurarak yeni bir öne çıkan içerik oluşturabilirsiniz.",
            isLoading,
            onSubmit: onCreate,
            operation: "create",
            title: "Öne çıkan içerik oluştur",
          }}
        />
      </div>
    </main>
  );
}
