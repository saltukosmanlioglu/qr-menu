import React from "react";
import { useRouter } from "next/navigation";

import Form, { FormHeader, FormSection } from "@atlaskit/form";

import Actions from "./actions";

import { FormPageProps } from "./types";

const FormPage = <T extends Record<string, any>>({
  actions,
  buttonText,
  children,
  description,
  isLoading,
  onSubmit,
  operation,
  title,
}: FormPageProps<T>) => {
  const router = useRouter();

  return (
    <div className="m-auto">
      <Form<T> onSubmit={onSubmit}>
        {({ formProps }) => (
          <form {...formProps}>
            {(description || title) && (
              <FormHeader description={description} title={title} />
            )}
            <FormSection>{children}</FormSection>
            <Actions
              actions={actions}
              isLoading={isLoading}
              onCancel={() => router.back()}
              operation={operation}
              text={buttonText}
            />
          </form>
        )}
      </Form>
    </div>
  );
};

export default FormPage;
