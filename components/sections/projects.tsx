"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/sections/project-card";
import type { Project, ProjectCategory } from "@/types/project";

interface ProjectsProps {
  projects: Project[];
}

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai-ml", label: "AI / ML" },
  { value: "flutter", label: "Flutter" },
  { value: "c-cpp", label: "C / C++" },
  { value: "fullstack", label: "Full-Stack" },
];

function filterProjects(
  projects: Project[],
  category: ProjectCategory
): Project[] {
  if (category === "all") return projects;
  return projects.filter(
    (p) => p.category === category
  );
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Selected work from GitHub"
          description="Pulled live from the GitHub API, with FYP repos linked from provided GitHub URLs."
        />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex h-auto flex-wrap gap-1 bg-secondary/50 p-1">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.value}
                value={cat.value}
                className="rounded-md px-4 py-2 text-sm data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => {
            const filtered = filterProjects(projects, cat.value);
            return (
              <TabsContent key={cat.value} value={cat.value}>
                {filtered.length === 0 ? (
                  <p className="py-12 text-center text-muted-foreground">
                    No projects in this category.
                  </p>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
