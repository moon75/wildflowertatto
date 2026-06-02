"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";

import customImg  from "@/src/assets/images/colourrealismbirdtattoo.JPG";
import coverupImg from "@/src/assets/images/coveruptattoo.jpeg";
import correctImg from "@/src/assets/images/blackandgreyrealismportraittattoo.JPG";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    img: customImg,
    title: "Custom Pieces",
    subtitle: "Bespoke tattoos designed around your idea",
    body: "I specialise in bringing unique tattoo concepts to life — from small delicate details to large colour realism projects. Every custom piece is drawn specifically for you, with attention to placement, composition and longevity.",
    href: contact.whatsappUrl,
    external: true,
    cta: "Start a conversation",
  },
  {
    img: coverupImg,
    title: "Cover Ups",
    subtitle: "Transform an old tattoo into something new",
    body: "Cover up tattoos require more time and preparation than a standard tattoo. I will assess your existing tattoo and design a new piece that works with the original, making the most of what is already there.",
    href: "/portfolio?cat=coverup",
    external: false,
    cta: "View coverup portfolio",
  },
  {
    img: correctImg,
    title: "Improve & Correct",
    subtitle: "Refresh or rework existing tattoos",
    body: "I can make improvements to tattoos that have faded, spread or lost detail over time. Depending on the existing tattoo, options range from a simple touch-up to a full rework. Laser sessions are sometimes recommended first for the best results.",
    href: "/portfolio?cat=coverup",
    external: false,
    cta: "View coverup portfolio",
  },
] as const;

export default function ServicesSection() {
  const { t } = useLocale();

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
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
              }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl shadow-soft aspect-[4/5] bg-bone">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 340px, (min-width: 768px) 33vw, 90vw"
                />
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
                    {service.title}
                  </p>
                  <p className="text-white/70 text-[12px] tracking-wide mt-1 leading-snug">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="mt-5 flex flex-col flex-1 gap-4">
                <p className="text-ink/70 text-[14px] md:text-[15px] leading-relaxed flex-1">
                  {service.body}
                </p>
                {service.external ? (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-[11px] tracking-[0.22em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
                  >
                    {service.cta} →
                  </a>
                ) : (
                  <Link
                    href={service.href}
                    className="self-start text-[11px] tracking-[0.22em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
                  >
                    {service.cta} →
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
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
