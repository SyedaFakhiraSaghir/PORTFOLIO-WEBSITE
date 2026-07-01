"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { siteConfig } from "@/data/resume";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} — Built with Next.js
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent-1"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent-1"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-accent-1"
            aria-label="Send email"
          >
            <Mail className="size-5" />
          </a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent-1/50 hover:text-foreground"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
