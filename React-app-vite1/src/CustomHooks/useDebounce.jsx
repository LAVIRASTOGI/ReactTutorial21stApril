import { useCallback, useRef } from "react";

export function useDebounce(callback, delay) {
    
  //	Preserve mutable value across renders without causing re-render
  let id = useRef(null);
  const debounce = useCallback(
    (...args) => {
      console.log(id);
      clearTimeout(id.current);
      id.current = setTimeout(() => {
        console.log("run times");
        callback.apply(this, args);
      }, delay);
    },
    [delay, callback]
  );

  return [debounce];
}
