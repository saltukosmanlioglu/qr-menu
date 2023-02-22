import React, { useState } from "react";

import service from "@/services/admin/category";

import Form from "../../form";

import { UpdateTabProps } from "./types";

const Update: React.FunctionComponent<UpdateTabProps> = ({
  data,
  params,
  router,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onUpdate = (values: any) => {
    setIsLoading(true);

    service
      .update(Number(params.id), {
        ...values,
        parentId: values.parentId.value,
      })
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full">
      <Form
        initialValues={data}
        operation="update"
        props={{
          buttonText: "Update category",
          description:
            "You can update this category by filling in the fields below",
          isLoading,
          onSubmit: onUpdate,
          operation: "update",
          title: `Update category: ${data?.title}`,
        }}
      />
    </div>
  );
};

export default Update;
