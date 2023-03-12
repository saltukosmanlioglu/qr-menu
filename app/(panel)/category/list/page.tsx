"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import categoryService, {
  Category,
  CategoryResponse,
} from "@/services/category";
import { handleMove } from "@/utils/funcs";
import Reorder from "@/widgets/reorder";

import { breadcrumbItemList, head, rows } from "./constants";

export default function CategoryList() {
  const [data, setData] = useState<CategoryResponse["data"]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isOrderActive, setIsOrderActive] = useState<boolean>(false);

  const reorder = () => {
    if (data) {
      categoryService
        .reorder(
          data.map((item) => ({
            id: item.id,
            order: item.order,
          }))
        )
        .then(() => {})
        .catch((err) => console.log(err))
        .finally(() => setIsOrderActive(false));
    }
  };

  const onReorderCancel = () => {
    setIsOrderActive(false);
    window.location.reload();
  };

  useEffect(() => {
    setIsLoading(true);

    categoryService
      .get({ onlyParent: true })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/category/create">
            <Button
              appearance="primary"
              children="Kategori oluştur"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Kategorileri görüntüleyebilir, sırasını değiştirebilir, yeni bir kategori oluşturabilir veya silebilirsiniz"
        title="Kategori listesi"
      />
      <div className="mt-20 relative">
        {isOrderActive && (
          <Reorder onCancel={onReorderCancel} onClick={reorder} />
        )}
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data, (item, index, operation) => {
              setIsOrderActive(true);
              handleMove<Category>(item, index, operation, data, setData);
            }),
          }}
        />
      </div>
    </main>
  );
}
