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
import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
import categoryService, {
  Category,
  CategoryLanguageSupportProps,
  Localization,
} from "@/services/category";
import languageService, { LanguageResponse } from "@/services/language";
import LanguageSupport from "@/widgets/language-support";

import { Products, SubCategories, Update } from "./tabs";

import { breadcrumbItemList } from "./constants";

export default function UpdateCategory({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Category>();
  const [languages, setLanguages] = useState<LanguageResponse["data"]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const onRemove = () => {
    categoryService
      .remove(params.id)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  const addLanguageSupport = (values: CategoryLanguageSupportProps) => {
    let localizations: Array<Localization> = [];

    if (data) {
      localizations.push(...data?.localizations, {
        languageCode: values.languageCode,
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
        .then(() => router.back())
        .catch((err) => console.log(err));
    }
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

  return (
    <main>
      <PageInformation
        actions={
          <ButtonGroup>
            <Link href="/category/create">
              <Button appearance="primary" children="Alt kategori ekle" />
            </Link>
            <Link href="/product/create">
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
        title="Kategoriyi güncelle"
      />
      <Tabs
        tabs={[
          {
            icon: <RetryIcon label="" size="small" />,
            title: "Güncelle",
          },
          {
            icon: <BulletListIcon label="" size="small" />,
            title: "Alt kategoriler",
          },
          {
            icon: <BacklogIcon label="" size="small" />,
            title: "Ürünler",
          },
          {
            icon: <WorldIcon label="" size="small" />,
            title: "Dil desteği",
          },
        ]}
        childrens={[
          {
            component: (
              <Update
                data={data}
                isLoading={isLoading}
                params={params}
                router={router}
              />
            ),
          },
          {
            component: (
              <SubCategories data={data?.subCategories} isLoading={isLoading} />
            ),
          },
          {
            component: <Products data={data?.products} isLoading={isLoading} />,
          },
          {
            component: (
              <LanguageSupport<CategoryLanguageSupportProps>
                data={languages}
                isLoading={false}
                onSubmit={addLanguageSupport}
              >
                {(form) => (
                  <Gutter width="w-full">
                    <TextField
                      autoFocus
                      errorMessage="Kategori adı girmelisiniz"
                      label="Kategori adı"
                      name="title"
                      onChange={(e) =>
                        form.handleChange("title", e.currentTarget.value)
                      }
                      placeholder="Kategori adı girin"
                      required
                      value={form.values.title}
                    />
                  </Gutter>
                )}
              </LanguageSupport>
            ),
          },
        ]}
      />
    </main>
  );
}
