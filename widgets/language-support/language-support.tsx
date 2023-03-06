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

import Table from "@/atlaskit/widgets/table";
import useForm from "@/utils/hooks/form";

import { languageHead } from "./constants";

import { LanguageSupportProps } from "./types";

const LanguageSupport = <T extends object>({
  children,
  data,
  isLoading,
  onSubmit,
}: LanguageSupportProps<T>) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const form = useForm<T>({
    initialValues: {} as T,
    onSubmit: onSubmit,
  });

  const handleClick = (code: string) => {
    openModal();
    setActiveLanguage(code);
    form.handleChange("languageCode", activeLanguage);
  };

  return (
    <React.Fragment>
      <Table
        tableProps={{
          isLoading,
          head: languageHead,
          rows: data?.map((language, index) => ({
            key: `row-${index}-${language.id}`,
            cells: [
              {
                key: language.id,
                content: language.code,
              },
              {
                key: language.id,
                content: language.code,
              },
              {
                key: language.id,
                content: (
                  <ButtonGroup>
                    <Button
                      appearance="primary"
                      children={`${language.code} Dil desteği ekle`}
                      iconAfter={<AddIcon label="" size="small" />}
                      onClick={() => handleClick(language.code)}
                    />
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
            <Form<T> onSubmit={onSubmit}>
              {({ formProps }) => (
                <form {...formProps}>
                  <ModalHeader>
                    <ModalTitle>Dil desteği ekle</ModalTitle>
                  </ModalHeader>
                  <ModalBody>{children(form as any)}</ModalBody>
                  <ModalFooter>
                    <Button
                      appearance="subtle"
                      children="Cancel"
                      onClick={closeModal}
                    />
                    <Button
                      autoFocus
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
