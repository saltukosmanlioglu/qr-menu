"use client";
import React from "react";

import { FrequentlyUsedButtonProps } from "./types";

const FrequentlyUsedButton: React.FunctionComponent<
  FrequentlyUsedButtonProps
> = ({ description, icon, onClick, title }) => {
  return (
    <button
      className="flex items-center bg-blue-50 p-4 rounded"
      onClick={() => onClick()}
    >
      {icon}
      <div className="ml-3 text-left">
        <b className="text-md font-bold">{title}</b>
        <p className="text-xs mt-1">{description}</p>
      </div>
    </button>
  );
};

export default FrequentlyUsedButton;
