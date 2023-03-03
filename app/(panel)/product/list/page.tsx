"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import productService, { ProductResponse } from "@/services/product";

import { breadcrumbItemList, head, rows } from "./constants";

export default function ProductList() {
  const [data, setData] = useState<ProductResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    productService
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
          <Link href="/product/create">
            <Button
              appearance="primary"
              children="Ürün oluştur"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Ürünleri görüntüleyebilir, sırasını değiştirebilir, yeni bir ürün oluşturabilir veya silebilirsiniz"
        title="Ürün listesi"
      />
      <div className="mt-20">
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(data?.data as ProductResponse["data"], moveDown, moveUp),
          }}
        />
      </div>
    </main>
  );
}
