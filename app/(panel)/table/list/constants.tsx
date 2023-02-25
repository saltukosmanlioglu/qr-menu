import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Table, TableResponse } from "@/services/table";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Masa Listesi",
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

export const rows = (
  data: TableResponse,
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((table: Table, index: number) => ({
    key: `row-${index}-${table.id}`,
    cells: [
      {
        key: table.id,
        content: table.title,
      },
      {
        key: table.id,
        content: new Date(table.createdDate).toLocaleString(),
      },
      {
        key: table.id,
        content: (
          <ButtonGroup>
            <Link href={`/table/${table.id}`}>
              <Button
                appearance="default"
                children="Düzenle"
                iconAfter={<EditFilledIcon label="" size="small" />}
              />
            </Link>
            <Button
              appearance="default"
              isDisabled={data.length === 0}
              iconBefore={<ArrowUpIcon label="" size="medium" />}
              onClick={() => moveDown()}
            />
            <Button
              appearance="default"
              isDisabled={data.length === data.length - 1}
              iconBefore={<ArrowDownIcon label="" size="medium" />}
              onClick={() => moveUp()}
            />
          </ButtonGroup>
        ),
      },
    ],
  }));
