import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import { Gallery, GalleryResponse } from "@/services/gallery";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Öne çıkan içerik listesi",
  },
];

export const head = {
  cells: [
    {
      key: "title",
      content: "Ürün adı",
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
  data: GalleryResponse["data"],
  onRemove: (id: string) => void,
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((gallery: Gallery, index: number) => ({
    key: `row-${index}-${gallery.id}`,
    cells: [
      {
        key: gallery.id,
        content: gallery.product.name,
      },
      {
        key: gallery.id,
        content: new Date(gallery.audit.createdAt).toLocaleString(),
      },
      {
        key: gallery.id,
        content: (
          <ButtonGroup>
            <ModalDialog
              appearance="danger"
              buttonText="Sil"
              icon={<TrashIcon label="" size="small" />}
              body="Eğer bir öne çıkan içeriği silmek istiyorsanız, öne çıkan içerik ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
              onClick={() => onRemove(gallery.id)}
              title="Dil silinmek üzere!"
              width="medium"
            />
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
