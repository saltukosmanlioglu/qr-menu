import Link from "next/link";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";
import Button from "@atlaskit/button";

import DetailViewIcon from "@atlaskit/icon/glyph/detail-view";

import {
  SuggestionsAndComplaints,
  SuggestionsAndComplaintsResponse,
} from "@/services/suggestions-and-complaints";

export const breadcrumbItemList: Array<BreadcrumbsItemProps> = [
  {
    text: "Öneri ve Şikayet listesi",
  },
];

export const head = {
  cells: [
    {
      key: "fullName",
      content: "İsim - Soyisim",
    },
    {
      key: "phoneNumber",
      content: "Telefon numarası",
    },
    {
      key: "message",
      content: "Mesaj",
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

export const rows = (data: SuggestionsAndComplaintsResponse["data"]) =>
  data?.map((item: SuggestionsAndComplaints, index: number) => ({
    key: `row-${index}-${item.id}`,
    cells: [
      {
        key: item.id,
        content: item.fullName,
      },
      {
        key: item.id,
        content: item.phoneNumber,
      },
      {
        key: item.id,
        content: item.message,
      },
      {
        key: item.id,
        content: new Date(item.audit.createdAt).toLocaleString(),
      },
      {
        key: item.id,
        content: (
          <Link href={`/suggestions-and-complaints/${item.id}`}>
            <Button
              appearance="default"
              children="İncele"
              iconAfter={<DetailViewIcon label="" size="small" />}
            />
          </Link>
        ),
      },
    ],
  }));
