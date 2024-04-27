"use client";

import FooterContent from "./FooterContent";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Footer() {
  return (
    <div className="Footerweb">
      <ParallaxProvider>
        <FooterContent />
      </ParallaxProvider>
    </div>
  );
}
