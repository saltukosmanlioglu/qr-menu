"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import languageService, { LanguageResponse } from "@/services/admin/language";
import { useGet } from "@/utils/admin/hooks/service";

import { breadcrumbItemList, head, rows } from "./constants";

export default function LanguageList() {
  const { data, isLoading } = useGet<LanguageResponse>({
    service: languageService.get(),
  });

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/admin/language/create">
            <Button
              appearance="primary"
              children="Dil desteği ekle"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Dilleri görüntüleyebilir, sırasını değiştirebilir ve yeni bir dil oluşturabilirsiniz."
        title="Dil Listesi"
      />
      <Table
        tableProps={{
          isLoading: isLoading,
          head: head,
          rows: rows(data as LanguageResponse, moveDown, moveUp),
        }}
      />
    </main>
  );
}
