"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";

import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import suggestionsAndComplaintsService, {
  SuggestionsAndComplaintsResponse,
} from "@/services/suggestions-and-complaints";

import { breadcrumbItemList, head, rows } from "./constants";

export default function SuggestionsAndComplaintsList() {
  const [data, setData] = useState<SuggestionsAndComplaintsResponse["data"]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    suggestionsAndComplaintsService
      .get()
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <PageInformation
        breadcrumbItems={breadcrumbItemList}
        description="Öneri ve Şikayetleri görüntüleyebilirsiniz."
        title="Öneri ve Şikayet Listesi"
      />
      <div className="relative">
        <div className="m-8">
          <SectionMessage
            appearance="warning"
            description="Öneri ve Şikayetler güncellenemez ve silinemezler."
            title="Uyarı"
          />
        </div>
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data),
          }}
        />
        <div style={{ height: 1000 }}></div>
      </div>
    </main>
  );
}
