import React from "react";

import { GutterProps } from "./types";

const Gutter: React.FunctionComponent<GutterProps> = ({
  children,
  width = "w-[calc(100%/2-1rem)]",
}) => {
  return (
    <div
      className={`w-full flex flex-wrap gap-4 justify-between [&>div]:${width}`}
    >
      {children}
    </div>
  );
};

export default Gutter;
