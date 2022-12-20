import React, { useEffect, useState } from "react";
import { scrollTop } from "../../helper/scroll";
import { ArrowIcon } from "../svg/arrow";
const yDetect = 300;

export const GoTop = () => {
  const [show, setShow] = useState<boolean>(false);

  const sroll = () => {
    let yPosition = window.pageYOffset;

    if (yPosition > yDetect && !show) {
      setShow(() => true);
    } else if (yPosition < yDetect && show) {
      setShow(() => false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", sroll);
    return () => {
      window.removeEventListener("scroll", sroll);
    };
  }, [show]);

  const onClick = () => {
    scrollTop("html");
  };

  let classNameScrollTop = `fixed bottom-[5em] right-[5em] xs:right-[1em] xs:bottom-[1em]  bg-primary-100 p-[1em] cursor-pointer transition-all duration-150 ease-in-out`;
  let classNameIcon = `-rotate-90`;
  if (show)
    classNameScrollTop = `${classNameScrollTop} opacity-50 hover:opacity-100 `;
  else classNameScrollTop = `${classNameScrollTop} opacity-0`;
  return (
    <div className={classNameScrollTop} onClick={onClick}>
      <ArrowIcon className={classNameIcon} color="#FFF" />
    </div>
  );
};
