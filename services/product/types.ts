import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Product extends BaseProps {
  title: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
  parentId: string;
  languageCode: string;
  specifications: {
    allergens: string;
  };
  subProducts: Array<Product>;
}

export interface ProductParams {
  onlyParent?: boolean;
}

export interface ProductRequest {
  allergens: string;
  categoryId: string;
  description: string;
  image: string;
  languageCode: string;
  parentId: string;
  price: number;
  status: StatusEnum;
  title: string;
}

export interface ProductResponse extends BaseApiResponse<Array<Product>> {}
