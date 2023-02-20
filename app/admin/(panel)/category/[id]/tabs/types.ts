import { Category } from "@/services/admin/category";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export interface UpdateTabProps {
  data: Category;
  params: { id: string };
  router: AppRouterInstance;
}
