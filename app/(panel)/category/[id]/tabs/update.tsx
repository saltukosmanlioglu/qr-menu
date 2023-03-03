import React from "react";

import categoryService, { CategoryRequest } from "@/services/category";

import Form from "../../form";

import { UpdateProps } from "./types";

const Update: React.FunctionComponent<UpdateProps> = ({
  data,
  isLoading,
  params,
  router,
}) => {
  const onUpdate = (values: CategoryRequest) => {
    const languageCode = Object.values(values.languageCode)[1];
    const parentId = Object.values(values.parentId)[1];

    categoryService
      .update(params.id, {
        ...values,
        languageCode,
        parentId,
      })
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        initialValues={
          data ? { ...data, status: data.audit.status } : undefined
        }
        operation="update"
        props={{
          buttonText: "Güncelle",
          description:
            "Aşağıdaki formu doldurarak geçerli kategoriyi güncelleyebilirsiniz.",
          isLoading,
          onSubmit: onUpdate,
          operation: "update",
          title: `Kategori: ${data?.title}`,
        }}
      />
    </div>
  );
};

export default Update;
