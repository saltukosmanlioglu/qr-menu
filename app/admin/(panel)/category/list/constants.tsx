import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Category, CategoryResponse } from "@/services/admin/category";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Kategori listesi",
  },
];

export const head = {
  cells: [
    {
      key: "title",
      content: "Kategori adı",
    },
    {
      key: "color",
      content: "Kategori rengi",
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
  data: CategoryResponse,
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((category: Category, index: number) => ({
    key: `row-${index}-${category.id}`,
    cells: [
      {
        key: category.id,
        content: (
          <span style={{ color: category.color }}>{category.title}</span>
        ),
      },
      {
        key: category.id,
        content: (
          <span style={{ color: category.color }}>{category.color}</span>
        ),
      },
      {
        key: category.id,
        content: new Date(category.createdDate).toLocaleString(),
      },
      {
        key: category.id,
        content: (
          <ButtonGroup>
            <Link href={`/admin/category/${category.id}`}>
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
