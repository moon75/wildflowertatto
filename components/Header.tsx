"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import wildflowerLogo from "@/src/assets/images/wildflower.png";
import { useLocale } from "@/lib/i18n";
import { contact } from "@/lib/contact";
import LocaleToggle from "./LocaleToggle";
import { WhatsAppIcon } from "./WhatsAppFloat";

type NavKey = "home" | "about" | "portfolio" | "information" | "contact";
type NavItem = {
  href: string;
  key: NavKey;
  children?: { href: string; label: string }[];
};

const navItems: NavItem[] = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/portfolio", key: "portfolio" },
  {
    href: "/information",
    key: "information",
    children: [
      { href: "/information/faq", label: "FAQ" },
      { href: "/information/terms", label: "Terms & Conditions" },
      { href: "/information/book", label: "How to Book" },
    ],
  },
  { href: "/contact", key: "contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLocale();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Tagline strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="bg-bone border-b border-sage/10 overflow-hidden"
      >
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-ink/60 py-2.5 px-4">
          {t("tagline")}
        </p>
      </motion.div>

      {/* Main header */}
      <header className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-between gap-4">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-6 lg:gap-10"
          >
            <Link
              href="/"
              aria-label={`${contact.name} — ${t("nav.home")}`}
              className="block hover:scale-105 transition-transform duration-500 shrink-0"
            >
              <Image
                src={wildflowerLogo}
                alt="Wildflower"
                priority
                width={140}
                height={140}
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
                sizes="(min-width: 768px) 64px, 48px"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-9">
              {navItems.map((item, i) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");

                if (item.children) {
                  return (
                    <motion.div
                      key={item.href}
                      className="relative group"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.07 }}
                    >
                      <Link
                        href={item.href}
                        className={`link-underline flex items-center gap-1 text-[11px] tracking-[0.3em] uppercase text-ink hover:text-sage ${active ? "is-active text-sage" : ""}`}
                      >
                        {t(`nav.${item.key}`)}
                        <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5 mt-px transition-transform duration-200 group-hover:rotate-180" aria-hidden>
                          <polyline points="1 1 5 5 9 1" />
                        </svg>
                      </Link>
                      <div className="absolute top-full left-0 pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="bg-bone border border-sage/15 rounded-lg shadow-soft py-2 min-w-[180px]"
                        >
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase text-ink/70 hover:text-sage hover:bg-sage/5 transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease, delay: 0.25 + i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      className={`link-underline text-[11px] tracking-[0.3em] uppercase text-ink hover:text-sage ${active ? "is-active text-sage" : ""}`}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>

          {/* Right controls */}
          <motion.div
            className="flex items-center gap-3 md:gap-5 shrink-0"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.6 }}
          >
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("cta.whatsappLong")}
              className="hidden sm:inline-grid place-items-center h-9 w-9 rounded-full bg-sage text-bone hover:bg-sage-dark transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <LocaleToggle className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("menu.open")}
              className="grid place-items-center w-9 h-9 group"
            >
              <span className="flex flex-col gap-[5px]">
                <span className="h-px w-6 bg-ink group-hover:bg-sage transition-colors" />
                <span className="h-px w-5 bg-ink group-hover:bg-sage transition-colors ml-auto" />
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div
          className="h-px bg-sage/15 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.7 }}
        />
      </header>

      {/* Drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 pointer-events-auto">
            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("menu.close")}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.aside
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-cream shadow-drawer overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease }}
            >
              <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-sage/15">
                <span className="text-[11px] tracking-[0.3em] uppercase text-sage-dark">{t("menu.label")}</span>
                <button type="button" onClick={() => setOpen(false)} aria-label={t("menu.close")} className="text-[11px] tracking-[0.3em] uppercase text-ink hover:text-sage">
                  {t("menu.close")} ✕
                </button>
              </div>

              <nav className="px-6 sm:px-8 py-8 flex flex-col gap-5">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, ease, delay: 0.1 + i * 0.06 }}
                    >
                      <Link href={item.href} className="font-cormorant text-3xl text-sage hover:text-sage-dark transition-colors">
                        {t(`nav.${item.key}`)}
                      </Link>
                      {item.children && (
                        <ul className="mt-2 ml-4 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link href={child.href} className="text-[11px] tracking-[0.25em] uppercase text-ink/60 hover:text-sage transition-colors">
                                — {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-sage/15 flex flex-col gap-4">
                  <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sage hover:text-sage-dark transition-colors">
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-whatsapp text-white shrink-0">
                      <WhatsAppIcon className="h-4 w-4" />
                    </span>
                    <span className="text-[11px] tracking-[0.3em] uppercase">{t("cta.whatsapp")}</span>
                  </a>
                  <LocaleToggle />
                </div>
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
