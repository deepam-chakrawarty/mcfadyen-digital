import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import M1 from "./images/model/m1.png";
import M2 from "./images/model/m2.png";
import M3 from "./images/model/m3.png";
import M4 from "./images/model/m4.png";
import M5 from "./images/model/m5.png";
import Heart from "./images/Heart.svg";
import { styled } from "styled-components";

function MiddleSection() {
  const scrollerRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroller = scrollerRef.current;
      const { scrollHeight, clientHeight } = document.documentElement;

      if (clientHeight >= scrollHeight - scroller.offsetHeight) {
        scroller.classList.remove("sticky");
      } else {
        scroller.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isScrollerReady, setIsScrollerReady] = useState(false);

  useLayoutEffect(() => {
    if (!isScrollerReady && scrollerRef) {
      setTimeout(() => {
        const scroller = scrollerRef.current;
        if (scroller && scroller.scrollTop) {
          scroller.scrollTop = 0;
          setIsScrollerReady(true);
        }
      }, 10);
    }
  }, [isScrollerReady, scrollerRef]);

  return (
    <HeartContainer>
      <HeartImage src={Heart} alt="" />
      <ImagesContainer ref={scrollerRef}>
        <img src={M1} alt="" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={M2} alt="" />
          <img src={M3} alt="" />
        </div>

        <img src={M4} alt="" />
        <img src={M5} alt="" />
      </ImagesContainer>
    </HeartContainer>
  );
}

export default MiddleSection;

const ImagesContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  &.sticky {
    position: relative;
  }

  img {
    display: block;
    width: 70%;
    height: auto;
    scroll-snap-align: start;
    margin: 0 auto;
    object-fit: scale-down;
  }

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }
`;

const HeartContainer = styled.div`
  position: relative;
  width: 100%;
`;

const HeartImage = styled.img`
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 4;
`;
