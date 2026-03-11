import Image from "next/image";
import Hero from "../components/home/Hero";
import AboutSnapshot from "../components/home/AboutSnapshot";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ManagementTeam from "../components/home/ManagementTeam";
import MapSection from "../components/home/MapSection";


export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSnapshot />
      <FeaturedProjects />
      <ManagementTeam />
      <MapSection/>
      
    </>
  );
}
