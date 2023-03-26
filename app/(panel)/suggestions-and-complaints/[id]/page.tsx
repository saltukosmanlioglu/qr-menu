"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import suggestionsAndComplaintsService, {
  SuggestionsAndComplaints,
} from "@/services/suggestions-and-complaints";

import Form from "../form";

import { breadcrumbItemUpdate } from "./constants";

export default function SuggestionsAndComplaintsReview({
  params,
}: {
  params: { id: string };
}) {
  const [data, setData] = useState<SuggestionsAndComplaints>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    suggestionsAndComplaintsService
      .getById(params.id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <main>
      <PageInformation
        breadcrumbItems={breadcrumbItemUpdate}
        title="Müşteri yorumunu incele"
      />
      <div style={{ padding: "0 12.5%" }}>
        <Form
          initialValues={data}
          operation="update"
          props={{
            buttonText: "Tamam",
            description:
              "Aşağıdaki formdan müşteri yorumunu okuyabilir ve iletişime geçmek için telefon numarasını arayabilirsiniz.",
            isLoading,
            onSubmit: () => router.push("suggestions-and-complaints/list"),
            operation: "update",
            title: `Müşteri İsim - Soyisim: ${data?.fullName}`,
          }}
        />
      </div>
    </main>
  );
}
