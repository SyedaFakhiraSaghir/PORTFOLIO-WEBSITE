import type { Project } from "@/types/project";

/** Manual featured slugs — top AI/ML repos + FYP. */
export const featuredSlugs = [
  "Flood-Prediction-Model",
  "Water-Quality-Model",
  "Diffusion-Model-for-Image-Denoising",
  "Image-Segmentation",
  "Object-Detection-",
  "Talent-Tune-Bridging-Skill-gap-with-AI",
  "MLOPS-CONTINUOUS-INTEGRATION-PROJECT",
  "-Graph-Neural-Networks-for-Node-Classification",
];

/** Repos excluded from the project grid (course material, forks, empty stubs). */
export const excludedRepoPatterns = [
  /^Resume-Renewal$/,
  /^MLSA-Workshop-1$/,
  /^6th-semester-material$/,
  /-course-material$/,
  /^Programming-Fundamentals$/,
  /^Semester-7$/,
  /^SMD-class-task-1$/,
  /^Responsive-Design$/,
  /^Web-Crawler$/,
  /^Deep-Learning-for-Perception$/,
  /^DAA-course-material$/,
  /^parallel-and-distributed-computing-course-material$/,
  /^SDA-system-design-and-analysis-course-material$/,
  /^Database-Course-Material$/,
  /^Operating-Systems$/,
  /^AI-LAB$/,
  /^Boolean-Retrieval-Model$/,
  /^Vector-Space-Model$/,
  /^MathScript-Compiler$/,
  /^PanelPal$/,
];

const AI_ML_REPOS = new Set([
  "Diffusion-Model-for-Image-Denoising",
  "Facial-Expression-Recognition",
  "Image-Segmentation",
  "Object-Detection-",
  "Image-Classification-of-CIFAR-10-dataset",
  "Style-Transfer",
  "-Graph-Neural-Networks-for-Node-Classification",
  "Sequence-Prediction-with-Recurrent-Neural-Networks-RNNs-",
  "Reinforcement-Learning-for-a-Simple-Grid-World-Game",
  "A-Transformer-for-Text-Classification",
  "FRIENDS-RECOMMENDATION-SYSTEM-ON-SOCIAL-NETSL-NETWORKS",
  "Talent-Tune-Bridging-Skill-gap-with-AI",
  "Word-Hunt",
  "MLOPS-DOCKER",
  "MLOPS-CONTINUOUS-INTEGRATION-PROJECT",
  "MLOPS-Experiment-Tracking-with-MLFLOW",
  "MLOPS-DVC-Data_Versioning",
  "SPAM-DETECTION-MLOPS",
  "Hospital-Management-System-Implementing-CIA-triad",
  "Flood-Prediction-Model",
  "Water-Quality-Model",
]);

const FLUTTER_REPOS = new Set([
  "chatbot_ui",
  "Battery-Percentage-Flutter",
  "whatsapp-replica-app",
  "ToDoList---Fetch-Send-Data-Over-The-Internet",
  "TechKhabar",
]);

const CPP_REPOS = new Set([
  "Flutter_weather_app",
  "To-do-list-app",
  "Secret-Key-Encryption",
  "Moore-to-Mealy-and-Mealy-to-Moore-Conversion",
  "NumParLib",
  "DAA-PROJECT-FALL-2024",
  "Task-Manager-in-Operating-System",
  "Mind-Frame-Assistant",
  "Data-Structures",
  "CodeSoftTask1",
  "CodeSoftTask2",
  "CodeSoftTask3",
  "CodeSoftTask4",
  "CodeSoftTask5",
  "OOP",
  "Hostel-Mess-Management-System",
  "Task-Management-System",
]);

const FULLSTACK_REPOS = new Set([
  "add-books-node-js-backend",
  "Personal-Assistant",
  "html-css-js",
]);

export function getRepoCategory(
  name: string,
  language: string | null
): import("@/types/project").ProjectCategory {
  if (AI_ML_REPOS.has(name)) return "ai-ml";
  if (FLUTTER_REPOS.has(name)) return "flutter";
  if (CPP_REPOS.has(name)) return "c-cpp";
  if (FULLSTACK_REPOS.has(name)) return "fullstack";
  if (language === "Dart") return "flutter";
  if (language === "C" || language === "C++") return "c-cpp";
  if (
    language === "Python" ||
    language === "Jupyter Notebook" ||
    language === "PowerShell"
  )
    return "ai-ml";
  if (
    language === "JavaScript" ||
    language === "TypeScript" ||
    language === "HTML" ||
    language === "Java"
  )
    return "fullstack";
  return "all";
}

const LANGUAGE_GRADIENTS: Record<string, string> = {
  Python: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  "Jupyter Notebook": "from-orange-500/20 via-amber-500/10 to-transparent",
  Dart: "from-sky-500/20 via-blue-500/10 to-transparent",
  "C++": "from-violet-500/20 via-purple-500/10 to-transparent",
  C: "from-indigo-500/20 via-blue-500/10 to-transparent",
  JavaScript: "from-yellow-500/20 via-amber-500/10 to-transparent",
  Java: "from-red-500/20 via-orange-500/10 to-transparent",
  HTML: "from-rose-500/20 via-pink-500/10 to-transparent",
  default: "from-sky-500/20 via-violet-500/10 to-transparent",
};

export function getBannerGradient(language: string | null): string {
  if (!language) return LANGUAGE_GRADIENTS.default;
  return LANGUAGE_GRADIENTS[language] ?? LANGUAGE_GRADIENTS.default;
}

/** FYP featured projects — URLs provided by user (repos may be private). */
export const fypProjects: Project[] = [
  {
    id: "fyp-flood",
    name: "Flood Prediction using U-Net",
    slug: "Flood-Prediction-Model",
    description:
      "Final Year Project: fine-tuned deep learning models on satellite imagery for flood prediction, using U-Net architecture. Integrated with a RAG pipeline to enhance flood prediction and classification with historical context.",
    language: "Python",
    stars: 0,
    topics: ["deep-learning", "computer-vision", "unet", "satellite-imagery", "rag"],
    githubUrl: "https://github.com/SyedaFakhiraSaghir/Flood-Prediction-Model",
    liveUrl: null,
    featured: true,
    category: "ai-ml",
    bannerGradient: "from-cyan-500/25 via-sky-500/10 to-transparent",
  },
  {
    id: "fyp-water",
    name: "Water Quality Monitoring",
    slug: "Water-Quality-Model",
    description:
      "Final Year Project: AI-powered water quality monitoring with real-time sensor readings, computer vision, and data fusion for climate resilience. Part of the end-to-end flood management and environmental monitoring system.",
    language: "Python",
    stars: 0,
    topics: ["iot", "computer-vision", "mlops", "environmental-tech"],
    githubUrl: "https://github.com/SyedaFakhiraSaghir/Water-Quality-Model",
    liveUrl: null,
    featured: true,
    category: "ai-ml",
    bannerGradient: "from-violet-500/25 via-purple-500/10 to-transparent",
  },
];
