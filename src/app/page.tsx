
import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import Side from "./components/Side";
import Top from "./components/Top";
import Hot from "./components/Hot";
import Blog from "./components/Blog";
import Insta from "./components/Insta";



export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Side />
      <Top/>
      <Hot />
      <Blog />
      <Insta />
    </div>
  );
}
