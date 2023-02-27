import React from "react";

import Select from "@/atlaskit/components/select";
import Gutter from "@/components/gutter";
import TextField from "@/components/text-field";
import { LanguageRequest } from "@/services/language";
import { confirmations } from "@/utils/constants";
import useForm from "@/utils/hooks/form";
import { FormProps } from "@/utils/types";
import { status } from "@/utils/constants";
import FormPage from "@/widgets/form-page";

const Form = ({
  initialValues,
  operation,
  props,
}: FormProps<LanguageRequest>) => {
  const form = useForm<LanguageRequest>({
    initialValues: { ...initialValues } as LanguageRequest,
    onSubmit: props.onSubmit,
  });

  return (
    <FormPage<LanguageRequest> {...props}>
      <Gutter>
        <TextField
          autoFocus
          errorMessage="Dil kodu girmelisiniz"
          label="Dil kodu"
          name="code"
          onChange={form.handleChange}
          placeholder="Dil kodu girin"
          required
          value={form.values.code}
        />
        <Select
          label="Varsayılan dil mi?"
          name="isDefault"
          onChange={(e) => form.handleFieldChange("isDefault", { ...e })}
          options={confirmations.map((confirmation) => ({ ...confirmation }))}
          placeholder="Varsayılan dil durumunu belirtin"
          value={confirmations.find(
            (confirmation) =>
              confirmation.value === form.values.isDefault && {
                ...confirmation,
              }
          )}
        />
        {operation === "update" && (
          <Select
            label="Durumu"
            name="status"
            onChange={(e) => form.handleFieldChange("status", { ...e })}
            options={status.map((statu) => ({ ...statu })) || []}
            placeholder="Durum seçiniz"
            value={status.find((statu) =>
              statu.value === form.values.status ? { ...statu } : null
            )}
          />
        )}
      </Gutter>
    </FormPage>
  );
};

export default Form;
