import { Product } from "@/services/product";
import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Localization {
  languageCode: string | null;
  title: string;
}

export interface Category extends BaseProps {
  color: string;
  parentId: string;
  products: Array<Product>;
  localizations: Array<Localization>;
  subCategories: Array<Omit<Category, "parentId">>;
}

export interface CategoryParams {
  onlyParent?: boolean;
}

export interface CategoryRequest {
  color: string;
  localizations: Array<Localization>;
  parentId: string;
  status: StatusEnum;
  title: string;
}

export interface CategoryLanguageSupportProps {
  languageCode: string;
  title: string;
}

export interface CategoryResponse extends BaseApiResponse<Array<Category>> {}
