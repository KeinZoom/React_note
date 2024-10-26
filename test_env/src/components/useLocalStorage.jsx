import { useState } from "react";

export default function useLocalStorage(keyItem, initialValue) {
  const [value, setValue] = useState(() => {
    const localStorage = window.localStorage.getItem(keyItem);
    if (localStorage) {
      return localStorage;
    } else {
      window.localStorage.setItem(keyItem, initialValue);
      return initialValue;
    }
  });

  const setLocalValue = (newValue) => {
    if (newValue instanceof Function) {
      const tempValue = newValue(value);
      window.localStorage.setItem(keyItem, tempValue);
      setValue(newValue(value));
    } else {
      setValue(newValue);
      window.localStorage.setItem(keyItem, newValue);
    }
  };

  return [value, setLocalValue];
}
