"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import categoryService, { CategoryResponse } from "@/services/admin/category";

import { breadcrumbItemList, head, rows } from "./constants";

export default function CategoryList() {
  const [data, setData] = useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    categoryService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/admin/category/create">
            <Button
              appearance="primary"
              children="Kategori oluştur"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Kategorileri görüntüleyebilir, sırasını değiştirebilir ve yeni bir kategori."
        title="Kategori Listesi"
      />
      <div className="mt-20">
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data as CategoryResponse, moveDown, moveUp),
          }}
        />
      </div>
    </main>
  );
}
