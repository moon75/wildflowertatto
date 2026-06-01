"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

import birdImg from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import dogsImg from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import tigerImg from "@/src/assets/images/blackandgreyealismtattoo-tiger.JPG";
import botanicalImg from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import portraitImg from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";
import flowerImg from "@/src/assets/images/botanicaldandilionflowertattoo.jpeg";

type CategoryKey = "animalPet" | "microRealism" | "blackGrey" | "botanical" | "portrait";
const categories: CategoryKey[] = ["animalPet", "microRealism", "blackGrey", "botanical", "portrait"];
const gridImages: { img: StaticImageData; alt: string }[] = [
  { img: birdImg, alt: "Magpie bird tattoo" },
  { img: dogsImg, alt: "Three dogs portrait tattoo" },
  { img: tigerImg, alt: "Black and grey tiger tattoo" },
  { img: botanicalImg, alt: "Marigold and bee botanical tattoo" },
  { img: portraitImg, alt: "Black and grey portrait tattoo" },
  { img: flowerImg, alt: "Single flower line tattoo" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioSection() {
  const { t } = useLocale();

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <motion.h2
          className="text-center text-sage leading-none"
          style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          {t("portfolio.heading")}
        </motion.h2>

        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">

          {/* Category list */}
          <motion.ul
            className="flex flex-col gap-3 lg:gap-4 lg:pt-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {categories.map((cat) => (
              <motion.li
                key={cat}
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
              >
                <Link href="/portfolio" className="inline-block text-sage hover:text-sage-dark transition-colors" style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(1.1rem, 2vw, 1.6rem)", lineHeight: 1.2 }}>
                  {t(`portfolio.categories.${cat}`)}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Image grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {gridImages.map((item, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
              >
                <Link href="/portfolio" className="group block">
                  <motion.div
                    className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-soft bg-bone"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image src={item.img} alt={item.alt} fill quality={88} className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 45vw" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
