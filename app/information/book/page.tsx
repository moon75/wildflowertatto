"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { motion } from "framer-motion";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;

import poppy1 from "@/src/assets/images/poppytattooexample1.jpeg";
import poppy2 from "@/src/assets/images/poppytatooexample2.jpeg";
import poppy3 from "@/src/assets/images/poppytatooexample3.jpeg";
import poppy4 from "@/src/assets/images/poppy4tattooexample.jpeg";
import poppy5 from "@/src/assets/images/poppy5tattooexample.jpeg";
import poppy6 from "@/src/assets/images/poppy6tattooexample.jpeg";

import placement1 from "@/src/assets/images/Takingtattoophoto1.png";
import placement2 from "@/src/assets/images/Takingtattoophoto2.png";
import placement3 from "@/src/assets/images/takingtattoophoto3.png";
import placement4 from "@/src/assets/images/takingtattoophoto4.png";

const goodRefs = [poppy1, poppy2, poppy3];
const moreRefs = [poppy4, poppy5, poppy6];
const wrongPhotos = [placement1, placement2];
const rightPhotos = [placement3, placement4];

export default function BookPage() {
  const { t } = useLocale();

  return (
    <>
      {/* ── SECTION 1: Title + Step 1 ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left — title */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <h1
                className="text-sage leading-[1.0]"
                style={{
                  fontFamily: "var(--font-androgy), serif",
                  fontWeight: "normal",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                }}
              >
                {t("book.title").split(" ").slice(0, 2).join(" ")}
                <br />
                {t("book.title").split(" ").slice(2).join(" ")}
              </h1>
              <div className="mt-4 h-px w-24 bg-sage/40" />
            </motion.div>

            {/* Right — Step 1 */}
            <FadeIn delay={0.15} className="lg:col-span-7">
              <h2
                className="text-sage mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                }}
              >
                {t("book.step1Heading")}
              </h2>
              <p className="text-ink/75 leading-relaxed text-[15px] mb-4">
                {t("book.step1Intro")}
              </p>
              <ul className="flex flex-col gap-2 mb-5">
                {[
                  t("book.step1Bullet1"),
                  t("book.step1Bullet2"),
                  t("book.step1Bullet3"),
                  t("book.step1Bullet4"),
                  t("book.step1Bullet5"),
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-ink/75 text-[15px]">
                    <span className="text-sage mt-[3px] shrink-0">✶</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="text-ink/70 leading-relaxed text-[14px] italic border-l-2 border-sage/30 pl-4">
                {t("book.step1Footer")}
              </p>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-7 bg-sage text-white text-[11px] tracking-[0.25em] uppercase px-6 py-3 rounded-md hover:bg-sage-dark transition-colors"
              >
                WhatsApp
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Step 2 — Be Specific + reference photos ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
            <FadeIn className="lg:col-span-5">
              <h2
                className="text-sage mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                }}
              >
                {t("book.step2Heading")}
              </h2>
              <p className="text-ink/75 leading-relaxed text-[15px] mb-5">
                {t("book.step2Text")}
              </p>
              <p className="text-ink/60 leading-relaxed text-[14px] italic border-l-2 border-sage/30 pl-4">
                {t("book.step2Note")}
              </p>
            </FadeIn>

            {/* Good reference photos */}
            <FadeIn delay={0.15} className="lg:col-span-7">
              <p className="text-[11px] tracking-[0.25em] uppercase text-sage/70 mb-3 flex items-center gap-2">
                <span className="text-sage font-bold text-base">✓</span> Good references — consistent style
              </p>
              <div className="grid grid-cols-3 gap-3">
                {goodRefs.map((img, i) => (
                  <div key={i} className="relative overflow-hidden rounded-lg shadow-soft aspect-[3/4] bg-bone">
                    <Image
                      src={img}
                      alt={`Good tattoo reference example ${i + 1}`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 200px, 33vw"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* More reference examples */}
          <FadeIn className="grid grid-cols-3 gap-3 max-w-xl ml-auto">
            {moreRefs.map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg shadow-soft aspect-[3/4] bg-bone">
                <Image
                  src={img}
                  alt={`Tattoo reference example ${i + 4}`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 180px, 33vw"
                />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: Step 3 — Placement photos ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left — heading + bullets */}
            <FadeIn className="lg:col-span-4">
              <h2
                className="text-sage leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-androgy), serif",
                  fontWeight: "normal",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                }}
              >
                {t("book.photosLabel")}
              </h2>
              <div className="h-px w-20 bg-sage/40 mb-5" />
              <p className="text-ink/75 leading-relaxed text-[15px] mb-4">
                {t("book.step3Intro")}
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  t("book.step3Bullet1"),
                  t("book.step3Bullet2"),
                  t("book.step3Bullet3"),
                  t("book.step3Bullet4"),
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-ink/70 text-[14px]">
                    <span className="text-sage/60 mt-[3px] shrink-0">—</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-ink/50 text-[13px] italic">
                {t("book.step3Footer")}
              </p>
            </FadeIn>

            {/* Right — wrong vs right photo grids */}
            <FadeIn delay={0.2} className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Wrong column */}
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-3 flex items-center gap-2">
                    <span className="text-red-400 font-bold text-base">✕</span> Avoid
                  </p>
                  <div className="flex flex-col gap-3">
                    {wrongPhotos.map((img, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg shadow-soft aspect-[4/3] bg-white">
                        <Image
                          src={img}
                          alt={`Wrong placement photo example ${i + 1}`}
                          fill
                          className="object-cover object-center"
                          sizes="(min-width: 1024px) 260px, 45vw"
                        />
                        <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-red-400/90 flex items-center justify-center text-white font-bold text-sm">✕</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-ink/50 mb-3 flex items-center gap-2">
                    <span className="text-sage font-bold text-base">✓</span> Ideal
                  </p>
                  <div className="flex flex-col gap-3">
                    {rightPhotos.map((img, i) => (
                      <div key={i} className="relative overflow-hidden rounded-lg shadow-soft aspect-[4/3] bg-white">
                        <Image
                          src={img}
                          alt={`Good placement photo example ${i + 1}`}
                          fill
                          className="object-cover object-center"
                          sizes="(min-width: 1024px) 260px, 45vw"
                        />
                        <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-sage/90 flex items-center justify-center text-white font-bold text-sm">✓</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Steps 4 & 5 ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Step 4 */}
            <FadeIn>
              <h2
                className="text-sage mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                }}
              >
                {t("book.step4Heading")}
              </h2>
              <p className="text-ink/75 leading-relaxed text-[15px]">
                {t("book.step4Text")}
              </p>
            </FadeIn>

            {/* Step 5 */}
            <FadeIn delay={0.1}>
              <h2
                className="text-sage mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  letterSpacing: "0.01em",
                }}
              >
                {t("book.step5Heading")}
              </h2>
              <p className="text-ink/75 leading-relaxed text-[15px] mb-4">
                {t("book.step5Text")}
              </p>
              <p className="text-ink/55 leading-relaxed text-[14px] italic border-l-2 border-sage/30 pl-4">
                ✶ {t("book.step5Note")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Closing ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center lg:justify-end">
          <FadeIn>
            <h2
              className="text-sage text-center lg:text-right leading-[1.1]"
              style={{
                fontFamily: "var(--font-androgy), serif",
                fontWeight: "normal",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              }}
            >
              {t("book.closing")}
            </h2>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
