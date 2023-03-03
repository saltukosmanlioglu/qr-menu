import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Product } from "@/services/product";

export interface UpdateProps {
  data?: Product;
  params: { id: string };
  router: AppRouterInstance;
}

export interface SubProductsProps {
  data?: Product["subProducts"];
}
