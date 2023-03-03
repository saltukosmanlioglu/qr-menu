import Link from "next/link";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import Button, { ButtonGroup } from "@atlaskit/button";
import { Category } from "@/services/category";

export const productHead = {
  cells: [
    {
      key: "title",
      content: "Ürün adı",
    },
    {
      key: "price",
      content: "Ürün fiyatı",
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

export const productRows = (
  data: Category["products"],
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((product, index) => ({
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

export const subCategoryHead = {
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

export const subCategoryRows = (
  data: Category["subCategories"],
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((subCategory, index) => ({
    key: `row-${index}-${subCategory.id}`,
    cells: [
      {
        key: subCategory.id,
        content: (
          <span style={{ color: subCategory.color }}>{subCategory.title}</span>
        ),
      },
      {
        key: subCategory.id,
        content: (
          <span style={{ color: subCategory.color }}>{subCategory.color}</span>
        ),
      },
      {
        key: subCategory.id,
        content: new Date(subCategory.audit.createdAt).toLocaleString(),
      },
      {
        key: subCategory.id,
        content: (
          <ButtonGroup>
            <Link href={`/category/${subCategory.id}`}>
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
