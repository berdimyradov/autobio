import { useState } from "react";

export function useToggle(initialState: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialState);
  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
}
