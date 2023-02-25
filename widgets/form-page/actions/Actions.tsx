import React from "react";
import { FormFooter } from "@atlaskit/form";
import Button, { ButtonGroup } from "@atlaskit/button";
import LoadingButton from "@atlaskit/button/loading-button";

import AddIcon from "@atlaskit/icon/glyph/add";
import EditFilledIcon from "@atlaskit/icon/glyph/edit-filled";

import { ActionsProps } from "./types";

const FormActions: React.FunctionComponent<ActionsProps> = ({
  actions,
  isLoading,
  onCancel,
  operation,
  text,
}) => {
  return (
    <FormFooter>
      <ButtonGroup>
        <Button appearance="subtle" children="Cancel" onClick={onCancel} />
        {actions?.map((action, index) => (
          <Button key={index} {...action} />
        ))}
        <LoadingButton
          appearance="primary"
          children={text}
          iconAfter={
            operation === "create" ? (
              <AddIcon label="" size="small" />
            ) : (
              <EditFilledIcon label="" size="small" />
            )
          }
          isLoading={isLoading}
          type="submit"
        />
      </ButtonGroup>
    </FormFooter>
  );
};

export default FormActions;
