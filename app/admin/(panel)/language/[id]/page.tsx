"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import service, { Language, LanguageRequest } from "@/services/admin/language";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function UpdateLanguage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Language>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    service
      .remove(Number(params.id))
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const onUpdate = (values: LanguageRequest) => {
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
            buttonText="Delete language"
            body="If you delete a language, all dependencies related to the language are destroyed. Are you sure you want to delete ?"
            onClick={onRemove}
            title="Language is going to delete !"
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
            buttonText: "Update language",
            description:
              "You can update this language by filling in the fields below",
            isLoading,
            onSubmit: onUpdate,
            operation: "update",
            title: `Update language: ${data?.code}`,
          }}
        />
      </div>
    </main>
  ) : null;
}
