import { BaseProps } from "@/utils/types";

export interface Category extends BaseProps {
  color: string;
  parentId?: number;
  title: string;
}

export interface CategoryRequest {
  color: string;
  parentId?: number;
  title: string;
}

export interface CategoryResponse extends Array<Category> {}
