import { useCallback, useRef } from "react";

//Throttle limits how often a function can be called in a period of time.
export function useThrotlling(callback, delay) {
  let flag = useRef(true);
  const throtlleFunction = useCallback(
    (...args) => {
      if (flag?.current) {
        callback.apply(this, args);
        flag.current = false;
        setTimeout(() => {
          console.log("run settimeout");
          flag.current = true;
        }, delay);
      }
    },
    [callback, delay]
  );
  return throtlleFunction;
}
