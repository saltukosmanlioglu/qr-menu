import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Category } from "@/services/category";

export interface UpdateTabProps {
  data: Category;
  params: { id: string };
  router: AppRouterInstance;
}
