import React from "react";

export const handleMove = <T extends object>(
  item: T,
  index: number,
  operation: "up" | "down",
  data: Array<T> | undefined,
  setData: React.Dispatch<React.SetStateAction<Array<T>>>
) => {
  if (data) {
    const newData = data.slice();

    const next = newData[index + 1];
    const prev = newData[index - 1];

    if (operation === "up") {
      newData[index] = prev;
      newData[index - 1] = item;
    } else if (operation === "down") {
      newData[index] = next;
      newData[index + 1] = item;
    }

    setData(newData);
  }
};
