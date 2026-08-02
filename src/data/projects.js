
export const projects = [
  {
    id: "vendoriq",
    name: "VendorIQ",
    tagline: "Smart inventory, sales, bookkeeping, and analytics for micro-businesses.",
    categories: ["Web Apps", "AI", "Backend"],
    featured: true,
    overview:
      "VendorIQ is a lightweight business operating system for micro and small business owners who currently run their shops out of notebooks and memory. It unifies inventory, sales, bookkeeping, and analytics into one product designed for people without formal accounting training.",
    problem:
      "Most micro-business owners track inventory and sales by hand. Stock goes missing, pricing is inconsistent, and owners have no real visibility into whether they're actually profitable until it's too late.",
    solution:
      "A single, fast dashboard where owners log a sale in seconds, VendorIQ automatically adjusts stock, records the transaction, and rolls it up into daily, weekly, and monthly reports — with AI-generated plain-language summaries instead of raw spreadsheets.",
    architecture: [
      "React frontend with an offline-first sync layer",
      "Django REST API backend with role-based access per store",
      "PostgreSQL for transactional data, indexed for fast per-store analytics",
      "Background workers for nightly stock-prediction and reporting jobs",
      "AI insight layer that turns raw sales data into plain-language summaries",
    ],
    techStack: ["React", "Django", "PostgreSQL", "Tailwind CSS", "Celery", "Redis"],
    features: [
      "One-tap sale logging with automatic stock adjustment",
      "Multi-store support for owners running more than one location",
      "Daily/weekly/monthly bookkeeping rollups with plain-language AI summaries",
      "Low-stock and reorder alerts",
      "Role-based access for staff vs. owners",
    ],
    challenges: [
      "Designing a data model flexible enough for wildly different inventory types (perishables, retail units, bulk goods) without becoming overcomplicated",
      "Keeping the UI usable for owners with little formal tech experience",
      "Making analytics genuinely useful instead of just another dashboard nobody opens",
    ],
    lessonsLearned: [
      "Talking to real shop owners before writing code reshaped the entire data model",
      "Offline-first matters more than feature count for this audience",
      "Plain-language summaries drive far more engagement than charts alone",
    ],
    roadmap: ["Multi-store analytics", "Smart inventory predictions", "AI reporting", "Mobile app (React Native)"],
    metrics: [
      { label: "Progress", value: "72%" },
      { label: "Core Modules", value: "6" },
      { label: "Target Users", value: "Micro-retailers" },
    ],
    links: { demo: "#", github: "https://github.com/preciousprincee/VendorIQ" },
    progress: 72,
    nextMilestone: "AI Insights",
    upcoming: ["Multi-store analytics", "Smart inventory predictions", "AI reporting"],
  },
  {
    id: "evolve",
    name: "Evolve — AI Companion Platform",
    tagline: "An AI companion app that builds long-term relationships through persistent memory and emotional intelligence.",
    categories: ["AI", "Web Apps", "Backend"],
    overview:
      "Evolve is an AI-powered companion application designed to build meaningful, long-term relationships with users through persistent memory, emotional intelligence, and personalized conversations. Rather than functioning as a traditional chatbot, Evolve adapts over time by remembering important moments, tracking relationship progression, and proactively engaging users with context-aware conversations.",
    problem:
      "Most chatbots reset with every session — no memory, no sense of progression, no reason to come back. Users want something that actually knows them over time, not a blank slate every time they open the app.",
    solution:
      "A persistent AI memory engine that extracts and stores meaningful long-term information about the user, paired with a relationship-progression system, an AI journal that summarizes significant conversations, and proactive AI-initiated check-ins based on user activity and past memories.",
    architecture: [
      "React 19 + Vite frontend with Zustand for state and Framer Motion for interaction design",
      "Node.js + Express backend that keeps all AI requests server-side, protecting API keys",
      "Supabase (PostgreSQL) for data, authentication, and Row-Level Security across every table",
      "Groq API for streaming chat completions",
      "IndexedDB for offline caching alongside PostgreSQL for persistence",
      "Installable Progressive Web App with offline support",
    ],
    techStack: ["React 19", "Vite", "Tailwind CSS", "Zustand", "Framer Motion", "Node.js", "Express", "Supabase", "Groq API"],
    features: [
      "Persistent AI memory that remembers preferences, goals, milestones, and important conversations",
      "Relationship progression system with dynamic interaction levels",
      "AI-initiated conversations based on user activity, memories, and life events",
      "Personalized timeline highlighting shared memories and achievements",
      "AI journal that summarizes significant conversations into lasting memories",
      "Installable PWA with offline capabilities",
      "Secure authentication and cloud sync",
    ],
    challenges: [
      "Designing a memory engine that extracts genuinely meaningful information without overwhelming storage or context",
      "Keeping AI API keys secure by routing every AI request through the backend rather than the client",
      "Enforcing per-user data isolation across every table with Row-Level Security",
      "Managing AI usage costs with a credit-based system and server-side quota enforcement",
    ],
    lessonsLearned: [
      "Server-side AI requests aren't optional once real users and real API costs are involved",
      "Row-Level Security needs to be designed in from the first table, not retrofitted",
      "A credit-based quota system is essential to keep AI costs predictable at scale",
    ],
    roadmap: ["Voice conversations", "Push notifications", "Premium subscriptions", "Cross-platform expansion"],
    metrics: [
      { label: "Architecture", value: "Full-stack" },
      { label: "Data Isolation", value: "RLS on all tables" },
      { label: "Delivery", value: "Installable PWA" },
    ],
    links: { demo: "#evolveeapp.vercel.app", github: "https://github.com/preciousprincee/evolve" },
  },
  {
    id: "tweet-sentiment",
    name: "AI Tweet Sentiment Analyzer",
    tagline: "NLP system that classifies tweet sentiment using preprocessing, vectorization, and trained models.",
    categories: ["AI", "Data"],
    overview:
      "An NLP machine learning system that classifies tweet sentiment through text preprocessing, vectorization, and trained models, deployed with Streamlit for easy interaction and demoing.",
    problem:
      "Manually reading through large volumes of tweets to gauge public sentiment doesn't scale, and generic sentiment tools are often too coarse for topic-specific nuance.",
    solution:
      "A trained classification pipeline — preprocessing, vectorization, and a trained model — wrapped in a Streamlit app so sentiment on any tracked topic can be explored interactively.",
    architecture: [
      "Python preprocessing and vectorization pipeline",
      "Trained classification model for sentiment prediction",
      "Streamlit app for interactive exploration and demoing",
    ],
    techStack: ["Python", "scikit-learn", "Streamlit", "Pandas"],
    features: [
      "Text preprocessing and vectorization pipeline",
      "Sentiment classification on tweet text",
      "Interactive Streamlit interface for exploring results",
    ],
    challenges: [
      "Handling sarcasm and topic-specific slang the base model misread",
      "Choosing preprocessing steps that generalized well across topics",
    ],
    lessonsLearned: [
      "Good preprocessing and feature engineering mattered more than model complexity",
      "Streamlit made it far faster to iterate on and demo the pipeline",
    ],
    roadmap: ["Multi-language support", "Topic clustering"],
    metrics: [
      { label: "Type", value: "NLP / Classification" },
      { label: "Deployment", value: "Streamlit" },
    ],
    links: { demo: "https://tweetsent.streamlit.app", github: "https://github.com/preciousprincee/tweetsent" },
  },
  {
    id: "lead-dedup",
    name: "Lead Deduplication System",
    tagline: "Data engineering pipeline for cleaning and deduplicating messy leads datasets.",
    categories: ["Backend", "Data"],
    overview:
      "A data engineering system for cleaning and deduplicating messy leads datasets using rule-based matching and fuzzy logic — an end-to-end pipeline from raw ingestion to structured output.",
    problem:
      "Leads imported from multiple sources end up with duplicate and inconsistent records, wasting outreach effort and skewing reporting.",
    solution:
      "A pipeline combining exact-match rules with fuzzy string matching to identify and merge duplicates, turning messy raw input into a clean, structured dataset.",
    architecture: [
      "Python service with a configurable rules engine",
      "Fuzzy matching on names, emails, phone numbers, and company data",
      "Batch processing from ingestion to structured output",
    ],
    techStack: ["Python", "Pandas", "PostgreSQL"],
    features: [
      "Configurable matching rules per data source",
      "Rule-based and fuzzy-logic duplicate detection",
      "End-to-end pipeline from ingestion to clean, structured output",
    ],
    challenges: [
      "Balancing false-positive merges against missed duplicates",
      "Handling inconsistent formatting across different data sources",
    ],
    lessonsLearned: [
      "Fuzzy matching needed careful tuning per field — names and emails behave very differently",
      "Structuring the pipeline in clear stages made debugging bad merges far easier",
    ],
    roadmap: ["Cross-source sync", "Self-tuning match thresholds"],
    metrics: [
      { label: "Type", value: "Data Engineering / ETL" },
      { label: "Matching", value: "Rule-based + fuzzy logic" },
    ],
    links: { github: "https://github.com/preciousprincee/Leads-deduplicate-system" },
  },
  {
    id: "token-ico",
    name: "Token ICO DApp",
    tagline: "Decentralized application for token launches with smart contracts and wallet integration.",
    categories: ["Blockchain", "Web Apps"],
    overview:
      "A decentralized application for token launches, handling smart contracts, wallet integration, and token distribution workflows.",
    problem:
      "Early-stage projects running token sales need a transparent, auditable way to accept contributions and distribute tokens without building custom infrastructure each time.",
    solution:
      "A smart contract suite paired with a frontend for contributors, handling wallet connection, contribution tracking, and token distribution.",
    architecture: [
      "Solidity smart contracts for sale and distribution logic",
      "React frontend with wallet integration",
      "On-chain event tracking for contribution and distribution status",
    ],
    techStack: ["Solidity", "React", "Web3 wallet integration"],
    features: [
      "Wallet integration for contributors",
      "Token distribution workflows",
      "On-chain contribution tracking",
    ],
    challenges: [
      "Gas-optimizing the contribution and claim logic",
      "Getting distribution math right under edge cases",
    ],
    lessonsLearned: [
      "Test coverage on contract math paid for itself many times over",
      "UX clarity matters enormously when real funds are on the line",
    ],
    roadmap: ["Multi-chain support"],
    metrics: [
      { label: "Type", value: "DApp / Smart Contracts" },
      { label: "Chains", value: "EVM-compatible" },
    ],
    links: {  demo: "https://tokenicodapp.netlify.app",  github: "https://github.com/preciousprincee/Token-ICO-DApp" },
  },
  {
    id: "customer-analytics",
    name: "Customer Analytics Dashboard",
    tagline: "Data visualization dashboard with charts, filters, and business insights.",
    categories: ["Data", "Web Apps"],
    overview:
      "A data visualization dashboard with charts, filters, and business insights, powered by backend APIs and structured datasets.",
    problem:
      "Raw business data sitting in a database isn't useful without a way for non-technical stakeholders to explore it.",
    solution:
      "A dashboard exposing key metrics through charts and filters, backed by APIs serving structured, query-ready data.",
    architecture: [
      "Backend API serving structured business datasets",
      "Frontend dashboard with charts and filter controls",
    ],
    techStack: ["Python", "React", "SQL"],
    features: [
      "Interactive charts for key business metrics",
      "Filterable views over structured datasets",
      "Backend APIs powering the visualizations",
    ],
    challenges: [
      "Structuring the underlying data model to support flexible filtering without slow queries",
    ],
    lessonsLearned: [
      "Getting the data model right up front made every chart afterward far easier to build",
    ],
    roadmap: ["More granular filtering", "Exportable reports"],
    metrics: [
      { label: "Type", value: "Data Visualization" },
    ],
    links: { github: "#" },
  },
  {
    id: "object-detection-dataset",
    name: "Annotation Dataset for Object Detection",
    tagline: "A labeled dataset for object detection, built through structured image annotation.",
    categories: ["Data", "AI"],
    overview:
      "A labeled dataset for object detection built by annotating images, defining bounding boxes, and organizing structured annotations for model training and evaluation.",
    problem:
      "Object detection models need carefully labeled, well-structured training data — and that data quality directly determines model quality.",
    solution:
      "A structured annotation workflow: labeling images, defining bounding boxes, and organizing the output into a format ready for model training and evaluation.",
    architecture: [
      "Image annotation workflow with bounding-box labeling",
      "Structured export format for training and evaluation",
    ],
    techStack: ["Python", "Annotation tooling"],
    features: [
      "Bounding-box annotation across an image set",
      "Structured, training-ready dataset output",
    ],
    challenges: [
      "Keeping annotations consistent across a large image set",
    ],
    lessonsLearned: [
      "Annotation consistency matters as much as annotation volume for downstream model quality",
    ],
    roadmap: [],
    metrics: [
      { label: "Type", value: "Dataset / Object Detection" },
    ],
    links: { github: "#" },
  },
];

export const featuredProject = projects.find((p) => p.featured);
