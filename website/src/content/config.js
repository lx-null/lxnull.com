
import { z, reference, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    image: z.string().optional(),
    category: reference('blog-category'),
    publishDate: z.date().optional()
  })
});

const blogCategoryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
});

export const collections = {
  'blog': blogCollection,
  'blog-category': blogCategoryCollection
};
