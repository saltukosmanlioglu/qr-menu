import { CategoryLanguageSupportProps } from "@/services/category";
import { LanguageResponse } from "@/services/language";
import { ButtonGroup } from "@atlaskit/button";

export const languageHead = {
  cells: [
    {
      key: "title",
      content: "Dil kodu",
    },
    {
      key: "categoryTitle",
      content: "Kategori adı",
    },
    {
      key: "operation",
      content: "İşlemler",
    },
  ],
};

export const languageRows = (
  data: LanguageResponse["data"],
  onSubmit: (values: CategoryLanguageSupportProps) => void
) =>
  data?.map((language, index) => ({
    key: `row-${index}-${language.id}`,
    cells: [
      {
        key: language.id,
        content: language.code,
      },
      {
        key: language.id,
        content: language.code,
      },
      {
        key: language.id,
        content: <ButtonGroup></ButtonGroup>,
      },
    ],
  }));
