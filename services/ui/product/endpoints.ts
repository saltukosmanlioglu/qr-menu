import service from "@/services/admin/instance";

import { ProductResponse } from "./types";

export const get = () => service.get<ProductResponse>("product");
