import { BaseProps } from "@/utils/types";

export interface SubProduct extends BaseProps {
  title: string;
  price: string;
}

export interface SubProductRequest {
  price: string;
  title: string;
}

export interface SubProductResponse extends Array<SubProduct> {}
