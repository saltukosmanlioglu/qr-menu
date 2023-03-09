import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { LanguageResponse } from "@/services/language";
import { Product } from "@/services/product";

export interface UpdateProps {
  data: Product;
  isLoading: boolean;
  params: { id: string };
  router: AppRouterInstance;
}

export interface SubCategoriesProps {
  data: Product["subProducts"];
  isLoading: boolean;
}

export interface LanguageProps {
  data: Product;
  languages?: LanguageResponse["data"];
  params: { id: string };
  setData: React.Dispatch<React.SetStateAction<Product | undefined>>;
}
