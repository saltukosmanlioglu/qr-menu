"use client";
import React from "react";

import PageInformation from "@/atlaskit/widgets/page-information";
import RemoveModal from "@/widgets/admin/remove-modal";

import { breadcrumbItemList } from "./constants";

export default function UpdateLanguage() {
  return (
    <main>
      <PageInformation
        actions={<RemoveModal />}
        breadcrumbItems={breadcrumbItemList}
        description="Aşağıdaki alanları doldurarak geçerli dili güncelleyebilirsiniz."
        title="Dil desteğini Güncelle"
      />
    </main>
  );
}
