import { BaseProps } from "../types";

export interface SubProduct {
  title: string;
  price: string;
}

export interface Product extends BaseProps {
  categoryId: number;
  description?: string;
  image: string;
  price: string;
  title: string;
  specifications?: {
    allergens?: string;
    subProducts?: Array<SubProduct>;
  };
}

export interface ProductRequest {
  categoryId: number;
  description?: string;
  image?: string;
  price: string;
  specifications?: {
    allergens?: string;
    subProducts?: Array<SubProduct>;
  };
  title: string;
}

export interface ProductResponse extends Array<Product> {}
