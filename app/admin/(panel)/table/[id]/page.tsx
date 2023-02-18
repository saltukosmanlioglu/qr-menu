"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";
import DownloadIcon from "@atlaskit/icon/glyph/download";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import PageInformation from "@/atlaskit/widgets/page-information";
import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import service, { Table, TableRequest } from "@/services/admin/table";
import { useDelete } from "@/utils/admin/hooks/service";

import { breadcrumbItemList } from "./constants";
import Form from "../form";

export default function UpdateLanguage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<Table>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const canvasRef: any = useRef();
  const canvasHiddenRef: any = useRef();
  const router = useRouter();

  const { onRemove } = useDelete();

  const handleDownloadQr = () => {
    var link = document.createElement("a");

    link.download = `${data?.title}.jpg`;
    link.href = canvasHiddenRef?.current?.toDataURL();
    link.click();
  };

  const onUpdate = (values: TableRequest) => {
    setIsLoading(true);

    service
      .update(Number(params.id), values)
      .then(() => router.back())
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    service
      .getById(Number(params.id))
      .then((res) => {
        setData(res.data);

        QRCode.toCanvas(
          canvasRef.current,
          `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}?t=${res.data.id}`,
          { width: 200 }
        );
        QRCode.toCanvas(
          canvasHiddenRef.current,
          `${process.env.NEXT_PUBLIC_MAIN_DOMAIN}?t=${res.data.id}`,
          { width: 200 }
        );
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <main>
      <PageInformation
        actions={
          <ModalDialog
            appearance="danger"
            buttonText="Delete table"
            body="If you delete a table, all dependencies related to the table are destroyed. Are you sure you want to delete ?"
            icon={<TrashIcon label="" size="small" />}
            onClick={() =>
              onRemove({
                service: service
                  .remove(Number(params.id))
                  .then(() => router.back()),
              })
            }
            title="Table is going to delete !"
            width="medium"
          />
        }
        breadcrumbItems={breadcrumbItemList}
        title="Dil desteğini Güncelle"
      />
      {data && (
        <div style={{ padding: "0 12.5%" }}>
          <Form
            initialValues={data}
            operation="update"
            props={{
              actions: [
                {
                  appearance: "warning",
                  iconAfter: <DownloadIcon label="" size="small" />,
                  children: "Download the QR Code",
                  onClick: handleDownloadQr,
                },
              ],
              buttonText: "Update table",
              description:
                "You can update this table by filling in the fields below",
              isLoading,
              onSubmit: onUpdate,
              operation: "update",
              title: `Update language: ${data.title}`,
            }}
          />
          <canvas ref={canvasRef} width={200} height={200} />
        </div>
      )}
      {data?.id && <canvas ref={canvasHiddenRef} style={{ display: "none" }} />}
    </main>
  );
}
