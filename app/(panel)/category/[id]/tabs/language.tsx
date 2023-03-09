import React, { useState } from "react";

import TextField from "@/atlaskit/components/text-field";
import Gutter from "@/components/gutter";
import categoryService, { CategoryLocalization } from "@/services/category";
import useForm from "@/utils/hooks/form";
import LanguageSupport from "@/widgets/language-support";

import { LanguageProps } from "./types";

const Language: React.FunctionComponent<LanguageProps> = ({
  data,
  languages,
  params,
  setData,
}) => {
  const form = useForm<CategoryLocalization>({
    initialValues: {
      languageCode: "",
      title: "",
    },
  });

  const addLanguageSupport = (
    values: CategoryLocalization,
    languageCode: string
  ) => {
    if (data) {
      let localizations: Array<CategoryLocalization> = [];

      localizations.push(...data.localizations, {
        languageCode,
        title: values.title,
      });

      categoryService
        .update(params.id, {
          color: data.color,
          localizations,
          parentId: data.parentId,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  const updateLanguageSupport = (
    values: CategoryLocalization,
    languageCode: string
  ) => {
    if (data) {
      let localizations: Array<CategoryLocalization> =
        data.localizations.slice();

      const languageIndex = localizations.findIndex(
        (localization) => localization.languageCode === languageCode
      );

      localizations[languageIndex].title = values.title;

      categoryService
        .update(params.id, {
          color: data.color,
          localizations,
          parentId: data.parentId,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  const removeLanguageSupport = (languageCode: string) => {
    if (data) {
      let localizations: Array<CategoryLocalization> =
        data.localizations.slice();

      const itemIndex = data.localizations.findIndex(
        (localization) => localization.languageCode === languageCode
      );

      localizations.splice(itemIndex, 1);

      categoryService
        .update(params.id, {
          color: data.color,
          localizations,
          parentId: data.parentId,
          status: data.audit.status,
          title: data.localizations[0].title,
        })
        .then(() => setData({ ...data, localizations }))
        .catch((err) => console.log(err));
    }
  };

  return (
    <LanguageSupport<CategoryLocalization>
      relatedData={data}
      data={languages}
      isLoading={false}
      onCreate={addLanguageSupport}
      onUpdate={updateLanguageSupport}
      removeLanguageSupport={removeLanguageSupport}
    >
      {() => (
        <Gutter width="w-full">
          <TextField
            autoFocus
            errorMessage="Kategori adı girmelisiniz"
            label="Kategori adı"
            name="title"
            onChange={(e) => form.handleChange("title", e.currentTarget.value)}
            placeholder="Kategori adı girin"
            required
            value={form.values.title}
          />
        </Gutter>
      )}
    </LanguageSupport>
  );
};

export default Language;
