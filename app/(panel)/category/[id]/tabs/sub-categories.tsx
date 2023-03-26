import React, { useEffect, useState } from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import categoryService, { Category } from "@/services/category";
import { handleMove } from "@/utils/funcs";
import Reorder from "@/widgets/reorder";

import { subCategoryHead, subCategoryRows } from "./constants";
import { SubCategoriesProps } from "./types";

const SubCategories: React.FunctionComponent<SubCategoriesProps> = ({
  data,
  isLoading,
  setNewData,
}) => {
  const [subCategories, setSubCategories] = useState(data.subCategories);
  const [isOrderActive, setIsOrderActive] = useState<boolean>(false);

  const reorder = () => {
    if (data) {
      categoryService
        .reorder(
          data.subCategories.map((item, index) => ({
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

  useEffect(() => {
    setNewData({ ...data, subCategories });
  }, [subCategories]);

  return data ? (
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
            head: subCategoryHead,
            rows: subCategoryRows(
              data as Omit<Category, "parentId">,
              (item, index, operation) => {
                setIsOrderActive(true);
                handleMove<Omit<Category, "parentId">>(
                  item,
                  index,
                  operation,
                  subCategories,
                  setSubCategories
                );
              }
            ),
          }}
        />
      </div>
    </div>
  ) : null;
};

export default SubCategories;
