"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSiteSettings } from "@/lib/useSiteSettings";
import { WhatsAppIcon } from "@/components/WhatsAppFloat";
import { FadeIn } from "@/components/ui/FadeIn";

const ease = [0.22, 1, 0.36, 1] as const;


export default function ContactPage() {
  const settings = useSiteSettings();
  const [fields, setFields] = useState({ name: "", email: "", idea: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.idea ? `Tattoo idea: ${fields.idea}` : "",
      fields.message ? `Message: ${fields.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`mailto:${settings.email}?subject=Tattoo enquiry from ${encodeURIComponent(fields.name)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-bone pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h1
            className="text-sage leading-none"
            style={{
              fontFamily: "var(--font-androgy), serif",
              fontWeight: "normal",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="mt-4 text-ink/55 text-[15px] max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            The fastest way to reach me is via WhatsApp. For general questions you are welcome to use the form below.
          </motion.p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="bg-bone pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Field label="Name" name="name" value={fields.name} onChange={handleChange} required />
                  <Field label="Email" name="email" type="email" value={fields.email} onChange={handleChange} required />
                </div>

                <Field
                  label="Tattoo idea (optional)"
                  name="idea"
                  placeholder="e.g. Botanical poppy, colour realism, forearm"
                  value={fields.idea}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] tracking-[0.22em] uppercase text-ink/50 select-none">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Anything else you'd like to share…"
                    className="w-full bg-transparent border-b border-sage/30 focus:border-sage outline-none text-ink text-[15px] leading-relaxed resize-none py-2 transition-colors placeholder:text-ink/25"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <button
                    type="submit"
                    className="bg-sage text-white text-[11px] tracking-[0.28em] uppercase px-8 py-3.5 rounded-md hover:bg-sage-dark transition-colors"
                  >
                    Send message
                  </button>
                  {sent && (
                    <motion.p
                      className="text-sage text-[13px] italic"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      ✓ Opening your email client…
                    </motion.p>
                  )}
                </div>

                <p className="text-ink/35 text-[12px] leading-relaxed -mt-2">
                  This will open your email app. For a faster response, message me on{" "}
                  <a href={settings.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sage underline underline-offset-2">
                    WhatsApp
                  </a>.
                </p>
              </form>
            </FadeIn>

            {/* Info column */}
            <FadeIn delay={0.15} className="flex flex-col gap-8">

              {/* WhatsApp CTA */}
              <div className="bg-sage/8 rounded-xl p-6 flex flex-col gap-3 border border-sage/15">
                <p className="text-[11px] tracking-[0.25em] uppercase text-sage/70">Fastest response</p>
                <a
                  href={settings.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-sage text-white text-[11px] tracking-[0.22em] uppercase px-5 py-3 rounded-md hover:bg-sage-dark transition-colors w-fit"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Message on WhatsApp
                </a>
                <p className="text-ink/50 text-[13px]">{settings.phone}</p>
              </div>

              {/* Email */}
              <InfoBlock label="Email">
                <a href={`mailto:${settings.email}`} className="text-ink/75 hover:text-sage transition-colors text-[15px]">
                  {settings.email}
                </a>
              </InfoBlock>

              {/* Address */}
              <InfoBlock label="Studio">
                <address className="not-italic text-ink/75 text-[15px] leading-relaxed">
                  <strong className="text-ink/90 font-normal">{settings.studio}</strong><br />
                  {settings.addressLine1}<br />
                  {settings.addressLine2}, {settings.addressLine3}<br />
                  Netherlands
                </address>
                <a
                  href={`https://maps.google.com/maps?q=${encodeURIComponent(settings.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[11px] tracking-[0.2em] uppercase text-sage border-b border-sage/40 pb-px hover:border-sage transition-colors"
                >
                  Open in Google Maps →
                </a>
              </InfoBlock>

              {/* Hours */}
              <InfoBlock label="Working Hours">
                <div className="text-ink/75 text-[15px] leading-relaxed">
                  <p>Wed – Thursday &nbsp;·&nbsp; 10:00–17:00</p>
                  <p>Sunday &nbsp;·&nbsp; 10:00–17:00</p>
                </div>
              </InfoBlock>

              {/* Socials */}
              <InfoBlock label="Follow">
                <div className="flex flex-col gap-2.5">
                  {[
                    { href: settings.instagram, label: "Instagram", Icon: InstagramIcon },
                    { href: settings.tiktok,    label: "TikTok",    Icon: TikTokIcon },
                    { href: settings.facebook,  label: "Facebook",  Icon: FacebookIcon },
                  ].map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-ink/65 hover:text-sage transition-colors text-[14px]"
                    >
                      <Icon />
                      {label}
                    </a>
                  ))}
                </div>
              </InfoBlock>
            </FadeIn>
          </div>
        </div>
      </section>

    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[11px] tracking-[0.22em] uppercase text-ink/50 select-none">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-b border-sage/30 focus:border-sage outline-none text-ink text-[15px] py-2 transition-colors placeholder:text-ink/25 w-full"
      />
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] tracking-[0.22em] uppercase text-ink/40">{label}</p>
      {children}
    </div>
  );
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>;
}
function TikTokIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M19.6 7.2a5.6 5.6 0 0 1-4.5-2.2v9.6a4.6 4.6 0 1 1-4.6-4.6c.3 0 .6 0 .9.1v2.5a2.1 2.1 0 1 0 1.5 2v-11h2.5a5.6 5.6 0 0 0 4.2 4.2v2.4z" /></svg>;
}
function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4V14h2.7v8h3.4z" /></svg>;
}
