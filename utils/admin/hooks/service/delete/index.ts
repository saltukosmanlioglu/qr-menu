import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { UseDeleteProps } from "../types";

const useDelete = () => {
  const onRemove = useCallback(async ({ service }: UseDeleteProps) => {
    return await service
      .then((res: AxiosResponse<any, any>) => console.log(res))
      .catch((err: any) => console.log(err));
  }, []);

  return { onRemove };
};

export default useDelete;
