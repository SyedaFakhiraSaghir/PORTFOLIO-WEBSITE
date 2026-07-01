import { Award, BadgeCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { certifications, honors } from "@/data/resume";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="Achievements"
          title="Honors & certifications"
          description="All entries verified from résumé — no invented awards."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Award className="size-5 text-accent-1" aria-hidden="true" />
              <h3 className="font-medium text-foreground">Honors & Awards</h3>
            </div>
            <ul className="space-y-3">
              {honors.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-1" />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2">
              <BadgeCheck className="size-5 text-accent-2" aria-hidden="true" />
              <h3 className="font-medium text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-2" />
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
