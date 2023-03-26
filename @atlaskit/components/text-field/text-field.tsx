import React from "react";

import { Field, HelperMessage } from "@atlaskit/form";
import AtlaskitTextField from "@atlaskit/textfield";

import { TextFieldProps } from "./types";

const TextField: React.FunctionComponent<TextFieldProps> = ({
  autoFocus,
  disabled,
  errorMessage,
  label,
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => {
  return (
    <div>
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
              autoFocus={autoFocus}
              placeholder={placeholder}
              type={type}
              {...fieldProps}
              onChange={onChange}
              value={value}
              isDisabled={disabled}
            />
            {!error && <HelperMessage>{errorMessage}</HelperMessage>}
          </React.Fragment>
        )}
      </Field>
    </div>
  );
};

export default TextField;
