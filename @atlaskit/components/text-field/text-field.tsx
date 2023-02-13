import React from "react";

import AtlassianTextField from "@atlaskit/textfield";
import { Field } from "@atlaskit/form";

import { TextFieldProps } from "./types";

const TextField: React.FunctionComponent<TextFieldProps> = ({
  isRequired,
  label,
  name,
  onChange,
  value,
}) => {
  return (
    <Field
      aria-required={true}
      name={name}
      defaultValue={value}
      label={label}
      isRequired
    >
      {() => (
        <AtlassianTextField
          name={name}
          isRequired={isRequired}
          onChange={onChange}
          value={value}
        />
      )}
    </Field>
  );
};

export default TextField;
