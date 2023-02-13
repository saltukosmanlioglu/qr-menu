import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

export const useGetById = <T>(service: any, id: number | string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    service
      .getById()
      .then((res: AxiosResponse) => setData(res.data))
      .catch((err: AxiosError) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setData({
          id: 1,
          createdDate: "2022-03-17T13:59:36.000Z",
          languageCode: "TR",
        } as T);
      });
  }, []);

  return { data, isLoading };
};
