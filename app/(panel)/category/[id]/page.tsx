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
import categoryService, { Category } from "@/services/category";
import languageService, { LanguageResponse } from "@/services/language";

import { Language, Products, SubCategories, Update } from "./tabs";

import { breadcrumbItemList } from "./constants";

export default function UpdateCategory({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Category>();
  const [languages, setLanguages] = useState<LanguageResponse["data"]>();

  const router = useRouter();

  const onRemove = () => {
    categoryService
      .remove(params.id)
      .then(() => router.push("/category/list"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    categoryService
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
              <Link href="/category/create">
                <Button appearance="primary" children="Alt kategori ekle" />
              </Link>
            )}
            <Link href={`/product/create?categoryId=${params.id}`}>
              <Button appearance="primary" children="Ürün ekle" />
            </Link>
            <ModalDialog
              appearance="danger"
              buttonText="Sil"
              icon={<TrashIcon label="" size="small" />}
              body="Eğer bir kategoriyi silmek istiyorsanız, kategori ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
              onClick={onRemove}
              title="Kategori silinmek üzere!"
              width="medium"
            />
          </ButtonGroup>
        }
        breadcrumbItems={breadcrumbItemList}
        title={`Kategori: ${data.localizations?.[0]?.title}`}
      />
      <Tabs
        tabs={[
          {
            icon: <RetryIcon label="" size="small" />,
            title: "Düzenle",
            visible: true,
          },
          {
            icon: <BulletListIcon label="" size="small" />,
            title: "Alt kategoriler",
            visible: data.subCategories.length > 0 && !data.parentId,
          },
          {
            icon: <BacklogIcon label="" size="small" />,
            title: "Ürünler",
            visible: data.products.length > 0,
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
              <SubCategories
                data={data}
                isLoading={false}
                setNewData={setData}
              />
            ),
            visible: data.subCategories.length > 0 && !data.parentId,
          },
          {
            component: (
              <Products data={data} isLoading={false} setNewData={setData} />
            ),
            visible: data.products.length > 0,
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
