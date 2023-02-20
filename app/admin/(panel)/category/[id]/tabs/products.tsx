import React, { useEffect, useState } from "react";

import Table from "@/atlaskit/widgets/table";
import categoryService, { CategoryResponse } from "@/services/admin/category";

import { head, rows } from "./constants";

const Products: React.FunctionComponent = () => {
  const [data, setData] = useState<CategoryResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    categoryService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <div>
      <Table
        tableProps={{
          isLoading: isLoading,
          head: head,
          rows: rows(data as CategoryResponse, moveDown, moveUp),
        }}
      />
    </div>
  );
};

export default Products;
