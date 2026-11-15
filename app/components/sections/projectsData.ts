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
    description: 'Production-grade multi-application SaaS platform built and deployed independently on a self-managed OVH VPS. Covers AI-powered content production (ACE), social media automation (Skidjoule), and VPS infrastructure management (Frast).',
  },
  {
    category: 'Personal SaaS',
    tags: ['Electron', 'React', 'Node.js', 'Express', 'BullMQ', 'PostgreSQL', 'Redis', 'Docker'],
    year: '2026',
    isNibrasard: true,
    domain: 'https://nibrasard.com',
    image: '/images/nibrasardcover.png',
    title: 'Nibrasard: Audiobook Reader & Generator Platform',
    description: 'Audiobook reader and generator for PDF, EPUB, MOBI, and TXT documents. Ships as a desktop app (Electron) and account-based cloud platform (VPS) with web client, admin console, and processing workers.',
  },
  {
    category: 'Web Application',
    tags: ['React 19', 'TypeScript', 'Python', 'Playwright', 'Docker', 'Caddy', 'Drone CI'],
    year: '2026',
    isJobuff: true,
    domain: 'https://jobuff.com',
    image: '/images/jobuffcover.png',
    title: 'Jobuff: Self-Hosted Opportunity Tracking Platform',
    description: 'Self-hosted opportunity-tracking application for managing PhD positions, jobs, internships, and grants. Combines React frontend with Python scraping pipeline, browser automation, email handling, and Docker-based deployment behind Caddy edge proxy.',
  },
]

export const projectMeta = [
  { category: 'AI & Cloud', tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt', 'PostgreSQL'], year: '2026', title: 'Smart Sleep Tracker: ML Closed-Loop Recommendation System', description: 'Dual-model system (CatBoost, LightGBM) for sleep quality prediction and intervention optimization, with modern data stack including FastAPI, dbt, and PostgreSQL.', image: '' },
  { category: 'AI & Cloud', tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK', 'Docker', 'Spring Boot'], year: '2025', title: 'Mo-To-Mi: Multi-Agent LLM Migration Framework', description: 'Multi-agent AI system for automated migration of Spring Boot monoliths to microservices architecture with 5 specialized agents.', image: '' },
  { category: 'Data Analytics', tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial', 'Pandas'], year: '2025', title: 'Morocco Rainfall & Wealth Analysis', description: 'Multi-source geospatial data integration for rainfall and wealth analysis with interactive Leaflet dashboards and time-series forecasting models.', image: '' },
  { category: 'AI & Cloud', tags: ['RAG', 'LLM', 'Vector DB', 'LangChain', 'FAISS', 'Pinecone'], year: '2026', title: 'RAG Architecture: Technical Research Report', description: 'Comprehensive research on RAG pipeline architecture with comparative analysis against fine-tuning approaches.', image: '' },
  { category: 'Web Application', tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack', 'ERP'], year: '2026', title: 'Meter Readings System', description: 'Full-stack backoffice application for utility meter management with ERP simulation and AI-assisted code generation.', image: '' },
  { category: 'Web Application', tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'REST APIs'], year: '2023', title: 'Equipment Supervision Tool', description: 'Full-stack web application for equipment supervision and maintenance request tracking with JWT authentication.', image: '' },
  {
    category: 'AI & Cloud',
    tags: ['Unity 3D', 'ML-Agents', 'Deep RL', 'C#', 'Python'],
    year: '2022',
    repo: 'https://github.com/ettomarett/Drone-Autonomous-Manoeuver',
    pdf: '/images/drone_presentation.pdf',
    title: 'TIPE: Autonomous Drone Navigation',
    description: 'Deep reinforcement learning project for autonomous drone navigation in 3D urban environments using Unity ML-Agents.',
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