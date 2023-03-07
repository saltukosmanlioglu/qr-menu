"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button, { ButtonGroup } from "@atlaskit/button";

import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import RetryIcon from "@atlaskit/icon/glyph/retry";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import WorldIcon from "@atlaskit/icon/glyph/world";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import Tabs from "@/atlaskit/widgets/tabs";
import productService, { Product } from "@/services/product";

import { LanguageSupport, SubProducts, Update } from "./tabs";

import { breadcrumbItemList } from "./constants";

export default function UpdateProduct({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Product>();

  const router = useRouter();

  const onRemove = () => {
    productService
      .remove(params.id)
      .then(() => router.push("/product/list"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productService
      .getById(params.id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <main>
      <PageInformation
        actions={
          <ButtonGroup>
            <Link href="/product/create">
              <Button appearance="primary" children="Alt ürün ekle" />
            </Link>
            <Link href="/product/create">
              <Button appearance="primary" children="Ürün ekle" />
            </Link>
            <ModalDialog
              appearance="danger"
              buttonText="Sil"
              icon={<TrashIcon label="" size="small" />}
              body="Eğer bir ürünü silmek istiyorsanız, ürün ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
              onClick={onRemove}
              title="Ürün silinmek üzere!"
              width="medium"
            />
          </ButtonGroup>
        }
        breadcrumbItems={breadcrumbItemList}
        title="Ürün güncelle"
      />
      <Tabs
        tabs={[
          {
            icon: <RetryIcon label="" size="small" />,
            title: "Güncelle",
          },
          {
            icon: <BacklogIcon label="" size="small" />,
            title: "Alt ürünler",
          },
          {
            icon: <WorldIcon label="" size="small" />,
            title: "Dil desteği",
          },
        ]}
        childrens={[
          {
            component: <Update data={data} params={params} router={router} />,
          },
          {
            component: <SubProducts data={data?.subProducts} />,
          },
          {
            component: <LanguageSupport />,
          },
        ]}
      />
    </main>
  );
}
