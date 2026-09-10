// All content sourced directly from Shreeraj Sangle's profile document.
// Fields marked "placeholder" below are clearly labeled — no invented facts.

export const profile = {
  name: "Shreeraj Sangle",
  roleShort: "AI & Full-Stack",
  roleLine: "Product Builder",
  location: "Dublin, Ireland",
  homeBase: "Mumbai, India",
  email: "sangleshreeraj.ie@gmail.com",
  linkedin: "https://linkedin.com/in/shreeraj-sangle",
  github: "https://github.com/ShreerajSangle",
  phone: null as string | null, // not confirmed in source profile

  tagline:
    "MSc in Artificial Intelligence graduate combining machine learning engineering, full-stack product development, data analytics, and hands-on retail operations experience.",

  summary:
    "Builds end-to-end AI and web products independently — from a real-time multimodal mental-health risk-detection system deployed with sub-200ms latency, to consumer-facing apps and interactive brand campaign websites — using Python, TypeScript/React, FastAPI, PostgreSQL/Supabase, and modern LLM APIs (OpenAI, Groq).",

  grounding:
    "Grounded in real operational experience: currently working in retail operations at Lidl Ireland (customer service, stock/inventory, KPI and business-planning input), with prior experience in data reporting internships across BFSI, pharma, and retail client accounts, and a freelance stint managing social media partnerships and sponsorship negotiation.",

  goal: "Actively job-searching across Data/BI Analyst and junior AI/ML Engineer roles — while building toward independent entrepreneurship in AI, sports, or agriculture technology, with an eventual return to India.",
} as const;

export const heroStats = [
  { id: "01", label: "AI & Machine Learning" },
  { id: "02", label: "Full-Stack Development" },
  { id: "03", label: "Data & Business Analytics" },
  { id: "04", label: "Retail Operations" },
] as const;

export const techStack = [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "SQL",
  "Power BI",
  "Docker",
  "AWS",
] as const;

export const education = [
  {
    school: "National College of Ireland",
    location: "Dublin, Ireland",
    degree: "MSc Artificial Intelligence",
    period: "2025",
    detail:
      "Thesis: Multimodal Mental Health Assistant — a real-time, multimodal risk-detection and triage system.",
    coursework: [
      "Machine Learning",
      "NLP",
      "Data Mining",
      "Statistics for AI",
      "Data Governance & Ethics",
      "Intelligent Agents & Process Automation",
      "AI-Driven Decision Making",
    ],
  },
  {
    school: "Hofstra University",
    location: "USA",
    degree: "Postgraduate — Business Analytics",
    period: "",
    detail:
      "Second postgraduate degree, focused on business analytics, forecasting, and quantitative decision-making.",
    coursework: [
      "Data Analytics",
      "Forecasting",
      "Business Strategy",
      "Management Science",
      "Quantitative Analysis",
      "Database Management",
    ],
  },
  {
    school: "University of Mumbai",
    location: "India",
    degree: "BE Electronics & Computer Science",
    period: "Oct 2021 – May 2024",
    detail: "",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Embedded Systems",
    ],
  },
  {
    school: "University of Mumbai",
    location: "India",
    degree: "Diploma in Computer Engineering",
    period: "Aug 2018 – May 2021",
    detail: "",
    coursework: [
      "Programming Fundamentals (C)",
      "Data Structures",
      "OOP (Java)",
      "Web Technologies",
      "Microprocessors",
    ],
  },
] as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  results?: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "mental-health",
    number: "01",
    title: "Multimodal Mental Health Assistant",
    subtitle: "Real-Time Risk-Detection & Triage System — MSc Thesis",
    description:
      "Designed, trained, and deployed an end-to-end multimodal model for real-time mental-health risk detection and triage, built and served as a production-style application rather than a notebook-only exercise.",
    results: [
      "92.5% classification accuracy",
      "Sub-200ms inference latency",
      "99%+ uptime with alerting & load-tested failover",
    ],
    tech: ["FastAPI", "PostgreSQL", "Docker", "Multimodal ML"],
    gradient: "from-[#1a0500] via-[#c10801] to-[#f16001]",
  },
  {
    id: "job-tracker",
    number: "02",
    title: "AI Job Application Tracker",
    subtitle: "Full-Stack Job Search App with LLM-Powered Auto-Fill",
    description:
      "A self-directed full-stack web app to track job applications, iterated across AI auto-fill, security hardening, and an Apple-style UI redesign work-stream.",
    results: [
      "Groq-powered auto-fill with near-zero latency",
      "Full security & deployment audit, all findings remediated",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Supabase", "Groq"],
    links: [
      { label: "GitHub", href: "https://github.com/ShreerajSangle/Job-Tracker" },
      { label: "Live site", href: "https://job-tracker-iota-wheat.vercel.app/dashboard" },
    ],
    gradient: "from-[#050505] via-[#333333] to-[#646464]",
  },
  {
    id: "forecasting",
    number: "03",
    title: "Data Forecasting Projects",
    subtitle: "Bicycle Traffic Forecasting & Multi-Horizon Stock Prediction",
    description:
      "Two applied time-series projects: a SQL schema and forecasting models for Dublin city bicycle traffic counters, and a multi-horizon stock market prediction system across different time windows.",
    tech: ["Python", "SQL", "ARIMA-family models"],
    gradient: "from-[#000000] via-[#4a1a00] to-[#e85002]",
  },
  {
    id: "closet-iq",
    number: "04",
    title: "Closet IQ",
    subtitle: "AI-Assisted Wardrobe & Outfit Recommendation App",
    description:
      "A wardrobe organiser that recommends complete outfits based on skin tone (seasonal colour theory), occasion, and weather — architected from scratch, choosing a rules-based engine over ML for a fast, no-bloat MVP.",
    results: [
      "600-line rules-based outfit scoring engine",
      "Google OAuth / magic-link auth, direct-to-storage uploads",
    ],
    tech: ["React 19", "TanStack", "Supabase", "Appwrite", "Groq"],
    gradient: "from-[#0a0a0a] via-[#5c2e00] to-[#d9c3ab]",
  },
  {
    id: "comet",
    number: "05",
    title: "COMET",
    subtitle: "Interactive Brand Campaign & E-Commerce Website",
    description:
      "An AI-tools-only marketing/product build: a high-end, animated e-commerce campaign site for a sneaker brand themed around an urban endless-runner universe, with a Subway Surfers brand collaboration.",
    results: [
      "Animated preloader, parallax hero, hover-driven reveals",
      "Six-way carousel-driven colour theming across collaborations",
      "Razorpay checkout integration",
    ],
    tech: ["Supabase", "Razorpay", "Veo 3.1", "Suno AI", "Captions"],
    gradient: "from-[#000000] via-[#c10801] to-[#333333]",
  },
];

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Lidl Ireland",
    location: "Bray, Ireland",
    role: "Retail Team Member (part-time)",
    period: "2024/2025 – Present",
    bullets: [
      "Deliver customer service and complaint resolution on a high-volume shop floor within a 6–7 colleague team, escalating where needed to Duty/Deputy Managers.",
      "Operate tills and perform cash-management checks; support goods-in, warehouse pallet organisation, replenishment, and stock rotation with use-by-date and merchandising compliance.",
      "Support store refurbishments, new openings/re-openings, and provide input into annual business planning around KPI targets and staffing.",
      "Acted as store responsible person on shift — managing staff, overseeing reductions and backstock, and running the till.",
    ],
  },
  {
    company: "Healthy Trends",
    location: "Dublin, Ireland",
    role: "Sales Assistant",
    period: "Dec 2024 – Apr 2025",
    bullets: [
      "Sold non-prescription health products including vitamins, minerals (e.g. magnesium), supplements, and juices.",
    ],
  },
  {
    company: "Techigent Technologies",
    location: "Mumbai, India",
    role: "Data Analyst (Intern)",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Pulled and consolidated records from CRM systems and offline sources across BFSI, pharma, and retail client accounts, building a repeatable extraction process for recurring reporting cycles.",
      "Used Power Query and Excel to standardise inconsistent field formats, deduplicate overlapping records, and reconcile mismatched entries across multiple source systems.",
      "Built and maintained Power BI dashboards delivering management information (MI) to client stakeholders.",
      "Worked hands-on with pharma (Apollo Hospital) and retail (Bonkers Corner) accounts — ETL, cleaning, extraction, and visualisation in Excel/Python/SQL.",
    ],
  },
  {
    company: "Poka Sensor Technologies",
    location: "Khopoli, Maharashtra",
    role: "Software Developer (Intern)",
    period: "May 2023 – Oct 2023",
    bullets: [
      "Built REST API endpoints using FastAPI to expose sensor data and application logic to the frontend and third-party integration partners.",
      "Integrated a React frontend with backend APIs to surface industrial sensor data in a usable interface.",
      "Handled third-party partner API integration — authentication, data-format mismatches, and integration testing.",
      "Debugged and tested API endpoints across the sensor-to-application data pipeline.",
    ],
  },
  {
    company: "Pantech Solutions",
    location: "Mumbai, India",
    role: "Data Science (Intern)",
    period: "Jun 2022 – Aug 2022",
    bullets: [
      "Trained and evaluated 3 supervised models (Logistic Regression, Random Forest, SVM) in scikit-learn on datasets of 10K–50K records, reaching up to 88% test accuracy.",
      "Performed end-to-end EDA in Python (Pandas, Seaborn) covering feature engineering, outlier detection, and correlation analysis, lowering model training error by 15%.",
      "Documented preprocessing steps, hyperparameters, and evaluation results for reproducibility.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Social Media & Partnerships Manager",
    period: "2022 – 2024",
    bullets: [
      "Managed end-to-end coordination of brand sponsorship engagements — negotiating terms, tracking deliverables, liaising between client and external brand partners.",
      "Maintained invoicing and payment tracking across multiple concurrent sponsorship deals.",
      "Tracked growth and engagement analytics across campaigns and reported results back to the client and partners.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React (18/19)", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack", "Vite"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "Node"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase", "Appwrite"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Multimodal model design & evaluation",
      "LLM integration (OpenAI, Groq)",
      "Prompt engineering",
      "Rules-based recommendation engines",
      "AWS SageMaker (study-stage)",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (Cloud Practitioner — in progress)", "Docker", "Vercel", "CI/CD fundamentals"],
  },
  {
    title: "Data Analytics",
    items: ["Power BI", "Excel / Power Query", "Pandas", "Time-series forecasting (ARIMA-family)"],
  },
  {
    title: "APIs & Integrations",
    items: ["REST APIs", "Razorpay", "Google OAuth"],
  },
] as const;

export const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Multimodal model design, LLM integration (OpenAI, Groq), prompt engineering, and evaluation harnesses for real products — not just notebooks.",
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end web apps with React/TypeScript frontends and FastAPI/Supabase backends, from architecture through deployment.",
  },
  {
    title: "Data & Business Analytics",
    description:
      "Data cleaning, reconciliation, forecasting, and Power BI/Excel reporting that turns raw operational data into business-ready insight.",
  },
  {
    title: "Retail Operations & Planning",
    description:
      "Hands-on floor operations experience — KPI tracking, stock management, and business-planning input grounded in a real retail environment.",
  },
] as const;

export const highlights = [
  { value: "92.5%", label: "Classification accuracy on the multimodal mental-health system" },
  { value: "<200ms", label: "Inference latency on the same production-style ML system" },
  { value: "99%+", label: "Uptime with alerting and load-tested failover" },
  { value: "88%", label: "Test accuracy across 3 supervised models on 10K–50K record datasets" },
] as const;

export const interests = [
  "Formula 1",
  "Tennis & Test cricket",
  "Football",
  "Fashion & personal style",
  "Music across genres — from Arijit Singh to Metallica",
] as const;
