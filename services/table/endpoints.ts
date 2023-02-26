import service from "@/services/instance";

import { BaseApiResponse } from "../types";
import { Table, TableRequest, TableResponse } from "./types";

export const create = (data: TableRequest) => service.post("tables", data);

export const get = () => service.get<TableResponse>("tables");

export const getById = (id: string) =>
  service.get<BaseApiResponse<Table>>(`tables/${id}`);

export const remove = (id: string) => service.delete(`tables/${id}`);

export const update = (id: string, data: TableRequest) =>
  service.patch(`tables/${id}`, data);
