"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import languageService, {
  Language,
  LanguageRequest,
} from "@/services/language";

import Form from "../form";

import { breadcrumbItemUpdate } from "./constants";

export default function UpdateLanguage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Language>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    languageService
      .remove(params.id)
      .then(() => router.push("/language/list"))
      .catch((err) => console.log(err));
  };

  const onUpdate = (values: LanguageRequest) => {
    setIsLoading(true);

    const status = values.status && Object.values(values.status)[1];

    languageService
      .update(params.id, {
        ...values,
        status,
      })
      .then(() => router.push("/language/list"))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    languageService
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
        breadcrumbItems={breadcrumbItemUpdate}
        title="Dil bilgisini düzenle"
      />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          initialValues={{ ...data, status: data.audit.status }}
          operation="update"
          props={{
            buttonText: "Düzenle",
            description:
              "Aşağıdaki formu doldurarak geçerli dili düzenleyebilirsiniz.",
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
