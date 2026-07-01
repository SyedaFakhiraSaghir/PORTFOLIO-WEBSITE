import {
  Brain,
  Cloud,
  Code,
  Database,
  Eye,
  Layers,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/data/skills";
import { cn } from "@/lib/utils";

const iconMap = {
  code: Code,
  brain: Brain,
  eye: Eye,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-surface/30 py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="Categorized by domain — sourced from résumé and project experience. No fabricated proficiency scores."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Code;
            return (
              <div
                key={category.name}
                className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent-1/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-accent-1/10 text-accent-1 transition-colors group-hover:bg-accent-1/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-medium text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={cn(
                        "border border-border bg-background/50 font-normal text-muted-foreground",
                        "transition-colors hover:border-accent-1/40 hover:text-foreground"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
