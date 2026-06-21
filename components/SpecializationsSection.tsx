"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import microImg from "@/src/assets/images/healedmicrocolourrealismtattoo.JPG";
import animalImg from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import coverupImg from "@/src/assets/images/coveruptattoo.jpeg";
import botanicalImg from "@/src/assets/images/colourrealismbotanicalpoppytattoo.JPG";
import portraitImg from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";
import blackGreyImg from "@/src/assets/images/blackandgreyealismtattoo-tiger.JPG";

type SpecKey = "micro" | "animal" | "coverup" | "botanical" | "portrait" | "blackGrey";
const categoryMap: Record<SpecKey, string> = {
  micro: "microRealism",
  animal: "animalPet",
  coverup: "coverup",
  botanical: "botanical",
  portrait: "portrait",
  blackGrey: "blackGrey",
};
const items: { key: SpecKey; img: typeof microImg }[] = [
  { key: "micro", img: microImg },
  { key: "animal", img: animalImg },
  { key: "coverup", img: coverupImg },
  { key: "botanical", img: botanicalImg },
  { key: "portrait", img: portraitImg },
  { key: "blackGrey", img: blackGreyImg },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function SpecializationsSection() {
  const { t } = useLocale();

  return (
    <section className="bg-white">
      <div className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">

          {/* Left: 3×2 grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {items.map((item) => (
              <motion.div
                key={item.key}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
              >
                <Link href={`/portfolio?cat=${categoryMap[item.key]}`} className="group block">
                  <motion.div
                    className="overflow-hidden rounded-lg shadow-soft aspect-[3/4] bg-bone"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <Image
                      src={item.img}
                      alt={t(`specializations.${item.key}`)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 180px, 45vw"
                    />
                  </motion.div>
                  <p className="mt-3 text-center text-sage leading-tight" style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)" }}>
                    {t(`specializations.${item.key}`)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: heading + text */}
          <div className="lg:pt-2">
            <motion.h2
              className="text-sage leading-none"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              {t("specializations.heading")}
            </motion.h2>
            {[t("specializations.intro1"), t("specializations.intro2")].map((p, i) => (
              <motion.p
                key={i}
                className="mt-5 text-ink/80 text-sm md:text-[15px] leading-relaxed font-sans"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
