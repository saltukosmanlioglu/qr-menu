import React from "react";
import AtlaskitSelect, { ValueType } from "@atlaskit/select";
import { ErrorMessage, Field } from "@atlaskit/form";

import { SelectProps, Option } from "./types";

const Select: React.FunctionComponent<SelectProps> = ({
  isLoading,
  isRequired,
  label,
  name,
  onChange,
  options,
  placeholder,
  value,
}) => (
  <div>
    <Field<ValueType<Option>>
      defaultValue={value}
      isRequired={isRequired}
      label={label}
      name={name}
    >
      {({ fieldProps: { id, ...rest }, error }) => (
        <React.Fragment>
          <AtlaskitSelect<Option>
            inputId={id}
            isClearable
            isLoading={isLoading}
            options={options}
            placeholder={placeholder}
            {...rest}
            onChange={onChange}
            value={value}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </React.Fragment>
      )}
    </Field>
  </div>
);

export default Select;
