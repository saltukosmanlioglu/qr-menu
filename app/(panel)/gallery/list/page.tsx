"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";

import PageInformation from "@/atlaskit/widgets/page-information";
import Table from "@/atlaskit/widgets/table";
import galleryService, { GalleryResponse } from "@/services/gallery";

import { breadcrumbItemList, head, rows } from "./constants";

export default function GalleryList() {
  const [data, setData] = useState<GalleryResponse["data"]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onRemove = (id: string) => {
    if (data) {
      const newData = data.slice();
      const itemIndex = newData.findIndex((gallery) => gallery.id === id);

      newData.splice(itemIndex, 1);

      galleryService
        .remove(id)
        .then(() => setData(newData))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setIsLoading(true);

    galleryService
      .get()
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <main>
      <PageInformation
        actions={
          <Link href="/gallery/create">
            <Button
              appearance="primary"
              children="Öne çıkan içerik ekle"
              iconAfter={<AddIcon label="" size="small" />}
            />
          </Link>
        }
        breadcrumbItems={breadcrumbItemList}
        description="Öne çıkan içerikleri görüntüleyebilir, sırasını değiştirebilir, yeni bir dil oluşturabilir veya silebilirsiniz."
        title="Öne çıkan içerik listesi"
      />
      <div className="mt-20">
        <Table
          tableProps={{
            isLoading: isLoading,
            head: head,
            rows: rows(
              data as GalleryResponse["data"],
              onRemove,
              moveDown,
              moveUp
            ),
          }}
        />
      </div>
    </main>
  );
}
