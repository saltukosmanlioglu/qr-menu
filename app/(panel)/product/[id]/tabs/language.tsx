import React from "react";

import TextArea from "@/atlaskit/components/text-area";
import TextField from "@/atlaskit/components/text-field";
import productService, { ProductLocalization } from "@/services/product";
import useForm from "@/utils/hooks/form";
import LanguageSupport from "@/widgets/language-support";

import { LanguageProps } from "./types";

const Language: React.FunctionComponent<LanguageProps> = ({
  data,
  languages,
  params,
  setData,
}) => {
  const form = useForm<ProductLocalization>({
    initialValues: {
      description: "",
      languageCode: "",
      specifications: { allergens: "" },
      title: "",
    },
  });

  const addLanguageSupport = (
    values: ProductLocalization,
    languageCode: string
  ) => {
    if (data) {
      let localizations: Array<ProductLocalization> = [];

      localizations.push(...data.localizations, {
        description: values.description,
        languageCode,
        specifications: {
          allergens: values.specifications.allergens,
        },
        title: values.title,
      });

      productService
        .update(params.id, {
          allergens: data.localizations[0].specifications.allergens,
          categoryId: data.categoryId,
          description: data.localizations[0].description,
          image: data.image,
          localizations,
          parentId: data.parentId,
          price: data.price,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  const updateLanguageSupport = (
    values: ProductLocalization,
    languageCode: string
  ) => {
    if (data) {
      let localizations: Array<ProductLocalization> =
        data.localizations.slice();

      const languageIndex = localizations.findIndex(
        (localization) => localization.languageCode === languageCode
      );

      localizations[languageIndex].title = values.title;

      productService
        .update(params.id, {
          allergens: data.localizations[0].specifications.allergens,
          categoryId: data.categoryId,
          description: data.localizations[0].description,
          image: data.image,
          localizations,
          parentId: data.parentId,
          price: data.price,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  const removeLanguageSupport = (languageCode: string) => {
    if (data) {
      let localizations: Array<ProductLocalization> =
        data.localizations.slice();

      const itemIndex = data.localizations.findIndex(
        (localization) => localization.languageCode === languageCode
      );

      localizations.splice(itemIndex, 1);

      productService
        .update(params.id, {
          allergens: data.localizations[0].specifications.allergens,
          categoryId: data.categoryId,
          description: data.localizations[0].description,
          image: data.image,
          localizations,
          parentId: data.parentId,
          price: data.price,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  return (
    <LanguageSupport<ProductLocalization>
      relatedData={data}
      data={languages}
      isLoading={false}
      onCreate={addLanguageSupport}
      onUpdate={updateLanguageSupport}
      removeLanguageSupport={removeLanguageSupport}
    >
      {() => (
        <div className="w-full flex flex-wrap gap-2 [&>div]:w-full">
          <TextField
            autoFocus
            errorMessage="Ürün adı girmelisiniz"
            label="Ürün adı"
            name="title"
            onChange={(e) => form.handleChange("title", e.currentTarget.value)}
            placeholder="Ürün adı girin"
            required
            value={form.values.title}
          />
          <TextArea
            label="Ürün açıklaması"
            name="descripton"
            onChange={(e) =>
              form.handleChange("descripton", e.currentTarget.value)
            }
            placeholder="Ürün açıklaması girin"
            value={form.values.description}
          />
          <TextArea
            label="Ürün alerjeni"
            name="specifications.allergens"
            onChange={(e) =>
              form.handleChange(
                "specifications.allergens",
                e.currentTarget.value
              )
            }
            placeholder="Ürün açıklaması girin"
            value={form.values.specifications?.allergens}
          />
        </div>
      )}
    </LanguageSupport>
  );
};

export default Language;
