import React, { useCallback, useEffect, useState } from "react";

function ResizeWindow() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [handleSize]);
  return <div>ResizeWindow :{windowSize} px</div>;
}

export default ResizeWindow;
