import { Outlet } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

export default () => {
  return (
    <ParallaxProvider>
      <Outlet />
    </ParallaxProvider>
  );
};
