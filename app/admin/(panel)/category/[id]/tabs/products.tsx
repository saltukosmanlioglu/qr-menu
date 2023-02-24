import React, { useEffect, useState } from "react";

import Table from "@/atlaskit/widgets/table";
import languageService, { LanguageResponse } from "@/services/admin/language";
import productService, { ProductResponse } from "@/services/admin/product";

import { head, rows } from "./constants";

const Products: React.FunctionComponent = () => {
  const [data, setData] = useState<ProductResponse>();
  const [languages, setLanguages] = useState<LanguageResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onRemove = (id: number) => {
    productService
      .remove(Number(id))
      .then(() => {})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);

    productService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setData([
          {
            id: 1,
            categoryId: 28,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 1",
            updatedDate: "",
          },
          {
            id: 2,
            categoryId: 29,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 2",
            updatedDate: "",
          },
          {
            id: 3,
            categoryId: 30,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 3",
            updatedDate: "",
          },
          {
            id: 4,
            categoryId: 31,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 4",
            updatedDate: "",
          },
          {
            id: 5,
            categoryId: 32,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 5",
            updatedDate: "",
          },
          {
            id: 6,
            categoryId: 33,
            createdDate: "",
            image: "",
            order: 0,
            price: "20,00",
            title: "Ürün 6",
            updatedDate: "",
          },
        ]);
      });

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
            data as ProductResponse,
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
