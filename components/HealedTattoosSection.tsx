"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

import healed1 from "@/src/assets/images/healedmicrocolourrealismtattoo.JPG";
import healed2 from "@/src/assets/images/colourcherrytattoorealism.jpeg";
import healed3 from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import healed4 from "@/src/assets/images/daffodilcolourealismtattoo.jpeg";
import healed5 from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import healed6 from "@/src/assets/images/poppytattooexample1.jpeg";
import healed7 from "@/src/assets/images/colourfulfemininebotanicaltattoo.jpeg";
import healed8 from "@/src/assets/images/botanicaldandilionflowertattoo.jpeg";

const baseSlides: StaticImageData[] = [
  healed1,
  healed2,
  healed3,
  healed4,
  healed5,
  healed6,
  healed7,
  healed8,
];

// Duplicate the array for the infinite-loop trick.
// When scroll passes the first copy, we silently jump back to the same image in the first copy.
const slides = [...baseSlides, ...baseSlides];

export default function HealedTattoosSection() {
  const { t } = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByOne = useCallback((direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstSlide = scroller.firstElementChild as HTMLElement | null;
    if (!firstSlide) return;
    const offset = firstSlide.offsetWidth + 16; // gap-4
    scroller.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: "smooth",
    });
  }, []);

  // Infinite-loop logic: once scrollLeft enters the duplicate half,
  // instantly subtract halfWidth so we're back in the first half at the same visible slide.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let timeout: ReturnType<typeof setTimeout> | undefined;

    const checkLoop = () => {
      const halfWidth = scroller.scrollWidth / 2;
      if (halfWidth === 0) return;
      if (scroller.scrollLeft >= halfWidth) {
        // Instant jump (no smooth) — content at new position is identical
        scroller.scrollLeft = scroller.scrollLeft - halfWidth;
      } else if (scroller.scrollLeft < 0) {
        scroller.scrollLeft = scroller.scrollLeft + halfWidth;
      }
    };

    const onScroll = () => {
      if (timeout) clearTimeout(timeout);
      // Wait for the smooth scroll to finish before deciding to jump
      timeout = setTimeout(checkLoop, 120);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // Auto-rotate forever, no end check needed — the loop logic handles wrap-around
  useEffect(() => {
    const interval = setInterval(() => {
      scrollByOne("next");
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollByOne]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollByOne("prev");
      if (e.key === "ArrowRight") scrollByOne("next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollByOne]);

  return (
    <section className="bg-bone">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Centered title */}
        <motion.h2
          className="text-center text-sage leading-none"
          style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {t("healedTattoos.heading")}
        </motion.h2>

        {/* Slider with arrows */}
        <motion.div
          className="relative mt-10 md:mt-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >

          {/* Prev */}
          <button
            type="button"
            onClick={() => scrollByOne("prev")}
            aria-label={t("healedTattoos.previous")}
            className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage text-white shadow-soft hover:bg-sage-dark hover:scale-110 transition-all"
          >
            <Chevron direction="left" />
          </button>

          {/* Scrollable slides */}
          <div
            ref={scrollerRef}
            className="overflow-x-auto snap-x snap-mandatory flex gap-4 px-14 md:px-20 py-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {slides.map((slide, i) => (
              <Link
                key={i}
                href="/portfolio?cat=healed"
                className="snap-center shrink-0 w-[78vw] sm:w-[48vw] md:w-[31%] group"
                aria-label={t("healedTattoos.viewGallery")}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-soft bg-white">
                  <Image
                    src={slide}
                    alt={`Healed tattoo ${(i % baseSlides.length) + 1}`}
                    quality={92}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 48vw, 78vw"
                    priority={i < 3}
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={() => scrollByOne("next")}
            aria-label={t("healedTattoos.next")}
            className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-sage text-white shadow-soft hover:bg-sage-dark hover:scale-110 transition-all"
          >
            <Chevron direction="right" />
          </button>
        </motion.div>

        {/* Description text */}
        <motion.p
          className="mt-10 md:mt-12 mx-auto text-ink/75 text-sm md:text-[15px] leading-relaxed font-sans max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {t("healedTattoos.intro")}
        </motion.p>
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 md:w-6 md:h-6"
      aria-hidden
    >
      {direction === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}
