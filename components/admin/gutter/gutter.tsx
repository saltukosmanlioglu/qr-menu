import React from "react";

import { GutterProps } from "./types";

const Gutter: React.FunctionComponent<GutterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Gutter;
