"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  return (
    <section className="bg-bone">
      <div className="px-6 py-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          Contact
        </motion.h1>
        <motion.p
          className="mt-2 text-neutral-600"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          Find the studio on the map below.
        </motion.p>

        <motion.div
          className="mt-6 overflow-hidden rounded-2xl shadow-soft"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              title="Studio location"
              src="https://maps.google.com/maps?q=wild%20flower%20tattoo&output=embed"
              style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
