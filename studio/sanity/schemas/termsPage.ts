import { defineField, defineType } from "sanity";

export const termsPage = defineType({
  name: "termsPage",
  title: "Terms & Conditions",
  type: "document",
  fields: [
    defineField({ name: "intro_en", title: "Introduction (English)", type: "text", rows: 3 }),
    defineField({ name: "intro_nl", title: "Introduction (Dutch)", type: "text", rows: 3 }),
    defineField({
      name: "policies",
      title: "Policies",
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
    defineField({
      name: "depositRules",
      title: "Deposit Rules",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "rule_en", title: "Rule (English)", type: "text", rows: 3 }),
            defineField({ name: "rule_nl", title: "Rule (Dutch)", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "rule_en" } },
        },
      ],
    }),
  ],
  preview: { select: { title: "termsPage" }, prepare: () => ({ title: "Terms & Conditions" }) },
});
