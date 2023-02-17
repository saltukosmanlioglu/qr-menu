import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import type { UseGetProps } from "../types";

const useGet = <T>({ service }: UseGetProps) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    return await service
      .then((res: AxiosResponse<T, any>) => setData(res.data))
      .catch((err: any) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading };
};

export default useGet;
