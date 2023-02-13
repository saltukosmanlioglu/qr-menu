import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

export const useGet = <T>(service: any) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    setIsLoading(true);

    service
      .get()
      .then((res: AxiosResponse) => setData(res.data))
      .catch((err: AxiosError) => console.log(err))
      .finally(() => {
        setIsLoading(false);
        setData([
          {
            id: 1,
            createdDate: "2022-03-17T13:59:36.000Z",
            languageCode: "TR",
          },
          {
            id: 2,
            createdDate: "2022-03-17T13:59:37.000Z",
            languageCode: "EN",
          },
        ] as T);
      });
  }, []);

  return { data, isLoading };
};
