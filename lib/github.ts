import type { GitHubProfile, GitHubRepo, LanguageStat } from "@/types/github";
import type { Project, ProjectCategory } from "@/types/project";
import {
  excludedRepoPatterns,
  featuredSlugs,
  fypProjects,
  getBannerGradient,
  getRepoCategory,
} from "@/data/featured-projects";

const GITHUB_USER = "SyedaFakhiraSaghir";
const REVALIDATE_SECONDS = 3600;

async function fetchGitHub<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    next: { revalidate: REVALIDATE_SECONDS },
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${path}`);
  }

  return res.json() as Promise<T>;
}

export async function getGitHubProfile(): Promise<GitHubProfile> {
  return fetchGitHub<GitHubProfile>(`/users/${GITHUB_USER}`);
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  return fetchGitHub<GitHubRepo[]>(
    `/users/${GITHUB_USER}/repos?sort=updated&per_page=100`
  );
}

function isExcluded(name: string, fork: boolean): boolean {
  if (fork) return true;
  return excludedRepoPatterns.some((pattern) => pattern.test(name));
}

function mapRepoToProject(repo: GitHubRepo): Project {
  const category = getRepoCategory(repo.name, repo.language);
  return {
    id: repo.id,
    name: repo.name.replace(/-/g, " "),
    slug: repo.name,
    description:
      repo.description ??
      "TODO: Add description — no description available from GitHub API.",
    language: repo.language,
    stars: repo.stargazers_count,
    topics: repo.topics,
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || null,
    featured: featuredSlugs.includes(repo.name),
    category,
    bannerGradient: getBannerGradient(repo.language),
  };
}

export async function getProjects(): Promise<Project[]> {
  const repos = await getGitHubRepos();
  const githubProjects = repos
    .filter((repo) => !isExcluded(repo.name, repo.fork))
    .map(mapRepoToProject);

  const manualFyp = fypProjects.filter(
    (p) => !githubProjects.some((gp) => gp.slug === p.slug)
  );
  const all = [...manualFyp, ...githubProjects];

  return all.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.slug === "Flood-Prediction-Model" || a.slug === "Water-Quality-Model")
      return -1;
    if (b.slug === "Flood-Prediction-Model" || b.slug === "Water-Quality-Model")
      return 1;
    return b.stars - a.stars;
  });
}

export async function getProjectsByCategory(
  category: ProjectCategory
): Promise<Project[]> {
  const projects = await getProjects();
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category || p.isPlaceholder);
}

async function fetchRepoLanguages(
  repoName: string
): Promise<Record<string, number>> {
  try {
    return await fetchGitHub<Record<string, number>>(
      `/repos/${GITHUB_USER}/${repoName}/languages`
    );
  } catch {
    return {};
  }
}

export async function getTopLanguages(): Promise<LanguageStat[]> {
  const repos = await getGitHubRepos();
  const featuredRepos = repos
    .filter((r) => featuredSlugs.includes(r.name) && !r.fork)
    .slice(0, 8);

  const languageBytes: Record<string, number> = {};

  for (const repo of repos) {
    if (repo.language) {
      languageBytes[repo.language] = (languageBytes[repo.language] ?? 0) + 1000;
    }
  }

  for (const repo of featuredRepos) {
    const langs = await fetchRepoLanguages(repo.name);
    for (const [lang, bytes] of Object.entries(langs)) {
      languageBytes[lang] = (languageBytes[lang] ?? 0) + bytes;
    }
  }

  const total = Object.values(languageBytes).reduce((a, b) => a + b, 0);
  if (total === 0) return [];

  return Object.entries(languageBytes)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Math.round((bytes / total) * 100),
    }))
    .sort((a, b) => b.bytes - a.bytes)
    .slice(0, 8);
}

export async function getGitHubStats() {
  const [profile, languages] = await Promise.all([
    getGitHubProfile(),
    getTopLanguages(),
  ]);

  return {
    profile,
    languages,
    repoCount: profile.public_repos,
    followerCount: profile.followers,
  };
}
