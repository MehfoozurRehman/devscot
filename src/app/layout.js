import "@/styles/global.scss";

import Loader from "./Loader";
import { LoaderTagline } from "./LoaderTagline";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Devscot | Software Design & Development Company ",
  description:
    "A software Companies specializing in innovative web and mobile applications. ",
  keywords:
    "Devscot | Software Design & Development Company , software house, web development, app development, devscot, devscotsolution , best software houses in faisalabad , software development, custom software solutions, mobile app development, web development services, software consulting, enterprise software, cloud solutions, DevOps services, IT outsourcing, software maintenance, software testing, agile development, digital transformation, SaaS development, UX/UI design, software integration, backend development, frontend development, software security, blockchain development, AI and machine learning, big data analytics, IoT solutions, e-commerce development, ERP solutions, CRM development, startup software development, MVP development, software prototyping, IT consulting, technology stack, full-stack development, software project management, cross-platform development, API development, software scalability, cloud migration, microservices architecture, continuous integration, software architecture design, quality assurance, software reengineering, digital product development, fintech software development, healthcare software solutions, education software development, custom app development, software support services, software performance optimization, innovative software solutions",
  image: "/devscotlogo-black.png",

  url: "https://devscot.com/Services",
  type: "website",
};

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
