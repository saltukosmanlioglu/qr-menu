import React from "react";
import Flag from "@atlaskit/flag";

import InfoIcon from "@atlaskit/icon/glyph/info";

import { FlagCardProps } from "./types";

const FlagCard: React.FunctionComponent<FlagCardProps> = ({
  appearance,
  description,
  title,
}) => {
  return (
    <Flag
      id={Math.random() * 100000000000}
      key={Math.random() * 100000000000}
      appearance={appearance}
      description={description}
      icon={<InfoIcon primaryColor="red" label="Info" />}
      title={title}
    />
  );
};

export default FlagCard;
