"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

import customImg  from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import coverupImg from "@/src/assets/images/coveruptattoo.jpeg";
import correctImg from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";

const ease = [0.22, 1, 0.36, 1] as const;

const staticServices = [
  {
    key: "custom" as const,
    img: customImg,
    title_en: "Custom Pieces",
    title_nl: "Op maat gemaakte tattoos",
    subtitle_en: "Bespoke tattoos designed around your idea",
    subtitle_nl: "Op maat ontworpen tattoos rond jouw idee",
    body_en: "I specialise in bringing unique tattoo concepts to life — from small delicate details to large colour realism projects. Every custom piece is drawn specifically for you, with attention to placement, composition and longevity.",
    body_nl: "Ik ben gespecialiseerd in het tot leven brengen van unieke tattoo-concepten — van kleine delicate details tot grote kleur realisme projecten. Elk aangepast stuk wordt speciaal voor jou getekend, met aandacht voor plaatsing, compositie en duurzaamheid.",
    href: contact.whatsappUrl,
    external: true,
    cta_en: "Start a conversation",
    cta_nl: "Stuur een bericht",
  },
  {
    key: "coverup" as const,
    img: coverupImg,
    title_en: "Cover Ups",
    title_nl: "Coverups",
    subtitle_en: "Transform an old tattoo into something new",
    subtitle_nl: "Verander een oude tattoo in iets nieuws",
    body_en: "Cover up tattoos require more time and preparation than a standard tattoo. I will assess your existing tattoo and design a new piece that works with the original, making the most of what is already there.",
    body_nl: "Coverup tattoos vereisen meer tijd en voorbereiding dan een standaard tattoo. Ik beoordeel je bestaande tattoo en ontwerp een nieuw stuk dat werkt met het origineel, het maximale uit wat er al is haalt.",
    href: "/portfolio?cat=coverup",
    external: false,
    cta_en: "View coverup portfolio",
    cta_nl: "Bekijk coverup portfolio",
  },
  {
    key: "correct" as const,
    img: correctImg,
    title_en: "Improve & Correct",
    title_nl: "Verbeteren & Corrigeren",
    subtitle_en: "Refresh or rework existing tattoos",
    subtitle_nl: "Bestaande tattoos opfrissen of herwerken",
    body_en: "I can make improvements to tattoos that have faded, spread or lost detail over time. Depending on the existing tattoo, options range from a simple touch-up to a full rework. Laser sessions are sometimes recommended first for the best results.",
    body_nl: "Ik kan verbeteringen aanbrengen aan tattoos die in de loop der tijd zijn vervaagd, uitgespreid of detail hebben verloren. Afhankelijk van de bestaande tattoo variëren de opties van een eenvoudige touch-up tot een volledige herwerking.",
    href: "/portfolio?cat=coverup",
    external: false,
    cta_en: "View coverup portfolio",
    cta_nl: "Bekijk coverup portfolio",
  },
];

export default function ServicesSection() {
  const { t, locale } = useLocale();
  const lang = locale === "nl" ? "nl" : "en";
  const [cms, setCms] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "servicesSection"][0]`)
      .then(setCms)
      .catch(() => {});
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            className="text-sage leading-none"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Services
          </motion.h2>
          <motion.div
            className="mt-4 mx-auto h-px w-20 bg-sage/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          />
          <motion.p
            className="mt-5 text-ink/60 text-[15px] max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            I am available to make all kinds of tattoos — from small, medium to big projects. If you are not sure whether I am the right artist for your needs, feel free to send me a message.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {staticServices.map((service) => {
            const cmsImg = cms?.[`${service.key}Image`];
            const title    = cms?.[`${service.key}Title_${lang}`]    || service[`title_${lang}`];
            const subtitle = cms?.[`${service.key}Subtitle_${lang}`] || service[`subtitle_${lang}`];
            const body     = cms?.[`${service.key}Body_${lang}`]     || service[`body_${lang}`];
            const cta      = service[`cta_${lang}`];
            const imgUrl   = cmsImg ? urlFor(cmsImg).width(700).auto("format").url() : null;

            return (
              <motion.div
                key={service.key}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
                }}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-xl shadow-soft aspect-[4/5] bg-bone">
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Image
                      src={service.img}
                      alt={title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 33vw, 90vw"
                    />
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 to-transparent" />
                  {/* Title on image */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p
                      className="text-white leading-tight"
                      style={{
                        fontFamily: "var(--font-androgy), serif",
                        fontWeight: "normal",
                        fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                      }}
                    >
                      {title}
                    </p>
                    <p className="text-white/70 text-[12px] tracking-wide mt-1 leading-snug">
                      {subtitle}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="mt-5 flex flex-col flex-1 gap-4">
                  <p className="text-ink/70 text-[14px] md:text-[15px] leading-relaxed flex-1">
                    {body}
                  </p>
                  {service.external ? (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-start text-[11px] tracking-[0.22em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
                    >
                      {cta} →
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="self-start text-[11px] tracking-[0.22em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
                    >
                      {cta} →
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-14 text-center text-ink/40 text-[13px] italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Not sure which applies to you? Just send a message — I&apos;m happy to help figure it out.
        </motion.p>
      </div>
    </section>
  );
}
