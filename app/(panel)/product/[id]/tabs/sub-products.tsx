import React from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import { Product } from "@/services/product";

import { subProductHead, subProductsRows } from "./constants";
import { SubCategoriesProps } from "./types";

const SubProducts: React.FunctionComponent<SubCategoriesProps> = ({
  data,
  isLoading,
}) => {
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
            isLoading,
            head: subProductHead,
            rows: subProductsRows(
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
