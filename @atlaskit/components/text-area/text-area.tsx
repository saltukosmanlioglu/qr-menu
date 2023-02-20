import React from "react";

import { Field, HelperMessage } from "@atlaskit/form";
import AtlaskitTextArea from "@atlaskit/textarea";

import { TextAreaProps } from "./types";

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  errorMessage,
  label,
  name,
  placeholder,
  required,
  style,
  value,
}) => {
  return (
    <div style={style}>
      <Field
        defaultValue={value}
        isRequired={required}
        label={label}
        name={name}
      >
        {({ fieldProps, error }: any) => (
          <React.Fragment>
            <AtlaskitTextArea placeholder={placeholder} {...fieldProps} />
            {error && <HelperMessage>{errorMessage}</HelperMessage>}
          </React.Fragment>
        )}
      </Field>
    </div>
  );
};

export default TextArea;
