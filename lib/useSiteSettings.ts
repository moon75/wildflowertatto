"use client";
import { useState, useEffect } from "react";
import { sanityClient } from "./sanity";
import { contact } from "./contact";

export type SiteSettings = {
  email: string;
  phone: string;
  whatsappUrl: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  studio: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  mapsQuery: string;
};

export function useSiteSettings(): SiteSettings {
  const [settings, setSettings] = useState<SiteSettings>({ ...contact });

  useEffect(() => {
    sanityClient.fetch<any>(`*[_type == "siteSettings"][0]`).then((data) => {
      if (!data) return;
      const a1 = data.addressLine1 || contact.addressLine1;
      const a2 = data.addressLine2 || contact.addressLine2;
      const a3 = data.addressLine3 || contact.addressLine3;
      setSettings({
        email: data.email || contact.email,
        phone: data.phone || contact.phone,
        whatsappUrl: data.whatsappUrl || contact.whatsappUrl,
        instagram: data.instagram || contact.instagram,
        tiktok: data.tiktok || contact.tiktok,
        facebook: data.facebook || contact.facebook,
        studio: data.studio || contact.studio,
        addressLine1: a1,
        addressLine2: a2,
        addressLine3: a3,
        mapsQuery: `${a1}, ${a3} ${a2}, Netherlands`,
      });
    });
  }, []);

  return settings;
}
