import React, { useEffect, useState } from "react";

import Table from "@/atlaskit/widgets/table";
import categoryService, { CategoryResponse } from "@/services/admin/category";
import languageService, { LanguageResponse } from "@/services/admin/language";
import productService from "@/services/admin/product";

import { head, rows } from "./constants";

const Products: React.FunctionComponent = () => {
  const [data, setData] = useState<CategoryResponse>();
  const [languages, setLanguages] = useState<LanguageResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onRemove = (id: number) => {
    productService
      .remove(Number(id))
      .then(() => {})
      .catch((err) => console.log(err))
      .finally(() => {});
  };

  useEffect(() => {
    setIsLoading(true);

    categoryService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    languageService
      .get()
      .then((res) => setLanguages(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  const moveDown = () => {};
  const moveUp = () => {};

  return (
    <div>
      <p className="mb-8">
        Kategoriye ait yeni ürün oluşturabilir, var olan ürünü güncelleyebilir,
        silebilir veya ürün sıralaması yapabilirsiniz.
      </p>
      <Table
        tableProps={{
          isLoading: isLoading,
          head: head,
          rows: rows(
            data as CategoryResponse,
            (id) => onRemove(id),
            moveDown,
            moveUp,
            languages as LanguageResponse
          ),
        }}
      />
    </div>
  );
};

export default Products;
