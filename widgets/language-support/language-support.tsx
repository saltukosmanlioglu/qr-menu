"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "@atlaskit/button";
import DropdownMenu, { DropdownItem } from "@atlaskit/dropdown-menu";
import Form from "@atlaskit/form";
import AtlaskitModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import WorldIcon from "@atlaskit/icon/glyph/world";

import Gutter from "@/components/gutter";
import languageService, { LanguageResponse } from "@/services/language";

import { LanguageSupportProps } from "./types";

const LanguageSupport = <T extends object>({
  children,
  onSubmit,
}: LanguageSupportProps<T>) => {
  const [languages, setLanguages] = useState<LanguageResponse>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    languageService
      .get()
      .then((res) => setLanguages(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <DropdownMenu
        appearance="default"
        placement="bottom-end"
        trigger={({ triggerRef, ...props }) => (
          <Button
            {...props}
            appearance="primary"
            children="Dil desteği ekle"
            iconAfter={<WorldIcon label="more" />}
            ref={triggerRef}
          />
        )}
      >
        {languages?.map((language, index) => (
          <DropdownItem
            key={index}
            children={language.code}
            onClick={openModal}
          />
        ))}
      </DropdownMenu>
      <ModalTransition>
        {isOpen && (
          <AtlaskitModalDialog onClose={closeModal}>
            <Form<T> onSubmit={onSubmit}>
              {({ formProps }) => (
                <form {...formProps}>
                  <ModalHeader>
                    <ModalTitle>Dil desteği ekle</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <Gutter width="w-full">{children()}</Gutter>
                  </ModalBody>
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
    </div>
  );
};

export default LanguageSupport;
