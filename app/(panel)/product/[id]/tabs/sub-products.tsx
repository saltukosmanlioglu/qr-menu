import React, { useEffect, useState } from "react";

import Table from "@/atlaskit/widgets/table";
import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
import languageService, { LanguageResponse } from "@/services/language";
import subProductService, {
  SubProductLanguageSupportRequest,
  SubProductRequest,
  SubProductResponse,
} from "@/services/sub-product";
import FormPage from "@/widgets/form-page";
import LanguageSupport from "@/widgets/language-support";
import useForm from "@/utils/hooks/form";

import { head, rows } from "./constants";

const SubProducts: React.FunctionComponent = () => {
  const [data, setData] = useState<SubProductResponse>([]);
  const [languages, setLanguages] = useState<LanguageResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (values: SubProductRequest) => {
    setIsLoading(true);

    subProductService
      .create(values)
      .then(() => {
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setData([
          { ...values, id: 1, createdDate: "", updatedDate: "", order: 0 },
          ...data,
        ]);
      });
  };

  const onLanguageSubmit = (values: SubProductLanguageSupportRequest) => {
    setIsLoading(true);

    subProductService
      .createLanguage(values)
      .then(() => {
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const form = useForm<SubProductRequest>({
    initialValues: { price: "", title: "" } as SubProductRequest,
    onSubmit: onSubmit,
  });

  const languageForm = useForm<SubProductLanguageSupportRequest>({
    initialValues: { title: "" } as SubProductLanguageSupportRequest,
    onSubmit: onLanguageSubmit,
  });

  const onRemove = (id: number) => {
    subProductService
      .remove(Number(id))
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const moveDown = () => {};
  const moveUp = () => {};

  useEffect(() => {
    setIsLoading(true);

    subProductService
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setData([
          {
            id: 1,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 1",
            updatedDate: "",
          },
          {
            id: 2,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 2",
            updatedDate: "",
          },
          {
            id: 3,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 3",
            updatedDate: "",
          },
          {
            id: 4,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 4",
            updatedDate: "",
          },
          {
            id: 5,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 5",
            updatedDate: "",
          },
          {
            id: 6,
            createdDate: "",
            order: 1,
            price: "20,00",
            title: "Alt Ürün 6",
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

  const renderLanguageForm = () => {
    return (
      languageForm && (
        <TextField
          autoFocus
          errorMessage="You must enter a title"
          label="Title"
          name="title"
          onChange={languageForm.handleChange}
          placeholder="Enter a title"
          value={languageForm.values.title}
        />
      )
    );
  };

  return (
    <div>
      <div className="mb-10">
        <FormPage<SubProductRequest>
          buttonText="Create sub product"
          description=""
          isLoading={false}
          onSubmit={onSubmit}
          operation="create"
          title=""
        >
          <Gutter>
            <TextField
              autoFocus
              errorMessage="You must enter a title"
              label="Title"
              name="title"
              onChange={form.handleChange}
              placeholder="Enter a title"
              required
              value={form.values.title}
            />
            <TextField
              errorMessage="You must enter a price"
              label="Price"
              name="price"
              onChange={form.handleChange}
              placeholder="Enter a price"
              required
              value={form.values.price}
            />
          </Gutter>
        </FormPage>
      </div>
      <Table
        tableProps={{
          isLoading: isLoading,
          head: head,
          rows: rows(
            data as SubProductResponse,
            (id) => onRemove(id),
            moveDown,
            moveUp,
            <LanguageSupport
              children={renderLanguageForm}
              onSubmit={onLanguageSubmit}
            />
          ),
        }}
      />
    </div>
  );
};

export default SubProducts;
