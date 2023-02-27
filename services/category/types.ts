import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface CategoryLocalization {
  languageCode: string;
  title: string;
}

export interface Category extends BaseProps {
  color: string;
  localizations: Array<CategoryLocalization>;
  parentId?: string;
}

export interface CategoryRequest {
  color: string;
  parentId?: string;
  status?: StatusEnum;
  localizations: Array<CategoryLocalization>;
}

export interface CategoryResponse extends BaseApiResponse<Array<Category>> {}
