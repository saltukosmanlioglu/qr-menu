import Link from "next/link";

import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import Button, { ButtonGroup } from "@atlaskit/button";
import { Product } from "@/services/product";

export const subProductHead = {
  cells: [
    {
      key: "title",
      content: "Alt ürün adı",
    },
    {
      key: "price",
      content: "Alt ürün fiyatı",
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

export const subProductsRows = (
  data: Product["subProducts"],
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((subProduct, index) => ({
    key: `row-${index}-${subProduct.id}`,
    cells: [
      {
        key: subProduct.id,
        content: subProduct.localizations[0].title,
      },
      {
        key: subProduct.id,
        content: subProduct.price,
      },
      {
        key: subProduct.id,
        content: new Date(subProduct.audit.createdAt).toLocaleString(),
      },
      {
        key: subProduct.id,
        content: (
          <ButtonGroup>
            <Link href={`/product/${subProduct.id}`}>
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
