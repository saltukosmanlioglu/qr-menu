import { Product } from "@/services/admin/product";
import { BaseProps } from "@/utils/ui/types";

export interface Gallery extends BaseProps {
  product: Product;
}

export interface GalleryRequest {
  product: Product;
}

export interface GalleryResponse extends Array<Gallery> {}
