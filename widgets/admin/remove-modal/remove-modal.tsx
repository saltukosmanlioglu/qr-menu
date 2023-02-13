"use client";
import React, { useCallback, useState } from "react";
import Button from "@atlaskit/button";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import ModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { RemoveModalProps } from "./types";

const RemoveModal: React.FunctionComponent<RemoveModalProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <React.Fragment>
      <Button
        appearance="danger"
        children="Sil"
        iconAfter={<TrashIcon label="" size="medium" />}
        onClick={openModal}
      />
      <ModalTransition>
        {isOpen && (
          <ModalDialog onClose={closeModal}>
            <ModalHeader>
              <ModalTitle appearance="danger">Veri silinsin mi ?</ModalTitle>
            </ModalHeader>
            <ModalBody>
              Bu işlem geri alınamaz. Silinen veri ile ilişkili tüm veriler
              silinecektir. Silmek istediğinizden emin misiniz?
            </ModalBody>
            <ModalFooter>
              <Button
                appearance="subtle"
                children="İptal"
                onClick={closeModal}
              />
              <Button
                appearance="danger"
                children="Sil"
                iconAfter={<TrashIcon label="" size="medium" />}
                onClick={closeModal}
              />
            </ModalFooter>
          </ModalDialog>
        )}
      </ModalTransition>
    </React.Fragment>
  );
};

export default RemoveModal;
