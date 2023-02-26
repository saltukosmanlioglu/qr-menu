"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import languageService, { LanguageResponse } from "@/services/language";

import { breadcrumbItemList, head, rows } from "./constants";

export default function LanguageList() {
  const [data, setData] = useState<LanguageResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    languageService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/language/create">
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
      <div className="mt-20">
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(
              data?.data as LanguageResponse["data"],
              moveDown,
              moveUp
            ),
          }}
        />
      </div>
    </main>
  );
}
