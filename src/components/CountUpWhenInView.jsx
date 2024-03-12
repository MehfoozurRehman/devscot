"use client";
import { useEffect, useRef, useState } from "react";

import CountUp from "react-countup";

const CountUpWhenInView = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [countedUp, setCountedUp] = useState(false);
  const elementRef = useRef(null);

  const isInViewport = () => {
    if (!elementRef.current) return false;
    const rect = elementRef.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  const handleScroll = () => {
    setIsVisible(isInViewport());
  };

  const handleCountUpComplete = () => {
    setCountedUp(true);
  };

  useEffect(() => {
    const scrollHandler = () => handleScroll();

    handleScroll();
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        visibility: isVisible ? "visible" : "hidden",
        display: "inline",
      }}
    >
      {(isVisible && !countedUp) || countedUp ? (
        <CountUp
          {...props}
          start={countedUp ? props.end : props.start}
          onComplete={handleCountUpComplete}
        />
      ) : null}
    </div>
  );
};

export default CountUpWhenInView;
