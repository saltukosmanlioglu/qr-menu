import service from "@/services/admin/instance";

import { GalleryResponse } from "./types";

export const get = () => service.get<GalleryResponse>("gallery");
