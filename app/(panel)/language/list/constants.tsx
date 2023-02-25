import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button, { ButtonGroup } from "@atlaskit/button";

import ArrowUpIcon from "@atlaskit/icon/glyph/arrow-up";
import ArrowDownIcon from "@atlaskit/icon/glyph/arrow-down";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { Language, LanguageResponse } from "@/services/language";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Dil listesi",
  },
];

export const head = {
  cells: [
    {
      key: "code",
      content: "Dil kodu",
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
  data: LanguageResponse,
  moveDown: () => void,
  moveUp: () => void
) =>
  data?.map((language: Language, index: number) => ({
    key: `row-${index}-${language.code}`,
    cells: [
      {
        key: language.id,
        content: language.code,
      },
      {
        key: language.id,
        content: new Date(language.createdDate).toLocaleString(),
      },
      {
        key: language.id,
        content: (
          <ButtonGroup>
            <Link href={`/language/${language.id}`}>
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
