import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import { Table, TableParams, TableRequest, TableResponse } from "./types";

export const create = (data: TableRequest) => service.post("tables", data);

export const get = (params?: TableParams) =>
  service.get<TableResponse>("tables", {
    params: { ...params, pageIndex: 0, pageSize: 1000 },
  });

export const getById = (id: string) =>
  service.get<BaseApiResponse<Table>>(`tables/${id}`);

export const remove = (id: string) => service.delete(`tables/${id}`);

export const update = (id: string, data: TableRequest) =>
  service.patch(`tables/${id}`, data);
