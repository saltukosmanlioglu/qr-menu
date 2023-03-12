"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";

import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import languageService, {
  Language,
  LanguageResponse,
} from "@/services/language";
import { handleMove } from "@/utils/funcs";
import Reorder from "@/widgets/reorder";

import { breadcrumbItemList, head, rows } from "./constants";

export default function LanguageList() {
  const [data, setData] = useState<LanguageResponse["data"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isOrderActive, setIsOrderActive] = useState<boolean>(false);

  const reorder = () => {
    if (data) {
      languageService
        .reorder(
          data.map((item, index) => ({
            id: item.id,
            order: index,
          }))
        )
        .then(() => {})
        .catch((err) => console.log(err))
        .finally(() => setIsOrderActive(false));
    }
  };

  const onReorderCancel = () => {
    setIsOrderActive(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsLoading(true);

    languageService
      .get()
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

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
        description="Dilleri görüntüleyebilir, sırasını değiştirebilir, yeni bir dil oluşturabilir veya silebilirsiniz."
        title="Dil Listesi"
      />
      <div className="mt-20 relative">
        {isOrderActive && (
          <Reorder onCancel={onReorderCancel} onClick={reorder} />
        )}
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data, (item, index, operation) => {
              setIsOrderActive(true);
              handleMove<Language>(item, index, operation, data, setData);
            }),
          }}
        />
        <div style={{ height: 1000 }}></div>
      </div>
    </main>
  );
}
