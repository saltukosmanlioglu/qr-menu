"use client";
import React from "react";
import { useRouter } from "next/navigation";

import PageInformation from "@/atlaskit/widgets/page-information";
import FrequentlyUsedButton from "@/components/admin/frequently-used-button";

import { frequentlyUsedButtons } from "./constants";

export default function Admin() {
  const router = useRouter();

  return (
    <main>
      <PageInformation
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque molestias sequi, est delectus distinctio molestiae nam debitis doloribus, iusto odit amet obcaecati assumenda, fuga ad culpa maiores labore dicta officia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque molestias sequi, est delectus distinctio molestiae nam debitis doloribus, iusto odit amet obcaecati assumenda, fuga ad culpa maiores labore dicta officia!"
        title="Admin"
      />
      <div className="mt-12">
        <h1 className="font-semibold text-2xl mb-4">SIK KULLANILAN İŞLEMLER</h1>
        <div className="flex flex-wrap gap-4">
          {frequentlyUsedButtons.map((item, index) => (
            <div key={index} style={{ width: "calc((100% / 3) - 16px)" }}>
              <FrequentlyUsedButton
                onClick={() => router.push(item.href)}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
