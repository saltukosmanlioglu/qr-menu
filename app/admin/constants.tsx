import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import BulletListIcon from "@atlaskit/icon/glyph/bullet-list";
import ImageIcon from "@atlaskit/icon/glyph/image";
import TableIcon from "@atlaskit/icon/glyph/table";
import WorldIcon from "@atlaskit/icon/glyph/world";

import { FrequentlyUsedButtonProps } from "@/components/admin/frequently-used-button";

export const menuItems = [
  {
    icon: <BulletListIcon label="" size="medium" />,
    subItems: [
      {
        href: "/admin/category/create",
        text: "Kategori oluştur",
      },
      {
        href: "/admin/category/list",
        text: "Kategoriler",
      },
    ],
    title: "Kategoriler",
  },
  {
    icon: <BacklogIcon label="" size="medium" />,
    subItems: [
      {
        href: "/admin/product/create",
        text: "Ürün oluştur",
      },
      {
        href: "/admin/product/list",
        text: "Ürünler",
      },
    ],
    title: "Ürünler",
  },
  {
    icon: <ImageIcon label="" size="medium" />,
    subItems: [
      {
        href: "/admin/gallery/create",
        text: "Öne çıkan içerik oluştur",
      },
      {
        href: "/admin/gallery/list",
        text: "Öne çıkan içerikler",
      },
    ],
    title: "Öne çıkan içerik",
  },
  {
    icon: <WorldIcon label="" size="medium" />,
    subItems: [
      {
        href: "/admin/language/create",
        text: "Dil desteği ekle",
      },
      {
        href: "/admin/language/list",
        text: "Diller",
      },
    ],
    title: "Dil",
  },
  {
    icon: <TableIcon label="" size="medium" />,
    subItems: [
      {
        href: "/admin/table/create",
        text: "Masa oluştur",
      },
      {
        href: "/admin/table/list",
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
    href: "/admin/category/create",
    icon: <BulletListIcon label="" size="xlarge" />,
    title: "Kategori oluştur",
  },
  {
    description: "Ürün oluşturup ürünlerinizi müşterilerinize sunabilirsiniz.",
    href: "/admin/product/create",
    icon: <BacklogIcon label="" size="xlarge" />,
    title: "Ürün oluştur",
  },
  {
    description:
      "Öne çıkan içerik oluşturup önemli ürünlerinizi müşterilerinize sunabilirsiniz.",
    href: "/admin/gallery/create",
    icon: <ImageIcon label="" size="xlarge" />,
    title: "Öne çıkan içerik oluştur",
  },
  {
    description:
      "Dil desteği ekleyip ürünlerinizi yabancı müşterilerinize tanıtabilirsiniz.",
    href: "/admin/language/create",
    icon: <WorldIcon label="" size="xlarge" />,
    title: "Dil desteği ekle",
  },
  {
    description: "Masa oluşturup QR Kodunuzu kullanabilirsiniz.",
    href: "/admin/table/create",
    icon: <TableIcon label="" size="xlarge" />,
    title: "Masa oluştur",
  },
];
