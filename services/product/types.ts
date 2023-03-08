import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface ProductLocalization {
  description: string;
  languageCode: string;
  specifications: ProductSpecifications;
  title: string;
}

export interface ProductSpecifications {
  allergens: string;
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
  status: StatusEnum;
  price: number;
  categoryId: string;
  image: string;
  parentId: string;
  localizations: Array<ProductLocalization>;
}

export interface ProductResponse extends BaseApiResponse<Array<Product>> {}
