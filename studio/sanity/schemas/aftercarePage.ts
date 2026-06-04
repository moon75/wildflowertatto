import { defineField, defineType } from "sanity";

export const aftercarePage = defineType({
  name: "aftercarePage",
  title: "Aftercare Page",
  type: "document",
  fields: [
    defineField({
      name: "prepareSteps",
      title: "How to Prepare — Steps",
      type: "array",
      of: [{ type: "string" }],
      description: "Each item is one step shown on the prepare list",
    }),
    defineField({
      name: "aftercareSteps",
      title: "Aftercare Steps",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "avoidItems",
      title: "Avoid For 6 Weeks — Items",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "importantInfo",
      title: "Important Information — Points",
      type: "array",
      of: [{ type: "text" }],
      description: "Each item is one bullet point in the Important Information section",
    }),
    defineField({
      name: "clientDeclaration",
      title: "Client Declaration — Points",
      type: "array",
      of: [{ type: "text" }],
      description: "Each item is one bullet point in the Client Declaration section",
    }),
  ],
  preview: { select: { title: "aftercarePage" }, prepare: () => ({ title: "Aftercare Page" }) },
});
