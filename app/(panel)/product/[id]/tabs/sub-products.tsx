import React from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import { Product } from "@/services/product";

import { subProductHead, subProductRows } from "./constants";
import { SubProductsProps } from "./types";

const SubProducts: React.FunctionComponent<SubProductsProps> = ({ data }) => {
  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <div>
      <SectionMessage
        appearance="warning"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, corrupti. Nemo, aperiam quae exercitationem doloremque at odio, dolorum cupiditate maiores ducimus, necessitatibus non est corporis praesentium placeat illo. Ipsam, est."
        title="Uyarı"
      />
      <div className="mt-8">
        <Table
          tableProps={{
            head: subProductHead,
            rows: subProductRows(
              data as Product["subProducts"],
              moveDown,
              moveUp
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SubProducts;
