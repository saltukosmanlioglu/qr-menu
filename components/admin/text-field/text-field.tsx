import React from "react";

import { Field, HelperMessage } from "@atlaskit/form";
import AtlaskitTextField from "@atlaskit/textfield";

import { TextFieldProps } from "./types";

const TextField: React.FunctionComponent<TextFieldProps> = ({
  autoFocus,
  errorMessage,
  label,
  name,
  placeholder,
  required,
  style,
  type,
  value,
}) => {
  return (
    <div style={style}>
      <Field
        aria-required={required}
        defaultValue={value}
        label={label}
        name={name}
        isRequired={required}
      >
        {({ fieldProps, error }) => (
          <React.Fragment>
            <AtlaskitTextField
              autoFocus
              placeholder={placeholder}
              type={type}
              {...fieldProps}
            />
            {!error && <HelperMessage>{errorMessage}</HelperMessage>}
          </React.Fragment>
        )}
      </Field>
    </div>
  );
};

export default TextField;
