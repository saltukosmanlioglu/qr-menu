import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Category extends BaseProps {
  color: string;
  languageCode: string;
  parentId: string;
  subCategories: Array<Omit<Category, "parentId">>;
  title: string;
}

export interface CategoryParams {
  onlyParent?: boolean;
}

export interface CategoryRequest {
  color: string;
  languageCode: string;
  parentId: string;
  status?: StatusEnum;
  title: string;
}

export interface CategoryResponse extends BaseApiResponse<Array<Category>> {}