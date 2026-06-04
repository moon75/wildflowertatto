import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./sanity/schemas";

export default defineConfig({
  name: "wildflower-tattoo",
  title: "Wildflower Tattoo Studio",
  projectId: "wkwwiwo5",
  dataset: "production",
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],
  schema,
});
