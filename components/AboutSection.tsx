"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import limeTattoo  from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import dogsTattoo  from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import artistPhoto from "@/src/assets/images/wildflowertattoolydiaszubert.JPG";
import { useLocale } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const { t } = useLocale();

  return (
    <section className="bg-bone">
      <div className="px-6 py-16 md:py-24 max-w-5xl mx-auto">

        {/* Mobile heading — only shown when image cluster is hidden */}
        <motion.h2
          className="lg:hidden text-sage leading-none mb-8"
          style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.5rem, 8vw, 4rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          {t("about.heading")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: image cluster — hidden on mobile */}
          <div className="hidden lg:block relative max-w-[320px] w-full">
            {/* Desktop heading overlay */}
            <motion.h2
              className="absolute z-20 top-4 md:top-6 left-[55%] text-sage leading-none"
              style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {t("about.heading")}
            </motion.h2>

            {/* Tattoo photo 1 */}
            <motion.div
              className="w-3/4 rotate-[-2.5deg] shadow-soft overflow-hidden rounded-lg relative z-10"
              initial={{ opacity: 0, y: 30, rotate: -2.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <Image src={limeTattoo} alt="Botanical lime tattoo by Lydia Szubert" className="w-full h-auto" sizes="340px" />
            </motion.div>

            {/* Tattoo photo 2 */}
            <motion.div
              className="w-3/4 ml-auto -mt-[10%] rotate-[3deg] shadow-soft overflow-hidden rounded-lg z-20 relative"
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              <Image src={dogsTattoo} alt="Three dogs micro realism tattoo by Lydia Szubert" className="w-full h-auto" sizes="340px" />
            </motion.div>

            {/* Artist photo — small, peeking bottom-right */}
            <motion.div
              className="absolute -bottom-6 -right-8 w-28 rotate-[1.5deg] shadow-soft overflow-hidden rounded-lg z-30 border-2 border-bone"
              initial={{ opacity: 0, y: 20, rotate: 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.3 }}
            >
              <Image src={artistPhoto} alt="Lydia Szubert at work" className="w-full h-auto object-cover" sizes="112px" />
            </motion.div>
          </div>

          {/* Right: paragraphs */}
          <div className="space-y-5 text-ink/80 text-base md:text-[17px] leading-relaxed font-sans lg:pt-8">
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
    </section>
  );
}
