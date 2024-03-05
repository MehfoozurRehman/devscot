import "@/styles/global.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Devscot",
  description: "A software house based in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
