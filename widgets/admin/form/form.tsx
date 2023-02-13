"use client";
import React from "react";

import Button, { ButtonGroup, LoadingButton } from "@atlaskit/button";

import { FormProps } from "./types";

const Form = <T extends Record<string, any>>({
  children,
  description,
  initialValues,
  onSubmit,
  operation,
  title,
}: FormProps<T>) => {
  const Header = () => {
    return (
      <div>
        <b>{title}</b>
        <p>{description}</p>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="ml-auto w-full">
        <ButtonGroup>
          <Button appearance="subtle">İptal</Button>
          <LoadingButton appearance="primary" children="Submit" type="submit" />
        </ButtonGroup>
      </div>
    );
  };

  return (
    <form className="w-3/4 m-auto" onSubmit={(e) => onSubmit(e)}>
      <Header />
      <div className="mt-10 mb-10">{children}</div>
      <Footer />
    </form>
  );
};

export default Form;
