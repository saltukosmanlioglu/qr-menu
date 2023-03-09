import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface ProductSpecifications {
  allergens: string;
}

export interface ProductLocalization {
  description: string;
  languageCode: string | null;
  specifications: ProductSpecifications;
  title: string;
}

export interface Product extends BaseProps {
  categoryId: string;
  description: string;
  image: string;
  localizations: Array<ProductLocalization>;
  parentId: string;
  price: number;
  specifications: ProductSpecifications;
  subProducts: Array<Omit<Product, "subProducts">>;
  title: string;
}

export interface ProductParams {
  onlyParent?: boolean;
}

export interface ProductRequest {
  categoryId: string;
  description: string;
  image: string;
  localizations: Array<ProductLocalization>;
  parentId: string;
  price: number;
  allergens: string;
  status: StatusEnum;
  title: string;
}

export interface ProductResponse extends BaseApiResponse<Array<Product>> {}
