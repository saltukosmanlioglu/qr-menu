import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button from "@atlaskit/button";

import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Table, TableResponse } from "@/services/table";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Masa listesi",
  },
];

export const head = {
  cells: [
    {
      key: "title",
      content: "Masa adı",
    },
    {
      key: "createdDate",
      content: "Oluşturulma tarihi",
    },
    {
      key: "operation",
      content: "İşlemler",
    },
  ],
};

export const rows = (data: TableResponse["data"]) =>
  data?.map((table: Table, index: number) => ({
    key: `row-${index}-${table.id}`,
    cells: [
      {
        key: table.id,
        content: table.title,
      },
      {
        key: table.id,
        content: new Date(table.audit.createdAt).toLocaleString(),
      },
      {
        key: table.id,
        content: (
          <Link href={`/table/${table.id}`}>
            <Button
              appearance="default"
              children="Düzenle"
              iconAfter={<EditFilledIcon label="" size="small" />}
            />
          </Link>
        ),
      },
    ],
  }));
