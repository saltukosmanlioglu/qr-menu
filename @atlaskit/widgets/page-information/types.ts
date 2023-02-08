import { ReactElement } from "react";
import { BreadcrumbsItemProps } from "@atlaskit/breadcrumbs/dist/types/types";

export interface PageInformationProps {
  actions?: ReactElement;
  breadcrumbItems?: Array<BreadcrumbsItemProps>;
  description: string;
  title: string;
}
