"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import RetryIcon from "@atlaskit/icon/glyph/retry";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import Tabs from "@/atlaskit/widgets/tabs";
import service, { Product } from "@/services/admin/product";

import { breadcrumbItemList, productsData } from "./constants";
import { SubProducts, Update } from "./tabs";

export default function UpdateProduct({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Product>();

  const router = useRouter();

  const onRemove = () => {
    service
      .remove(Number(params.id))
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // service
    //   .getById(Number(params.id))
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.log(err));

    productsData.find((p) => p.id === Number(params.id) && setData(p));
  }, [params.id]);

  return (
    <main>
      <PageInformation
        actions={
          <ModalDialog
            appearance="danger"
            buttonText="Delete product"
            body="If you delete a product, all dependencies related to the product are destroyed. Are you sure you want to delete ?"
            onClick={onRemove}
            title="Product is going to delete !"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Dil desteğini Güncelle"
      />

      <Tabs
        childrens={[
          {
            component: <Update data={data} params={params} router={router} />,
          },
          {
            component: <SubProducts />,
          },
        ]}
        tabs={[
          {
            icon: <RetryIcon label="" size="medium" />,
            title: "Update category",
          },
          {
            icon: <BacklogIcon label="" size="medium" />,
            title: "Sub products",
          },
        ]}
      />
    </main>
  );
}
