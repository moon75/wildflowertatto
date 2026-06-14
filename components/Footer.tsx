"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useSiteSettings } from "@/lib/useSiteSettings";
import { WhatsAppIcon } from "./WhatsAppFloat";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const { t } = useLocale();
  const settings = useSiteSettings();
  const year = new Date().getFullYear();

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(settings.mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="font-sans">
      {/* Top band — map + contact */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            <motion.div
              className="aspect-[4/3] rounded-xl overflow-hidden shadow-soft bg-white"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            >
              <iframe src={mapSrc} title={t("footer.mapAriaLabel")} aria-label={t("footer.mapAriaLabel")} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </motion.div>

            <motion.div
              className="text-ink/90"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.1 }}
            >
              <div className="max-w-md p-6 md:p-8 rounded-2xl">
                <h3 className="text-sage-dark font-sans mb-2" style={{ fontFamily: "var(--font-catamaran), sans-serif", fontSize: "1.6rem" }}>
                  Say hi!
                </h3>
                <p className="text-[15px] md:text-base text-ink/90 leading-relaxed mb-3">
                  Feel free to reach out anytime through WhatsApp using the link below or on <strong>{settings.phone}</strong>.
                </p>
                <p className="text-[15px] md:text-base text-ink/90 leading-relaxed mb-3">
                  If WhatsApp isn&apos;t possible, you can also email me at <a href={`mailto:${settings.email}`} className="underline">{settings.email}</a>
                </p>
                <p className="text-[15px] md:text-base text-ink/90 leading-relaxed mb-5">Looking forward to hearing from you!</p>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href={settings.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-sage-dark text-white px-5 py-2.5 rounded-md text-sm tracking-wider"
                    whileHover={{ scale: 1.04, backgroundColor: "#869A4E" }}
                    transition={{ duration: 0.2 }}
                    aria-label="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chat on WhatsApp
                  </motion.a>
                  <a href={`tel:${settings.phone}`} className="text-ink/80 text-sm">{settings.phone}</a>
                </div>
                <p className="mt-4 text-sm text-ink/70 italic">— Lydia</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom band — links */}
      <section className="bg-white border-t border-sage/10">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Wordmark */}
            <motion.div
              className="sm:col-span-2 md:col-span-4"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <Link href="/" className="inline-block text-sage hover:text-sage-dark leading-[1] tracking-wide transition-colors" style={{ fontFamily: "var(--font-androgy), serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Wild Flower<br />Tattoo.nl
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              className="md:col-span-3"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <h4 className="text-sage mb-3" style={{ fontFamily: "var(--font-catamaran), sans-serif", fontSize: "1.2rem", fontWeight: "normal" }}>{t("footer.socials")}</h4>
              <ul className="flex flex-col gap-2 text-ink/80">
                {[{ href: settings.instagram, label: "Instagram", Icon: InstagramIcon }, { href: settings.tiktok, label: "TikTok", Icon: TikTokIcon }, { href: settings.facebook, label: "Facebook", Icon: FacebookIcon }].map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sage transition-colors">
                      <Icon /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Location */}
            <motion.div
              className="md:col-span-3"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <h4 className="text-sage mb-3" style={{ fontFamily: "var(--font-catamaran), sans-serif", fontSize: "1.2rem", fontWeight: "normal" }}>{t("footer.location")}</h4>
              <address className="not-italic text-ink/80 leading-relaxed">
                {settings.studio}<br />{settings.addressLine1}<br />{settings.addressLine2}<br />{settings.addressLine3}
              </address>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="md:col-span-2"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            >
              <h4 className="text-sage mb-3" style={{ fontFamily: "var(--font-catamaran), sans-serif", fontSize: "1.2rem", fontWeight: "normal" }}>{t("footer.workingHours")}</h4>
              <div className="text-ink/80 leading-relaxed">
                <p>{t("footer.daysOpen1")}</p>
                <p>{t("footer.hoursOpen")}</p>
                <p className="mt-2">{t("footer.daysOpen2")}</p>
                <p>{t("footer.hoursOpen")}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Legal */}
          <motion.div
            className="mt-10 pt-5 border-t border-sage/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-ink/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>© {t("footer.copyright")} {year} · {t("footer.artistCredit")}</p>
            <Link href="/information/terms" className="hover:text-sage underline-offset-2 hover:underline transition-colors">{t("footer.terms")}</Link>
          </motion.div>
        </div>
      </section>
    </footer>
  );
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>;
}
function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden><path d="M19.6 7.2a5.6 5.6 0 0 1-4.5-2.2v9.6a4.6 4.6 0 1 1-4.6-4.6c.3 0 .6 0 .9.1v2.5a2.1 2.1 0 1 0 1.5 2v-11h2.5a5.6 5.6 0 0 0 4.2 4.2v2.4z" /></svg>;
}
function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V14h2.7v8h3.4z" /></svg>;
}
