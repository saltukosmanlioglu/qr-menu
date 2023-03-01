"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import categoryService, {
  Category,
  CategoryRequest,
} from "@/services/category";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function UpdateCategory({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Category>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    categoryService
      .remove(params.id)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  const onUpdate = (values: CategoryRequest) => {
    setIsLoading(true);

    const languageCode = Object.values(values.languageCode)[1];
    const parentId = Object.values(values.parentId)[1];
    const status = Object.values(values.status)[1];

    categoryService
      .update(params.id, {
        ...values,
        languageCode,
        parentId,
        status,
      })
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    categoryService
      .getById(params.id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return data ? (
    <main>
      <PageInformation
        actions={
          <ModalDialog
            appearance="danger"
            buttonText="Sil"
            icon={<TrashIcon label="" size="small" />}
            body="Eğer bir kategoriyi silmek istiyorsanız, kategori ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
            onClick={onRemove}
            title="Kategori silinmek üzere!"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Kategoriyi güncelle"
      />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          initialValues={{ ...data, status: data.audit.status }}
          operation="update"
          props={{
            buttonText: "Güncelle",
            description:
              "Aşağıdaki formu doldurarak geçerli kategoriyi güncelleyebilirsiniz.",
            isLoading,
            onSubmit: onUpdate,
            operation: "update",
            title: `Kategori: ${data?.title}`,
          }}
        />
      </div>
    </main>
  ) : null;
}
