import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import BulletListIcon from "@atlaskit/icon/glyph/bullet-list";
import ImageIcon from "@atlaskit/icon/glyph/image";
import TableIcon from "@atlaskit/icon/glyph/table";
import WorldIcon from "@atlaskit/icon/glyph/world";

import { FrequentlyUsedButtonProps } from "@/components/frequently-used-button";

export const menuItems = [
  {
    icon: <BulletListIcon label="" size="medium" />,
    subItems: [
      {
        href: "/category/create",
        text: "Kategori oluştur",
      },
      {
        href: "/category/list",
        text: "Kategoriler",
      },
    ],
    title: "Kategoriler",
  },
  {
    icon: <ImageIcon label="" size="medium" />,
    subItems: [
      {
        href: "/gallery/create",
        text: "Öne çıkan içerik oluştur",
      },
      {
        href: "/gallery/list",
        text: "Öne çıkan içerikler",
      },
    ],
    title: "Öne çıkan içerik",
  },
  {
    icon: <WorldIcon label="" size="medium" />,
    subItems: [
      {
        href: "/language/create",
        text: "Dil desteği ekle",
      },
      {
        href: "/language/list",
        text: "Diller",
      },
    ],
    title: "Dil",
  },
  {
    icon: <TableIcon label="" size="medium" />,
    subItems: [
      {
        href: "/table/create",
        text: "Masa oluştur",
      },
      {
        href: "/table/list",
        text: "Masalar",
      },
    ],
    title: "Masa",
  },
];

export const frequentlyUsedButtons: Array<
  Omit<FrequentlyUsedButtonProps, "onClick"> & { href: string }
> = [
  {
    description: "Kategori oluşturup yeni ürünlerinizi ekleyebilirsiniz.",
    href: "/category/create",
    icon: <BulletListIcon label="" size="xlarge" />,
    title: "Kategori oluştur",
  },
  {
    description: "Ürün oluşturup ürünlerinizi müşterilerinize sunabilirsiniz.",
    href: "/product/create",
    icon: <BacklogIcon label="" size="xlarge" />,
    title: "Ürün oluştur",
  },
  {
    description:
      "Öne çıkan içerik oluşturup önemli ürünlerinizi müşterilerinize sunabilirsiniz.",
    href: "/gallery/create",
    icon: <ImageIcon label="" size="xlarge" />,
    title: "Öne çıkan içerik oluştur",
  },
  {
    description:
      "Dil desteği ekleyip ürünlerinizi yabancı müşterilerinize tanıtabilirsiniz.",
    href: "/language/create",
    icon: <WorldIcon label="" size="xlarge" />,
    title: "Dil desteği ekle",
  },
  {
    description: "Masa oluşturup QR Kodunuzu kullanabilirsiniz.",
    href: "/table/create",
    icon: <TableIcon label="" size="xlarge" />,
    title: "Masa oluştur",
  },
];
