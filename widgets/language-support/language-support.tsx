import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Button, { ButtonGroup } from "@atlaskit/button";
import Form from "@atlaskit/form";
import AtlaskitModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import AddIcon from "@atlaskit/icon/glyph/add";
import EditIcon from "@atlaskit/icon/glyph/edit";
import TrashIcon from "@atlaskit/icon/glyph/trash";

import ModalDialog from "@/atlaskit/widgets/modal-dialog";
import Table from "@/atlaskit/widgets/table";
import { OperationType } from "@/utils/types";

import { languageHead } from "./constants";

import { LanguageSupportProps } from "./types";

const LanguageSupport = <T extends object>({
  category,
  children,
  data,
  isLoading,
  onCreate,
  onUpdate,
  removeLanguageSupport,
}: LanguageSupportProps<T>) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [activeOperation, setActiveOperation] = useState<OperationType>();

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleClick = (code: string, operation: OperationType) => {
    setActiveLanguage(code);
    setActiveOperation(operation);
    openModal();
  };

  const handleSubmit = (values: T) => {
    activeOperation === "create"
      ? onCreate(values, activeLanguage)
      : onUpdate(values, activeLanguage);

    closeModal();
  };
  return (
    <React.Fragment>
      <Table
        tableProps={{
          isLoading,
          head: languageHead,
          rows: data?.slice(1)?.map((language, index) => ({
            key: `row-${index}-${language.id}`,
            cells: [
              {
                key: language.id,
                content: language.code,
              },
              {
                key: language.id,
                content:
                  category?.localizations.find(
                    (localization) =>
                      localization.languageCode === language.code
                  )?.title || "-",
              },
              {
                key: language.id,
                content: (
                  <ButtonGroup>
                    {category?.localizations.find(
                      (localization) =>
                        localization.languageCode === language.code
                    ) ? (
                      <React.Fragment>
                        <Button
                          appearance="default"
                          children={`${language.code} Dil desteğini güncelle`}
                          iconAfter={<EditIcon label="" size="small" />}
                          onClick={() => handleClick(language.code, "update")}
                        />
                        <ModalDialog
                          appearance="danger"
                          buttonText="Sil"
                          icon={<TrashIcon label="" size="small" />}
                          body="Eğer bir dil desteğini silmek istiyorsanız, dil desteği ile ilişkili tüm veriyi kaybedersiniz. Silmek istediğinizden emin misiniz?"
                          onClick={() => removeLanguageSupport(language.code)}
                          title="Dil desteği silinmek üzere!"
                          width="medium"
                        />
                      </React.Fragment>
                    ) : (
                      <Button
                        appearance="primary"
                        children={`${language.code} Dil desteği ekle`}
                        iconAfter={<AddIcon label="" size="small" />}
                        onClick={() => handleClick(language.code, "create")}
                      />
                    )}
                  </ButtonGroup>
                ),
              },
            ],
          })),
        }}
      />
      <ModalTransition>
        {isOpen && (
          <AtlaskitModalDialog onClose={closeModal} width="small">
            <Form<T> onSubmit={handleSubmit}>
              {({ formProps }) => (
                <form {...formProps}>
                  <ModalHeader>
                    <ModalTitle>
                      {activeOperation === "create"
                        ? `${activeLanguage} Dil desteği ekle`
                        : `${activeLanguage} Dil desteğini güncelle`}
                    </ModalTitle>
                  </ModalHeader>
                  <ModalBody>{children()}</ModalBody>
                  <ModalFooter>
                    <Button
                      appearance="subtle"
                      children="Cancel"
                      onClick={closeModal}
                    />
                    <Button
                      appearance="primary"
                      children={
                        activeOperation === "create" ? "Oluştur" : "Güncelle"
                      }
                      type="submit"
                    />
                  </ModalFooter>
                </form>
              )}
            </Form>
          </AtlaskitModalDialog>
        )}
      </ModalTransition>
    </React.Fragment>
  );
};

export default LanguageSupport;
