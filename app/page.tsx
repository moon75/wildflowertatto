"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";
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
      <HeroSection />

      <AboutSection />
      <SpecializationsSection />
      <ServicesSection />
      <HealedTattoosSection />
      <PortfolioSection />
      <InformationSection />

      {/* Terms & Conditions highlight */}
      <section className="bg-white border-t border-sage/10">
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.p
            className="text-ink/50 text-[11px] tracking-[0.25em] uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Important to know before booking
          </motion.p>
          <motion.h2
            className="text-sage leading-tight mb-4"
            style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            Terms & Conditions
          </motion.h2>
          <motion.p
            className="text-ink/60 text-[15px] leading-relaxed max-w-lg mx-auto mb-7"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
          >
            Please take a moment to read through the studio policies, deposit rules and booking conditions before getting in touch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
          >
            <Link
              href="/information/terms"
              className="inline-block bg-sage text-white text-[11px] tracking-[0.28em] uppercase px-8 py-3.5 rounded-md hover:bg-sage-dark transition-colors"
            >
              Read Terms & Conditions →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
