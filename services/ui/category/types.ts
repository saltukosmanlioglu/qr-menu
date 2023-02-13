import { Product } from "@/services/admin/product";
import { BaseProps } from "@/utils/ui/types";

export interface Category extends BaseProps {
  color: string;
  title: string;
  subCategories?: Omit<Category, "color" | "subCategories">;
  products?: Array<Product>;
}

export interface CategoryResponse extends Array<Category> {}
