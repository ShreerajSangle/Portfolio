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

export type EducationItem = {
  school: string;
  location: string;
  degree: string;
  period: string;
  detail: string;
  coursework: string[];
};

export const education: EducationItem[] = [
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
];

export type Project = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  /** One-line outcome shown on compact cards (homepage, more-work list). */
  oneLiner: string;
  /** Single standout stat shown on the featured card, e.g. "92.5% accuracy". */
  headlineMetric?: string;
  /** Full case-study description, shown only on the project detail page. */
  description: string;
  results?: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  gradient: string;
  /** Featured projects get a full card on the homepage; others go in "More work". */
  featured: boolean;
};

/** Shared gradient family — reused by Skills and Experience so every
 * "dedicated card" section across the site draws from the same palette
 * Projects uses, instead of introducing new colors per section. */
export const accentGradients = [
  "from-[#1a0500] via-[#c10801] to-[#f16001]",
  "from-[#000000] via-[#4a1a00] to-[#e85002]",
  "from-[#0a0a0a] via-[#5c2e00] to-[#d9c3ab]",
  "from-[#000000] via-[#c10801] to-[#333333]",
  "from-[#050505] via-[#333333] to-[#646464]",
] as const;

export const projects: Project[] = [
  {
    slug: "mental-health-assistant",
    number: "01",
    title: "Multimodal Mental Health Assistant",
    subtitle: "Real-Time Risk-Detection & Triage System — MSc Thesis",
    oneLiner: "A production-style multimodal ML system for real-time mental-health risk detection and triage.",
    headlineMetric: "92.5% accuracy",
    description:
      "Designed, trained, and deployed an end-to-end multimodal model for real-time mental-health risk detection and triage, built and served as a production-style application rather than a notebook-only exercise.",
    results: [
      "92.5% classification accuracy",
      "Sub-200ms inference latency",
      "99%+ uptime with alerting & load-tested failover",
    ],
    tech: ["FastAPI", "PostgreSQL", "Docker", "Multimodal ML"],
    gradient: "from-[#1a0500] via-[#c10801] to-[#f16001]",
    featured: true,
  },
  {
    slug: "stock-market-prediction",
    number: "02",
    title: "Multi-Horizon Stock Market Prediction System",
    subtitle: "Comparative Forecasting Engine — ARIMA, XGBoost & LSTM-Attention",
    oneLiner: "A hybrid forecasting engine benchmarking ARIMA, XGBoost, and LSTM-Attention on 50 S&P 500 equities.",
    headlineMetric: "62% directional accuracy",
    description:
      "Comparative forecasting engine benchmarking statistical and deep learning models on equity price series. Engineered a forecasting pipeline for 50 S&P 500 equities combining ARIMA, XGBoost, and LSTM-Attention models with Pandas-derived technical indicators (EMA, RSI, MACD), then exposed model outputs through a FastAPI service backed by PostgreSQL for repeatable batch scoring and historical prediction retrieval.",
    results: [
      "Achieved 62% directional accuracy on 5-day horizons with LSTM-Attention, outperforming the ARIMA baseline by 9 percentage points",
      "Evaluated all models on RMSE, MAE, and directional accuracy under walk-forward validation, recording RMSE of 1.8% on normalised close prices",
      "Exposed model outputs through a FastAPI service backed by PostgreSQL, enabling repeatable batch scoring and historical prediction retrieval",
    ],
    tech: ["Python", "XGBoost", "LSTM", "FastAPI", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShreerajSangle/Multi--Horizon-Stock-Price-Forecasting-using-ARIMA-XGBoost-and-LSTM",
      },
    ],
    gradient: "from-[#050505] via-[#333333] to-[#646464]",
    featured: true,
  },
  {
    slug: "dublin-bike-traffic",
    number: "03",
    title: "Dublin City Bicycle Traffic Forecasting",
    subtitle: "Time-Series Analysis for Evidence-Based Urban Mobility Planning",
    oneLiner: "Forecasting Dublin cycling volumes from 12 sensor locations to support urban mobility planning.",
    headlineMetric: "75%+ forecast accuracy",
    description:
      "Time-series analysis of city cycling volumes to support evidence-based urban mobility planning. Processed 15,000+ hourly cycling records from 12 sensor locations through a Pandas ETL pipeline with SQL-based outlier detection and temporal feature engineering, then benchmarked ARIMA, Holt-Winters, and Random Forest using time-series cross-validation.",
    results: [
      "Reached 75%+ forecasting accuracy with the tuned Random Forest model, benchmarked against ARIMA and Holt-Winters",
      "Processed 15,000+ hourly cycling records from 12 sensor locations with SQL-based outlier detection and temporal feature engineering",
      "Delivered 4 automated Power BI dashboards with seasonal heatmaps and trend analysis for non-technical stakeholders",
    ],
    tech: ["Python", "SQL", "Power BI", "ARIMA", "Random Forest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShreerajSangle/Annual-Bicycle-Counts-for-Key-Dublin-Locations-2023-",
      },
    ],
    gradient: "from-[#000000] via-[#4a1a00] to-[#e85002]",
    featured: true,
  },
  {
    slug: "job-tracker",
    number: "04",
    title: "AI Job Application Tracker",
    subtitle: "Full-Stack Job Search App with LLM-Powered Auto-Fill",
    oneLiner: "A self-directed full-stack app that auto-fills job applications with an LLM, live and on GitHub.",
    headlineMetric: "Live demo",
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
    gradient: "from-[#0a0a0a] via-[#333333] to-[#646464]",
    featured: false,
  },
  {
    slug: "closet-iq",
    number: "05",
    title: "Closet IQ",
    subtitle: "AI-Assisted Wardrobe & Outfit Recommendation App",
    oneLiner: "A wardrobe organiser recommending outfits by seasonal colour theory, occasion, and weather.",
    description:
      "A wardrobe organiser that recommends complete outfits based on skin tone (seasonal colour theory), occasion, and weather — architected from scratch, choosing a rules-based engine over ML for a fast, no-bloat MVP.",
    results: [
      "600-line rules-based outfit scoring engine",
      "Google OAuth / magic-link auth, direct-to-storage uploads",
    ],
    tech: ["React 19", "TanStack", "Supabase", "Appwrite", "Groq"],
    gradient: "from-[#0a0a0a] via-[#5c2e00] to-[#d9c3ab]",
    featured: false,
  },
  {
    slug: "comet",
    number: "06",
    title: "COMET",
    subtitle: "Interactive Brand Campaign & E-Commerce Website",
    oneLiner: "An AI-tools-only animated e-commerce campaign site for a sneaker brand collaboration.",
    description:
      "An AI-tools-only marketing/product build: a high-end, animated e-commerce campaign site for a sneaker brand themed around an urban endless-runner universe, with a Subway Surfers brand collaboration.",
    results: [
      "Animated preloader, parallax hero, hover-driven reveals",
      "Six-way carousel-driven colour theming across collaborations",
      "Razorpay checkout integration",
    ],
    tech: ["Supabase", "Razorpay", "Veo 3.1", "Suno AI", "Captions"],
    gradient: "from-[#000000] via-[#c10801] to-[#333333]",
    featured: false,
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
    company: "Techigent Technologies",
    location: "Mumbai, India",
    role: "Data Analyst (Intern)",
    period: "Jan 2024 – Jun 2024",
    bullets: [
      "Pulled and consolidated records from CRM systems and offline sources (spreadsheet exports, flat files) across BFSI, pharma, and retail client accounts, building a repeatable extraction process for recurring reporting cycles.",
      "Used Power Query and Excel to standardise inconsistent field formats, deduplicate overlapping records, and reconcile mismatched entries across multiple source systems before reporting.",
      "Built and maintained Power BI dashboards and reports delivering management information (MI) to client stakeholders, turning raw operational/transactional data into recurring, business-ready reporting packs.",
      "Worked hands-on with the Apollo Hospital account (pharma/healthcare) — performed ETL, cleaning, extraction, and visualisation in Excel/Python/SQL on operational and reporting data; data/reporting work only, non-clinical, no involvement in healthcare decision-making.",
      "Worked hands-on with the Bonkers Corner account (retail) — applied the same ETL/cleaning/visualisation workflow using Excel/Python/SQL to retail sales and operations data.",
      "Queried and validated data using SQL, cross-checking source-to-report consistency before hand-off to catch discrepancies ahead of client-facing deadlines.",
    ],
  },
  {
    company: "Poka Sensor Technologies",
    location: "Khopoli, Maharashtra",
    role: "Software Developer (Intern)",
    period: "May 2023 – Oct 2023",
    bullets: [
      "Built REST API endpoints using FastAPI to expose sensor data and application logic to the frontend and to third-party integration partners.",
      "Integrated a React frontend with backend APIs to surface industrial sensor data in a usable interface for internal and partner use.",
      "Worked on industrial sensor integration — connecting hardware sensor data feeds into the software stack for downstream processing and display.",
      "Handled third-party partner API integration, working through authentication, data-format mismatches, and integration testing to connect external systems.",
      "Debugged and tested API endpoints and integration points across the sensor-to-application data pipeline.",
      "Picked up FastAPI and an existing sensor-integration codebase quickly as an intern, contributing to a live, production-adjacent codebase within an industrial technology company.",
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

export const interests = [
  "Formula 1",
  "Tennis & Test cricket",
  "Football",
  "Fashion & personal style",
  "Music across genres — from Arijit Singh to Metallica",
] as const;
