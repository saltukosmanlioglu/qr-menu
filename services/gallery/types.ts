import { Product } from "@/services/product";

import { BaseProps } from "../types";

export interface Gallery extends BaseProps {
  product: Product;
}

export interface GalleryRequest {
  product: Product;
}

export interface GalleryResponse extends Array<Gallery> {}
