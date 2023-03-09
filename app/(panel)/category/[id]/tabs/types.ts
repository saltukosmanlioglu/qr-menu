import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Category, CategoryResponse } from "@/services/category";
import { LanguageResponse } from "@/services/language";

export interface UpdateProps {
  data?: Category;
  isLoading: boolean;
  params: { id: string };
  router: AppRouterInstance;
}

export interface SubCategoriesProps {
  data?: CategoryResponse["data"];
  isLoading: boolean;
}

export interface ProductProps {
  data?: Category["products"];
  isLoading: boolean;
}

export interface LanguageProps {
  data: Category;
  languages?: LanguageResponse["data"];
  params: { id: string };
  setData: React.Dispatch<React.SetStateAction<Category | undefined>>;
}
