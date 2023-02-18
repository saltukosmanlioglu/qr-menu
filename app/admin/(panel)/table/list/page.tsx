"use client";
import React from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import tableService, { TableResponse } from "@/services/admin/table";
import { useGet } from "@/utils/admin/hooks/service";

import { breadcrumbItemList, head, rows } from "./constants";

export default function TableList() {
  const { data, isLoading } = useGet<TableResponse>({
    service: tableService.get(),
  });

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/admin/table/create">
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
      <Table
        tableProps={{
          isLoading: isLoading,
          head: head,
          rows: rows(data as TableResponse, moveDown, moveUp),
        }}
      />
    </main>
  );
}
