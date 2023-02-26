import React from "react";

import { ButtonProps } from "@atlaskit/button";

import { Appearance, WidthNames } from "@/atlaskit/utils/types";

export type ModalWith = string | number | WidthNames;

export interface ModalDialogProps {
  actions?: Array<ButtonProps>;
  appearance: Appearance;
  buttonText: string | React.ReactNode;
  body: JSX.Element | string;
  icon?: any;
  onClick: () => void;
  title: string;
  width?: ModalWith;
}
