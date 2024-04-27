"use client";

import FadeWrapper from "react-reveal/Fade";
import { delayAnimationsFor } from "@/app/Loader";

export default function Fade({ children, ...props }) {
  const delay = props.delay + delayAnimationsFor || delayAnimationsFor;

  return (
    <FadeWrapper {...props} delay={delay}>
      {children}
    </FadeWrapper>
  );
}
