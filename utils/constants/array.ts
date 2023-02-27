import { StatusEnum } from "../types";

export const confirmations = [
  {
    label: "Evet",
    value: true,
  },
  {
    label: "Hayır",
    value: false,
  },
];

export const status = [
  {
    label: "Aktif",
    value: StatusEnum.Active,
  },
  {
    label: "Pasif",
    value: StatusEnum.Passive,
  },
  {
    label: "Gizle",
    value: StatusEnum.Disable,
  },
];
