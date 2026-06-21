import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "tagline_en", title: "Tagline (English)", type: "string" }),
    defineField({ name: "tagline_nl", title: "Tagline (Dutch)", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "whatsappUrl", title: "WhatsApp URL", type: "url" }),
    defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
    defineField({ name: "tiktok", title: "TikTok URL", type: "url" }),
    defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
    defineField({
      name: "heroImage",
      title: "Hero Image (Homepage banner)",
      type: "image",
      options: { hotspot: true },
      description: "The large banner photo on the homepage. Landscape orientation works best.",
    }),
    defineField({ name: "studio", title: "Studio Name", type: "string" }),
    defineField({ name: "addressLine1", title: "Address Line 1", type: "string" }),
    defineField({ name: "addressLine2", title: "Address Line 2", type: "string" }),
    defineField({ name: "addressLine3", title: "Postcode", type: "string" }),
  ],
  preview: { select: { title: "studio" } },
});
