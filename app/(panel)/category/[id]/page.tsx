"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button, { ButtonGroup } from "@atlaskit/button";

import AddIcon from "@atlaskit/icon/glyph/add";
import BacklogIcon from "@atlaskit/icon/glyph/backlog";
import RetryIcon from "@atlaskit/icon/glyph/retry";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import WorldIcon from "@atlaskit/icon/glyph/world";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import Tabs from "@/atlaskit/widgets/tabs";
import service, { Category } from "@/services/category";

import { LanguageSupport, Products, Update } from "./tabs";

import { breadcrumbItemList } from "./constants";

export default function UpdateLanguage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Category>();

  const router = useRouter();

  const onRemove = () => {
    service
      .remove(Number(params.id))
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    service
      .getById(Number(params.id))
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return data ? (
    <main>
      <PageInformation
        actions={
          <ButtonGroup>
            <Link href={`/product/create?categoryId=${params.id}`}>
              <Button
                appearance="primary"
                children="Add product"
                iconAfter={<AddIcon label="" size="small" />}
              />
            </Link>
            <ModalDialog
              appearance="danger"
              buttonText="Delete category"
              body="If you delete a category, all dependencies related to the language are destroyed. Are you sure you want to delete ?"
              icon={<TrashIcon label="" size="small" />}
              onClick={onRemove}
              title="Category is going to delete !"
              width="medium"
            />
          </ButtonGroup>
        }
        breadcrumbItems={breadcrumbItemList}
        title="Kategoriyi Güncelle"
      />
      <Tabs
        childrens={[
          {
            component: <Update data={data} params={params} router={router} />,
          },
          {
            component: <Products />,
          },
          {
            component: <LanguageSupport />,
          },
        ]}
        tabs={[
          {
            icon: <RetryIcon label="" size="medium" />,
            title: "Update category",
          },
          { icon: <BacklogIcon label="" size="medium" />, title: "Products" },
          {
            icon: <WorldIcon label="" size="medium" />,
            title: "Language support",
          },
        ]}
      />
    </main>
  ) : null;
}
