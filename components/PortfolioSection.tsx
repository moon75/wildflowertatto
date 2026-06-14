"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

import birdImg      from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import dogsImg      from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import tigerImg     from "@/src/assets/images/blackandgreyealismtattoo-tiger.JPG";
import botanicalImg from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import portraitImg  from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";
import flowerImg    from "@/src/assets/images/botanicaldandilionflowertattoo.jpeg";

type CategoryKey = "animalPet" | "microRealism" | "blackGrey" | "botanical" | "portrait";

const staticItems: { img: StaticImageData; alt: string; cat: CategoryKey }[] = [
  { img: birdImg,      alt: "Colour realism bird tattoo",         cat: "animalPet" },
  { img: dogsImg,      alt: "Micro realism dogs portrait tattoo", cat: "microRealism" },
  { img: tigerImg,     alt: "Black and grey tiger tattoo",        cat: "blackGrey" },
  { img: botanicalImg, alt: "Colour botanical poppy tattoo",      cat: "botanical" },
  { img: portraitImg,  alt: "Black and grey portrait tattoo",     cat: "portrait" },
  { img: flowerImg,    alt: "Botanical dandelion flower tattoo",  cat: "botanical" },
];

interface SanityItem {
  _id: string;
  alt: string;
  categories: string[];
  image: any;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioSection() {
  const { t } = useLocale();
  const [sanityItems, setSanityItems] = useState<SanityItem[]>([]);

  useEffect(() => {
    sanityClient
      .fetch<SanityItem[]>(
        `*[_type == "portfolioImage" && featured == true] | order(order asc) { _id, alt, categories, image }`
      )
      .then(setSanityItems);
  }, []);

  const useSanity = sanityItems.length > 0;

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.h2
          className="text-center text-sage leading-none mb-10 md:mb-12"
          style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          {t("portfolio.heading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {useSanity
            ? sanityItems.map((item) => (
                <motion.div
                  key={item._id}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
                >
                  <Link href="/portfolio" className="group block">
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-soft aspect-[3/4] bg-bone"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <img
                        src={urlFor(item.image).width(600).auto("format").url()}
                        alt={item.alt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </motion.div>
                    <p
                      className="mt-3 text-center text-sage leading-tight"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
                    >
                      {item.categories?.[0] ? t(`portfolio.categories.${item.categories[0]}`) : ""}
                    </p>
                  </Link>
                </motion.div>
              ))
            : staticItems.map((item) => (
                <motion.div
                  key={item.alt}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
                >
                  <Link href={`/portfolio?cat=${item.cat}`} className="group block">
                    <motion.div
                      className="relative overflow-hidden rounded-lg shadow-soft aspect-[3/4] bg-bone"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Image
                        src={item.img}
                        alt={item.alt}
                        fill
                        quality={88}
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 180px, (min-width: 640px) 33vw, 45vw"
                      />
                    </motion.div>
                    <p
                      className="mt-3 text-center text-sage leading-tight"
                      style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
                    >
                      {t(`portfolio.categories.${item.cat}`)}
                    </p>
                  </Link>
                </motion.div>
              ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/portfolio"
            className="text-[11px] tracking-[0.28em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
          >
            View full portfolio →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
