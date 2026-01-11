import Image from "next/image";
import Hero from "../components/home/Hero";
import AboutSnapshot from "../components/home/AboutSnapshot";
import ServicesSection from "../components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSnapshot />
    </>
  );
}
