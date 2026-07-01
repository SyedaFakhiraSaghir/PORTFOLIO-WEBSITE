import { SectionHeader } from "@/components/ui/section-header";
import { aboutContent } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Engineering intelligent systems with purpose"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
