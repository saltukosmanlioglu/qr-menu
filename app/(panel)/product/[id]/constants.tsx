import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Category, CategoryResponse } from "@/services/category";
import { ProductResponse } from "@/services/product";

export const productsData: ProductResponse = [
  {
    id: 1,
    categoryId: 28,
    createdDate: "",
    description: "Ürün 1 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 1 alerjeni",
    },
    title: "Ürün 1",
    updatedDate: "",
  },
  {
    id: 2,
    categoryId: 29,
    createdDate: "",
    description: "Ürün 2 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 2 alerjeni",
    },
    title: "Ürün 2",
    updatedDate: "",
  },
  {
    id: 3,
    categoryId: 30,
    createdDate: "",
    description: "Ürün 3 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 3 alerjeni",
    },
    title: "Ürün 3",
    updatedDate: "",
  },
  {
    id: 4,
    categoryId: 31,
    createdDate: "",
    description: "Ürün 4 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 4 alerjeni",
    },
    title: "Ürün 4",
    updatedDate: "",
  },
  {
    id: 5,
    categoryId: 32,
    createdDate: "",
    description: "Ürün 5 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 5 alerjeni",
    },
    title: "Ürün 5",
    updatedDate: "",
  },
  {
    id: 6,
    categoryId: 33,
    createdDate: "",
    description: "Ürün 6 açıklama",
    image: "",
    order: 0,
    price: "20,00",
    specifications: {
      allergens: "Ürün 6 alerjeni",
    },
    title: "Ürün 6",
    updatedDate: "",
  },
];

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    href: "/category/list",
    text: "Ürünler",
  },
  {
    text: "Ürünü güncelle",
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
            <Link href={`/category/${category.id}`}>
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
