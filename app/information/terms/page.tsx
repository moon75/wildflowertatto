"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import botanicalImg from "@/src/assets/images/colourfulfemininebotanicaltattoo.jpeg";
import cherryImg from "@/src/assets/images/colourcherrytattoorealism.jpeg";
import birdImg from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { sanityClient } from "@/lib/sanity";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TermsPage() {
  const { t, locale } = useLocale();
  const [cms, setCms] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "termsPage"][0]`).then(setCms);
  }, []);

  const lang = locale === "nl" ? "nl" : "en";

  const intro = cms ? cms[`intro_${lang}`] : t("terms.intro");

  const policyItems = cms?.policies
    ? cms.policies.map((p: any) => ({ title: p[`heading_${lang}`], text: p[`text_${lang}`] }))
    : [
        { title: t("terms.pol1"), text: t("terms.pol1Text") },
        { title: t("terms.pol2"), text: t("terms.pol2Text") },
        { title: t("terms.pol3"), text: t("terms.pol3Text") },
        { title: t("terms.pol4"), text: t("terms.pol4Text") },
        { title: t("terms.pol5"), text: t("terms.pol5Text") },
        { title: t("terms.pol6"), text: t("terms.pol6Text") },
        { title: t("terms.pol7"), text: t("terms.pol7Text") },
      ];

  const doNotItems = [
    { title: t("terms.dont1"), text: t("terms.dont1Text") },
    { title: t("terms.dont2"), text: t("terms.dont2Text") },
    { title: t("terms.dont3"), text: t("terms.dont3Text") },
    { title: t("terms.dont4"), text: t("terms.dont4Text") },
    { title: t("terms.dont5"), text: t("terms.dont5Text") },
  ];

  const depositRules = cms?.depositRules
    ? cms.depositRules.map((d: any) => d[`rule_${lang}`])
    : [t("terms.dep1"), t("terms.dep2"), t("terms.dep3"), t("terms.dep4"), t("terms.dep5")];

  return (
    <>
      {/* ── SECTION 1: Terms & Conditions ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left — title + image */}
            <FadeIn className="lg:col-span-4">
              <h1
                className="leading-[1.05] text-sage"
                style={{
                  fontFamily: "var(--font-androgy), serif",
                  fontWeight: "normal",
                  fontSize: "clamp(2.8rem, 5vw, 4rem)",
                }}
              >
                {t("terms.title").split("&").map((part, i, arr) => (
                  <span key={i}>
                    {part}{i < arr.length - 1 ? "&" : ""}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <div className="mt-3 mb-4 h-px w-24 bg-sage/40" />
              <p className="text-ink/50 text-sm italic mb-8">{t("terms.lastUpdated")}</p>

              <p className="text-ink/75 leading-relaxed text-[15px] mb-8">
                {intro}
              </p>

              <div className="overflow-hidden rounded-xl shadow-soft max-w-[300px]">
                <Image
                  src={botanicalImg}
                  alt="Colourful botanical tattoo by Lydia Szubert"
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 280px, 90vw"
                />
              </div>
            </FadeIn>

            {/* Right — numbered policy items */}
            <FadeInStagger className="lg:col-span-8 flex flex-col gap-7 lg:pt-2" delay={0.1}>
              {policyItems.map((item: any, i: number) => (
                <FadeInItem key={i}>
                  <div className="flex gap-5">
                    <span
                      className="shrink-0 text-sage/50 leading-none mt-1"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1.6rem" }}
                    >
                      {i + 1}.
                    </span>
                    <div>
                      <h2
                        className="text-sage mb-1.5"
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontWeight: 600,
                          fontSize: "1.15rem",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.title}
                      </h2>
                      <p className="text-ink/70 leading-relaxed text-[15px]">{item.text}</p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Please Do Not ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <FadeIn className="text-center mb-12">
            <h2
              className="text-sage leading-none"
              style={{
                fontFamily: "var(--font-androgy), serif",
                fontWeight: "normal",
                fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
              }}
            >
              {t("terms.doNotHeading")}
            </h2>
            <div className="mt-4 mx-auto h-px w-32 bg-sage/30" />
            <p className="mt-4 text-ink/60 text-[15px] max-w-xl mx-auto leading-relaxed">
              {t("terms.doNotIntro")}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <FadeInStagger className="lg:col-span-7 flex flex-col gap-7">
              {doNotItems.map((item: any, i: number) => (
                <FadeInItem key={i}>
                  <div className="flex gap-5">
                    <span
                      className="shrink-0 text-sage/50 leading-none mt-1"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1.6rem" }}
                    >
                      {i + 1}.
                    </span>
                    <div>
                      <h3
                        className="text-sage mb-1.5"
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontWeight: 600,
                          fontSize: "1.1rem",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-ink/70 leading-relaxed text-[15px]">{item.text}</p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.2} className="lg:col-span-5 flex items-center justify-center lg:justify-end lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-xl shadow-soft max-w-[320px] w-full">
                <Image
                  src={cherryImg}
                  alt="Cherry colour realism tattoo by Lydia Szubert"
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 320px, 90vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Deposit Rules ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left — heading + image */}
            <FadeIn className="lg:col-span-4">
              <h2
                className="text-sage leading-[1.05]"
                style={{
                  fontFamily: "var(--font-androgy), serif",
                  fontWeight: "normal",
                  fontSize: "clamp(2.8rem, 4.5vw, 3.75rem)",
                }}
              >
                {t("terms.depositHeading")}
              </h2>
              <div className="mt-3 mb-6 h-px w-24 bg-sage/40" />
              <p className="text-ink/75 leading-relaxed text-[15px] mb-8">
                {t("terms.depositIntro")}
              </p>

              <div className="overflow-hidden rounded-xl shadow-soft max-w-[300px]">
                <Image
                  src={birdImg}
                  alt="Magpie colour realism tattoo by Lydia Szubert"
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 280px, 90vw"
                />
              </div>
            </FadeIn>

            {/* Right — numbered rules */}
            <FadeInStagger className="lg:col-span-8 flex flex-col gap-7 lg:pt-2" delay={0.1}>
              {depositRules.map((rule: string, i: number) => (
                <FadeInItem key={i}>
                  <div className="flex gap-5">
                    <span
                      className="shrink-0 text-sage/50 leading-none mt-1"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "1.6rem" }}
                    >
                      {i + 1}.
                    </span>
                    <p className="text-ink/70 leading-relaxed text-[15px]">{rule}</p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>
    </>
  );
}
