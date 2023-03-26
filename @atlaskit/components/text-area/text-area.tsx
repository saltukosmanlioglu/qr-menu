import React from "react";

import { Field, HelperMessage } from "@atlaskit/form";
import AtlaskitTextArea from "@atlaskit/textarea";

import { TextAreaProps } from "./types";

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  disabled,
  errorMessage,
  label,
  name,
  placeholder,
  required,
  value,
}) => {
  return (
    <div>
      <Field
        defaultValue={value}
        isRequired={required}
        label={label}
        name={name}
      >
        {({ fieldProps, error }: any) => (
          <React.Fragment>
            <AtlaskitTextArea
              rows={3}
              placeholder={placeholder}
              {...fieldProps}
              isDisabled={disabled}
            />
            {error && <HelperMessage>{errorMessage}</HelperMessage>}
          </React.Fragment>
        )}
      </Field>
    </div>
  );
};

export default TextArea;
