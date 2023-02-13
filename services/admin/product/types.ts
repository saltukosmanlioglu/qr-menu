import { Category } from "@/services/admin/category";
import { BaseProps } from "@/utils/ui/types";

export interface Product extends BaseProps {
  allergens?: string;
  category: Category;
  description?: string;
  image: string;
  price: string;
  title: string;
}

export interface ProductRequest {
  allergens?: string;
  categoryId: string;
  description?: string;
  image: string;
  price: string;
  title: string;
}

export interface ProductResponse extends Array<Product> {}
