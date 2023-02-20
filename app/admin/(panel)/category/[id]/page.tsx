"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonGroup } from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import Tabs from "@/atlaskit/widgets/tabs";
import PageInformation from "@/atlaskit/widgets/page-information";
import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import service, { Category } from "@/services/admin/category";

import { breadcrumbItemList } from "./constants";
import { Update } from "./tabs";

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
            <ModalDialog
              appearance="primary"
              buttonText="Add sub category"
              body="If you delete a category, all dependencies related to the language are destroyed. Are you sure you want to delete ?"
              icon={<AddIcon label="" size="small" />}
              onClick={() => {}}
              title="Category is going to delete !"
              width="medium"
            />
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
        tabs={[
          { icon: "", title: "Update category" },
          { icon: "", title: "Sub categories" },
          { icon: "", title: "Products" },
          { icon: "", title: "Language support" },
        ]}
        childrens={[
          {
            component: <Update data={data} params={params} router={router} />,
          },
          {
            component: <div>Sub categories</div>,
          },
          {
            component: <div>Products</div>,
          },
          {
            component: <div>Language support</div>,
          },
        ]}
      />
    </main>
  ) : null;
}
