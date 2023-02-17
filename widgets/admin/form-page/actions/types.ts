import { OperationType } from "@/utils/admin/types";
import { ButtonProps } from "@atlaskit/button";

export interface ActionsProps {
  actions?: Array<ButtonProps>;
  isLoading: boolean;
  onCancel: () => void;
  operation: OperationType;
  text: string;
}
