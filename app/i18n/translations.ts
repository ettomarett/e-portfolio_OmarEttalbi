export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      publications: 'Publications',
      experience: 'Experience',
      languages: 'Languages',
      interests: 'Interests',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Software Engineer, ENSIAS Graduate',
      contactMe: 'Contact Me',
      fullCurriculum: 'Full Curriculum',
    },
    about: {
      title: 'About Me',
      bio1: 'Software Engineering graduate of ENSIAS (Mohammed V University, Rabat) with a Master\'s in Software Engineering. My training combines rigorous engineering foundations from Preparatory Classes for Engineering Schools - Technology and Industrial Sciences (top 18% nationally) with advanced specialization in AI, enterprise architecture, and full-stack development.',
      bio2: 'I design and build intelligent, production-grade systemsâ€”spanning multi-agent AI platforms, LLM pipelines, enterprise web applications, and data analytics. My work includes autonomous AI agents, AI-powered audiobook platforms, and job tracking systems deployed on self-managed infrastructure with Docker, CI/CD, and monitoring. Technical stack: Python, Java/Spring Boot, TypeScript/React/Next.js, SAP S/4HANA, dbt, Spark.',
      bio3: 'Software Engineer at Diehl Aviation (Toulouse, France), driving shop floor digitalization with SAP S/4HANA, SAP Datasphere, and SAP Analytics Cloud. Previously delivered full-stack platforms and DevOps pipelines at RaiseUp Consulting (Casablanca). Certified in IBM AI Analysis, SAP Analytics Cloud, SAP Business Transformation, and Deep Reinforcement Learning. I blend deep technical expertise with product-focused delivery to create measurable impact.',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      edu: [
        {
          school: 'ENSIAS, Mohammed V University',
          degree: "Master's Software Engineering Degree, Software Engineering",
          location: 'Rabat, Morocco',
          years: '2022 to 2026',
        },
        {
          school: 'Preparatory Classes for Engineering Schools - Technology and Industrial Sciences, Settat',
          degree: 'Maths, Physics & Engineering Sciences, ranked top 18% in national engineering school entrance exam',
          location: 'Settat, Morocco',
          years: '2020 to 2022',
        },
      ],
      certs: [
        {
          name: 'IBM AI Analyst Professional Certificate',
          issuer: 'IBM',
          year: '2025',
          badge: '/images/artificial-intelligence-analyst-certificate.png',
          pdf: '/images/IBMDesign20260617-31-3uhf8l.pdf',
          url: 'https://www.credly.com/badges/ca3397a0-ce39-4de5-861f-fed63860857c/public_url',
        },
        {
          name: 'SAP Certified Data Analyst: SAP Analytics Cloud',
          issuer: 'SAP',
          year: '2026',
          badge: '/images/sap-certified-data-analyst-sap-analytics-cloud.png',
          pdf: '/images/SAPCertification20260617-31-hirb70.pdf',
          url: 'https://www.credly.com/badges/645911e6-d325-424f-85fd-e2260b0daba7/public_url',
        },
        {
          name: 'SAP Certified: Business Transformation Consultant',
          issuer: 'SAP',
          year: '2026',
          badge: '/images/sap-certified-business-transformation-consultant.png',
          pdf: '/images/SAPCertification20260701-7-4a8tm7.pdf',
          url: 'https://www.credly.com/badges/290cb223-0223-41b5-8568-77a3a1de11ca/public_url',
        },
        {
          name: 'Deep Reinforcement Learning in Python',
          issuer: 'DataCamp',
          year: '2025',
          badge: '/images/drl_datacamp_badge.png',
          pdf: '/images/DRL_datacamp_certificate.pdf',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7b79fbef5ba370a5b3702939f414e2d193c89edf',
        },
      ],
    },
    services: {
      title: 'Key Areas of Interest',
      subtitle: 'Here are the main domains where I focus my energy, combining technical skills and creativity to deliver impactful results.',
      items: [
        {
          title: 'AI & Machine Learning',
          description: 'Supervised/unsupervised/reinforcement learning, neural networks, LLMs, Transformers, multi-agent systems. Hands-on with TensorFlow, PyTorch, scikit-learn, CatBoost, LightGBM, and MLOps (MLFlow).',
        },
        {
          title: 'Full-Stack Development',
          description: 'Java/Spring Boot, TypeScript/React/Next.js, Python/FastAPI. REST API design, JWT/RBAC authentication, ORM-based persistence, and modern frontend frameworks.',
        },
        {
          title: 'Data Engineering & BI',
          description: 'ETL pipelines, data warehousing (star/snowflake schemas), dbt, SAP Datasphere, Power BI, Tableau. Geospatial analysis, time series forecasting, and interactive dashboards.',
        },
        {
          title: 'Model-Driven & Enterprise Architecture',
          description: 'MDE (MOF, Ecore, ATL/QVT, DSLs), MDA, TOGAF, ArchiMate, BPM/BPMN 2.0, enterprise ontologies, and IS governance frameworks (ITIL, COBIT).',
        },
        {
          title: 'Multi-Agent Systems',
          description: 'BDI architectures, FIPA-ACL communication, agent-based modeling. Built a 5-agent LLM-powered system for automated monolith-to-microservices migration.',
        },
        {
          title: 'DevOps & Cloud',
          description: 'Docker, CI/CD (GitHub Actions), Git workflows, cloud architectures (IaaS/PaaS/SaaS), Linux administration, containerized deployments, and infrastructure as code.',
        },
      ],
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Here are some of my recent projects. Each one is crafted with attention to detail and focus on user experience.',
      viewPresentation: 'Preview Presentation',
      viewRepo: 'View Repository',
      viewDetails: 'View Details',
      personalProject: 'Personal Project',
      highlighted: 'Highlighted Projects',
      otherProjects: 'Other Projects',
      items: [
        {
          title: 'Smart Sleep Tracker: ML Closed-Loop Recommendation System',
          description: 'Dual-model closed-loop system: Model A (CatBoost) for sleep quality prediction and Model B (LightGBM Ranker) for optimizing personalized intervention policies. Learns from user feedback to refine recommendations. Modern data stack with Great Expectations for data quality.',
        },
        {
          title: 'Mo-To-Mi: Multi-Agent LLM Migration Framework',
          description: 'Multi-agent AI system for automated migration of monolithic Spring Boot apps to microservices. 5 specialized autonomous agents (Architect, Observer, Strategist, Builder, Validator), each powered by dedicated LLMs with domain-specific prompts and tools. Tested on real applications.',
        },
        {
          title: 'Morocco Rainfall & Wealth Analysis',
          description: 'Individual project: multi-source geospatial data integration (45-year rainfall records, Relative Wealth Index). Interactive dashboards with Leaflet maps. Benchmarked 4 time series models: Prophet achieved best MAE (8.41). Full Python pipeline with point-in-polygon analysis.',
        },
        {
          title: 'RAG Architecture: Technical Research Report',
          description: 'Research report on RAG pipeline architecture: document retrieval, embedding, chunking, vector databases. Comparative analysis vs. fine-tuning and traditional search. Market analysis of RAG ecosystem. Systematic literature review (2022 to 2025) with structured scoring matrices.',
        },
        {
          title: 'Meter Readings System: Utility Meter Management Backoffice',
          description: 'Backoffice web application for Rabat Energie & Eau (REE): meter fleet management (water & electricity), field agent assignment to city districts, and consumption data centralization before billing. ERP integration simulation module. Built with a structured AI Coding methodology: AI-assisted requirements analysis (NLP), code generation, test data creation, and documentation using Cursor IDE. 75 tests with Vitest.',
        },
        {
          title: 'Equipment Supervision Tool',
          description: 'Full-stack web application for equipment supervision, maintenance request tracking, and role-based access control (RBAC). UML design, CRUD operations, and user-friendly dashboard for supervisors and employees.',
        },
        {
          title: 'TIPE: Autonomous Drone Navigation with Deep RL',
          description: 'Individual CPGE research project: modeled a city environment, drone, and sensors in Unity 3D. Trained an autonomous navigation agent using the ML-Agents toolkit with deep RL (Q-learning, policy gradients, reward shaping) for waste management network navigation.',
        },
        {
          title: 'Clueleak: AI Content & Social SaaS Platform',
          description: 'Production-grade multi-application SaaS platform built and deployed independently on a self-managed OVH VPS. Covers AI-powered content production (ACE), social media automation (Skidjoule), and VPS infrastructure management (Frast).',
        },
        {
          title: 'Nibrasard: Audiobook Reader & Generator Platform',
          description: 'Audiobook reader and generator for PDF, EPUB, MOBI, and TXT documents. Ships as a desktop app (Electron) and account-based cloud platform (VPS) with web client, admin console, and processing workers. Features OCR, TTS, and AI-powered document processing.',
        },
        {
          title: 'Jobuff: Self-Hosted Opportunity Tracking Platform',
          description: 'Self-hosted opportunity-tracking application for managing PhD positions, jobs, internships, and grants. Combines React frontend with Python scraping pipeline, browser automation, email handling, and Docker-based deployment behind Caddy edge proxy.',
        },
      ],
    },
    publications: {
      title: 'Scientific Publication',
      subtitle: 'Published research bridging neuroscience, content analysis, and viewer behavior.',
      badge: 'Scientific Publication',
      bookTitle: 'Khozai: Understanding Content Engagement Through Neuroscience',
      bookDescription: 'A formal scientific framework connecting the physics of video content to the biology of the human brain to the behavior of real viewers. The book spans 13 chapters across 5 parts, covering brain architecture, dimensions of experience, behavioral measurement vectors, mutation and correlation engines, inference chains, calibration and governance, and real-world applications. A multidisciplinary work at the intersection of neuroscience, data science, and content analytics.',
      readOn: 'Read on khozai.com',
      tags: ['Neuroscience', 'Content Analytics', 'Behavioral Science', 'Data Science', 'Formal Framework'],
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My professional journey in software engineering, focusing on full-stack development, data-driven solutions, and production-ready applications.',
      keyAchievements: 'Key Achievements:',
      technologiesUsed: 'Technologies Used:',
      current: 'Current',
      finished: 'Finished',
      previous: 'Previous',
      items: [
        {
          title: 'Software Engineering Intern',
          company: 'Diehl Aviation',
          period: 'Toulouse, France | March to September 2026',
          type: 'Finished',
          description: 'Digitalization of shop floor operational processes in the MRO (Maintenance, Repair & Overhaul) aviation sector using SAP technologies.',
          achievements: [
            'Digitalizing shop floor operational processes using SAP S/4HANA',
            'Building data processing pipelines and dashboards with SAP Datasphere and SAP Analytics Cloud',
            'Working within MRO (Maintenance, Repair & Overhaul) aviation workflows',
          ],
        },
        {
          title: 'DevOps Engineer Intern',
          company: 'RaiseUp Consulting',
          period: 'Casablanca, Morocco | May to Sep 2025',
          type: 'Finished',
          description: 'Deployed and operated a production platform for student lifecycle management, handling infrastructure, CI/CD, and application security.',
          achievements: [
            'Deployed and operated a Next.js 15 + PostgreSQL production platform (student lifecycle management) with Docker containerization and automated database migrations',
            'Built a Jenkins-based CI/CD pipeline; integrated Sonarqube and Trivy for automated code-quality and security scanning',
            'Implemented RBAC authentication and structured, audited workflows',
          ],
        },
        {
          title: 'Full Stack Developer Intern',
          company: 'RaiseUp Consulting',
          period: 'Casablanca, Morocco | May to Sep 2024',
          type: 'Previous',
          description: "Designed and developed the company's official production website end-to-end.",
          achievements: [
            "Built and shipped the company's production website end-to-end: 20+ reusable React components and responsive Next.js (SSR/SSG) layouts",
            "Owned the full UX/UI; site was adopted as the official production version and deployed to the company's domain",
          ],
        },
      ],
    },
    languages: {
      title: 'Languages',
      subtitle: 'My language proficiency across different languages',
      proficiency: 'proficiency',
      items: [
        { name: 'French', level: 'Fluent' },
        { name: 'Arabic', level: 'Native' },
        { name: 'English', level: 'Fluent' },
      ],
    },
    interests: {
      title: 'Other Interests',
      subtitle: 'Beyond software engineering, here are my extracurricular activities and personal interests',
      extracurricular: 'Extracurricular',
      hobbies: 'Hobbies',
      items: [
        {
          title: 'Co-Founder & Lead, ENSIAS Radio',
          description: 'Student club leadership and content creation',
        },
        {
          title: 'Computer Vision: YOLO & OpenCV',
          description: 'Object detection, image processing, model fine-tuning, and video analysis through personal side projects',
        },
        {
          title: 'Blender: 3D Modeling',
          description: 'Mesh modeling, sculpting, materials/textures, lighting, scene composition, and rendering',
        },
        {
          title: 'Chess',
          description: 'Active player working on tactical pattern recognition and strategic thinking',
        },
        {
          title: 'Audio Processing',
          description: 'Music production and audio engineering',
        },
      ],
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'Feel free to reach out for opportunities, collaborations, or just to connect!',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'Ã€ propos',
      services: 'CompÃ©tences',
      projects: 'Projets',
      publications: 'Publications',
      experience: 'ExpÃ©rience',
      languages: 'Langues',
      interests: 'Centres d\'intÃ©rÃªt',
      certifications: 'Certifications',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'IngÃ©nieur Logiciel, DiplÃ´mÃ© ENSIAS',
      contactMe: 'Me Contacter',
      fullCurriculum: 'Curriculum Complet',
    },
    about: {
      title: 'Ã€ propos',
      bio1: 'DiplÃ©mÃ© en GÃ©nie Logiciel de l\'ENSIAS (UniversitÃ© Mohammed V, Rabat) avec un Master en GÃ©nie Logiciel. Ma formation allie des bases d\'ingÃ©nieur rigoureuses acquises en Classes PrÃ©paratoires aux Grandes ´Ecoles - FiliÃ¨re Technologie et Sciences Industrielles (top 18% national) avec une spÃ©cialisation avancÃ©e en IA, architecture d\'entreprise et dÃ©veloppement full-stack.',
      bio2: 'Je conçois et construis des systÃ¨mes intelligents de qualitÃ© production—s\'Ã©tendant des plateformes multi-agents IA, pipelines LLM, applications web d\'entreprise et analytics data. Mon travail inclut des agents IA autonomes, des plateformes de livres audio propulsÃ©s par l\'IA, et des systÃ¨mes de suivi d\'opportunitÃ©s dÃ©ployÃ©s sur infrastructure auto-gÃ©rÃ©e avec Docker, CI/CD et monitoring. Stack technique : Python, Java/Spring Boot, TypeScript/React/Next.js, SAP S/4HANA, dbt, Spark.',
      bio3: 'IngÃ©nieur Logiciel chez Diehl Aviation (Toulouse, France), pilotant la digitalisation des processus d\'atelier avec SAP S/4HANA, SAP Datasphere et SAP Analytics Cloud. Auparavant, j\'ai livrÃ© des plateformes full-stack et pipelines DevOps chez RaiseUp Consulting (Casablanca). CertifiÃ© IBM AI Analyst, SAP Analytics Cloud, SAP Business Transformation et Deep Reinforcement Learning. J\'allie expertise technique profonde et livraison orientÃ©e produit pour crÃ©er un impact mesurable.',
      education: 'Formation',
      skills: 'CompÃ©tences',
      certifications: 'Certifications',
      edu: [
        {
          school: 'ENSIAS, UniversitÃ© Mohammed V',
          degree: 'Cycle d\'IngÃ©nieur, GÃ©nie Logiciel',
          location: 'Rabat, Maroc',
          years: '2022 Ã  2026',
        },
        {
          school: 'CPGE TSI, Classes PrÃ©paratoires, Settat',
          degree: 'MathÃ©matiques, Physique & Sciences de l\'IngÃ©nieur, classÃ© top 18% au Concours National Commun',
          location: 'Settat, Maroc',
          years: '2020 to 2022',
        },
      ],
      certs: [
        {
          name: 'IBM AI Analyst Professional Certificate',
          issuer: 'IBM',
          year: '2025',
          badge: '/images/artificial-intelligence-analyst-certificate.png',
          pdf: '/images/IBMDesign20260617-31-3uhf8l.pdf',
          url: 'https://www.credly.com/badges/ca3397a0-ce39-4de5-861f-fed63860857c/public_url',
        },
        {
          name: 'SAP Certified Data Analyst: SAP Analytics Cloud',
          issuer: 'SAP',
          year: '2026',
          badge: '/images/sap-certified-data-analyst-sap-analytics-cloud.png',
          pdf: '/images/SAPCertification20260617-31-hirb70.pdf',
          url: 'https://www.credly.com/badges/645911e6-d325-424f-85fd-e2260b0daba7/public_url',
        },
        {
          name: 'SAP Certified: Business Transformation Consultant',
          issuer: 'SAP',
          year: '2026',
          badge: '/images/sap-certified-business-transformation-consultant.png',
          pdf: '/images/SAPCertification20260701-7-4a8tm7.pdf',
          url: 'https://www.credly.com/badges/290cb223-0223-41b5-8568-77a3a1de11ca/public_url',
        },
        {
          name: 'Deep Reinforcement Learning en Python',
          issuer: 'DataCamp',
          year: '2025',
          badge: '/images/drl_datacamp_badge.png',
          pdf: '/images/DRL_datacamp_certificate.pdf',
          url: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/7b79fbef5ba370a5b3702939f414e2d193c89edf',
        },
      ],
    },
    services: {
      title: 'Domaines de CompÃ©tence',
      subtitle: 'Voici les principaux domaines oÃ¹ je concentre mon Ã©nergie, combinant compÃ©tences techniques et crÃ©ativitÃ© pour produire des rÃ©sultats impactants.',
      items: [
        {
          title: 'IA & Machine Learning',
          description: 'Apprentissage supervisÃ©/non-supervisÃ©/par renforcement, rÃ©seaux de neurones, LLMs, Transformers, systÃ¨mes multi-agents. Pratique avec TensorFlow, PyTorch, scikit-learn, CatBoost, LightGBM et MLOps (MLFlow).',
        },
        {
          title: 'DÃ©veloppement Full-Stack',
          description: 'Java/Spring Boot, TypeScript/React/Next.js, Python/FastAPI. Conception d\'API REST, authentification JWT/RBAC, persistance ORM et frameworks frontend modernes.',
        },
        {
          title: 'Data Engineering & BI',
          description: 'Pipelines ETL, entrepÃ´ts de donnÃ©es (schÃ©mas Ã©toile/flocon), dbt, SAP Datasphere, Power BI, Tableau. Analyse gÃ©ospatiale, prÃ©vision de sÃ©ries temporelles et tableaux de bord interactifs.',
        },
        {
          title: 'IngÃ©nierie DirigÃ©e par les ModÃ¨les & Architecture d\'Entreprise',
          description: 'MDE (MOF, Ecore, ATL/QVT, DSLs), MDA, TOGAF, ArchiMate, BPM/BPMN 2.0, ontologies d\'entreprise et cadres de gouvernance SI (ITIL, COBIT).',
        },
        {
          title: 'SystÃ¨mes Multi-Agents',
          description: 'Architectures BDI, communication FIPA-ACL, modÃ©lisation Ã  base d\'agents. Construction d\'un systÃ¨me Ã  5 agents LLM pour la migration automatisÃ©e de monolithes vers des microservices.',
        },
        {
          title: 'DevOps & Cloud',
          description: 'Docker, CI/CD (GitHub Actions), workflows Git, architectures cloud (IaaS/PaaS/SaaS), administration Linux, dÃ©ploiements conteneurisÃ©s et infrastructure as code.',
        },
      ],
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Voici quelques-uns de mes projets rÃ©cents. Chacun est rÃ©alisÃ© avec attention aux dÃ©tails et un focus sur l\'expÃ©rience utilisateur.',
      viewPresentation: 'AperÃ§u PrÃ©sentation',
      viewRepo: 'Voir le DÃ©pÃ´t',
      viewDetails: 'Voir les DÃ©tails',
      personalProject: 'Projet Personnel',
      highlighted: 'Projets Mis en Avant',
      otherProjects: 'Autres Projets',
      items: [
        {
          title: 'Smart Sleep Tracker: SystÃ¨me de Recommandation ML en Boucle FermÃ©e',
          description: 'SystÃ¨me en boucle fermÃ©e Ã  double modÃ¨le : ModÃ¨le A (CatBoost) pour la prÃ©diction de la qualitÃ© du sommeil et ModÃ¨le B (LightGBM Ranker) pour l\'optimisation des politiques d\'intervention personnalisÃ©es. Apprend du feedback utilisateur pour affiner les recommandations. Stack de donnÃ©es moderne avec Great Expectations.',
        },
        {
          title: 'Mo-To-Mi: Framework de Migration LLM Multi-Agents',
          description: 'SystÃ¨me IA multi-agents pour la migration automatisÃ©e d\'applications Spring Boot monolithiques vers des microservices. 5 agents autonomes spÃ©cialisÃ©s (Architecte, Observateur, StratÃ¨ge, Constructeur, Validateur), chacun alimentÃ© par des LLMs dÃ©diÃ©s. TestÃ© sur des applications rÃ©elles.',
        },
        {
          title: 'Analyse des PrÃ©cipitations & de la Richesse au Maroc',
          description: 'Projet individuel : intÃ©gration de donnÃ©es gÃ©ospatiales multi-sources (45 ans de relevÃ©s pluviomÃ©triques, Indice de Richesse Relative). Tableaux de bord interactifs avec cartes Leaflet. 4 modÃ¨les de sÃ©ries temporelles comparÃ©s : Prophet a obtenu le meilleur MAE (8.41). Pipeline Python complet.',
        },
        {
          title: 'Architecture RAG : Rapport de Recherche Technique',
          description: 'Rapport de recherche sur l\'architecture des pipelines RAG : recherche de documents, embedding, chunking, bases vectorielles. Analyse comparative vs. fine-tuning et recherche traditionnelle. Analyse du marchÃ© de l\'Ã©cosystÃ¨me RAG. Revue systÃ©matique de la littÃ©rature (2022 Ã  2025).',
        },
        {
          title: 'SI RelevÃ©s : Backoffice de Gestion des Compteurs',
          description: 'Application Backoffice Web pour Rabat Ã‰nergie & Eau (REE) : gestion du parc de compteurs (eau et Ã©lectricitÃ©), affectation des agents de terrain aux quartiers, et centralisation des donnÃ©es de consommation avant facturation. Module de simulation d\'intÃ©gration ERP. DÃ©veloppÃ© avec une mÃ©thodologie AI Coding structurÃ©e : analyse des besoins assistÃ©e par IA (NLP), gÃ©nÃ©ration de code, crÃ©ation de jeux de donnÃ©es de test et documentation via Cursor IDE. 75 tests avec Vitest.',
        },
        {
          title: 'Outil de Supervision d\'Ã‰quipements',
          description: 'Application web full-stack pour la supervision d\'Ã©quipements, le suivi des demandes de maintenance et le contrÃ´le d\'accÃ¨s basÃ© sur les rÃ´les (RBAC). Conception UML, opÃ©rations CRUD et tableau de bord convivial.',
        },
        {
          title: 'TIPE : Navigation Autonome de Drone par Deep RL',
          description: 'Projet de recherche CPGE individuel : modÃ©lisation d\'un environnement urbain, d\'un drone et de capteurs dans Unity 3D. EntraÃ®nement d\'un agent de navigation autonome avec le toolkit ML-Agents et le deep RL (Q-learning, policy gradients, reward shaping) pour la navigation dans un rÃ©seau de gestion des dÃ©chets.',
        },
        {
          title: 'Clueleak : Plateforme SaaS IA & MÃ©dias Sociaux',
          description: 'Plateforme multi-applications SaaS de niveau production, construite et dÃ©ployÃ©e indÃ©pendamment sur un VPS OVH autogÃ©rÃ©. Couvre la production de contenu IA (ACE), l\'automatisation des rÃ©seaux sociaux (Skidjoule) et la gestion d\'infrastructure VPS (Frast).',
        },
        {
          title: 'Nibrasard : Plateforme de Lecteur et GÃ©nÃ©rateur de Livres Audio',
          description: 'Lecteur et gÃ©nÃ©rateur de livres audio pour documents PDF, EPUB, MOBI et TXT. LivrÃ© sous forme d\'application de bureau (Electron) et plateforme cloud basÃ©e sur un compte (VPS) avec client web, console d\'administration et workers de traitement. FonctionnalitÃ©s OCR, TTS et traitement de documents par IA.',
        },
        {
          title: 'Jobuff : Plateforme de Suivi d\'OpportunitÃ©s Auto-hÃ©bergÃ©e',
          description: 'Application auto-hÃ©bergÃ©e de suivi d\'opportunitÃ©s pour gÃ©rer les postes de doctorat, emplois, stages et bourses. Combine un frontend React avec un pipeline de scraping Python, automatisation de navigateur, gestion d\'emails, et dÃ©ploiement Docker derriÃ¨re un proxy edge Caddy.',
        },
      ],
    },
    publications: {
      title: 'Publication Scientifique',
      subtitle: 'Recherche publiÃ©e Ã  l\'intersection des neurosciences, de l\'analyse de contenu et du comportement des spectateurs.',
      badge: 'Publication Scientifique',
      bookTitle: 'Khozai : Comprendre l\'Engagement du Contenu par les Neurosciences',
      bookDescription: 'Un cadre scientifique formel reliant la physique du contenu vidÃ©o Ã  la biologie du cerveau humain et au comportement des spectateurs rÃ©els. Le livre couvre 13 chapitres rÃ©partis en 5 parties : architecture cÃ©rÃ©brale, dimensions de l\'expÃ©rience, vecteurs de mesure comportementale, moteurs de mutation et de corrÃ©lation, chaÃ®nes d\'infÃ©rence, calibration et gouvernance, et applications concrÃ¨tes. Un travail multidisciplinaire Ã  l\'intersection des neurosciences, de la data science et de l\'analyse de contenu.',
      readOn: 'Lire sur khozai.com',
      tags: ['Neurosciences', 'Analyse de Contenu', 'Sciences Comportementales', 'Data Science', 'Cadre Formel'],
    },
    experience: {
      title: 'ExpÃ©rience Professionnelle',
      subtitle: 'Mon parcours professionnel en gÃ©nie logiciel, axÃ© sur le dÃ©veloppement full-stack, les solutions data-driven et les applications prÃªtes pour la production.',
      keyAchievements: 'RÃ©alisations ClÃ©s :',
      technologiesUsed: 'Technologies UtilisÃ©es :',
      current: 'En cours',
      finished: 'TerminÃ©',
      previous: 'PrÃ©cÃ©dent',
      items: [
        {
          title: 'Stagiaire IngÃ©nieur Logiciel',
          company: 'Diehl Aviation',
          period: 'Toulouse, France | Mars Ã  Septembre 2026',
          type: 'Finished',
          description: 'Digitalisation des processus opÃ©rationnels du shop floor dans le secteur MRO (Maintenance, Repair & Overhaul) aÃ©ronautique avec les technologies SAP.',
          achievements: [
            'Digitalisation des processus opÃ©rationnels du shop floor avec SAP S/4HANA',
            'Construction de pipelines de traitement de donnÃ©es et tableaux de bord avec SAP Datasphere et SAP Analytics Cloud',
            'Travail au sein des workflows MRO (Maintenance, Repair & Overhaul) aÃ©ronautiques',
          ],
        },
        {
          title: 'Stagiaire IngÃ©nieur DevOps',
          company: 'RaiseUp Consulting',
          period: 'Casablanca, Maroc | Mai Ã  Sep 2025',
          type: 'Finished',
          description: 'DÃ©ploiement et exploitation d\'une plateforme de production pour la gestion du cycle de vie Ã©tudiant, couvrant l\'infrastructure, CI/CD et la sÃ©curitÃ© applicative.',
          achievements: [
            'DÃ©ploiement et exploitation d\'une plateforme Next.js 15 + PostgreSQL (gestion du cycle Ã©tudiant) avec conteneurisation Docker et migrations automatisÃ©es',
            'Construction d\'un pipeline CI/CD Jenkins ; intÃ©gration de Sonarqube et Trivy pour l\'analyse automatisÃ©e de qualitÃ© et sÃ©curitÃ© du code',
            'ImplÃ©mentation de l\'authentification RBAC et de workflows structurÃ©s et auditÃ©s',
          ],
        },
        {
          title: 'Stagiaire DÃ©veloppeur Full Stack',
          company: 'RaiseUp Consulting',
          period: 'Casablanca, Maroc | Mai Ã  Sep 2024',
          type: 'Previous',
          description: 'Conception et dÃ©veloppement complet du site web officiel de production de l\'entreprise.',
          achievements: [
            'Construction et livraison du site web de production de bout en bout : 20+ composants React rÃ©utilisables et layouts Next.js (SSR/SSG) responsives',
            'PropriÃ©tÃ© complÃ¨te de l\'UX/UI ; site adoptÃ© comme version de production officielle et dÃ©ployÃ© sur le domaine de l\'entreprise',
          ],
        },
      ],
    },
    languages: {
      title: 'Langues',
      subtitle: 'Mon niveau de maÃ®trise dans diffÃ©rentes langues',
      proficiency: 'maÃ®trise',
      items: [
        { name: 'FranÃ§ais', level: 'Courant' },
        { name: 'Arabe', level: 'Langue Maternelle' },
        { name: 'Anglais', level: 'Courant' },
      ],
    },
    interests: {
      title: 'Autres Centres d\'IntÃ©rÃªt',
      subtitle: 'Au-delÃ  du gÃ©nie logiciel, voici mes activitÃ©s parascolaires et centres d\'intÃ©rÃªt personnels',
      extracurricular: 'Parascolaire',
      hobbies: 'Loisirs',
      items: [
        {
          title: 'Co-Fondateur & Responsable, ENSIAS Radio',
          description: 'Leadership associatif et crÃ©ation de contenu',
        },
        {
          title: 'Vision par Ordinateur : YOLO & OpenCV',
          description: 'DÃ©tection d\'objets, traitement d\'images, fine-tuning de modÃ¨les et analyse vidÃ©o Ã  travers des projets personnels',
        },
        {
          title: 'Blender : ModÃ©lisation 3D',
          description: 'ModÃ©lisation de maillage, sculpting, matÃ©riaux/textures, Ã©clairage, composition de scÃ¨nes et rendu',
        },
        {
          title: 'Ã‰checs',
          description: 'Joueur actif travaillant sur la reconnaissance de patterns tactiques et la rÃ©flexion stratÃ©gique',
        },
        {
          title: 'Traitement Audio',
          description: 'Production musicale et ingÃ©nierie audio',
        },
      ],
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'N\'hÃ©sitez pas Ã  me contacter pour des opportunitÃ©s, des collaborations ou simplement pour Ã©changer !',
    },
  },
}

export type Language = 'en' | 'fr'
export type Translations = typeof translations.en

