import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "heading_en", title: "Heading (English)", type: "string" }),
    defineField({ name: "heading_nl", title: "Heading (Dutch)", type: "string" }),
    defineField({ name: "p1_en", title: "Paragraph 1 (English)", type: "text", rows: 4 }),
    defineField({ name: "p1_nl", title: "Paragraph 1 (Dutch)", type: "text", rows: 4 }),
    defineField({ name: "p2_en", title: "Paragraph 2 (English)", type: "text", rows: 4 }),
    defineField({ name: "p2_nl", title: "Paragraph 2 (Dutch)", type: "text", rows: 4 }),
    defineField({ name: "p3_en", title: "Paragraph 3 (English)", type: "text", rows: 4 }),
    defineField({ name: "p3_nl", title: "Paragraph 3 (Dutch)", type: "text", rows: 4 }),
  ],
  preview: { select: { title: "heading_en" } },
});
