import React from "react";

export interface FrequentlyUsedButtonProps {
  description: string;
  icon?: React.ReactNode;
  onClick: () => void;
  title: string;
}
