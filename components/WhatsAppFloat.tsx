"use client";

import { useLocale } from "@/lib/i18n";
import { useSiteSettings } from "@/lib/useSiteSettings";

export default function WhatsAppFloat() {
  const { t } = useLocale();
  const settings = useSiteSettings();

  return (
    <a
      href={settings.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("cta.whatsappLong")}
      className="fixed bottom-5 right-5 z-40 grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-wa hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" aria-hidden />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.001 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.594 4.464 1.726 6.4L3.2 28.8l6.56-1.712a12.74 12.74 0 0 0 6.241 1.617h.005c7.069 0 12.797-5.728 12.8-12.8 0-3.42-1.332-6.633-3.748-9.052A12.71 12.71 0 0 0 16.001 3.2zm0 23.31h-.003a10.62 10.62 0 0 1-5.413-1.482l-.388-.23-4.022 1.05 1.072-3.92-.253-.401a10.6 10.6 0 0 1-1.625-5.66c.002-5.872 4.78-10.65 10.635-10.65a10.59 10.59 0 0 1 7.523 3.117 10.59 10.59 0 0 1 3.114 7.535c-.003 5.872-4.781 10.642-10.64 10.642zm5.83-7.972c-.32-.16-1.891-.933-2.184-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.779-2.215-.187-.32-.02-.493.14-.652.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.539-.72-.549l-.613-.011a1.18 1.18 0 0 0-.854.4c-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.255 3.443 5.467 4.827.764.33 1.36.527 1.825.674.766.244 1.464.21 2.016.127.615-.092 1.891-.773 2.157-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}
