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
  title: "Devscot || Home Page",
  description: "A software house based in Pakistan",
  keywords: "software house, web development, app development, devscot",
  image: "/images/og-image.jpg",
  url: "https://devscot.com",
  type: "website",
  
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
