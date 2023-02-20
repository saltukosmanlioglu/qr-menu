import React from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import WarningIcon from "@atlaskit/icon/glyph/warning";

import { TableProps } from "./types";

const Table: React.FunctionComponent<TableProps> = ({ tableProps }) => {
  return (
    <DynamicTable
      emptyView={
        <div>
          <WarningIcon label="" size="xlarge" />
          <h2>Veri bulunamadı !</h2>
        </div>
      }
      loadingSpinnerSize="large"
      isFixedSize
      {...tableProps}
    />
  );
};

export default Table;
