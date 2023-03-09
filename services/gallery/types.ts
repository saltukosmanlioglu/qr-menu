import { StatusEnum } from "@/utils/types";

import { BaseApiResponse, BaseProps } from "../types";

export interface Product {
  image: string;
  name: string;
  productId: string;
}

export interface Gallery extends BaseProps {
  product: Product;
}

export interface GalleryRequest {
  productId: string;
  status: StatusEnum;
}

export interface GalleryResponse extends BaseApiResponse<Array<Gallery>> {}
