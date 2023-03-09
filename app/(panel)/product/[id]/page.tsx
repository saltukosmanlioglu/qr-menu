"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button, { ButtonGroup } from "@atlaskit/button";

import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import BulletListIcon from "@atlaskit/icon/glyph/bullet-list";
import RetryIcon from "@atlaskit/icon/glyph/retry";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import WorldIcon from "@atlaskit/icon/glyph/world";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import Tabs from "@/atlaskit/widgets/tabs";
import productService, { Product } from "@/services/product";
import languageService, { LanguageResponse } from "@/services/language";

import { Language, SubProducts, Update } from "./tabs";

import { breadcrumbItemList } from "./constants";

export default function UpdateProduct({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Product>();
  const [languages, setLanguages] = useState<LanguageResponse["data"]>();

  const router = useRouter();

  const onRemove = () => {
    productService
      .remove(params.id)
      .then(() => router.push("/category/list"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    productService
      .getById(params.id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  useEffect(() => {
    languageService
      .get()
      .then((res) => setLanguages(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return data ? (
    <main>
      <PageInformation
        actions={
          <ButtonGroup>
            {!data.parentId && (
              <Link href="/product/create">
                <Button appearance="primary" children="Alt ürün ekle" />
              </Link>
            )}
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
        title={`Ürünü güncelle: ${data.localizations?.[0]?.title}`}
      />
      <Tabs
        tabs={[
          {
            icon: <RetryIcon label="" size="small" />,
            title: "Güncelle",
            visible: true,
          },
          {
            icon: <BacklogIcon label="" size="small" />,
            title: "Alt ürünler",
            visible: data.subProducts.length > 0 && !data.parentId,
          },
          {
            icon: <WorldIcon label="" size="small" />,
            title: "Dil desteği",
            visible: true,
          },
        ]}
        childrens={[
          {
            component: (
              <Update
                data={data}
                isLoading={false}
                params={params}
                router={router}
              />
            ),
            visible: true,
          },
          {
            component: (
              <SubProducts data={data.subProducts} isLoading={false} />
            ),
            visible: data.subProducts.length > 0 && !data.parentId,
          },
          {
            component: data && (
              <Language
                data={data}
                languages={languages}
                params={params}
                setData={setData}
              />
            ),
            visible: true,
          },
        ]}
      />
    </main>
  ) : null;
}
