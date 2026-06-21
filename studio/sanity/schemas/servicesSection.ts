import { defineField, defineType } from "sanity";

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    // ── Custom Pieces ──
    defineField({ name: "customImage",       title: "Custom Pieces — Image",       type: "image", options: { hotspot: true } }),
    defineField({ name: "customTitle_en",    title: "Custom Pieces — Title (EN)",  type: "string" }),
    defineField({ name: "customTitle_nl",    title: "Custom Pieces — Title (NL)",  type: "string" }),
    defineField({ name: "customSubtitle_en", title: "Custom Pieces — Subtitle (EN)", type: "string" }),
    defineField({ name: "customSubtitle_nl", title: "Custom Pieces — Subtitle (NL)", type: "string" }),
    defineField({ name: "customBody_en",     title: "Custom Pieces — Body (EN)",   type: "text", rows: 4 }),
    defineField({ name: "customBody_nl",     title: "Custom Pieces — Body (NL)",   type: "text", rows: 4 }),

    // ── Cover Ups ──
    defineField({ name: "coverupImage",       title: "Cover Ups — Image",       type: "image", options: { hotspot: true } }),
    defineField({ name: "coverupTitle_en",    title: "Cover Ups — Title (EN)",  type: "string" }),
    defineField({ name: "coverupTitle_nl",    title: "Cover Ups — Title (NL)",  type: "string" }),
    defineField({ name: "coverupSubtitle_en", title: "Cover Ups — Subtitle (EN)", type: "string" }),
    defineField({ name: "coverupSubtitle_nl", title: "Cover Ups — Subtitle (NL)", type: "string" }),
    defineField({ name: "coverupBody_en",     title: "Cover Ups — Body (EN)",   type: "text", rows: 4 }),
    defineField({ name: "coverupBody_nl",     title: "Cover Ups — Body (NL)",   type: "text", rows: 4 }),

    // ── Improve & Correct ──
    defineField({ name: "correctImage",       title: "Improve & Correct — Image",       type: "image", options: { hotspot: true } }),
    defineField({ name: "correctTitle_en",    title: "Improve & Correct — Title (EN)",  type: "string" }),
    defineField({ name: "correctTitle_nl",    title: "Improve & Correct — Title (NL)",  type: "string" }),
    defineField({ name: "correctSubtitle_en", title: "Improve & Correct — Subtitle (EN)", type: "string" }),
    defineField({ name: "correctSubtitle_nl", title: "Improve & Correct — Subtitle (NL)", type: "string" }),
    defineField({ name: "correctBody_en",     title: "Improve & Correct — Body (EN)",   type: "text", rows: 4 }),
    defineField({ name: "correctBody_nl",     title: "Improve & Correct — Body (NL)",   type: "text", rows: 4 }),
  ],
  preview: {
    select: {},
    prepare: () => ({ title: "Services Section" }),
  },
});
