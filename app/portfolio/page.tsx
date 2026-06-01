"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PortfolioPage() {
  return (
    <section className="p-8">
      <motion.h1
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
      >
        Portfolio
      </motion.h1>
      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        Placeholder.
      </motion.p>
    </section>
  );
}
