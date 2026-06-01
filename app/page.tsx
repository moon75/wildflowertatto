"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroImage from "@/src/assets/images/wildflowertattoolydiaszubert.JPG";
import AboutSection from "@/components/AboutSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import ServicesSection from "@/components/ServicesSection";
import HealedTattoosSection from "@/components/HealedTattoosSection";
import PortfolioSection from "@/components/PortfolioSection";
import InformationSection from "@/components/InformationSection";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(to bottom, #F7F7F5 0%, #F7F7F5 55%, #ffffff 55%, #ffffff 100%)" }}>
        <div className="px-6 pt-8 md:pt-10 pb-8 md:pb-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-center font-androgy leading-[1] tracking-tight text-sage"
            style={{ fontSize: "clamp(2.2rem, 8vw, 4.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
          >
            Wild Flower Tattoo
          </motion.h1>

          <motion.div
            className="mt-4 md:mt-6 mx-auto overflow-hidden rounded-3xl shadow-soft"
            style={{ width: "calc(100% - 10px)" }}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
          >
            <Image
              src={heroImage}
              alt="Wildflower tattoo artist at work"
              priority
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <SpecializationsSection />
      <ServicesSection />
      <HealedTattoosSection />
      <PortfolioSection />
      <InformationSection />
    </>
  );
}
