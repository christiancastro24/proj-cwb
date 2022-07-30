import { useState, useEffect } from "react";

const resizeDelay = 150;

const useWindowSize = () => {
  // on SSR, property window is undefined
  const [windowSize, setWindowSize] = useState({
    width: window ? window.innerWidth : undefined,
    height: window ? window.innerHeight : undefined,
  });

  useEffect(() => {
    let isMounted = true;

    function handleResize() {
      if (isMounted) {
        let timeoutId = -1;

        clearTimeout(timeoutId);

        timeoutId = window.setTimeout(
          () =>
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            }),
          resizeDelay
        );
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;