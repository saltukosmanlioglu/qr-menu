import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

import { Product } from "@/services/admin/product";

export interface UpdateTabProps {
  data: Product | undefined;
  params: { id: string };
  router: AppRouterInstance;
}
