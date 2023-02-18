"use client";
import React, { useCallback, useState } from "react";

import Button from "@atlaskit/button";
import AtlaskitModalDialog, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

import { ModalDialogProps } from "./types";

const ModalDialog: React.FunctionComponent<ModalDialogProps> = ({
  actions,
  appearance,
  buttonText,
  body,
  icon,
  onClick,
  title,
  width,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleClick = () => {
    onClick();
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        appearance={appearance}
        children={buttonText}
        iconAfter={icon}
        onClick={openModal}
      />
      <ModalTransition>
        {isOpen && (
          <AtlaskitModalDialog onClose={closeModal} width={width}>
            <ModalHeader>
              <ModalTitle
                appearance={
                  appearance === "danger"
                    ? "danger"
                    : appearance === "warning"
                    ? "warning"
                    : undefined
                }
              >
                {title}
              </ModalTitle>
            </ModalHeader>
            <ModalBody>
              <div>{body}</div>
            </ModalBody>
            <ModalFooter>
              <Button
                appearance="subtle"
                children="Cancel"
                onClick={closeModal}
              />
              {actions?.map((action, index) => (
                <Button key={index} {...action} />
              ))}
              <Button
                appearance={appearance}
                autoFocus
                children={buttonText}
                onClick={handleClick}
              />
            </ModalFooter>
          </AtlaskitModalDialog>
        )}
      </ModalTransition>
    </div>
  );
};

export default ModalDialog;
