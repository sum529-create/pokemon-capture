import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
  const [localStg, setLocalStg] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialState;
    } catch (error) {
      console.error(error);
      return initialState;
    }
  });

  useEffect(() => {
    if (localStg !== undefined)
      window.localStorage.setItem(key, JSON.stringify(localStg));
  }, [key, localStg]);

  return [localStg, setLocalStg];
};

export default useLocalStorage;
