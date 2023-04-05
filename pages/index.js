import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}
