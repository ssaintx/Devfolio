import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  imageURL: z.string().url(),
  githubURL: z.string().url(),
  liveURL: z.string().url(),
  date: z.date(),
});

export type Project = z.infer<typeof ProjectSchema>;