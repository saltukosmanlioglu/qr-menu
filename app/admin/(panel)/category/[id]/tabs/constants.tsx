"use client";
import Link from "next/link";
import Button, { ButtonGroup } from "@atlaskit/button";
import DropdownMenu, { DropdownItem } from "@atlaskit/dropdown-menu";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import { Category, CategoryResponse } from "@/services/admin/category";
import { LanguageResponse } from "@/services/admin/language";

export const head = {
  cells: [
    {
      key: "title",
      content: "Ürün adı",
    },
    {
      key: "color",
      content: "Fiyatı",
    },
    {
      key: "operation",
      content: "İşlemler",
    },
  ],
};

export const rows = (
  data: CategoryResponse,
  onRemove: (id: number) => void,
  moveDown: () => void,
  moveUp: () => void,
  languages: LanguageResponse
) =>
  data?.map((product: Category, index: number) => ({
    key: `row-${index}-${product.id}`,
    cells: [
      {
        key: product.id,
        content: product.title,
      },
      {
        key: product.id,
        content: product.title,
      },
      {
        key: product.id,
        content: (
          <ButtonGroup>
            <Link href={`/admin/product/${product.id}`}>
              <Button
                appearance="default"
                children="Güncelle"
                iconAfter={<EditFilledIcon label="" size="small" />}
              />
            </Link>
            <ModalDialog
              appearance="danger"
              buttonText="Sil"
              body="If you delete a product, all dependencies related to the product are destroyed. Are you sure you want to delete ?"
              icon={<TrashIcon label="" size="small" />}
              onClick={() => onRemove(product.id)}
              title="Product is going to delete !"
              width="medium"
            />
            <DropdownMenu trigger="Dil desteği">
              {languages?.map((langauge, index) => (
                <DropdownItem key={index}>{langauge.code}</DropdownItem>
              ))}
            </DropdownMenu>
            <Button
              appearance="subtle"
              isDisabled={data.length === 0}
              iconBefore={<ArrowUpIcon label="" size="medium" />}
              onClick={() => moveDown()}
            />
            <Button
              appearance="subtle"
              isDisabled={data.length === data.length - 1}
              iconBefore={<ArrowDownIcon label="" size="medium" />}
              onClick={() => moveUp()}
            />
          </ButtonGroup>
        ),
      },
    ],
  }));
