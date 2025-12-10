
// D:\mktgroup\app\page.tsx
import ReasonToChoose from "./components/ReasonToChoose";
import GlobalColab from "./components/GlobalColab";

import Overlapping from "./components/Overlapping";
import HelpCenter from "./components/HelpCenter";

import HeroSection from "./components/HeroSection";

import FreeService from "./components/FreeService";
import PromoCard from "./components/PromoCard";
import TrendingSection from "./components/TrendingSection";
import CategoryCarousel from "./components/CategoryCarousel";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PromoCard />
      <TrendingSection />
      <CategoryCarousel />
      <Overlapping />



      <ReasonToChoose />

      <FreeService />

      <GlobalColab />
      <HelpCenter />
    </div>
  );
}
