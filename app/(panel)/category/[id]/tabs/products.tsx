import React from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import { Category } from "@/services/category";

import { productHead, productRows } from "./constants";
import { ProductProps } from "./types";

const Products: React.FunctionComponent<ProductProps> = ({
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
            head: productHead,
            rows: productRows(data as Category["products"], moveDown, moveUp),
          }}
        />
      </div>
    </div>
  );
};

export default Products;
