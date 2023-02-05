import service from "@/services/admin/instance";

import { Table, TableRequest, TableResponse } from "./types";

export const create = (data: TableRequest) => service.post("table", data);

export const get = () => service.get<TableResponse>("table");

export const getById = (id: string) => service.get<Table>(`table/${id}`);

export const remove = (id: string) => service.get(`table/${id}`);

export const update = (id: string, data: TableResponse) =>
  service.put(`table/${id}`, data);
