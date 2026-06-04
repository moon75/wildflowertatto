import { defineField, defineType } from "sanity";

export const bookPage = defineType({
  name: "bookPage",
  title: "How to Book Page",
  type: "document",
  fields: [
    defineField({
      name: "steps",
      title: "Booking Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "heading_en", title: "Heading (English)", type: "string" }),
            defineField({ name: "heading_nl", title: "Heading (Dutch)", type: "string" }),
            defineField({ name: "text_en", title: "Text (English)", type: "text", rows: 4 }),
            defineField({ name: "text_nl", title: "Text (Dutch)", type: "text", rows: 4 }),
          ],
          preview: { select: { title: "heading_en" } },
        },
      ],
    }),
  ],
  preview: { select: { title: "bookPage" }, prepare: () => ({ title: "How to Book" }) },
});
