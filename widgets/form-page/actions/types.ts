import { ButtonProps } from "@atlaskit/button";

import { OperationType } from "@/utils/types";

export interface ActionsProps {
  actions?: Array<ButtonProps>;
  isLoading?: boolean;
  onCancel: () => void;
  operation: OperationType;
  text: string;
}
