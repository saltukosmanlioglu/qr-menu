import React from "react";

export interface TabsProps {
  childrens: Array<{ component: React.ReactNode; visible: boolean }>;
  tabs: Array<{ icon: any; title: string; visible: boolean }>;
}
