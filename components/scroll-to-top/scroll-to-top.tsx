import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { BsFileArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
  const route = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const path = route.asPath;

    path !== "/#ryan" ? setIsVisible(true) : setIsVisible(false);
  }, [route]);

  return (
    isVisible && (
      <div
        className='scroll-top'
        style={{
          position: "absolute",
          bottom: "30px",
          right: "60px",
        }}
      >
        <NextLink href={"#ryan"}>
          <BsFileArrowUp />
        </NextLink>
      </div>
    )
  );
};

export default ScrollToTop;
