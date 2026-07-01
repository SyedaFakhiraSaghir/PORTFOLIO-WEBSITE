import { SectionHeader } from "@/components/ui/section-header";
import { education, experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-surface/30 py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="Experience & Education"
          title="Where I've built and learned"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent-1">
              Experience
            </h3>
            <ol className="relative space-y-0 border-l border-border pl-6">
              {experience.map((entry, index) => (
                <li key={`${entry.role}-${entry.startDate}-${index}`} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[29px] mt-1.5 size-2.5 rounded-full border-2 border-background bg-accent-1" />
                  <div className="flex flex-col gap-1">
                    <time className="font-mono text-xs text-muted-foreground">
                      {entry.startDate} — {entry.endDate}
                    </time>
                    <h4 className="text-base font-medium text-foreground">
                      {entry.role}
                    </h4>
                    <p className="text-sm text-accent-1">{entry.company}</p>
                    <p className="text-sm text-muted-foreground">{entry.location}</p>
                    {entry.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {entry.description}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
              Education
            </h3>
            <ol className="relative space-y-0 border-l border-border pl-6">
              {education.map((entry) => (
                <li key={entry.institution} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[29px] mt-1.5 size-2.5 rounded-full border-2 border-background bg-accent-2" />
                  <div className="flex flex-col gap-1">
                    <time className="font-mono text-xs text-muted-foreground">
                      {entry.startDate} — {entry.endDate}
                    </time>
                    <h4 className="text-base font-medium text-foreground">
                      {entry.degree}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {entry.institution}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
