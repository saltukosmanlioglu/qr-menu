"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import service, { Language, LanguageRequest } from "@/services/language";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function UpdateLanguage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Language>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    service
      .remove(params.id)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  const onUpdate = (values: LanguageRequest) => {
    setIsLoading(true);

    const isDefault = Object.values(values.isDefault)[1];
    const status = Object.values(values.status)[1];

    service
      .update(params.id, { ...values, isDefault, status })
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    service
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
            body="Eğer bir dili silmek istiyorsanız, dil ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
            onClick={onRemove}
            title="Dil silinmek üzere!"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Dil desteğini Güncelle"
      />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          initialValues={{ ...data, status: data.audit.status }}
          operation="update"
          props={{
            buttonText: "Güncelle",
            description:
              "Aşağıdaki formu doldurarak geçerli dili güncelleyebilirsiniz.",
            isLoading,
            onSubmit: onUpdate,
            operation: "update",
            title: `Dil: ${data?.code}`,
          }}
        />
      </div>
    </main>
  ) : null;
}
