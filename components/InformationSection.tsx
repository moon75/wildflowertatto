"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { href: "/information/terms", label: "Terms & conditions" },
  { href: "/information/book", label: "How to book" },
  { href: "/information/faq", label: "FAQ" },
];

export default function InformationSection() {
  return (
    <section className="py-16 md:py-24 bg-bone">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          <motion.h2
            className="text-sage leading-none"
            style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            Information
          </motion.h2>

          <motion.ul
            className="flex flex-col gap-3 text-sage font-sans text-lg"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
          >
            {links.map((link) => (
              <motion.li
                key={link.href}
                variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
              >
                <Link href={link.href} className="hover:underline underline-offset-4 transition-colors hover:text-sage-dark">
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
