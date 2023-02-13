"use client";
import React from "react";
import Breadcrumbs, { BreadcrumbsItem } from "@atlaskit/breadcrumbs";
import PageHeader from "@atlaskit/page-header";

import { PageInformationProps } from "./types";

const PageInformation: React.FunctionComponent<PageInformationProps> = ({
  actions,
  breadcrumbItems,
  description,
  title,
}) => {
  const BreadcrumbItems = () => {
    return (
      <Breadcrumbs>
        <BreadcrumbsItem href="/admin" text="Anasayfa" />
        {breadcrumbItems?.map((item, index) => (
          <BreadcrumbsItem key={index} href={item.href} text={item.text} />
        ))}
      </Breadcrumbs>
    );
  };

  return (
    <div>
      <PageHeader
        actions={actions}
        breadcrumbs={<BreadcrumbItems />}
        children={title}
      />
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};

export default PageInformation;
