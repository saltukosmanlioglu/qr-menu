"use client";
import Link from "next/link";
import Button, { ButtonGroup } from "@atlaskit/button";
import DropdownMenu, { DropdownItem } from "@atlaskit/dropdown-menu";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import { LanguageResponse } from "@/services/language";
import { SubProduct, SubProductResponse } from "@/services/sub-product";
import LanguageSupport from "@/widgets/language-support";

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
  data: SubProductResponse,
  onRemove: (id: number) => void,
  moveDown: () => void,
  moveUp: () => void,
  languageSupport: React.ReactNode
) =>
  data?.map((product: SubProduct, index: number) => ({
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
        content: (
          <ButtonGroup>
            <Link href={`/product/${product.id}`}>
              <Button
                appearance="default"
                children="Düzenle"
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
            {languageSupport}
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