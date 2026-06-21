import { defineField, defineType } from "sanity";

export const specializationsSection = defineType({
  name: "specializationsSection",
  title: "Specializations Section",
  type: "document",
  fields: [
    defineField({ name: "microRealismImage", title: "Micro Realism — Image",  type: "image", options: { hotspot: true } }),
    defineField({ name: "animalPetImage",    title: "Animal & Pet — Image",   type: "image", options: { hotspot: true } }),
    defineField({ name: "coverupImage",      title: "Cover Up — Image",       type: "image", options: { hotspot: true } }),
    defineField({ name: "botanicalImage",    title: "Botanical — Image",      type: "image", options: { hotspot: true } }),
    defineField({ name: "portraitImage",     title: "Portrait — Image",       type: "image", options: { hotspot: true } }),
    defineField({ name: "blackGreyImage",    title: "Black & Grey — Image",   type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: {},
    prepare: () => ({ title: "Specializations Section" }),
  },
});
