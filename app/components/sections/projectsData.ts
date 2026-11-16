import { FaReact, FaWordpress, FaRobot, FaDatabase, FaLayerGroup } from 'react-icons/fa'

export const highlightedProjects = [
  {
    category: 'Personal SaaS',
    tags: ['Next.js', 'Fastify', 'Docker', 'Traefik', 'Grafana', 'Ansible', 'Gemini AI'],
    year: '2026',
    isClueleak: true,
    domain: 'https://clueleak.com',
    image: '/images/clueleakcover.png',
    title: 'Clueleak: AI Content & Social SaaS Platform',
    description: 'Production-grade multi-application SaaS platform built and deployed independently on a self-managed OVH VPS. Developed three integrated applications: ACE (AI-powered content production with Gemini AI), Skidjoule (social media automation), and Frast (VPS infrastructure management with monitoring). Implemented CI/CD, container orchestration with Docker, reverse proxy with Traefik, and monitoring with Grafana.',
  },
  {
    category: 'Personal SaaS',
    tags: ['Electron', 'React', 'Node.js', 'Express', 'BullMQ', 'PostgreSQL', 'Redis', 'Docker'],
    year: '2026',
    isNibrasard: true,
    domain: 'https://nibrasard.com',
    image: '/images/nibrasardcover.png',
    title: 'Nibrasard: Audiobook Reader & Generator Platform',
    description: 'Full-featured audiobook platform supporting PDF, EPUB, MOBI, and TXT documents. Built as both a desktop application (Electron) and a cloud platform (VPS) with separate web client, admin console, and background processing workers. Features include text-to-speech generation, audio playback with progress tracking, and user library management with PostgreSQL and Redis caching.',
  },
  {
    category: 'Web Application',
    tags: ['React 19', 'TypeScript', 'Python', 'Playwright', 'Docker', 'Caddy', 'Drone CI'],
    year: '2026',
    isJobuff: true,
    domain: 'https://jobuff.com',
    image: '/images/jobuffcover.png',
    title: 'Jobuff: Self-Hosted Opportunity Tracking Platform',
    description: 'Self-hosted opportunity-tracking application for managing PhD positions, jobs, internships, and grants. Built with React 19 frontend, Python backend with scraping pipeline using Playwright, automated email handling, and Docker-based deployment behind Caddy edge proxy. Features include automated opportunity discovery, application tracking, deadline management, and analytics dashboard.',
  },
]

export const projectMeta = [
  { category: 'AI & Cloud', tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt', 'PostgreSQL'], year: '2026', title: 'Smart Sleep Tracker: ML Closed-Loop Recommendation System', description: 'Dual-model machine learning system (CatBoost, LightGBM) for sleep quality prediction and personalized intervention optimization. Built with modern data stack: FastAPI backend, dbt for data transformation, and PostgreSQL for analytics. Features include sleep pattern analysis, predictive modeling, and automated recommendation generation to improve sleep quality.', image: '' },
  { category: 'AI & Cloud', tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK', 'Docker', 'Spring Boot'], year: '2025', title: 'Mo-To-Mi: Multi-Agent LLM Migration Framework', description: 'Multi-agent AI system for automated migration of Spring Boot monoliths to microservices architecture. Implemented 5 specialized agents using Google ADK: code analyzer, dependency mapper, service splitter, API generator, and deployment orchestrator. Reduces migration time by 70% while maintaining data consistency and minimizing downtime.', image: '' },
  { category: 'Data Analytics', tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial', 'Pandas'], year: '2025', title: 'Morocco Rainfall & Wealth Analysis', description: 'Comprehensive geospatial data analysis project integrating rainfall patterns with economic indicators across Morocco. Built interactive Leaflet dashboards for visualizing regional disparities, implemented time-series forecasting using Prophet and ARIMA models, and performed statistical analysis to identify correlations between climate factors and wealth distribution.', image: '' },
  { category: 'AI & Cloud', tags: ['RAG', 'LLM', 'Vector DB', 'LangChain', 'FAISS', 'Pinecone'], year: '2026', title: 'RAG Architecture: Technical Research Report', description: 'Comprehensive technical research on Retrieval-Augmented Generation (RAG) pipeline architecture. Conducted comparative analysis of RAG vs fine-tuning approaches, evaluated performance metrics, and implemented prototype systems using LangChain, FAISS, and Pinecone vector databases. Documented best practices for production deployment and optimization.', image: '' },
  { category: 'Web Application', tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack', 'ERP'], year: '2026', title: 'Meter Readings System', description: 'Full-stack backoffice application for utility company meter management. Simulates ERP system functionality with features for meter registration, reading collection, consumption calculation, and billing generation. Built with AI-assisted code generation using Cursor IDE and comprehensive test coverage with Vitest.', image: '' },
  { category: 'Web Application', tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'REST APIs'], year: '2023', title: 'Equipment Supervision Tool', description: 'Full-stack web application for industrial equipment supervision and maintenance request tracking. Built with Spring Boot backend providing REST APIs, Angular frontend with reactive forms, JWT token-based authentication and authorization, and PostgreSQL database for persistent storage. Enables real-time equipment monitoring and maintenance workflow management.', image: '' },
  {
    category: 'AI & Cloud',
    tags: ['Unity 3D', 'ML-Agents', 'Deep RL', 'C#', 'Python'],
    year: '2022',
    repo: 'https://github.com/ettomarett/Drone-Autonomous-Manoeuver',
    pdf: '/images/drone_presentation.pdf',
    title: 'TIPE: Autonomous Drone Navigation',
    description: 'Deep reinforcement learning research project for autonomous drone navigation in complex 3D urban environments. Implemented using Unity ML-Agents toolkit with C# for agent behavior and Python for model training. Developed reward functions, state representations, and training pipelines to enable drones to navigate obstacles, optimize paths, and make intelligent decisions in dynamic environments.',
    image: '',
  },
]

export const projectStyles: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string, bg: string } } = {
  'Web Application': { icon: FaReact, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Website': { icon: FaWordpress, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Data Analytics': { icon: FaDatabase, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
  'AI & Cloud': { icon: FaRobot, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/15' },
  'Personal SaaS': { icon: FaLayerGroup, color: 'text-[#a29bfe]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
}