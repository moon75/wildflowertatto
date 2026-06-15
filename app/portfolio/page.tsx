"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import type { StaticImageData } from "next/image";

import birdImg        from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import dogsImg        from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import tigerImg       from "@/src/assets/images/blackandgreyealismtattoo-tiger.JPG";
import botanicalImg   from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import portraitImg    from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";
import flowerImg      from "@/src/assets/images/botanicaldandilionflowertattoo.jpeg";
import limeImg        from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import cherryImg      from "@/src/assets/images/colourcherrytattoorealism.jpeg";
import daffodilImg    from "@/src/assets/images/daffodilcolourealismtattoo.jpeg";
import healedImg      from "@/src/assets/images/healedmicrocolourrealismtattoo.JPG";
import femBotImg      from "@/src/assets/images/colourfulfemininebotanicaltattoo.jpeg";
import poppyImg       from "@/src/assets/images/poppytattooexample1.jpeg";
import coverupImg     from "@/src/assets/images/coveruptattoo.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

type Category = "animalPet" | "microRealism" | "blackGrey" | "botanical" | "portrait" | "coverup" | "healed";
type Filter = "all" | Category;

const validFilters: Filter[] = ["all", "animalPet", "microRealism", "blackGrey", "botanical", "portrait", "coverup", "healed"];

interface SanityImage {
  _id: string;
  alt: string;
  categories: Category[];
  order: number;
  image: any;
}

interface StaticItem {
  _id: string;
  alt: string;
  categories: Category[];
  order: number;
  staticSrc: StaticImageData;
}

const staticFallback: StaticItem[] = [
  { _id: "s1",  alt: "Colour realism bird tattoo",           categories: ["animalPet"],   order: 1,  staticSrc: birdImg },
  { _id: "s2",  alt: "Micro realism dogs portrait tattoo",   categories: ["microRealism"],order: 2,  staticSrc: dogsImg },
  { _id: "s3",  alt: "Black and grey tiger tattoo",          categories: ["blackGrey"],   order: 3,  staticSrc: tigerImg },
  { _id: "s4",  alt: "Colour botanical poppy tattoo",        categories: ["botanical"],   order: 4,  staticSrc: botanicalImg },
  { _id: "s5",  alt: "Black and grey portrait tattoo",       categories: ["portrait"],    order: 5,  staticSrc: portraitImg },
  { _id: "s6",  alt: "Botanical dandelion flower tattoo",    categories: ["healed"],      order: 6,  staticSrc: flowerImg },
  { _id: "s7",  alt: "Colour realism lime botanical tattoo", categories: ["botanical"],   order: 7,  staticSrc: limeImg },
  { _id: "s8",  alt: "Colour cherry realism tattoo",         categories: ["healed"],      order: 8,  staticSrc: cherryImg },
  { _id: "s9",  alt: "Daffodil colour realism tattoo",       categories: ["botanical"],   order: 9,  staticSrc: daffodilImg },
  { _id: "s10", alt: "Healed micro colour realism tattoo",   categories: ["healed"],      order: 10, staticSrc: healedImg },
  { _id: "s11", alt: "Colourful feminine botanical tattoo",  categories: ["botanical"],   order: 11, staticSrc: femBotImg },
  { _id: "s12", alt: "Poppy tattoo example",                 categories: ["botanical"],   order: 12, staticSrc: poppyImg },
  { _id: "s13", alt: "Cover up tattoo",                      categories: ["coverup"],     order: 13, staticSrc: coverupImg },
];

const QUERY = `*[_type == "portfolioImage"] | order(order asc) {
  _id, alt, categories, order, image
}`;

export default function PortfolioPage() {
  const { t } = useLocale();
  const [active, setActive] = useState<Filter>("all");
  const [items, setItems] = useState<SanityImage[]>([]);

  useEffect(() => {
    sanityClient.fetch<SanityImage[]>(QUERY).then(setItems).catch(() => {});
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat") as Filter | null;
    if (cat && validFilters.includes(cat)) setActive(cat);
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

  const useSanity = items.length > 0;
  const displayItems = useSanity ? items : staticFallback;
  const visible = active === "all"
    ? displayItems
    : displayItems.filter((item) => item.categories?.includes(active as Category));

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bone pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-sage leading-none"
            style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
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
                  key={item._id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="break-inside-avoid mb-3 md:mb-4 overflow-hidden rounded-xl shadow-soft bg-bone group"
                >
                  {"staticSrc" in item ? (
                    <Image
                      src={(item as StaticItem).staticSrc}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, 50vw"
                    />
                  ) : (
                    <img
                      src={urlFor((item as SanityImage).image).width(800).auto("format").url()}
                      alt={item.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && displayItems.length > 0 && (
            <motion.p className="text-center text-ink/40 py-20 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
            style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
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
