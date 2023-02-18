import service from "@/services/admin/instance";

import { Table, TableRequest, TableResponse } from "./types";

export const create = (data: TableRequest) => service.post("tables", data);

export const get = () => service.get<TableResponse>("tables");

export const getById = (id: string | number) =>
  service.get<Table>(`tables/${id}`);

export const remove = (id: string | number) => service.delete(`tables/${id}`);

export const update = (id: string | number, data: TableRequest) =>
  service.put(`tables/${id}`, data);
