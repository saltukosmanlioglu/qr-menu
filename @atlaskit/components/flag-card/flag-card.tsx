import React from "react";
import Flag from "@atlaskit/flag";

import ErrorIcon from "@atlaskit/icon/glyph/error";
import InfoIcon from "@atlaskit/icon/glyph/info";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";

import { FlagCardProps } from "./types";

const FlagCard: React.FunctionComponent<FlagCardProps> = ({
  appearance,
  title,
}) => {
  return (
    <div className="absolute right-5 bottom-5 z-10">
      <Flag
        id={Math.random() * 100000000000}
        key={Math.random() * 100000000000}
        appearance={appearance}
        icon={
          appearance === "success" ? (
            <SuccessIcon
              primaryColor="#fff"
              secondaryColor="green"
              label="Info"
            />
          ) : appearance === "error" ? (
            <ErrorIcon primaryColor="#fff" secondaryColor="red" label="Error" />
          ) : (
            <InfoIcon primaryColor="#fff" secondaryColor="blue" label="Info" />
          )
        }
        title={title}
      />
    </div>
  );
};

export default FlagCard;
