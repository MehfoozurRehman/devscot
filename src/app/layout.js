import "@/styles/global.scss";

import Loader from "./Loader";
import { LoaderTagline } from "./LoaderTagline";
import { SpeedInsights } from "@vercel/speed-insights/next";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader>
          <LoaderTagline />
        </Loader>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
