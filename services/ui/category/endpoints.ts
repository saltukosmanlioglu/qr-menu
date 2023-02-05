import service from "@/services/ui/instance";

import { CategoryResponse } from "./types";

export const get = () => service.get<CategoryResponse>("category");
