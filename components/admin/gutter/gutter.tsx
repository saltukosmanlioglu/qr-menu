import React from "react";

import { GutterProps } from "./types";

const Gutter: React.FunctionComponent<GutterProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-wrap gap-4 justify-start [&>div]:inline">
      {children}
    </div>
  );
};

export default Gutter;
