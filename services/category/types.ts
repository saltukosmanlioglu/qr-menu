import { Product } from "@/services/product";
import { StatusEnum } from "@/utils/types";

import { BaseApiParams, BaseApiResponse, BaseProps } from "../types";

export interface CategoryLocalization {
  languageCode: string | null;
  title: string;
}

export interface Category extends BaseProps {
  color: string;
  parentId: string;
  products: Array<Product>;
  localizations: Array<CategoryLocalization>;
  subCategories: Array<Omit<Category, "parentId">>;
}

export interface CategoryParams extends BaseApiParams {
  onlyParent?: boolean;
}

export interface CategoryRequest {
  color: string;
  localizations: Array<CategoryLocalization>;
  parentId: string;
  status: StatusEnum;
  title: string;
}

export interface CategoryLanguageSupportProps {
  languageCode: string;
  title: string;
}

export interface CategoryResponse extends BaseApiResponse<Array<Category>> {}
