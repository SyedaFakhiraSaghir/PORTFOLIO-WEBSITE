export type ProjectCategory =
  | "all"
  | "ai-ml"
  | "flutter"
  | "c-cpp"
  | "fullstack";

export interface Project {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  language: string | null;
  stars: number;
  topics: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  category: ProjectCategory;
  isPlaceholder?: boolean;
  bannerGradient: string;
}
