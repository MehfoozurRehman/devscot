import "@/styles/global.scss";

import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Devscot",
  description: "A software house based in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}

