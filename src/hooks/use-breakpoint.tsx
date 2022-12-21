import { useEffect, useState } from "react";
import { throttle } from "../helper/throttle";

const getDeviceConfig = (width: number) => {
  if (width < 420) {
    return "xs";
  } else if (width >= 420 && width < 640) {
    return "sm";
  } else if (width >= 640 && width < 768) {
    return "md";
  } else if (width >= 768 && width < 1024) {
    return "lg";
  } else if (width >= 1024) {
    return "xl";
  }
};
/*

 xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "420px" },*/
const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
