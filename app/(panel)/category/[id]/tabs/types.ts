import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Category } from "@/services/category";

export interface UpdateProps {
  data?: Category;
  isLoading: boolean;
  params: { id: string };
  router: AppRouterInstance;
}

export interface SubCategoriesProps {
  data?: Category["subCategories"];
  isLoading: boolean;
}

export interface ProductProps {
  data?: Category["products"];
  isLoading: boolean;
}
