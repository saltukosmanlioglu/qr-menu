import React from "react";
import Link from "next/link";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import Button, { ButtonGroup } from "@atlaskit/button";
import { Category } from "@/services/category";
import { Product } from "@/services/product";

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
  data: Omit<Category, "parentId">,
  handleMove: (
    item: Omit<Category, "parentId">,
    index: number,
    operation: "up" | "down"
  ) => void
) =>
  data?.subCategories?.map((item, index) => ({
    key: `row-${index}-${item.id}`,
    cells: [
      {
        key: item.id,
        content: (
          <span style={{ color: item.color }}>
            {item.localizations?.[0]?.title}
          </span>
        ),
      },
      {
        key: item.id,
        content: <span style={{ color: item.color }}>{item.color}</span>,
      },
      {
        key: item.id,
        content: new Date(item.audit.createdAt).toLocaleString(),
      },
      {
        key: item.id,
        content: (
          <ButtonGroup>
            <Link href={`/category/${item.id}`}>
              <Button
                appearance="default"
                children="Düzenle"
                iconAfter={<EditFilledIcon label="" size="small" />}
              />
            </Link>
            <Button
              appearance="default"
              isDisabled={index === 0}
              iconBefore={<ArrowUpIcon label="" size="medium" />}
              onClick={() => handleMove(item, index, "up")}
            />
            <Button
              appearance="default"
              isDisabled={index === data.subCategories.length - 1}
              iconBefore={<ArrowDownIcon label="" size="medium" />}
              onClick={() => handleMove(item, index, "down")}
            />
          </ButtonGroup>
        ),
      },
    ],
  }));

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
  handleMove: (item: Product, index: number, operation: "up" | "down") => void
) =>
  data?.map((product, index) => ({
    key: `row-${index}-${product.id}`,
    cells: [
      {
        key: product.id,
        content: product.localizations?.[0].title,
      },
      {
        key: product.id,
        content: <React.Fragment>{product.price}₺</React.Fragment>,
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
              isDisabled={index === 0}
              iconBefore={<ArrowUpIcon label="" size="medium" />}
              onClick={() => handleMove(product, index, "up")}
            />
            <Button
              appearance="default"
              isDisabled={index === data.length - 1}
              iconBefore={<ArrowDownIcon label="" size="medium" />}
              onClick={() => handleMove(product, index, "down")}
            />
          </ButtonGroup>
        ),
      },
    ],
  }));
