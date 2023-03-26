import React, { useState } from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import { Category } from "@/services/category";
import productService, { Product } from "@/services/product";
import { handleMove } from "@/utils/funcs";
import Reorder from "@/widgets/reorder";

import { productHead, productRows } from "./constants";
import { ProductProps } from "./types";

const Products: React.FunctionComponent<ProductProps> = ({
  data,
  isLoading,
}) => {
  const [productDatas, setProductDatas] = useState(data);
  const [isOrderActive, setIsOrderActive] = useState<boolean>(false);

  const reorder = () => {
    if (data) {
      productService
        .reorder(
          data.map((item, index) => ({
            id: item.id,
            order: index,
          }))
        )
        .then(() => {})
        .catch((err) => console.log(err))
        .finally(() => setIsOrderActive(false));
    }
  };

  const onReorderCancel = () => {
    setIsOrderActive(false);
    window.location.reload();
  };

  return (
    <div>
      <SectionMessage
        appearance="warning"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, corrupti. Nemo, aperiam quae exercitationem doloremque at odio, dolorum cupiditate maiores ducimus, necessitatibus non est corporis praesentium placeat illo. Ipsam, est."
        title="Uyarı"
      />
      <div className="mt-8 relative">
        {isOrderActive && (
          <Reorder onCancel={onReorderCancel} onClick={reorder} />
        )}
        <Table
          tableProps={{
            isLoading,
            head: productHead,
            rows: productRows(
              data as Category["products"],
              (item, index, operation) => {
                setIsOrderActive(true);
                handleMove<Product>(
                  item,
                  index,
                  operation,
                  productDatas,
                  setProductDatas
                );
              }
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Products;
