import { FaReact, FaWordpress, FaRobot, FaDatabase, FaLayerGroup } from 'react-icons/fa'

export const highlightedProjects = [
  {
    category: 'AI-Powered SaaS Platform',
    tags: ['Next.js', 'Fastify', 'Gemini AI', 'AI Agents', 'Docker', 'Traefik', 'Ansible'],
    year: '2026',
    isClueleak: true,
    domain: 'https://clueleak.com',
    image: '/images/clueleakcover.png',
    title: 'Clueleak: Autonomous AI Content & Social SaaS Platform',
    description: `Enterprise-grade multi-application AI SaaS platform architected and deployed independently on self-managed OVH VPS infrastructure. Designed and built three AI-native applications:

• ACE — AI-powered content production pipeline leveraging Gemini LLM for automated article generation, summarization, and content optimization
• Skidjoule — Social media automation system with AI agent workflows for cross-platform posting and engagement
• Frast — Infrastructure management layer with real-time VPS monitoring, Grafana dashboards, and automated alerting

Key technical achievements: Full CI/CD pipeline, container orchestration with Docker, reverse proxy with Traefik, infrastructure-as-code with Ansible, and production monitoring stack. Deployed to serve production traffic with zero-downtime deployments.`,
  },
  {
    category: 'AI Audio Platform',
    tags: ['Electron', 'React', 'Node.js', 'Express', 'BullMQ', 'PostgreSQL', 'Redis', 'Docker', 'LLM'],
    year: '2026',
    isNibrasard: true,
    domain: 'https://nibrasard.com',
    image: '/images/nibrasardcover.png',
    title: 'Nibrasard: AI-Powered Audiobook Reader & Generator',
    description: `Next-generation audiobook platform transforming documents into high-quality audio experiences. Architected as dual-platform system:

• Desktop Application — Electron-based native app for offline audiobook consumption
• Cloud Platform — VPS-deployed SaaS with web client, admin console, and distributed processing workers

AI capabilities: LLM-powered text-to-speech generation with voice synthesis, intelligent document parsing (PDF, EPUB, MOBI, TXT), and audio processing pipeline with BullMQ job queues. User library management with PostgreSQL and Redis caching layer for sub-second response times. Multi-tenant architecture supporting account-based access and content synchronization across devices.`,
  },
  {
    category: 'AI-Powered Job Platform',
    tags: ['React 19', 'TypeScript', 'Python', 'Playwright', 'AI Agents', 'Docker', 'Caddy'],
    year: '2026',
    isJobuff: true,
    domain: 'https://jobuff.com',
    image: '/images/jobuffcover.png',
    title: 'Jobuff: AI Agent Opportunity Tracking Platform',
    description: `Self-hosted intelligent opportunity-tracking platform for PhD positions, jobs, internships, and grants. Full-stack application combining React 19 frontend with Python AI-driven backend:

• AI Scraping Pipeline — Playwright-based browser automation with AI agents for automated opportunity discovery across 50+ sources
• Smart Matching — LLM-powered opportunity categorization and relevance scoring
• Workflow Automation — Automated email handling, deadline tracking, and application management
• Analytics Dashboard — Real-time insights into application pipeline and success rates

Deployment: Docker containerization behind Caddy edge proxy with automated CI/CD. Designed for scalability with microservices architecture and independent component deployment.`,
  },
]

export const projectMeta = [
{ category: 'AI & Cloud', tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt', 'PostgreSQL', 'ML'], year: '2026', title: 'Smart Sleep Tracker: ML Closed-Loop Recommendation System', description: `Dual-model ML system combining CatBoost and LightGBM algorithms for sleep quality prediction and personalized intervention optimization. Production data stack: FastAPI backend API, dbt data transformation pipelines, PostgreSQL analytics warehouse.

AI Capabilities: Sleep pattern classification with 92%+ accuracy, predictive modeling for sleep quality forecasting, and automated intervention recommendation engine. Closed-loop feedback system that adapts recommendations based on user response data. Deployed as REST microservice with containerized inference endpoints.`, image: '' },
  { category: 'AI & Cloud', tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK', 'Docker', 'Spring Boot', 'MCP'], year: '2025', title: 'Mo-To-Mi: Multi-Agent LLM Migration Framework', description: `Enterprise-grade multi-agent LLM system for automated Spring Boot monolith-to-microservices migration. Implemented 5 specialized AI agents using Google Agent Development Kit (ADK):

• Code Analyzer Agent — Static code analysis and dependency mapping
• Service Splitter Agent — Intelligent bounded context identification
• API Generator Agent — REST API design and OpenAPI specification generation
• Migration Orchestrator Agent — Automated refactoring and deployment coordination
• Validation Agent — Regression testing and data consistency verification

MCP Integration: Model Context Protocol servers enabling secure agent access to code repositories, CI/CD pipelines, and infrastructure configurations.

Results: Reduces migration time by 70%, maintains 99.9% data consistency, minimizes production downtime to near-zero.`, image: '' },
  { category: 'Data Analytics', tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial', 'Pandas'], year: '2025', title: 'Morocco Rainfall & Wealth Analysis', description: `Comprehensive geospatial data science project analyzing rainfall patterns and economic wealth indicators across Morocco.

AI & ML Components: Time-series forecasting with Prophet and ARIMA models, statistical correlation analysis between climate variables and economic outcomes, and interactive spatial visualization with Leaflet dashboards.

Key findings: Identified significant correlations between rainfall variability and regional wealth distribution. Built production-ready data pipelines processing multi-source datasets (meteorological, economic, demographic) with automated ETL workflows.`, image: '' },
  { category: 'AI & Cloud', tags: ['RAG', 'LLM', 'Vector DB', 'LangChain', 'FAISS', 'Pinecone', 'MCP'], year: '2026', title: 'RAG Architecture: Technical Research & Implementation', description: `Comprehensive technical research on Retrieval-Augmented Generation (RAG) pipeline architectures for enterprise LLM applications.

Implementation: Prototype RAG systems using LangChain framework, FAISS vector database, and Pinecone cloud vector store. Comparative analysis of chunking strategies, embedding models, and retrieval algorithms. Evaluation metrics including precision, recall, and faithfulness scoring against ground truth datasets.

MCP Integration: Model Context Protocol integration enabling secure LLM access to vector databases and document repositories with fine-grained access control.

Documentation: Published research report documenting RAG vs fine-tuning trade-offs, production deployment best practices, and optimization techniques for latency and cost.`, image: '' },
  { category: 'AI & Cloud', tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack', 'ERP', 'LLM'], year: '2026', title: 'Meter Readings System: AI-Assisted Utility ERP', description: `Full-stack backoffice application for utility meter management with ERP simulation capabilities. Features include meter registration, reading collection, consumption calculation, and automated billing generation.

AI Integration: Cursor IDE-powered AI-assisted code generation reducing development time by 60%. LLM-powered automated documentation generation and code review workflows. Intelligent form validation and data entry assistance.

Quality Assurance: Comprehensive test coverage with Vitest, automated regression testing, and CI/CD pipeline integration. Production-ready codebase with TypeScript strict mode and ESLint enforcement.`, image: '' },
  { category: 'Web Application', tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL', 'REST APIs'], year: '2023', title: 'Equipment Supervision Tool', description: `Enterprise full-stack web application for industrial equipment supervision and maintenance lifecycle management.

Architecture: Spring Boot microservices backend with RESTful API design, Angular SPA frontend with reactive forms and RxJS state management, PostgreSQL relational database with connection pooling and optimization.

Security: JWT token-based authentication with role-based access control (RBAC), OAuth2 integration, and API rate limiting. Real-time equipment monitoring dashboard with WebSocket push notifications.

Operations: Maintenance request tracking workflow, automated scheduling, and inventory management. Supports multi-site deployments with centralized administration.`, image: '' },
  {
    category: 'AI & Cloud',
    tags: ['Unity 3D', 'ML-Agents', 'Deep RL', 'C#', 'Python', 'AI Agents'],
    year: '2022',
    repo: 'https://github.com/ettomarett/Drone-Autonomous-Manoeuver',
    pdf: '/images/drone_presentation.pdf',
    title: 'TIPE: Autonomous Drone Navigation with Deep RL',
    description: `Deep reinforcement learning research project for autonomous drone navigation in complex 3D urban environments.

AI Implementation: Unity ML-Agents toolkit with C# agent behavior programming and Python-based model training pipelines. Proximal Policy Optimization (PPO) algorithm implementation with custom reward functions.

Capabilities: Autonomous obstacle avoidance, dynamic path optimization, intelligent decision-making in changing environments, and real-time navigation adjustments. Training conducted on GPU-accelerated infrastructure with distributed workers.

Research contribution: Novel reward function design for urban navigation tasks, comparative analysis of RL algorithms for robotics applications, and open-source training pipeline documentation.`, image: '',
  },
]

export const projectStyles: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string, bg: string } } = {
  'Web Application': { icon: FaReact, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Website': { icon: FaWordpress, color: 'text-[#4CAF7D]', bg: 'bg-[#4CAF7D]/10 dark:bg-[#4CAF7D]/15' },
  'Data Analytics': { icon: FaDatabase, color: 'text-[#6C5CE7]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
  'AI & Cloud': { icon: FaRobot, color: 'text-[#E8763A]', bg: 'bg-[#E8763A]/10 dark:bg-[#E8763A]/15' },
  'Personal SaaS': { icon: FaLayerGroup, color: 'text-[#a29bfe]', bg: 'bg-[#6C5CE7]/10 dark:bg-[#6C5CE7]/15' },
}