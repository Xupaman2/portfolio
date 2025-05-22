import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    author: z.string(),
    pubDatetime: z.date(),
    title: z.string(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

const about = defineCollection({
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  blog,
  about,
};
