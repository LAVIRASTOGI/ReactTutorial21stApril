import { useCallback } from "react";
import { useRef } from "react";

export function useDebounceHook(callback, delay = 500) {
  let id = useRef(null);
  const debounceFunction = useCallback(
    (...args) => {
      console.log(id);
      clearTimeout(id.current);
      id.current = setTimeout(() => {
        console.log("settimeout runs");
        callback.apply(this, args);
      }, delay);
    },
    [callback, delay]
  );

  return [debounceFunction];
}
