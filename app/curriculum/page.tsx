'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const semesters = [
  {
    id: 'cpge',
    num: 'P',
    title: 'Preparatory School — CPGE TSI',
    year: '2020–2022 · Classes Préparatoires aux Grandes Écoles, Settat',
    color: '#c0392b',
    modules: [
      {
        code: 'CNC',
        title: 'Concours National Commun — Filière TSI',
        subs: [
          {
            name: 'National Competitive Exam Result',
            prof: '2022',
            topics: 'Ranked in the top 18% nationally in the TSI track of the Concours National Commun (CNC). Two-year intensive program covering advanced mathematics (analysis, algebra, probability), physics, engineering sciences, and computer science.',
          },
        ],
      },
      {
        code: 'TIPE',
        title: 'Manoeuvre Automatique d\'un Drone par Apprentissage par Renforcement Profond',
        subs: [
          {
            name: 'Autonomous Drone Navigation using Deep Reinforcement Learning',
            prof: 'Code CNC: ST046T',
            topics: 'Individual TIPE research project. Designed an autonomous drone system for waste management network navigation using deep RL. Full pipeline: Bellman equation, Q-learning algorithm, discounted returns & convergence analysis, policy/value functions, neural network training (forward/back propagation, gradient descent, activation functions), agent observation space design (distance, angle, lidar sensors), and sim-to-real transfer methodology.',
            tags: ['Machine Learning'],
          },
          {
            name: 'Context',
            prof: '2022 · Filière TSI',
            topics: 'Omar Ettalbi (individual project) · Thème national: Santé Prévention',
          },
        ],
      },
    ],
  },
  {
    id: 's1',
    num: 'S1',
    title: 'Semester 1 — Tronc Commun',
    year: '2022–2023 · 1ère Année',
    color: '#E8763A',
    modules: [
      {
        code: 'M1.1',
        title: 'Algorithmique & Structures de Données',
        subs: [
          { name: 'Algorithmique', prof: 'Pr. A. Ettalbi', topics: 'Complexity analysis, sorting/searching algorithms, divide-and-conquer, dynamic programming, greedy algorithms' },
          { name: 'Structures de Données', prof: 'Pr. A. El Faker', topics: 'Linked lists, stacks, queues, trees, hash tables, graphs, heaps, advanced traversal algorithms' },
          { name: 'Programmation Procédurale', prof: 'Pr. H. Guermah', topics: 'C programming, procedural paradigm, memory management, pointers, file I/O' },
        ],
      },
      {
        code: 'M1.2',
        title: 'Architecture des Ordinateurs',
        subs: [
          { name: 'Architecture des Ordinateurs', prof: 'Pr. M. Senhadji', topics: 'Von Neumann architecture, CPU design, instruction sets, pipelining, memory hierarchy, cache' },
          { name: 'Assembleur et Microprocesseur', prof: 'Pr. M. Senhadji', topics: 'Assembly language (x86), registers, addressing modes, interrupt handling' },
        ],
      },
      {
        code: 'M1.3',
        title: 'Statistique & Probabilité Appliquée',
        subs: [
          { name: 'Probabilités', prof: 'Pr. I. Amrani', topics: 'Probability spaces, conditional probability, Bayes\' theorem, random variables, distributions (binomial, Poisson, normal), expectation, variance' },
          { name: 'Statistique Descriptive pour l\'Ingénieur', prof: 'Pr. L. Aouragh', topics: 'Central tendency, dispersion, frequency distributions, data visualization, correlation analysis', tags: ['Machine Learning', 'Data Visualization'] },
          { name: 'Simulation des Comportements Probabilistes', prof: 'Pr. A. Hamlili', topics: 'Monte Carlo methods, random number generation, stochastic simulation, probabilistic modeling' },
        ],
      },
      {
        code: 'M1.4',
        title: 'Éléments de Recherche Opérationnelle',
        subs: [
          { name: 'Théorie des Graphes', prof: 'Pr. A. Bellabdaoui', topics: 'Graph representations, shortest paths (Dijkstra, Bellman-Ford), spanning trees, graph coloring, network flows', tags: ['Knowledge Graphs'] },
          { name: 'Programmation Linéaire', prof: 'Pr. A. Bellabdaoui', topics: 'Simplex method, duality, sensitivity analysis, integer programming' },
        ],
      },
      {
        code: 'M1.5',
        title: 'Éthique, Métiers et Projet de Challenge',
        subs: [
          { name: 'Éthique et Déontologie', prof: 'Pr. N. Chegri', topics: 'Professional ethics in IT, intellectual property, data privacy, responsible innovation' },
        ],
      },
      {
        code: 'M1.6',
        title: 'Gestion, Économie et Finance 1',
        subs: [
          { name: 'Économie d\'Entreprise & Introduction au Management', prof: 'Pr. O. Ouhejjou / Pr. A. Bentaleb', topics: 'Business economics, organizational management, strategic planning' },
          { name: 'Comptabilité Générale et Gestion Financière', prof: 'Pr. K. Chaouni', topics: 'Accounting fundamentals, financial statements, cost analysis' },
        ],
      },
    ],
  },
  {
    id: 's2',
    num: 'S2',
    title: 'Semester 2 — Tronc Commun',
    year: '2023–2024 · 1ère Année',
    color: '#E8763A',
    modules: [
      {
        code: 'M2.1',
        title: 'Bases de Données',
        subs: [
          { name: 'Bases de Données I', prof: 'Pr. M. Nassar', topics: 'Relational model, ER diagrams, functional dependencies, normalization (1NF–BCNF), SQL fundamentals', tags: ['Data Engineering', 'Knowledge Graphs'] },
          { name: 'Bases de Données II', prof: 'Pr. M. Nassar', topics: 'Advanced SQL, query optimization, triggers, stored procedures, transaction management, concurrency control', tags: ['Data Engineering'] },
        ],
      },
      {
        code: 'M2.2',
        title: 'Réseaux et Système',
        subs: [
          { name: 'Transmission de Données', prof: 'Pr. A. Faqihi', topics: 'Physical/data link layers, encoding, error detection/correction, protocols' },
          { name: 'Réseaux Informatiques', prof: 'Pr. M. Erradi', topics: 'OSI/TCP-IP models, routing, switching, network architecture, network security basics' },
          { name: 'Système d\'Exploitation', prof: 'Pr. M. Zbakh', topics: 'Process management, memory management, file systems, scheduling, concurrency, threads' },
        ],
      },
      {
        code: 'M2.3',
        title: 'Fondements de l\'Informatique',
        subs: [
          { name: 'Calculabilité & Complexité', prof: 'Pr. S. Baina', topics: 'Turing machines, decidability, computational complexity classes (P, NP, NP-complete), reductions' },
          { name: 'Logique des Prédicats', prof: 'Pr. B. Hdioud', topics: 'Propositional logic, first-order logic, quantifiers, formal proofs, logical inference, resolution', tags: ['Knowledge Graphs', 'Ontologies'] },
        ],
      },
      {
        code: 'M2.4',
        title: 'Programmation Orientée Objet et Développement Logiciel',
        subs: [
          { name: 'Programmation Orientée Objet', prof: 'Pr. A. El Faker', topics: 'OOP principles (encapsulation, inheritance, polymorphism), Java/Python, design patterns, SOLID principles' },
          { name: 'Développement Web', prof: 'Pr. W. Ettazi', topics: 'HTML/CSS/JavaScript, frontend/backend fundamentals, HTTP, RESTful principles' },
          { name: 'Développement XML', prof: 'Pr. M. Abik', topics: 'XML syntax, DTD, XML Schema (XSD), XSLT, XPath, structured data exchange, XML-based data integration', tags: ['Data Engineering', 'Knowledge Graphs'] },
        ],
      },
      {
        code: 'M2.6',
        title: 'Économie, Gestion, Finance 2',
        subs: [
          { name: 'Management Science', prof: 'Pr. A. Bentaleb', topics: 'Management principles, organizational behavior, decision-making' },
          { name: 'Analyse des Coûts', prof: 'Pr. K. Chaouni', topics: 'Cost analysis methods, cost-volume-profit analysis, budgeting' },
        ],
      },
    ],
  },
  {
    id: 's3',
    num: 'S3',
    title: 'Semester 3 — Approfondissement',
    year: '2024–2025 · 2ème Année',
    color: '#4CAF7D',
    modules: [
      {
        code: 'M3.1.2',
        title: 'Génie Logiciel',
        subs: [
          { name: 'Génie Logiciel', prof: 'Pr. W. Ettazi', topics: 'Software development lifecycle, requirements engineering, UML, software architecture, testing strategies, quality assurance' },
        ],
      },
      {
        code: 'M3.2.1',
        title: 'Méthodologie de Développement des SI',
        subs: [
          { name: 'Méthodologie de Développement des SI', prof: 'Pr. S. Baina', topics: 'IS development methodologies (Merise, UML-based), business process modeling, conceptual/logical/physical data modeling, enterprise data architecture', tags: ['Ontologies', 'Data Engineering'] },
        ],
      },
      {
        code: 'M3.1.2',
        title: 'Modélisation Objet',
        subs: [
          { name: 'Modélisation Objet', prof: 'Pr. B. Berrada', topics: 'Advanced UML (class, sequence, activity, state diagrams), object modeling, design patterns, domain modeling', tags: ['Ontologies'] },
        ],
      },
      {
        code: 'M3.3.1',
        title: 'Structuration & Échange de Données',
        subs: [
          { name: 'Structuration & Échange de Données', prof: 'Pr. R. Ajhoun', topics: 'XML/JSON standards, data serialization, schema validation, structured data interchange, web services data formats (SOAP, REST payloads)', tags: ['Data Engineering', 'Knowledge Graphs'] },
        ],
      },
      {
        code: 'M3.3.2',
        title: 'Programmation Objet Avancée',
        subs: [
          { name: 'Programmation Objet Avancée', prof: 'Pr. H. Guermah', topics: 'Generics, reflection, annotations, advanced design patterns, frameworks, multithreading' },
        ],
      },
      {
        code: 'M3.2',
        title: 'Compilation & Théorie des Langages',
        subs: [
          { name: 'Théorie des Langages', prof: 'Pr. Y. Tabii', topics: 'Regular/context-free grammars, automata (DFA, NFA, PDA), Chomsky hierarchy' },
          { name: 'Compilation', prof: 'Pr. Y. Tabii', topics: 'Lexical analysis, parsing (LL, LR), AST construction, semantic analysis, code generation' },
        ],
      },
      {
        code: 'M3.1.1',
        title: 'Réseaux TCP/IP & Technologies de Routage',
        subs: [
          { name: 'Réseaux TCP/IP / Technologies de Routage', prof: 'Pr. M.A. Faqihi', topics: 'TCP/IP stack, routing protocols (OSPF, BGP), subnetting, VLANs, network design' },
        ],
      },
      {
        code: 'M3.5',
        title: 'Statistiques et Analyse de Données',
        subs: [
          { name: 'Statistique Inférentielle', prof: 'Pr. L. Aouragh', topics: 'Hypothesis testing, confidence intervals, parameter estimation, chi-squared tests, ANOVA, regression analysis', tags: ['Machine Learning'] },
          { name: 'Analyse de Données', prof: 'Pr. L. Aouragh', topics: 'Principal Component Analysis (PCA), clustering (k-means, hierarchical), classification, discriminant analysis, multivariate data visualization, data mining techniques', tags: ['Machine Learning', 'Data Visualization'] },
        ],
      },
      {
        code: 'M3.6',
        title: 'Cloud Computing & Virtualisation',
        subs: [
          { name: 'Cloud Computing', prof: 'Pr. D. Riane', topics: 'Cloud service models (IaaS/PaaS/SaaS), cloud architectures, deployment models, scalability, AWS/Azure/GCP concepts' },
          { name: 'Virtualisation', prof: 'Dr. B. Sabiri', topics: 'Hypervisors (Type 1/2), VMs, containers (Docker), resource management, orchestration' },
        ],
      },
      {
        code: 'M3.4.3',
        title: 'Systèmes Distribués',
        subs: [
          { name: 'Systèmes Distribués', prof: 'Dr. B. Sabiri', topics: 'Distributed architectures, middleware, RPC/RMI, consistency models (CAP theorem), consensus algorithms, distributed databases' },
        ],
      },
      {
        code: 'M3.4.2',
        title: 'Administration UNIX',
        subs: [
          { name: 'Administration UNIX', prof: 'Pr. A. Mamouny', topics: 'Linux system administration, shell scripting (bash), process management, permissions, cron, system services' },
        ],
      },
    ],
  },
  {
    id: 's4',
    num: 'S4',
    title: 'Semester 4 — Approfondissement',
    year: '2024–2025 · 2ème Année',
    color: '#4CAF7D',
    modules: [
      {
        code: 'M4.4',
        title: 'Concepts et Technologies de l\'IA',
        subs: [
          { name: 'Fondement de l\'IA / AI Technologies', prof: 'Pr. A. El Hassouny', topics: 'Designing AI solutions (design thinking, structured workflows), AI frameworks (TensorFlow, Keras, PyTorch, Apache Spark), supervised/unsupervised/reinforcement learning, neural networks, AutoAI & AI scaling (PyCaret, Spark MLlib), MLOps deployment & lifecycle (MLFlow, Azure ML, SageMaker), generative AI (RNNs, LSTMs, GRUs, Transformers, GANs), Large Language Models (GPT architecture, fine-tuning LLMs), prompt engineering (zero-shot, few-shot, chain-of-thought), AI ethics (fairness, explainability, privacy).', tags: ['Knowledge Graphs', 'Machine Learning', 'Ontologies'] },
        ],
      },
      {
        code: 'M4.2',
        title: 'Administration des Bases de Données',
        subs: [
          { name: 'Administration des Bases de Données I', prof: 'Pr. B. El Asri / Dr. B. Sabiri', topics: 'DBA fundamentals, Oracle/PostgreSQL administration, backup/recovery, user management, performance monitoring', tags: ['Data Engineering'] },
          { name: 'Administration des Bases de Données II', prof: 'Pr. A. Ettalbi', topics: 'Advanced DBA, replication, partitioning, performance tuning, indexing strategies, database security', tags: ['Data Engineering'] },
          { name: 'Bases de Données Réparties', prof: 'Pr. M. Nassar', topics: 'Distributed database architectures, data fragmentation, replication strategies, distributed query processing, two-phase commit, consistency in distributed data stores', tags: ['Data Engineering'] },
        ],
      },
      {
        code: 'M4.5',
        title: 'Systèmes Décisionnels',
        subs: [
          { name: 'Datawarehouse : Architectures et Applications', prof: 'Pr. B. El Asri', topics: 'Data warehouse architecture (Inmon, Kimball), star/snowflake schemas, ETL pipeline design, OLAP cubes, multidimensional modeling, data marts, BI platform integration', tags: ['Data Engineering', 'Data Visualization'] },
          { name: 'Data Driven Decision Making', prof: 'Pr. Y. Tabii', topics: 'Data-driven analytics, KPI design, dashboarding & data visualization, BI tools (Power BI, Tableau), decision support systems, analytical reporting', tags: ['Data Visualization', 'Machine Learning'] },
        ],
      },
      {
        code: 'M4.3',
        title: 'Industrialisation Logicielle',
        subs: [
          { name: 'Architectures de Modélisation Objet', prof: 'Pr. M. Nassar', topics: 'Model-Driven Architecture (MDA), meta-models, UML profiles, model transformations, platform-independent modeling', tags: ['Ontologies'] },
          { name: 'Plateformes de Développement', prof: 'Pr. M. El Hamlaoui', topics: 'Development frameworks, build tools, project scaffolding, modern toolchains' },
          { name: 'DevOps Best Practices', prof: 'Pr. M. El Hamlaoui', topics: 'CI/CD pipelines, Git workflows, automated testing, infrastructure as code, monitoring, containerized deployments' },
        ],
      },
      {
        code: 'M4.1',
        title: 'Conduite de Projet Informatique',
        subs: [
          { name: 'Gestion de Projet Informatique', prof: 'Pr. W. Ettazi', topics: 'Project planning (WBS, Gantt), risk management, cost estimation, stakeholder management, PMBOK essentials' },
          { name: 'Processus Agiles de Développement', prof: 'Pr. Z. Mcharfi', topics: 'Scrum framework, Kanban, sprint planning, user stories, retrospectives, agile metrics, hybrid approaches' },
        ],
      },
      {
        code: 'M4.6',
        title: 'Architecture et Applications Mobiles',
        subs: [
          { name: 'Réseaux Mobiles', prof: 'Pr. A. Berqia', topics: 'Mobile network architectures, cellular technologies (3G/4G/5G), mobile protocols, IoT connectivity' },
          { name: 'Développement des Applications Mobiles', prof: 'Pr. H. Guermah', topics: 'Android/iOS development, mobile UI design, responsive layouts, native vs. cross-platform frameworks', tags: ['HCI'] },
        ],
      },
    ],
  },
  {
    id: 's5',
    num: 'S5',
    title: 'Semester 5 — Spécialisation GL',
    year: '2025–2026 · 3ème Année',
    color: '#6C5CE7',
    modules: [
      {
        code: 'M5.1',
        title: 'Intégration des Applications d\'Entreprise',
        subs: [
          { name: 'Intégration des Services et des Objets', prof: 'Pr. M. Nassar', topics: 'SOA architecture, web services (SOAP/REST), API design, service orchestration, microservices integration, WSDL/UDDI' },
          { name: 'Intégration des Processus', prof: 'Pr. K. Baina', topics: 'BPM, BPMN 2.0 modeling, process orchestration & choreography, workflow engines, process mining, enterprise process integration', tags: ['Ontologies'] },
          { name: 'Interface Homme/Machine', prof: 'Pr. B. Berrada', topics: 'HCI principles, user-centered design, usability evaluation methods, interaction paradigms, prototyping, user experience (UX) design, accessibility, cognitive load theory', tags: ['HCI', 'Data Visualization'] },
        ],
      },
      {
        code: 'M5.2',
        title: 'Architectures Logicielles Avancées',
        subs: [
          { name: 'Architecture à Base de Composants', prof: 'Dr. Z. Elkaimbillah', topics: 'Component-based software engineering (CBSE), component models, interface contracts, component assembly, reusability patterns' },
          { name: 'Ingénierie Dirigée par les Modèles', prof: 'Pr. M. El Hamlaoui', topics: 'Model-Driven Engineering (MDE), meta-modeling (MOF, Ecore), model transformations (ATL, QVT), Domain-Specific Languages (DSLs), model validation & verification, MDA/MDD methodologies', tags: ['Ontologies', 'Knowledge Graphs'] },
          { name: 'Systèmes Multi-Agents Mobiles', prof: 'Mme Z. Amri', topics: 'Multi-agent systems (MAS), agent architectures (BDI), agent communication (FIPA-ACL), distributed AI, agent-based modeling & simulation, mobile agents', tags: ['Machine Learning', 'Knowledge Graphs'] },
        ],
      },
      {
        code: 'M5.3',
        title: 'Gouvernance des Systèmes d\'Information',
        subs: [
          { name: 'Architecture d\'Entreprise', prof: 'Pr. S. Baina', topics: 'TOGAF ADM cycle, Zachman framework, ArchiMate modeling, enterprise ontologies, meta-models for EA, architecture layers (business, data, application, technology), SOA/OASIS ontology', tags: ['Ontologies', 'Knowledge Graphs'] },
          { name: 'Audit, Urbanisation et Planification Stratégique des SI', prof: 'Pr. W. Ettazi', topics: 'IS urbanization, strategic IS planning, IS audit methodologies, IT-business alignment, cartography of information systems, architecture governance', tags: ['Ontologies'] },
          { name: 'Développement des Stratégies Digitales', prof: 'Pr. S. Baina', topics: 'Digital transformation strategy, technology roadmaps, innovation management, digital maturity assessment, platform economy' },
        ],
      },
      {
        code: 'M5.4',
        title: 'Environnement pour la Qualité Logicielle',
        subs: [
          { name: 'Référentiels et Bonnes Pratiques des SI', prof: 'Pr. H. Guermah', topics: 'ITIL v4, COBIT 2019, ISO 20000/27001, CMMI, service management, IT governance frameworks' },
          { name: 'Sécurité des SI', prof: 'Pr. S. Sadki', topics: 'Information security, risk assessment, cryptography, access control, security policies, penetration testing fundamentals' },
          { name: 'Intelligences et Aspects Avancés des SI', prof: 'Dr. Z. Mcharfi', topics: 'AI-driven information systems, intelligent automation, advanced analytics for IS, smart decision support, AI integration in enterprise systems', tags: ['Machine Learning', 'Knowledge Graphs'] },
        ],
      },
      {
        code: 'M5.5',
        title: 'Qualité et Sûreté des Systèmes d\'Information',
        subs: [
          { name: 'Assurance Qualité des SI', prof: 'Pr. B. Bounabat', topics: 'Quality management systems, ISO 9001, software quality metrics, SLA management, audit frameworks' },
          { name: 'Aspects Avancés de la Gestion de Projets SI', prof: 'Pr. B. Bounabat', topics: 'Portfolio management, program management, advanced risk analysis, multi-project coordination, governance of IT projects' },
          { name: 'Organisation des DSI', prof: 'Pr. B. Bounabat', topics: 'IT department organization, CIO roles, IT service management, IT sourcing strategies, digital governance structures' },
        ],
      },
      {
        code: 'M5.6',
        title: 'Conférences Technologiques et Ouverture',
        subs: [
          { name: 'Conférences : IT et Entreprise', prof: 'Pr. K. Baina', topics: 'Industry talks, technology trends, enterprise innovation case studies, guest lectures from industry professionals' },
          { name: 'Certification', prof: 'Pr. K. Baina / Pr. Y. Tabii', topics: 'IBM AI Analyst certification preparation and examination', tags: ['Machine Learning'] },
        ],
      },
      {
        code: 'M5.7',
        title: 'Projet Fédérateur',
        subs: [
          { name: 'Projet Fédérateur', prof: 'Équipe Pédagogique GL', topics: 'Capstone integrative project combining software engineering, IS governance, architecture, and quality — full lifecycle from requirements to deployment' },
        ],
      },
      {
        code: 'M5.8',
        title: 'Langue et Communication 5',
        subs: [
          { name: 'TOEIC Preparation', prof: 'Pr. R. Faizi', topics: 'English proficiency, TOEIC exam preparation, professional English communication' },
        ],
      },
    ],
  },
]

const projects = [
  {
    code: 'PFA 1A',
    title: 'Conception et Développement d\'un Outil de Supervision des Équipements',
    description: 'Full-stack web application for equipment supervision, maintenance request tracking, and RBAC. Built with Spring Boot, Angular, JWT authentication, and MVC architecture.',
    team: 'Omar Ettalbi, Anass Serroukh',
    jury: 'Pr. W. Ettazi',
    year: '2022–2023 · 1ère Année',
    tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL'],
  },
  {
    code: 'PFA 2A',
    title: 'Mo-To-Mi: Framework de Migration Monolithique → Microservices par IA',
    description: 'Multi-agent AI system for automated migration of monolithic Spring Boot applications to microservices. 5 specialized autonomous agents (Architect, Observer, Strategist, Builder, Validator), each powered by dedicated LLMs.',
    team: 'Omar Ettalbi, Doha Negraoui',
    jury: 'Pr. S. Baina, Pr. M. Nassar, Mme M. Labaalli',
    year: '2024–2025 · 2ème Année',
    tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK'],
  },
  {
    code: 'PFA 3A',
    title: 'Smart Sleep Tracker: Suivi Intelligent du Sommeil et Recommandations Personnalisées',
    description: 'Dual-model closed-loop system: Model A (CatBoost) for sleep quality prediction and Model B (LightGBM Ranker) for optimizing personalized intervention policies. Modern data stack: React Native, FastAPI, dbt, PostgreSQL, Great Expectations.',
    team: 'Omar Ettalbi, Ayoub Akour, Saad Aittaleb',
    jury: 'Pr. S. El Fkihi, Pr. R. Oulad Haj Thami',
    year: '2025–2026 · 3ème Année',
    tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt'],
  },
  {
    code: 'Proj IA',
    title: 'SI Relevés: Application Web de Gestion des Relevés Assistée par IA',
    description: 'AI-assisted web application for meter reading management — AI-driven requirements extraction, dashboards with statistics, ERP simulation module. 75 tests (45 backend, 30 frontend) with Vitest.',
    team: 'Omar Ettalbi + 6 teammates · Encadrante: Mme Z. Mcharfi',
    jury: '',
    year: '2025–2026 · 3ème Année',
    tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack'],
  },
  {
    code: 'M4.5',
    title: 'Morocco Rainfall & Wealth Analysis — Data-Driven Decision Making',
    description: 'Individual project: multi-source geospatial data integration (45-year rainfall records, Relative Wealth Index). Interactive dashboards with Leaflet maps. Benchmarked 4 time series models — Prophet achieved best MAE (8.41).',
    team: 'Omar Ettalbi (individual project)',
    jury: 'Pr. Y. Tabii',
    year: '2024–2025 · Systèmes Décisionnels',
    tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial'],
  },
  {
    code: 'Proj 3A',
    title: 'RAG: Analyse Technique et Perspectives d\'Adoption en Entreprise',
    description: 'Research report on RAG pipeline architecture, comparative analysis vs. fine-tuning, market analysis of RAG ecosystem (LangChain, LlamaIndex, FAISS, Chroma, Pinecone). Systematic literature review (2022–2025).',
    team: 'Omar Ettalbi, Ayoub Akour, Saad Ait Taleb',
    jury: 'M. A. Remli',
    year: '2025–2026 · 3ème Année',
    tags: ['RAG', 'LLM', 'Vector DB', 'LangChain'],
  },
]

const internships = [
  {
    code: '1A',
    title: 'RaiseUp Consulting: Front-End Development of Responsive Corporate Website',
    description: 'Design and development of the company\'s official website front-end. UX/UI research, Next.js (SSR/SSG), Bootstrap. Site adopted as official production version and deployed to the company\'s domain.',
    supervisor: 'M. H. Guermah / M. H. Sabeq',
    jury: 'Pr. H. Guermah, Pr. M. Nassar',
    year: '2024–2025 · 1st Year Internship',
    tags: ['Next.js', 'Bootstrap', 'SSR/SSG'],
  },
  {
    code: '2A',
    title: 'RaiseUp Consulting: International Student Ops Platform',
    description: 'End-to-end web application consolidating the international study lifecycle: document upload & review, appointment booking, application/visa progression tracking, payments with receipts. Role-based dashboards (Student vs. Admin).',
    supervisor: 'M. H. Guermah / M. H. Sabeq',
    jury: 'M. H. Guermah, M. H. Sabeq',
    year: '2025–2026 · 2nd Year Internship',
    tags: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'RBAC'],
  },
  {
    code: 'PFE',
    title: 'Diehl Aviation — Digitalization & Data Analytics (End-of-Studies Internship)',
    description: 'Digitalization of operational shop floor processes using SAP S/4HANA, data processing with SAP Datasphere, and data visualization with SAP Analytics Cloud. MRO aviation sector, Toulouse, France.',
    supervisor: '',
    jury: '',
    year: '2025–2026 · Semester 6 (PFE) — In progress',
    tags: ['SAP S/4HANA', 'SAP Datasphere', 'SAP Analytics Cloud'],
  },
]

const certifications = [
  { name: 'IBM AI Analyst Professional Certificate', description: 'AI foundations, data analysis pipelines, machine learning workflow design, responsible AI — obtained as part of M5.6 Certification module' },
  { name: 'DataCamp — Deep Reinforcement Learning in Python', description: 'DQN, policy gradients, reward shaping, OpenAI Gym environments — completed March 2025' },
]

const tagColors: Record<string, string> = {
  'Knowledge Graphs': 'bg-blue-500/15 text-blue-400',
  'Machine Learning': 'bg-emerald-500/15 text-emerald-400',
  'Data Visualization': 'bg-amber-500/15 text-amber-400',
  'HCI': 'bg-pink-500/15 text-pink-400',
  'Ontologies': 'bg-purple-500/15 text-purple-400',
  'Data Engineering': 'bg-cyan-500/15 text-cyan-400',
}

function SemesterSection({ sem, semIdx, tagColors }: { sem: typeof semesters[number], semIdx: number, tagColors: Record<string, string> }) {
  return (
    <motion.section
      key={sem.id}
      id={sem.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: semIdx * 0.05 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0"
          style={{ backgroundColor: sem.color }}
        >
          {sem.num}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{sem.title}</h2>
          <span className="text-sm text-gray-500">{sem.year}</span>
        </div>
      </div>

      <div className="space-y-3">
        {sem.modules.map((mod, modIdx) => (
          <div key={`${sem.id}-${modIdx}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 px-5 py-3.5">
              <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md flex-shrink-0">{mod.code}</span>
              <span className="font-semibold text-sm">{mod.title}</span>
            </div>
            <div className="px-5 pb-4">
              {mod.subs.map((sub, subIdx) => (
                <div key={subIdx} className={`py-3 ${subIdx > 0 ? 'border-t border-white/[0.04]' : ''}`}>
                  <div className="flex justify-between items-start gap-4">
                    <span className="text-sm font-medium text-gray-200">{sub.name}</span>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{sub.prof}</span>
                  </div>
                  {sub.topics && (
                    <p className="text-xs text-gray-500 mt-1.5 pl-3 border-l-2 border-white/[0.06] leading-relaxed">{sub.topics}</p>
                  )}
                  {sub.tags && sub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {sub.tags.map((tag) => (
                        <span key={tag} className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColors[tag] || 'bg-gray-500/15 text-gray-400'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default function CurriculumPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 text-sm font-medium">
          <FaArrowLeft className="w-3 h-3" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-medium tracking-wide uppercase mb-6">
            <span className="w-2 h-2 bg-[#c0392b] rounded-full" />
            Université Mohammed V — Rabat
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">
            ENSIAS — <span className="text-primary">Génie Logiciel</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">
            Cycle d&apos;Ingénieur d&apos;État en Informatique — Filière Génie Logiciel & Systèmes d&apos;Information. Full curriculum with professors and topic coverage.
          </p>
          <div className="flex flex-wrap gap-8 mt-8">
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">Duration</span><span className="text-sm font-medium">3 years (6 semesters)</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">Academic Years</span><span className="text-sm font-medium">2022–2026</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">Specialization</span><span className="text-sm font-medium">GL — Software Engineering</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">Coordinator</span><span className="text-sm font-medium">Pr. Hatim Guermah</span></div>
          </div>
        </motion.div>

        {/* ═══ PHASE 1: CPGE ═══ */}
        <div className="relative mt-8 mb-12">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#c0392b]/30" /></div>
          <div className="relative flex justify-center">
            <span className="bg-secondary px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#c0392b] border border-[#c0392b]/30 rounded-full">
              CPGE Preparatory School (2020–2022)
            </span>
          </div>
        </div>

        {semesters.filter(s => s.id === 'cpge').map((sem, semIdx) => (
          <SemesterSection key={sem.id} sem={sem} semIdx={semIdx} tagColors={tagColors} />
        ))}

        {/* ═══ PHASE 2: ENSIAS ═══ */}
        <div className="relative mt-16 mb-12">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-primary/30" /></div>
          <div className="relative flex justify-center">
            <span className="bg-secondary px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full">
              ENSIAS Engineering Cycle (2022–2026)
            </span>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mb-12 max-w-2xl mx-auto">
          Cycle d&apos;Ingénieur d&apos;État — 3 years, 5 semesters of coursework + 1 semester end-of-studies internship (PFE).
          Semesters S1–S2 are Tronc Commun, S3–S4 Approfondissement, S5 Spécialisation GL.
        </p>

        {semesters.filter(s => s.id !== 'cpge').map((sem, semIdx) => (
          <SemesterSection key={sem.id} sem={sem} semIdx={semIdx} tagColors={tagColors} />
        ))}

        {/* Defended Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-purple-500">
              P
            </div>
            <div>
              <h2 className="text-2xl font-bold">Defended Projects</h2>
              <span className="text-sm text-gray-500">Each project defended before a jury panel</span>
            </div>
          </div>

          <div className="space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md flex-shrink-0">{proj.code}</span>
                  <h3 className="font-semibold text-sm">{proj.title}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-3 pl-3 border-l-2 border-white/[0.06]">{proj.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 mb-3">
                  <span>Team: {proj.team}</span>
                  {proj.jury && <span>Jury: {proj.jury}</span>}
                  <span>{proj.year}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Internships */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-amber-500">
              I
            </div>
            <div>
              <h2 className="text-2xl font-bold">Internships</h2>
              <span className="text-sm text-gray-500">Industry experience during the program</span>
            </div>
          </div>

          <div className="space-y-3">
            {internships.map((intern, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md flex-shrink-0">{intern.code}</span>
                  <h3 className="font-semibold text-sm">{intern.title}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-3 pl-3 border-l-2 border-white/[0.06]">{intern.description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 mb-3">
                  {intern.supervisor && <span>Supervisor: {intern.supervisor}</span>}
                  {intern.jury && <span>Jury: {intern.jury}</span>}
                  <span>{intern.year}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {intern.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-emerald-500">
              C
            </div>
            <div>
              <h2 className="text-2xl font-bold">Certifications</h2>
              <span className="text-sm text-gray-500">Acquired during the program</span>
            </div>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-500">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Back to portfolio */}
        <div className="text-center pt-8 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors text-sm font-medium">
            <FaArrowLeft className="w-3 h-3" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
