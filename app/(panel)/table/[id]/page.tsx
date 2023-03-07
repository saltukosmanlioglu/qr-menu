"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";

import DownloadIcon from "@atlaskit/icon/glyph/download";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import PageInformation from "@/atlaskit/widgets/page-information";
import tableService, { Table, TableRequest } from "@/services/table";

import Form from "../form";

import { breadcrumbItemList } from "./constants";

export default function UpdateTable({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Table>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const canvasRef: any = useRef();
  const canvasHiddenRef: any = useRef();

  const router = useRouter();

  const onRemove = () => {
    tableService
      .remove(params.id)
      .then(() => router.push("/table/list"))
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  const handleDownloadQr = () => {
    var link = document.createElement("a");

    link.download = `${data?.title}.jpg`;
    link.href = canvasHiddenRef?.current?.toDataURL();
    link.click();
  };

  const onUpdate = (values: TableRequest) => {
    setIsLoading(true);

    tableService
      .update(params.id, values)
      .then(() => router.push("/table/list"))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    tableService
      .getById(params.id)
      .then((res) => {
        QRCode.toCanvas(
          canvasRef.current,
          `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}?t=${res.data.data.id}`,
          { width: 200 }
        );
        QRCode.toCanvas(
          canvasHiddenRef.current,
          `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}?t=${res.data.data.id}`,
          { width: 200 }
        );

        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <main>
      <PageInformation
        actions={
          <ModalDialog
            appearance="danger"
            buttonText="Sil"
            body="Eğer bir masayı silmek istiyorsanız, Masa ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
            icon={<TrashIcon label="" size="small" />}
            onClick={onRemove}
            title="Masa silinmek üzere!"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Masa bilgisini güncelle"
      />
      <div style={{ padding: "0 12.5%" }}>
        {data ? (
          <Form
            initialValues={data}
            operation="update"
            props={{
              actions: [
                {
                  appearance: "warning",
                  iconAfter: <DownloadIcon label="" size="small" />,
                  children: "QR kodu indir",
                  onClick: handleDownloadQr,
                },
              ],
              buttonText: "Güncelle",
              description:
                "Aşağıdaki formu doldurarak geçerli masa bilgisini güncelleyebilirsiniz.",
              isLoading,
              onSubmit: onUpdate,
              operation: "update",
              title: `Masa: ${data?.title}`,
            }}
          />
        ) : null}
        <canvas ref={canvasRef} width={200} height={200} />
        <canvas
          className="hidden"
          ref={canvasHiddenRef}
          width={200}
          height={200}
        />
      </div>
    </main>
  );
}
