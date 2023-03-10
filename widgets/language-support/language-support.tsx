import React, { useCallback, useState } from "react";
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
  relatedData,
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
                  relatedData?.localizations?.find(
                    (localization: any) =>
                      localization.languageCode === language.code
                  )?.title || "-",
              },
              {
                key: language.id,
                content: (
                  <ButtonGroup>
                    {relatedData?.localizations.find(
                      (localization: any) =>
                        localization.languageCode === language.code
                    ) ? (
                      <React.Fragment>
                        <Button
                          appearance="default"
                          children={`${language.code} Dil deste??ini d??zenle`}
                          iconAfter={<EditIcon label="" size="small" />}
                          onClick={() => handleClick(language.code, "update")}
                        />
                        <ModalDialog
                          appearance="danger"
                          buttonText="Sil"
                          icon={<TrashIcon label="" size="small" />}
                          body="E??er bir dil deste??ini silmek istiyorsan??z, dil deste??i ile ili??kili t??m veriyi kaybedersiniz. Silmek istedi??inizden emin misiniz?"
                          onClick={() => removeLanguageSupport(language.code)}
                          title="Dil deste??i silinmek ??zere!"
                          width="medium"
                        />
                      </React.Fragment>
                    ) : (
                      <Button
                        appearance="primary"
                        children={`${language.code} Dil deste??i ekle`}
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
                        ? `${activeLanguage} Dil deste??i ekle`
                        : `${activeLanguage} Dil deste??ini d??zenle`}
                    </ModalTitle>
                  </ModalHeader>
                  <ModalBody>{children()}</ModalBody>
                  <ModalFooter>
                    <Button
                      appearance="subtle"
                      children="??ptal"
                      onClick={closeModal}
                    />
                    <Button
                      appearance="primary"
                      children={
                        activeOperation === "create" ? "Olu??tur" : "D??zenle"
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
