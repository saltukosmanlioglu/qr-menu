"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import tableService, { TableResponse } from "@/services/table";

import { breadcrumbItemList, head, rows } from "./constants";

export default function TableList() {
  const [data, setData] = useState<TableResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    tableService
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
          <Link href="/table/create">
            <Button
              appearance="primary"
              children="Masa oluştur"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Masaları görüntüleyebilir, ve yeni bir masa oluşturabilirsiniz."
        title="Masa Listesi"
      />
      <div className="mt-20">
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data as TableResponse, moveDown, moveUp),
          }}
        />
      </div>
    </main>
  );
}
