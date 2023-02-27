import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface CategoryLocalization {
  languageCode: string;
  title: string;
}

export interface Category extends BaseProps {
  color: string;
  localizations: Array<CategoryLocalization>;
  parentId?: number;
}

export interface CategoryRequest {
  color: string;
  parentId?: string;
  status?: StatusEnum;
  title: string;
}

export interface CategoryResponse extends BaseApiResponse<Array<Category>> {}
