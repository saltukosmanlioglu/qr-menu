import React from "react";

import SectionMessage from "@/atlaskit/widgets/section-message";
import Table from "@/atlaskit/widgets/table";
import { Category } from "@/services/category";

import { subCategoryHead, subCategoryRows } from "./constants";
import { SubCategoriesProps } from "./types";

const SubCategories: React.FunctionComponent<SubCategoriesProps> = ({
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
            head: subCategoryHead,
            rows: subCategoryRows(
              data as Category["subCategories"],
              moveDown,
              moveUp
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SubCategories;
