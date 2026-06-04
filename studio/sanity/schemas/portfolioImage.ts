import { defineField, defineType } from "sanity";

export const portfolioImage = defineType({
  name: "portfolioImage",
  title: "Portfolio Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Short description of the tattoo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Animal & Pet", value: "animalPet" },
          { title: "Micro Realism", value: "microRealism" },
          { title: "Black & Grey", value: "blackGrey" },
          { title: "Botanical", value: "botanical" },
          { title: "Portrait", value: "portrait" },
          { title: "Cover Up", value: "coverup" },
          { title: "Healed", value: "healed" },
        ],
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "featured",
      title: "Show on Home Page",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower number = shown first",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "alt", media: "image" },
  },
});
