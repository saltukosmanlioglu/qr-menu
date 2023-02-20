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
            {...rest}
            isClearable
            isLoading={isLoading}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            value={value}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </React.Fragment>
      )}
    </Field>
  </div>
);

export default Select;
