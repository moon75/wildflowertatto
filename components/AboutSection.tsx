"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import limeTattoo from "@/src/assets/images/realismcolourlimebotanicaltatoo.JPG";
import dogsTattoo from "@/src/assets/images/microcolourrealismtattoodogs.JPG";
import { useLocale } from "@/lib/i18n";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const { t, locale } = useLocale();
  const [cms, setCms] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "aboutSection"][0]`).then(setCms);
  }, []);

  const lang = locale === "nl" ? "nl" : "en";
  const p1 = cms ? cms[`p1_${lang}`] : t("about.p1");
  const p2 = cms ? cms[`p2_${lang}`] : t("about.p2");
  const p3 = cms ? cms[`p3_${lang}`] : t("about.p3");
  const heading = cms ? cms[`heading_${lang}`] : t("about.heading");
  const img1Url = cms?.image1 ? urlFor(cms.image1).width(600).auto("format").url() : null;
  const img2Url = cms?.image2 ? urlFor(cms.image2).width(600).auto("format").url() : null;

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
              {img1Url ? (
                <img src={img1Url} alt="Tattoo by Lydia Szubert" className="w-full h-full object-cover" />
              ) : (
                <Image src={limeTattoo} alt="Botanical lime tattoo by Lydia Szubert" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              )}
            </motion.div>

            <motion.div
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
            >
              {img2Url ? (
                <img src={img2Url} alt="Tattoo by Lydia Szubert" className="w-full h-full object-cover" />
              ) : (
                <Image src={dogsTattoo} alt="Three dogs micro realism tattoo by Lydia Szubert" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              )}
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
              {heading}
            </motion.h2>

            <div className="space-y-5 text-ink/80 text-base md:text-[17px] leading-relaxed font-sans">
              {[p1, p2, p3].map((p, i) => (
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
