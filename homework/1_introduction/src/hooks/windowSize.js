import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [dimensions, setDimensions] = useState({
    width: window.outerWidth,
    height: window.outerHeight
  });

  useEffect(() => {
    const handlerResize = () => {
      setDimensions({
        width: window.outerWidth,
        height: window.outerHeight,
      });
    }

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  }, []);


  return dimensions;
}