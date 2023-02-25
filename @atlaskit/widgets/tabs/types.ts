import React from "react";

export interface TabsProps {
  childrens: Array<{ component: React.ReactNode }>;
  tabs: Array<{ icon: any; title: string }>;
}
