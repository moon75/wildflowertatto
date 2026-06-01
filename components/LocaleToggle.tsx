"use client";

import { useLocale } from "@/lib/i18n";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className={`inline-flex items-center gap-1 text-[11px] tracking-[0.25em] uppercase ${className}`}
      role="group"
      aria-label={t("locale.switchTo")}
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-1 hover:text-sage ${locale === "en" ? "text-sage" : "text-ink/60"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <span aria-hidden className="text-ink/30">/</span>
      <button
        type="button"
        onClick={() => setLocale("nl")}
        className={`px-1 hover:text-sage ${locale === "nl" ? "text-sage" : "text-ink/60"}`}
        aria-pressed={locale === "nl"}
      >
        NL
      </button>
    </div>
  );
}
