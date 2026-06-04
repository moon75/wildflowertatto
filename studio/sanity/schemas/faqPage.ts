import { defineField, defineType } from "sanity";

export const faqPage = defineType({
  name: "faqPage",
  title: "FAQ Page",
  type: "document",
  fields: [
    defineField({
      name: "faqs",
      title: "FAQ Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question_en", title: "Question (English)", type: "string" }),
            defineField({ name: "question_nl", title: "Question (Dutch)", type: "string" }),
            defineField({ name: "answer_en", title: "Answer (English)", type: "text", rows: 5 }),
            defineField({ name: "answer_nl", title: "Answer (Dutch)", type: "text", rows: 5 }),
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: { list: ["Booking", "General"] },
            }),
          ],
          preview: { select: { title: "question_en" } },
        },
      ],
    }),
  ],
  preview: { select: { title: "faqPage" }, prepare: () => ({ title: "FAQ Page" }) },
});
