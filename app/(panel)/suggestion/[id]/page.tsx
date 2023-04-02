"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import suggestionService, { Suggestion } from "@/services/suggestion";

import Form from "../form";

import { breadcrumbItemUpdate } from "./constants";

export default function SuggestionsAndComplaintsReview({
  params,
}: {
  params: { id: string };
}) {
  const [data, setData] = useState<Suggestion>();

  const router = useRouter();

  useEffect(() => {
    suggestionService
      .getById(params.id)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return data ? (
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
            onSubmit: () => router.push("suggestion/list"),
            operation: "update",
            title: `Müşteri İsim - Soyisim: ${data?.fullName}`,
          }}
        />
      </div>
    </main>
  ) : null;
}
