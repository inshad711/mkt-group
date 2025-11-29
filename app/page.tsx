import Image from "next/image";
import ReasonToChoose from "./components/ReasonToChoose";
import GlobalColab from "./components/GlobalColab";
import AboutSection from "./components/AboutSection";
import Overlapping from "./components/Overlapping";
import HelpCenter from "./components/HelpCenter";
// import ProductFeatures from "./components/ProductFeatures";
import ProductCard from "./components/ProductCard";
import FollowUs from "./components/FollowUs";
import HeroSection from "./components/HeroSection";
import MulticolumnFeatures from "./components/MulticolumnFeatures";
import Products from "./components/Products";
import OurWork from "./components/OurWork";
import ParallexSection from "./components/ParallexSection";
import WhyTop from "./components/WhyTop";
import AshwagandhaSection from "./components/AshwagandhaSection";
import CardSection from "./components/CardSection";
import FullCard from "./components/FullCard";
import SingleProduct from "./components/SingleProduct";
import AnimatedCard from "./components/AnimatedCard";
import FreeService from "./components/FreeService";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Overlapping />
      <ProductCard />
      {/* <AnimatedCard /> */}
      {/* <AboutSection /> */}
      <ReasonToChoose />
      {/* <FullCard /> */}
      {/* <SingleProduct /> */}
      {/* <CardSection /> */}
      {/* <AshwagandhaSection /> */}
      {/* <MulticolumnFeatures /> */}
      {/* <Products /> */}
      <ParallexSection />
      <WhyTop />
      {/* <OurWork /> */}
      <FreeService />
      {/* <FollowUs /> */}
      {/* <ProductFeatures /> */}
      <GlobalColab />
      <HelpCenter />
    </div>
  );
}
