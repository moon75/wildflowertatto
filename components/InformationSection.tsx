"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const links = [
  { href: "/information/book", label: "How to book" },
  { href: "/information/faq", label: "FAQ" },
  { href: "/information/terms", label: "Terms & conditions" },
];

export default function InformationSection() {
  return (
    <section className="py-16 md:py-24 bg-bone">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <motion.h2
          className="text-sage leading-none mb-10"
          style={{ fontFamily: "var(--font-androgy), serif", fontWeight: "normal", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
        >
          Information
        </motion.h2>

        <motion.ul
          className="flex flex-col divide-y divide-sage/10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {links.map((link) => (
            <motion.li
              key={link.href}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            >
              <Link
                href={link.href}
                className="flex items-center justify-between gap-4 py-4 px-2 text-sage hover:text-sage-dark transition-colors group"
                style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(1.15rem, 2.5vw, 1.6rem)" }}
              >
                {link.label}
                <span className="text-sage/40 group-hover:text-sage group-hover:translate-x-1 transition-all text-lg leading-none">›</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
