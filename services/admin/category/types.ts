import { Product } from "@/services/admin/product";
import { BaseProps } from "@/utils/types";

export interface Category extends BaseProps {
  color: string;
  title: string;
  subCategories?: Omit<Category, "color" | "subCategories">;
  products?: Array<Product>;
}

export interface CategoryRequest {
  color: string;
  parentId?: string;
  title: string;
}

export interface CategoryResponse extends Array<Category> {}
