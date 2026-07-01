import Image from "next/image";
import { StatCounter } from "@/components/github-stats-counters";
import { SectionHeader } from "@/components/ui/section-header";
import type { LanguageStat } from "@/types/github";

interface GitHubStatsProps {
  repoCount: number;
  followerCount: number;
  languages: LanguageStat[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "bg-emerald-400",
  "Jupyter Notebook": "bg-orange-400",
  Dart: "bg-sky-400",
  "C++": "bg-violet-400",
  C: "bg-indigo-400",
  JavaScript: "bg-yellow-400",
  Java: "bg-red-400",
  HTML: "bg-rose-400",
  PowerShell: "bg-blue-400",
};

export function GitHubStats({
  repoCount,
  followerCount,
  languages,
}: GitHubStatsProps) {
  return (
    <section id="github" className="border-y border-border bg-surface/30 py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          label="GitHub"
          title="Open source activity"
          description="Live stats from the GitHub API, updated hourly."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-8 rounded-2xl border border-border bg-card p-8">
            <StatCounter value={repoCount} label="Public Repos" />
            <StatCounter value={followerCount} label="Followers" />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Top Languages
            </h3>
            {languages.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                TODO: Language data unavailable.
              </p>
            ) : (
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${LANGUAGE_COLORS[lang.name] ?? "bg-accent-1"}`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card p-4">
          <h3 className="mb-4 px-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contribution Graph
          </h3>
          <div className="overflow-x-auto">
            <Image
              src="https://ghchart.rshah.org/SyedaFakhiraSaghir"
              alt="GitHub contribution chart for SyedaFakhiraSaghir"
              width={824}
              height={120}
              className="h-auto min-w-[600px] w-full dark:invert-[0.85] dark:hue-rotate-180"
              loading="lazy"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
