export const siteConfig = {
  name: "Syeda Fakhira Saghir",
  title: "AI/ML Engineer · Computer Science Student",
  email: "fakhirasaghir@gmail.com",
  phone: "+923002129955",
  cgpa: "3.62",
  github: "https://github.com/SyedaFakhiraSaghir",
  linkedin: "https://www.linkedin.com/in/syeda-fakhira-saghir",
  location: "Karachi, Pakistan",
  resumeUrl: "/resume.pdf",
  summary:
    "Building intelligent systems across AI/ML, computer vision, and full-stack software — with a focus on deep learning, information retrieval, and real-world impact.",
};

export const heroContent = {
  greeting: "Hello, I'm",
  name: "Syeda Fakhira Saghir",
  title: "AI/ML Engineer · Computer Science Student",
  summary: siteConfig.summary,
};

export const aboutContent = {
  paragraphs: [
    "I'm a final-year Computer Science student at FAST NUCES Karachi (BS, 2022–2026, CGPA 3.62), specializing in AI/ML, deep learning, and computer vision.",
    "My work spans diffusion models, graph neural networks, object detection, NLP, and full-stack development with Python, Java, React, and Node.js. I've built systems from AI-driven word games and recommendation engines to image denoising and information retrieval pipelines.",
    "I'm especially drawn to AI applications where technology drives meaningful impact — from environmental monitoring and climate tech to intelligent software products.",
  ],
};

export const experience: import("@/types/resume").ExperienceEntry[] = [
  {
    role: "Teaching Assistant",
    company: "FAST-NUCES, Karachi Campus",
    location: "Karachi",
    startDate: "Jan 2026",
    endDate: "May 2026",
  },
  {
    role: "Teaching Assistant",
    company: "FAST-NUCES, Karachi Campus",
    location: "Karachi",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
  },
  {
    role: "AI/ML Intern",
    company: "Climate.io",
    location: "Karachi",
    startDate: "Aug 21, 2025",
    endDate: "Nov 30, 2025",
  },
  {
    role: "SAP Backend Development Intern",
    company: "TMC (TallyMarks Consulting)",
    location: "Karachi, Pakistan",
    startDate: "Jun 16, 2025",
    endDate: "Jul 25, 2025",
  },
  {
    role: "Teaching Assistant",
    company: "FAST-NUCES Karachi",
    location: "Karachi",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
  },
  {
    role: "Creative Intern",
    company: "National Incubation Centre, Karachi",
    location: "Karachi, Pakistan",
    startDate: "May 25, 2021",
    endDate: "Jul 6, 2021",
    description:
      "Interviews, content writing, video editing, and facilitating meetings.",
  },
];

export const education: import("@/types/resume").EducationEntry[] = [
  {
    institution: "FAST NUCES Karachi",
    degree: "BS Computer Science · CGPA 3.62",
    startDate: "2022",
    endDate: "2026",
  },
  {
    institution: "The Lyceum",
    degree: "A Levels, Science",
    startDate: "Aug 2020",
    endDate: "Jun 2022",
  },
  {
    institution: "HIRA Foundation School",
    degree: "O Level, Physical Sciences",
    startDate: "2014",
    endDate: "2020",
  },
];

export const honors: import("@/types/resume").AchievementEntry[] = [
  { title: "DISTINCTION — ICATS IT CONTEST", type: "honor" },
  { title: "POSITION — Trilingual Declamation Contest", type: "honor" },
  { title: "WINNER — LET 2021", type: "honor" },
  { title: "Dean's List — Fall 2023", type: "honor" },
  { title: "Dean's List — Spring 2023", type: "honor" },
];

export const certifications: import("@/types/resume").AchievementEntry[] = [
  {
    title: "Developing LLM Applications with LangChain",
    type: "certification",
  },
  { title: "Crash Course: Docker For Absolute Beginners", type: "certification" },
  { title: "Large Language Models (LLMs) Concepts", type: "certification" },
  { title: "Working with the OpenAI API", type: "certification" },
  { title: "Generative AI Concepts", type: "certification" },
];
