"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";

import portraitImg    from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";
import poppyImg       from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import limeImg        from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import dandelionImg   from "@/src/assets/images/botanicaldandilionflowertattoo.jpeg";
import cherryImg      from "@/src/assets/images/colourcherrytattoorealism.jpeg";
import daffodilImg    from "@/src/assets/images/daffodilcolourealismtattoo.jpeg";
import tigerImg       from "@/src/assets/images/blackandgreyealismtattoo-tiger.JPG";
import feminineImg    from "@/src/assets/images/colourfulfemininebotanicaltattoo.jpeg";
import birdImg        from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import dogsImg        from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import coverupImg     from "@/src/assets/images/coveruptattoo.jpeg";
import healedImg      from "@/src/assets/images/healedmicrocolourrealismtattoo.JPG";

const ease = [0.22, 1, 0.36, 1] as const;

type Category = "animalPet" | "microRealism" | "blackGrey" | "botanical" | "portrait" | "coverup" | "healed";
type Filter = "all" | Category;

const validFilters: Filter[] = ["all", "animalPet", "microRealism", "blackGrey", "botanical", "portrait", "coverup", "healed"];

interface Item {
  img: StaticImageData;
  alt: string;
  categories: Category[];
}

const items: Item[] = [
  { img: birdImg,      alt: "Colour realism magpie bird tattoo",         categories: ["animalPet"] },
  { img: poppyImg,     alt: "Colour botanical poppy tattoo",              categories: ["botanical", "healed"] },
  { img: dogsImg,      alt: "Micro realism three dogs portrait tattoo",   categories: ["microRealism", "animalPet"] },
  { img: feminineImg,  alt: "Colourful feminine botanical tattoo",        categories: ["botanical", "healed"] },
  { img: tigerImg,     alt: "Black and grey realism tiger tattoo",        categories: ["blackGrey", "animalPet"] },
  { img: limeImg,      alt: "Colour realism lime botanical tattoo",       categories: ["botanical", "healed"] },
  { img: portraitImg,  alt: "Black and grey realism portrait tattoo",     categories: ["portrait", "blackGrey"] },
  { img: cherryImg,    alt: "Colour cherry realism tattoo",               categories: ["botanical", "healed"] },
  { img: healedImg,    alt: "Healed micro colour realism tattoo",         categories: ["microRealism", "healed"] },
  { img: dandelionImg, alt: "Botanical dandelion flower tattoo",          categories: ["botanical", "healed"] },
  { img: daffodilImg,  alt: "Colour daffodil realism tattoo",             categories: ["botanical", "healed"] },
  { img: coverupImg,   alt: "Cover-up tattoo rework",                     categories: ["coverup", "blackGrey"] },
];

export default function PortfolioPage() {
  const { t } = useLocale();
  const [active, setActive] = useState<Filter>("all");

  // Read initial filter from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat") as Filter | null;
    if (cat && validFilters.includes(cat)) {
      setActive(cat);
    }
  }, []);

  const filters: { key: Filter; label: string }[] = [
    { key: "all",          label: "All" },
    { key: "botanical",    label: t("portfolio.categories.botanical") },
    { key: "animalPet",    label: t("portfolio.categories.animalPet") },
    { key: "microRealism", label: t("portfolio.categories.microRealism") },
    { key: "blackGrey",    label: t("portfolio.categories.blackGrey") },
    { key: "portrait",     label: t("portfolio.categories.portrait") },
    { key: "coverup",      label: "Cover Ups" },
    { key: "healed",       label: "Healed" },
  ];

  const visible = active === "all"
    ? items
    : items.filter((item) => item.categories.includes(active as Category));

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bone pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-sage leading-none"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            {t("portfolio.heading")}
          </motion.h1>

          <motion.p
            className="mt-4 text-ink/60 text-[15px] max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            {t("specializations.intro1")}
          </motion.p>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <section className="bg-bone sticky top-0 z-20 border-b border-sage/10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="relative shrink-0 px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase transition-colors rounded-full"
                style={{
                  color: active === key ? "var(--color-sage)" : "rgba(42,42,38,0.45)",
                  background: active === key ? "rgba(102,120,90,0.08)" : "transparent",
                  fontFamily: "var(--font-catamaran), sans-serif",
                  fontWeight: 600,
                }}
              >
                {label}
                {active === key && (
                  <motion.span
                    layoutId="filter-indicator"
                    className="absolute inset-0 rounded-full border border-sage/30"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div layout className="columns-2 md:columns-3 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {visible.map((item) => (
                <motion.div
                  key={item.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl shadow-soft bg-bone group"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <motion.p
              className="text-center text-ink/40 py-20 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No pieces in this category yet.
            </motion.p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bone py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-6">
          <motion.h2
            className="text-sage leading-none"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            Interested in a custom piece?
          </motion.h2>
          <motion.p
            className="text-ink/60 text-[15px] max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            Reach out via WhatsApp to discuss your idea — no commitment required.
          </motion.p>
          <motion.a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sage text-white text-[11px] tracking-[0.25em] uppercase px-7 py-3.5 rounded-md hover:bg-sage-dark transition-colors"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.2 }}
          >
            {t("cta.whatsappLong")}
          </motion.a>
        </div>
      </section>
    </>
  );
}
