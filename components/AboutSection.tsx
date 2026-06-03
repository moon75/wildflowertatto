"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import limeTattoo from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import dogsTattoo from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import { useLocale } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const { t } = useLocale();

  return (
    <section className="bg-bone">
      <div className="px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: two tattoo images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <Image
                src={limeTattoo}
                alt="Botanical lime tattoo by Lydia Szubert"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>

            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              <Image
                src={dogsTattoo}
                alt="Three dogs micro realism tattoo by Lydia Szubert"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          </div>

          {/* Right: heading + text */}
          <div className="flex flex-col justify-center gap-8">
            <motion.h2
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(3rem, 7vw, 5rem)" }}
              className="text-sage leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {t("about.heading")}
            </motion.h2>

            <div className="space-y-5 text-ink/80 text-base md:text-[17px] leading-relaxed font-sans">
              {[t("about.p1"), t("about.p2"), t("about.p3")].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease, delay: i * 0.12 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
