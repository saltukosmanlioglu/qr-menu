"use client";
import React from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import TextField from "@/atlaskit/components/text-field";
import Form from "@/widgets/admin/form";

import { breadcrumbItemList } from "./constants";

export default function CreateLanguage() {
  return (
    <main>
      <PageInformation
        breadcrumbItems={breadcrumbItemList}
        title="Dil desteği ekle"
      />
      <Form<{ languageCode: string }>
        title="Dil oluştur"
        description="Aşağıdaki alanları doldurarak yeni bir dil oluşturabilirsiniz."
        operation="create"
        onSubmit={(e) => {}}
        initialValues={{
          languageCode: "",
        }}
      >
        <TextField
          isRequired
          label="Dil kodu"
          name="languageCode"
          onChange={(e) => console.log(e)}
          value={""}
        />
      </Form>
    </main>
  );
}
