import React from "react";
import Button, { ButtonGroup } from "@atlaskit/button";

import OverviewIcon from "@atlaskit/icon/glyph/overview";

import { ReorderProps } from "./types";

const Reorder: React.FunctionComponent<ReorderProps> = ({
  onCancel,
  onClick,
}) => {
  return (
    <div className="mb-4 flex items-center justify-end sticky top-20 z-20">
      <ButtonGroup>
        <Button children="İptal" onClick={onCancel} />
        <Button
          appearance="primary"
          children="Sıralamayı düzenle"
          iconAfter={<OverviewIcon label="" size="small" />}
          onClick={onClick}
        />
      </ButtonGroup>
    </div>
  );
};

export default Reorder;
