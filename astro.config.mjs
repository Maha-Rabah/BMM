import { defineConfig } from 'astro/config';

// https://astro.build/config
import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
  }),
});

export default defineConfig({
  integrations: [],
  content: {
    collections: {
      posts: postsCollection,
    },
  },
});
