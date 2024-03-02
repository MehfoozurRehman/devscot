import "@/styles/global.scss";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Devscot",
  description: "A software house based in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
