import React from "react";
import Link from "next/link";

import AtlaskitSectionMessage, {
  SectionMessageAction,
} from "@atlaskit/section-message";

import { SectionMessageProps } from "./types";

const SectionMessage: React.FunctionComponent<SectionMessageProps> = ({
  actions,
  appearance,
  description,
  title,
}) => {
  return (
    <AtlaskitSectionMessage
      appearance={appearance}
      title={title}
      actions={actions?.map((action, index) => (
        <Link key={index} href={action.href}>
          <SectionMessageAction>{action.children}</SectionMessageAction>,
        </Link>
      ))}
    >
      <p>{description}</p>
    </AtlaskitSectionMessage>
  );
};

export default SectionMessage;
