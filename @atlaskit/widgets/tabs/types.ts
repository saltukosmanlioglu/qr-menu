import React from "react";

export interface TabsProps {
  tabs: Array<{ icon: any; title: string }>;
  childrens: Array<{ component: React.ReactNode }>;
}
