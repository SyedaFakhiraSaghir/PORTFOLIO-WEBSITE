import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { ContactForm } from "@/components/sections/contact-form";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { GitHubStats } from "@/components/sections/github-stats";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { getGitHubStats, getProjects } from "@/lib/github";

export default async function Home() {
  const [projects, stats] = await Promise.all([
    getProjects(),
    getGitHubStats(),
  ]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Experience />
      <Achievements />
      <GitHubStats
        repoCount={stats.repoCount}
        followerCount={stats.followerCount}
        languages={stats.languages}
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
