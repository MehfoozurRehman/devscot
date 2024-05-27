import AboutSection from "../components/AboutSection";
import Cardsection from "@/components/Cardsection";
import FeatureSection from "@/components/FeatureSection";
import FeatureSectionMobile from "@/components/FeatureSectionMobile";
import Footer from "@/components/Footer";
import Footermobile from "@/components/Footermobile";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import HomeTestimonials from "@/components/HomeTestimonials";
import HowWorkSection from "@/components/HowWorkSection";
import NumbersSection from "@/components/NumbersSection";
import SolutionSection from "@/components/SolutionSection";
import VideoSection from "@/components/VideoSection";

export const metadata = {
  title: "Home-Devscot | Software Design & Development Company ",
  description:
    "A software Companies specializing in innovative web and mobile applications. ",
  keywords:
    "Devscot | Software Design & Development Company , software house, web development, app development, devscot, devscotsolution , best software houses in faisalabad , software development, custom software solutions, mobile app development, web development services, software consulting, enterprise software, cloud solutions, DevOps services, IT outsourcing, software maintenance, software testing, agile development, digital transformation, SaaS development, UX/UI design, software integration, backend development, frontend development, software security, blockchain development, AI and machine learning, big data analytics, IoT solutions, e-commerce development, ERP solutions, CRM development, startup software development, MVP development, software prototyping, IT consulting, technology stack, full-stack development, software project management, cross-platform development, API development, software scalability, cloud migration, microservices architecture, continuous integration, software architecture design, quality assurance, software reengineering, digital product development, fintech software development, healthcare software solutions, education software development, custom app development, software support services, software performance optimization, innovative software solutions",
  image: "/devscotlogo-black.png",
  url: "https://devscot.com/",
  type: "website",
  author: "Devscot",
  language: "en",
  locale: "en_US",
  site_name: "Devscot",
  twitter: {
    card: "summary_large_image",
    site: "@devscot",
    title: "Devscot | Software Design & Development Company",
    description:
      "A software Companies specializing in innovative web and mobile applications.",
    image: "/devscotlogo-black.png",
  },
  og: {
    title: "Devscot | Software Design & Development Company",
    description:
      "A software Companies specializing in innovative web and mobile applications.",
    type: "website",
    url: "https://devscot.com/",
    image: "/devscotlogo-black.png",
    locale: "en_US",
    site_name: "Devscot",
  },
  robots: "index, follow",
  canonical: "https://devscot.com/",
  theme_color: "#ffffff",
  apple_mobile_web_app_status_bar_style: "black-translucent",
  email: "info@devscot.com",
  phone_number: "+92 335 6226026",
  address: "123 Main Street, Lahore, Pakistan",
  business_hours: "Mon-Fri: 9:00 AM - 5:00 PM",
  contact_point: {
    "@type": "ContactPoint",
    telephone: "+92 335 6226026",
    contactType: "customer service",
    areaServed: "PK",
    availableLanguage: [
      "English",
      "Urdu",
      "Spanish",
      "English",
      "French",
      "German",
      "Italian",
    ],
  },
  geo_location: {
    "@type": "GeoCoordinates",
    latitude: "31.5204",
    longitude: "74.3587",
  },
  opening_hours: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  social_media: {
    facebook: "https://www.facebook.com/devscot.solutions/",
    instagram: "https://www.instagram.com/devscot.solutions/",
  },
};
export default function Index() {
  return (
    <>
      <Header />
      <HomeSection />
      <AboutSection />
      <SolutionSection />
      <VideoSection />
      <NumbersSection />
      <HowWorkSection />
      <FeatureSection />
      <FeatureSectionMobile />
      <Cardsection />
      <HomeTestimonials />
      <Footer />
      <Footermobile />
    </>
  );
}
