export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface AchievementEntry {
  title: string;
  type: "honor" | "certification";
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}
