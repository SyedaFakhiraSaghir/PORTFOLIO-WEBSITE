"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent-1/30",
        project.isPlaceholder && "border-dashed border-amber-500/40"
      )}
      whileHover={reduced ? undefined : { y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={cn(
          "relative h-32 bg-gradient-to-br",
          project.bannerGradient
        )}
      >
        <div className="absolute inset-0 bg-surface/20" />
        {project.featured ? (
          <Badge className="absolute top-3 right-3 border-0 bg-accent-2/90 text-white">
            Featured
          </Badge>
        ) : null}
        {project.isPlaceholder ? (
          <Badge
            variant="outline"
            className="absolute top-3 left-3 border-amber-500/50 text-amber-500"
          >
            TODO: Repo link pending
          </Badge>
        ) : null}
        {project.language ? (
          <span className="absolute bottom-3 left-3 font-mono text-xs text-foreground/80">
            {project.language}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-medium leading-snug text-foreground">
            {project.name}
          </h3>
          {project.stars > 0 ? (
            <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
              <Star className="size-3 fill-current" />
              {project.stars}
            </span>
          ) : null}
        </div>

        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.topics.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {project.topics.slice(0, 4).map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="text-xs font-normal text-muted-foreground"
              >
                {topic}
              </Badge>
            ))}
          </div>
        ) : null}

        <div className="flex gap-2 pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <GitHubIcon className="size-3.5" />
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-accent-1 transition-colors hover:bg-accent-1/10"
            >
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
