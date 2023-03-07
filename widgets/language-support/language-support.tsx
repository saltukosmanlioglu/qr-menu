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

import { languageHead } from "./constants";

import { LanguageSupportProps } from "./types";

const LanguageSupport = <T extends object>({
  category,
  children,
  data,
  isLoading,
  onCreate,
  removeLanguageSupport,
}: LanguageSupportProps<T>) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleClick = (code: string) => {
    openModal();
    setActiveLanguage(code);
  };

  return (
    <React.Fragment>
      <Table
        tableProps={{
          isLoading,
          head: languageHead,
          rows: data?.slice(1).map((language, index) => ({
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
                          onClick={() => handleClick(language.code)}
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
                        onClick={() => handleClick(language.code)}
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
            <Form<T>
              onSubmit={(values) => {
                onCreate(values, activeLanguage);
                closeModal();
              }}
            >
              {({ formProps }) => (
                <form {...formProps}>
                  <ModalHeader>
                    <ModalTitle>{activeLanguage} Dil desteği ekle</ModalTitle>
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
                      children="Oluştur"
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
