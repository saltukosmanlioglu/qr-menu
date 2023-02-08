import BulletListIcon from "@atlaskit/icon/glyph/bullet-list";
import ImageIcon from "@atlaskit/icon/glyph/image";
import TableIcon from "@atlaskit/icon/glyph/table";
import WorldIcon from "@atlaskit/icon/glyph/world";

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
