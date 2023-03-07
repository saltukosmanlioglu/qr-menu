import React from "react";

import categoryService, {
  CategoryLocalization,
  CategoryRequest,
} from "@/services/category";

import Form from "../../form";

import { UpdateProps } from "./types";

const Update: React.FunctionComponent<UpdateProps> = ({
  data,
  isLoading,
  params,
  router,
}) => {
  const onUpdate = (values: CategoryRequest) => {
    const parentId = Object.values(values.parentId)[1];
    const status = Object.values(values.status)[1];

    let localizations: Array<CategoryLocalization> = [];

    localizations.push({
      languageCode: null,
      title: values.title,
    });

    categoryService
      .update(params.id, {
        ...values,
        localizations,
        parentId,
        status,
      })
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  return data ? (
    <Form
      initialValues={{
        ...data,
        status: data.audit.status,
        title: data.localizations[0].title,
      }}
      operation="update"
      props={{
        buttonText: "Güncelle",
        description:
          "Aşağıdaki formu doldurarak geçerli kategoriyi güncelleyebilirsiniz.",
        isLoading,
        onSubmit: onUpdate,
        operation: "update",
        title: `Kategori: ${data?.localizations[0].title}`,
      }}
    />
  ) : null;
};

export default Update;
