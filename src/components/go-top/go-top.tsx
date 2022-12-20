import React, { useEffect, useState } from "react";
import { scrollDown, scrollTop } from "../../helper/scroll";
import { ArrowIcon } from "../svg/arrow";
const yDetect = 300;

export const GoTop = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showUp, setShowUp] = useState<boolean>(false);

  const sroll = () => {
    let yPosition = window.pageYOffset;

    if (yPosition > yDetect && !show) {
      setShow(() => true);
      checkSrollTop(true);
    } else if (yPosition < yDetect && show) {
      setShow(() => false);
      checkSrollTop(false);
    }
  };

  const checkSrollTop = (showTop: boolean) => {
    const htmlElt = document.querySelector("html");
    if (htmlElt) {
      if (
        htmlElt.clientHeight < htmlElt.scrollHeight &&
        yDetect > htmlElt.scrollTop &&
        htmlElt.scrollHeight - htmlElt.clientHeight > yDetect &&
        !showTop
      ) {
        setShowUp(() => true);
      } else {
        setShowUp(() => false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", sroll);
    checkSrollTop(false);
    return () => {
      window.removeEventListener("scroll", sroll);
    };
  }, [show]);

  const onClick = () => {
    if (show) scrollTop("html");
    else scrollDown("html");
  };

  let classNameScrollTop = `fixed bottom-[5em] right-[5em] xs:right-[1em] xs:bottom-[1em]  bg-primary-100 p-[1em] cursor-pointer transition-all duration-150 ease-in-out`;
  let classNameIcon = `-rotate-90`;
  if (show)
    classNameScrollTop = `${classNameScrollTop} opacity-50 hover:opacity-100 `;
  else if (showUp)
    classNameScrollTop = `${classNameScrollTop} opacity-50 hover:opacity-100 -rotate-180`;
  else classNameScrollTop = `${classNameScrollTop} opacity-0`;
  return (
    <div className={classNameScrollTop} onClick={onClick}>
      <ArrowIcon className={classNameIcon} color="#FFF" />
    </div>
  );
};
