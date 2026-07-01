"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { heroContent, siteConfig } from "@/data/resume";

function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex h-64 w-full items-center justify-center sm:h-80 lg:h-96">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full max-w-md"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="120" fill="url(#glow)" />
        <circle
          cx="200"
          cy="200"
          r="90"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <circle
          cx="200"
          cy="200"
          r="60"
          fill="none"
          stroke="url(#orbitGrad)"
          strokeWidth="1"
          strokeOpacity="0.5"
        />

        {!reduced ? (
          <>
            <motion.circle
              cx="200"
              cy="110"
              r="6"
              fill="#38BDF8"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            />
            <motion.circle
              cx="260"
              cy="200"
              r="4"
              fill="#7C3AED"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            />
          </>
        ) : (
          <>
            <circle cx="200" cy="110" r="6" fill="#38BDF8" />
            <circle cx="260" cy="200" r="4" fill="#7C3AED" />
          </>
        )}

        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * 75;
          const y = 200 + Math.sin(rad) * 75;
          return (
            <circle
              key={angle}
              cx={x}
              cy={y}
              r={3 - (i % 2)}
              fill={i % 2 === 0 ? "#38BDF8" : "#7C3AED"}
              opacity={0.6}
            />
          );
        })}

        <circle cx="200" cy="200" r="8" fill="url(#orbitGrad)" />
      </svg>
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pt-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent-1/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-2/5 blur-3xl" />
      </div>

      <div className="section-container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={reduced ? undefined : container}
          initial={reduced ? false : "hidden"}
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={reduced ? undefined : item}
            className="font-mono text-sm text-accent-1"
          >
            {heroContent.greeting}
          </motion.p>

          <motion.h1
            variants={reduced ? undefined : item}
            className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {heroContent.name}
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : item}
            className="text-lg font-medium text-muted-foreground sm:text-xl"
          >
            {heroContent.title}
          </motion.p>

          <motion.p
            variants={reduced ? undefined : item}
            className="max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            {heroContent.summary}
          </motion.p>

          <motion.div
            variants={reduced ? undefined : item}
            className="flex flex-wrap gap-3 pt-2"
          >
            <MagneticButton
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href={siteConfig.resumeUrl}
              download="Syeda-Fakhira-Saghir-Resume.pdf"
              className="border border-border bg-card text-foreground hover:border-accent-1/50"
            >
              <Download className="mr-2 size-4" />
              Download Résumé
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="border border-border bg-card text-foreground hover:border-accent-2/50"
            >
              <Mail className="mr-2 size-4" />
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
