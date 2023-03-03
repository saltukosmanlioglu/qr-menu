import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Product, ProductResponse } from "@/services/product";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Ürün listesi",
  },
];

export const head = {
  cells: [
    {
      key: "title",
      content: "Ürün adı",
    },
    {
      key: "price",
      content: "Fiyatı",
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
  data: ProductResponse["data"],
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((product: Product, index: number) => ({
    key: `row-${index}-${product.id}`,
    cells: [
      {
        key: product.id,
        content: product.title,
      },
      {
        key: product.id,
        content: product.price,
      },
      {
        key: product.id,
        content: new Date(product.audit.createdAt).toLocaleString(),
      },
      {
        key: product.id,
        content: (
          <ButtonGroup>
            <Link href={`/product/${product.id}`}>
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
