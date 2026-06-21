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
    defineField({
      name: "image1",
      title: "Photo 1 (left column, top)",
      type: "image",
      options: { hotspot: true },
      description: "Left column top photo beside the bio text.",
    }),
    defineField({
      name: "image2",
      title: "Photo 2 (left column, bottom — offset down)",
      type: "image",
      options: { hotspot: true },
      description: "Left column bottom photo — sits slightly lower than Photo 1.",
    }),
  ],
  preview: { select: { title: "heading_en" } },
});
