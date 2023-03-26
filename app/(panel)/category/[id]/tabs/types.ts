import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Category } from "@/services/category";
import { LanguageResponse } from "@/services/language";

export interface UpdateProps {
  data: Category;
  isLoading: boolean;
  params: { id: string };
  router: AppRouterInstance;
}

export interface SubCategoriesProps {
  data: Category;
  isLoading: boolean;
  setNewData: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

export interface ProductProps {
  data: Category;
  isLoading: boolean;
  setNewData: React.Dispatch<React.SetStateAction<Category | undefined>>;
}

export interface LanguageProps {
  data: Category;
  languages?: LanguageResponse["data"];
  params: { id: string };
  setData: React.Dispatch<React.SetStateAction<Category | undefined>>;
}
