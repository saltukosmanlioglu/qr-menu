import React from "react";

import { Appearance } from "@atlaskit/section-message/dist/types/types";

export interface SectionMessageProps {
  actions?: Array<{
    children: React.ReactNode | string;
    href: string;
  }>;
  appearance: Appearance | undefined;
  description: string;
  title: string;
}
