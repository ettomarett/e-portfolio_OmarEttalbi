export const curriculumUI = {
  en: {
    backToPortfolio: 'Back to Portfolio',
    headerBadge: 'Mohammed V University — Rabat',
    headerTitle: 'Software Engineering',
    headerSubtitle: 'State Engineering Degree in Computer Science — Software Engineering & Information Systems. Full curriculum with professors and topic coverage.',
    duration: 'Duration',
    durationValue: '3 years (6 semesters)',
    academicYears: 'Academic Years',
    academicYearsValue: '2022–2026',
    specialization: 'Specialization',
    specializationValue: 'GL — Software Engineering',
    coordinator: 'Coordinator',
    cpgeBanner: 'CPGE Preparatory School (2020–2022)',
    ensiasBanner: 'ENSIAS Engineering Cycle (2022–2026)',
    ensiasDescription: 'State Engineering Degree — 3 years, 5 semesters of coursework + 1 semester end-of-studies internship (PFE). Semesters S1–S2 are Common Core, S3–S4 Advanced Studies, S5 Software Engineering Specialization.',
    defendedProjects: 'Defended Projects',
    defendedProjectsSub: 'Each project defended before a jury panel',
    team: 'Team',
    jury: 'Jury',
    internships: 'Internships',
    internshipsSub: 'Industry experience during the program',
    supervisor: 'Supervisor',
    certifications: 'Certifications',
    certificationsSub: 'Acquired during the program',
  },
  fr: {
    backToPortfolio: 'Retour au Portfolio',
    headerBadge: 'Université Mohammed V — Rabat',
    headerTitle: 'Génie Logiciel',
    headerSubtitle: "Cycle d'Ingénieur d'État en Informatique — Filière Génie Logiciel & Systèmes d'Information. Curriculum complet avec professeurs et couverture thématique.",
    duration: 'Durée',
    durationValue: '3 ans (6 semestres)',
    academicYears: 'Années Académiques',
    academicYearsValue: '2022–2026',
    specialization: 'Spécialisation',
    specializationValue: 'GL — Génie Logiciel',
    coordinator: 'Coordinateur',
    cpgeBanner: 'CPGE Classes Préparatoires (2020–2022)',
    ensiasBanner: "Cycle d'Ingénieur ENSIAS (2022–2026)",
    ensiasDescription: "Cycle d'Ingénieur d'État — 3 ans, 5 semestres de cours + 1 semestre de stage de fin d'études (PFE). Semestres S1–S2 Tronc Commun, S3–S4 Approfondissement, S5 Spécialisation GL.",
    defendedProjects: 'Projets Soutenus',
    defendedProjectsSub: 'Chaque projet soutenu devant un jury',
    team: 'Équipe',
    jury: 'Jury',
    internships: 'Stages',
    internshipsSub: "Expérience en entreprise durant la formation",
    supervisor: 'Encadrant',
    certifications: 'Certifications',
    certificationsSub: 'Obtenues durant la formation',
  },
}

export const semesterTranslations = {
  en: {
    cpge: {
      title: 'Preparatory School — CPGE TSI',
      year: '2020–2022 · Preparatory Classes, Settat',
      modules: [
        {
          title: 'National Competitive Exam — TSI Track',
          subs: [
            { name: 'National Competitive Exam Result', topics: 'Ranked in the top 18% nationally in the TSI track of the Concours National Commun (CNC). Two-year intensive program covering advanced mathematics (analysis, algebra, probability), physics, engineering sciences, and computer science.' },
          ],
        },
        {
          title: 'Autonomous Drone Maneuver via Deep Reinforcement Learning',
          subs: [
            { name: 'Autonomous Drone Navigation using Deep Reinforcement Learning', topics: 'Individual TIPE research project. Built a 3D city environment, drone model, and sensor suite in Unity 3D. Trained an autonomous navigation agent using the ML-Agents toolkit with deep RL for waste management network navigation. Full pipeline: Bellman equation, Q-learning algorithm, discounted returns & convergence analysis, policy/value functions, neural network training (forward/back propagation, gradient descent, activation functions), agent observation space design (distance, angle, lidar sensors), reward shaping, and sim-to-real transfer methodology.' },
            { name: 'Context', topics: 'Omar Ettalbi (individual project) · National theme: Santé Prévention' },
          ],
        },
      ],
    },
    s1: {
      title: 'Semester 1 — Tronc Commun',
      year: '2022–2023 · 1st Year',
      modules: [
        { title: 'Algorithms & Data Structures', subs: [
          { name: 'Algorithms', topics: 'Complexity analysis, sorting/searching algorithms, divide-and-conquer, dynamic programming, greedy algorithms' },
          { name: 'Data Structures', topics: 'Linked lists, stacks, queues, trees, hash tables, graphs, heaps, advanced traversal algorithms' },
          { name: 'Procedural Programming', topics: 'C programming, procedural paradigm, memory management, pointers, file I/O' },
        ]},
        { title: 'Computer Architecture', subs: [
          { name: 'Computer Architecture', topics: 'Von Neumann architecture, CPU design, instruction sets, pipelining, memory hierarchy, cache' },
          { name: 'Assembly & Microprocessors', topics: 'Assembly language (x86), registers, addressing modes, interrupt handling' },
        ]},
        { title: 'Applied Statistics & Probability', subs: [
          { name: 'Probability', topics: "Probability spaces, conditional probability, Bayes' theorem, random variables, distributions (binomial, Poisson, normal), expectation, variance" },
          { name: 'Descriptive Statistics for Engineers', topics: 'Central tendency, dispersion, frequency distributions, data visualization, correlation analysis' },
          { name: 'Probabilistic Behavior Simulation', topics: 'Monte Carlo methods, random number generation, stochastic simulation, probabilistic modeling' },
        ]},
        { title: 'Operations Research Fundamentals', subs: [
          { name: 'Graph Theory', topics: 'Graph representations, shortest paths (Dijkstra, Bellman-Ford), spanning trees, graph coloring, network flows' },
          { name: 'Linear Programming', topics: 'Simplex method, duality, sensitivity analysis, integer programming' },
        ]},
        { title: 'Ethics, Careers & Challenge Project', subs: [
          { name: 'Ethics & Professional Standards', topics: 'Professional ethics in IT, intellectual property, data privacy, responsible innovation' },
        ]},
        { title: 'Management, Economics & Finance 1', subs: [
          { name: 'Business Economics & Introduction to Management', topics: 'Business economics, organizational management, strategic planning' },
          { name: 'General Accounting & Financial Management', topics: 'Accounting fundamentals, financial statements, cost analysis' },
        ]},
      ],
    },
    s2: {
      title: 'Semester 2 — Tronc Commun',
      year: '2023–2024 · 1st Year',
      modules: [
        { title: 'Databases', subs: [
          { name: 'Databases I', topics: 'Relational model, ER diagrams, functional dependencies, normalization (1NF–BCNF), SQL fundamentals' },
          { name: 'Databases II', topics: 'Advanced SQL, query optimization, triggers, stored procedures, transaction management, concurrency control' },
        ]},
        { title: 'Networks & Systems', subs: [
          { name: 'Data Transmission', topics: 'Physical/data link layers, encoding, error detection/correction, protocols' },
          { name: 'Computer Networks', topics: 'OSI/TCP-IP models, routing, switching, network architecture, network security basics' },
          { name: 'Operating Systems', topics: 'Process management, memory management, file systems, scheduling, concurrency, threads' },
        ]},
        { title: 'Foundations of Computer Science', subs: [
          { name: 'Computability & Complexity', topics: 'Turing machines, decidability, computational complexity classes (P, NP, NP-complete), reductions' },
          { name: 'Predicate Logic', topics: 'Propositional logic, first-order logic, quantifiers, formal proofs, logical inference, resolution' },
        ]},
        { title: 'Object-Oriented Programming & Software Development', subs: [
          { name: 'Object-Oriented Programming', topics: 'OOP principles (encapsulation, inheritance, polymorphism), Java/Python, design patterns, SOLID principles' },
          { name: 'Web Development', topics: 'HTML/CSS/JavaScript, frontend/backend fundamentals, HTTP, RESTful principles' },
          { name: 'XML Development', topics: 'XML syntax, DTD, XML Schema (XSD), XSLT, XPath, structured data exchange, XML-based data integration' },
        ]},
        { title: 'Economics, Management & Finance 2', subs: [
          { name: 'Management Science', topics: 'Management principles, organizational behavior, decision-making' },
          { name: 'Cost Analysis', topics: 'Cost analysis methods, cost-volume-profit analysis, budgeting' },
        ]},
      ],
    },
    s3: {
      title: 'Semester 3 — Approfondissement',
      year: '2024–2025 · 2nd Year',
      modules: [
        { title: 'Software Engineering', subs: [{ name: 'Software Engineering', topics: 'Software development lifecycle, requirements engineering, UML, software architecture, testing strategies, quality assurance' }]},
        { title: 'IS Development Methodology', subs: [{ name: 'IS Development Methodology', topics: 'IS development methodologies (Merise, UML-based), business process modeling, conceptual/logical/physical data modeling, enterprise data architecture' }]},
        { title: 'Object Modeling', subs: [{ name: 'Object Modeling', topics: 'Advanced UML (class, sequence, activity, state diagrams), object modeling, design patterns, domain modeling' }]},
        { title: 'Data Structuring & Exchange', subs: [{ name: 'Data Structuring & Exchange', topics: 'XML/JSON standards, data serialization, schema validation, structured data interchange, web services data formats (SOAP, REST payloads)' }]},
        { title: 'Advanced Object Programming', subs: [{ name: 'Advanced Object Programming', topics: 'Generics, reflection, annotations, advanced design patterns, frameworks, multithreading' }]},
        { title: 'Compilers & Language Theory', subs: [
          { name: 'Language Theory', topics: 'Regular/context-free grammars, automata (DFA, NFA, PDA), Chomsky hierarchy' },
          { name: 'Compilers', topics: 'Lexical analysis, parsing (LL, LR), AST construction, semantic analysis, code generation' },
        ]},
        { title: 'TCP/IP Networks & Routing', subs: [{ name: 'TCP/IP Networks / Routing Technologies', topics: 'TCP/IP stack, routing protocols (OSPF, BGP), subnetting, VLANs, network design' }]},
        { title: 'Statistics & Data Analysis', subs: [
          { name: 'Inferential Statistics', topics: 'Hypothesis testing, confidence intervals, parameter estimation, chi-squared tests, ANOVA, regression analysis' },
          { name: 'Data Analysis', topics: 'Principal Component Analysis (PCA), clustering (k-means, hierarchical), classification, discriminant analysis, multivariate data visualization, data mining techniques' },
        ]},
        { title: 'Cloud Computing & Virtualization', subs: [
          { name: 'Cloud Computing', topics: 'Cloud service models (IaaS/PaaS/SaaS), cloud architectures, deployment models, scalability, AWS/Azure/GCP concepts' },
          { name: 'Virtualization', topics: 'Hypervisors (Type 1/2), VMs, containers (Docker), resource management, orchestration' },
        ]},
        { title: 'Distributed Systems', subs: [{ name: 'Distributed Systems', topics: 'Distributed architectures, middleware, RPC/RMI, consistency models (CAP theorem), consensus algorithms, distributed databases' }]},
        { title: 'UNIX Administration', subs: [{ name: 'UNIX Administration', topics: 'Linux system administration, shell scripting (bash), process management, permissions, cron, system services' }]},
      ],
    },
    s4: {
      title: 'Semester 4 — Approfondissement',
      year: '2024–2025 · 2nd Year',
      modules: [
        { title: 'AI Concepts & Technologies', subs: [{ name: 'AI Foundations / AI Technologies', topics: 'Designing AI solutions (design thinking, structured workflows), AI frameworks (TensorFlow, Keras, PyTorch, Apache Spark), supervised/unsupervised/reinforcement learning, neural networks, AutoAI & AI scaling (PyCaret, Spark MLlib), MLOps deployment & lifecycle (MLFlow, Azure ML, SageMaker), generative AI (RNNs, LSTMs, GRUs, Transformers, GANs), Large Language Models (GPT architecture, fine-tuning LLMs), prompt engineering (zero-shot, few-shot, chain-of-thought), AI ethics (fairness, explainability, privacy).' }]},
        { title: 'Database Administration', subs: [
          { name: 'Database Administration I', topics: 'DBA fundamentals, Oracle/PostgreSQL administration, backup/recovery, user management, performance monitoring' },
          { name: 'Database Administration II', topics: 'Advanced DBA, replication, partitioning, performance tuning, indexing strategies, database security' },
          { name: 'Distributed Databases', topics: 'Distributed database architectures, data fragmentation, replication strategies, distributed query processing, two-phase commit, consistency in distributed data stores' },
        ]},
        { title: 'Decision Support Systems', subs: [
          { name: 'Data Warehouse: Architectures & Applications', topics: 'Data warehouse architecture (Inmon, Kimball), star/snowflake schemas, ETL pipeline design, OLAP cubes, multidimensional modeling, data marts, BI platform integration' },
          { name: 'Data-Driven Decision Making', topics: 'Data-driven analytics, KPI design, dashboarding & data visualization, BI tools (Power BI, Tableau), decision support systems, analytical reporting' },
        ]},
        { title: 'Software Industrialization', subs: [
          { name: 'Object Modeling Architectures', topics: 'Model-Driven Architecture (MDA), meta-models, UML profiles, model transformations, platform-independent modeling' },
          { name: 'Development Platforms', topics: 'Development frameworks, build tools, project scaffolding, modern toolchains' },
          { name: 'DevOps Best Practices', topics: 'CI/CD pipelines, Git workflows, automated testing, infrastructure as code, monitoring, containerized deployments' },
        ]},
        { title: 'IT Project Management', subs: [
          { name: 'IT Project Management', topics: 'Project planning (WBS, Gantt), risk management, cost estimation, stakeholder management, PMBOK essentials' },
          { name: 'Agile Development Processes', topics: 'Scrum framework, Kanban, sprint planning, user stories, retrospectives, agile metrics, hybrid approaches' },
        ]},
        { title: 'Mobile Architecture & Applications', subs: [
          { name: 'Mobile Networks', topics: 'Mobile network architectures, cellular technologies (3G/4G/5G), mobile protocols, IoT connectivity' },
          { name: 'Mobile Application Development', topics: 'Android/iOS development, mobile UI design, responsive layouts, native vs. cross-platform frameworks' },
        ]},
      ],
    },
    s5: {
      title: 'Semester 5 — Spécialisation GL',
      year: '2025–2026 · 3rd Year',
      modules: [
        { title: 'Enterprise Application Integration', subs: [
          { name: 'Service & Object Integration', topics: 'SOA architecture, web services (SOAP/REST), API design, service orchestration, microservices integration, WSDL/UDDI' },
          { name: 'Process Integration', topics: 'BPM, BPMN 2.0 modeling, process orchestration & choreography, workflow engines, process mining, enterprise process integration' },
          { name: 'Human-Computer Interaction', topics: 'HCI principles, user-centered design, usability evaluation methods, interaction paradigms, prototyping, user experience (UX) design, accessibility, cognitive load theory' },
        ]},
        { title: 'Advanced Software Architectures', subs: [
          { name: 'Component-Based Architecture', topics: 'Component-based software engineering (CBSE), component models, interface contracts, component assembly, reusability patterns' },
          { name: 'Model-Driven Engineering', topics: 'Model-Driven Engineering (MDE), meta-modeling (MOF, Ecore), model transformations (ATL, QVT), Domain-Specific Languages (DSLs), model validation & verification, MDA/MDD methodologies' },
          { name: 'Mobile Multi-Agent Systems', topics: 'Multi-agent systems (MAS), agent architectures (BDI), agent communication (FIPA-ACL), distributed AI, agent-based modeling & simulation, mobile agents' },
        ]},
        { title: 'IS Governance', subs: [
          { name: 'Enterprise Architecture', topics: 'TOGAF ADM cycle, Zachman framework, ArchiMate modeling, enterprise ontologies, meta-models for EA, architecture layers (business, data, application, technology), SOA/OASIS ontology' },
          { name: 'IS Audit, Urbanization & Strategic Planning', topics: 'IS urbanization, strategic IS planning, IS audit methodologies, IT-business alignment, cartography of information systems, architecture governance' },
          { name: 'Digital Strategy Development', topics: 'Digital transformation strategy, technology roadmaps, innovation management, digital maturity assessment, platform economy' },
        ]},
        { title: 'Software Quality Environment', subs: [
          { name: 'IS Standards & Best Practices', topics: 'ITIL v4, COBIT 2019, ISO 20000/27001, CMMI, service management, IT governance frameworks' },
          { name: 'IS Security', topics: 'Information security, risk assessment, cryptography, access control, security policies, penetration testing fundamentals' },
          { name: 'IS Intelligence & Advanced Aspects', topics: 'AI-driven information systems, intelligent automation, advanced analytics for IS, smart decision support, AI integration in enterprise systems' },
        ]},
        { title: 'IS Quality & Safety', subs: [
          { name: 'IS Quality Assurance', topics: 'Quality management systems, ISO 9001, software quality metrics, SLA management, audit frameworks' },
          { name: 'Advanced IS Project Management', topics: 'Portfolio management, program management, advanced risk analysis, multi-project coordination, governance of IT projects' },
          { name: 'IT Department Organization', topics: 'IT department organization, CIO roles, IT service management, IT sourcing strategies, digital governance structures' },
        ]},
        { title: 'Technology Conferences & Outreach', subs: [
          { name: 'Conferences: IT & Business', topics: 'Industry talks, technology trends, enterprise innovation case studies, guest lectures from industry professionals' },
          { name: 'Certification', topics: 'IBM AI Analyst certification preparation and examination' },
        ]},
        { title: 'Capstone Project', subs: [{ name: 'Capstone Project', topics: 'Capstone integrative project combining software engineering, IS governance, architecture, and quality — full lifecycle from requirements to deployment' }]},
        { title: 'Language & Communication 5', subs: [{ name: 'TOEIC Preparation', topics: 'English proficiency, TOEIC exam preparation, professional English communication' }]},
      ],
    },
    projects: [
      { title: 'Design & Development of an Equipment Supervision Tool', description: 'Full-stack web application for equipment supervision, maintenance request tracking, and RBAC. Built with Spring Boot, Angular, JWT authentication, and MVC architecture.', year: '2022–2023 · 1st Year', team: 'Omar Ettalbi, Anass Serroukh' },
      { title: 'Mo-To-Mi: Monolithic → Microservices AI Migration Framework', description: 'Multi-agent AI system for automated migration of monolithic Spring Boot applications to microservices. 5 specialized autonomous agents (Architect, Observer, Strategist, Builder, Validator), each powered by dedicated LLMs.', year: '2024–2025 · 2nd Year', team: 'Omar Ettalbi, Doha Negraoui' },
      { title: 'Smart Sleep Tracker: Intelligent Sleep Monitoring & Personalized Recommendations', description: 'Dual-model closed-loop system: Model A (CatBoost) for sleep quality prediction and Model B (LightGBM Ranker) for optimizing personalized intervention policies. Modern data stack: React Native, FastAPI, dbt, PostgreSQL, Great Expectations.', year: '2025–2026 · 3rd Year', team: 'Omar Ettalbi, Ayoub Akour, Saad Aittaleb' },
      { title: 'Statements System: AI-Assisted Statements Management Web App', description: 'AI-assisted web application for statements management — AI-driven requirements extraction, dashboards with statistics, ERP simulation module. 75 tests (45 backend, 30 frontend) with Vitest.', year: '2025–2026 · 3rd Year', team: 'Omar Ettalbi + 6 teammates · Supervisor: Ms. Z. Mcharfi' },
      { title: 'Morocco Rainfall & Wealth Analysis — Data-Driven Decision Making', description: 'Individual project: multi-source geospatial data integration (45-year rainfall records, Relative Wealth Index). Interactive dashboards with Leaflet maps. Benchmarked 4 time series models — Prophet achieved best MAE (8.41).', year: '2024–2025 · Decision Support Systems', team: 'Omar Ettalbi (individual project)' },
      { title: 'RAG: Technical Analysis & Enterprise Adoption Perspectives', description: 'Research report on RAG pipeline architecture, comparative analysis vs. fine-tuning, market analysis of RAG ecosystem (LangChain, LlamaIndex, FAISS, Chroma, Pinecone). Systematic literature review (2022–2025).', year: '2025–2026 · 3rd Year', team: 'Omar Ettalbi, Ayoub Akour, Saad Ait Taleb' },
    ],
    internships: [
      { title: 'RaiseUp Consulting: Front-End Development of Responsive Corporate Website', description: "Design and development of the company's official website front-end. UX/UI research, Next.js (SSR/SSG), Bootstrap. Site adopted as official production version and deployed to the company's domain.", year: '2024–2025 · 1st Year Internship' },
      { title: 'RaiseUp Consulting: International Student Ops Platform', description: 'End-to-end web application consolidating the international study lifecycle: document upload & review, appointment booking, application/visa progression tracking, payments with receipts. Role-based dashboards (Student vs. Admin).', year: '2025–2026 · 2nd Year Internship' },
      { title: 'Diehl Aviation — Digitalization & Data Analytics (End-of-Studies Internship)', description: 'Digitalization of operational shop floor processes using SAP S/4HANA, data processing with SAP Datasphere, and data visualization with SAP Analytics Cloud. MRO aviation sector, Toulouse, France.', year: '2025–2026 · Semester 6 (PFE) — In progress' },
    ],
    certifications: [
      { description: 'AI foundations, data analysis pipelines, machine learning workflow design, responsible AI — obtained as part of M5.6 Certification module' },
      { description: 'DQN, policy gradients, reward shaping, OpenAI Gym environments — completed March 2025' },
    ],
  },
  fr: {
    cpge: {
      title: 'Classes Préparatoires — CPGE TSI',
      year: '2020–2022 · Classes Préparatoires aux Grandes Écoles, Settat',
      modules: [
        {
          title: 'Concours National Commun — Filière TSI',
          subs: [
            { name: 'Résultat du Concours National', topics: 'Classé dans le top 18% au niveau national dans la filière TSI du Concours National Commun (CNC). Programme intensif de deux ans couvrant les mathématiques avancées (analyse, algèbre, probabilités), la physique, les sciences de l\'ingénieur et l\'informatique.' },
          ],
        },
        {
          title: 'Navigation Autonome de Drone par Apprentissage par Renforcement Profond',
          subs: [
            { name: 'Navigation Autonome de Drone par Apprentissage par Renforcement Profond', topics: 'Projet de recherche TIPE individuel. Construction d\'un environnement urbain 3D, modèle de drone et suite de capteurs dans Unity 3D. Entraînement d\'un agent de navigation autonome avec le toolkit ML-Agents et le deep RL pour la navigation dans un réseau de gestion des déchets. Pipeline complet : équation de Bellman, algorithme Q-learning, retours actualisés et analyse de convergence, fonctions politique/valeur, entraînement de réseaux de neurones (propagation avant/arrière, descente de gradient, fonctions d\'activation), conception de l\'espace d\'observation de l\'agent (distance, angle, capteurs lidar), reward shaping et méthodologie de transfert sim-to-real.' },
            { name: 'Contexte', topics: 'Omar Ettalbi (projet individuel) · Thème national : Santé Prévention' },
          ],
        },
      ],
    },
    s1: {
      title: 'Semestre 1 — Tronc Commun',
      year: '2022–2023 · 1ère Année',
      modules: [
        { title: 'Algorithmique & Structures de Données', subs: [
          { name: 'Algorithmique', topics: 'Analyse de complexité, algorithmes de tri/recherche, diviser pour régner, programmation dynamique, algorithmes gloutons' },
          { name: 'Structures de Données', topics: 'Listes chaînées, piles, files, arbres, tables de hachage, graphes, tas, algorithmes de parcours avancés' },
          { name: 'Programmation Procédurale', topics: 'Programmation C, paradigme procédural, gestion de la mémoire, pointeurs, entrées/sorties fichiers' },
        ]},
        { title: 'Architecture des Ordinateurs', subs: [
          { name: 'Architecture des Ordinateurs', topics: 'Architecture Von Neumann, conception CPU, jeux d\'instructions, pipeline, hiérarchie mémoire, cache' },
          { name: 'Assembleur et Microprocesseur', topics: 'Langage assembleur (x86), registres, modes d\'adressage, gestion des interruptions' },
        ]},
        { title: 'Statistiques Appliquées & Probabilités', subs: [
          { name: 'Probabilités', topics: 'Espaces probabilistes, probabilités conditionnelles, théorème de Bayes, variables aléatoires, lois (binomiale, Poisson, normale), espérance, variance' },
          { name: "Statistique Descriptive pour l'Ingénieur", topics: 'Tendance centrale, dispersion, distributions de fréquences, visualisation de données, analyse de corrélation' },
          { name: 'Simulation des Comportements Probabilistes', topics: 'Méthodes de Monte Carlo, génération de nombres aléatoires, simulation stochastique, modélisation probabiliste' },
        ]},
        { title: 'Recherche Opérationnelle', subs: [
          { name: 'Théorie des Graphes', topics: 'Représentations de graphes, plus courts chemins (Dijkstra, Bellman-Ford), arbres couvrants, coloration de graphes, flots de réseaux' },
          { name: 'Programmation Linéaire', topics: 'Méthode du simplexe, dualité, analyse de sensibilité, programmation en nombres entiers' },
        ]},
        { title: 'Éthique, Carrières & Projet Défi', subs: [
          { name: 'Éthique et Déontologie', topics: 'Éthique professionnelle en informatique, propriété intellectuelle, protection des données, innovation responsable' },
        ]},
        { title: 'Management, Économie & Finance 1', subs: [
          { name: "Économie d'Entreprise & Introduction au Management", topics: 'Économie d\'entreprise, management organisationnel, planification stratégique' },
          { name: 'Comptabilité Générale et Gestion Financière', topics: 'Fondamentaux de la comptabilité, états financiers, analyse des coûts' },
        ]},
      ],
    },
    s2: {
      title: 'Semestre 2 — Tronc Commun',
      year: '2023–2024 · 1ère Année',
      modules: [
        { title: 'Bases de Données', subs: [
          { name: 'Bases de Données I', topics: 'Modèle relationnel, diagrammes E/R, dépendances fonctionnelles, normalisation (1NF–BCNF), fondamentaux SQL' },
          { name: 'Bases de Données II', topics: 'SQL avancé, optimisation de requêtes, triggers, procédures stockées, gestion des transactions, contrôle de concurrence' },
        ]},
        { title: 'Réseaux & Systèmes', subs: [
          { name: 'Transmission de Données', topics: 'Couches physique/liaison, encodage, détection/correction d\'erreurs, protocoles' },
          { name: 'Réseaux Informatiques', topics: 'Modèles OSI/TCP-IP, routage, commutation, architecture réseau, bases de sécurité réseau' },
          { name: "Système d'Exploitation", topics: 'Gestion des processus, gestion de la mémoire, systèmes de fichiers, ordonnancement, concurrence, threads' },
        ]},
        { title: 'Fondements de l\'Informatique', subs: [
          { name: 'Calculabilité & Complexité', topics: 'Machines de Turing, décidabilité, classes de complexité (P, NP, NP-complet), réductions' },
          { name: 'Logique des Prédicats', topics: 'Logique propositionnelle, logique du premier ordre, quantificateurs, preuves formelles, inférence logique, résolution' },
        ]},
        { title: 'Programmation Orientée Objet & Développement', subs: [
          { name: 'Programmation Orientée Objet', topics: 'Principes POO (encapsulation, héritage, polymorphisme), Java/Python, design patterns, principes SOLID' },
          { name: 'Développement Web', topics: 'HTML/CSS/JavaScript, fondamentaux frontend/backend, HTTP, principes RESTful' },
          { name: 'Développement XML', topics: 'Syntaxe XML, DTD, XML Schema (XSD), XSLT, XPath, échange de données structurées, intégration de données XML' },
        ]},
        { title: 'Économie, Management & Finance 2', subs: [
          { name: 'Management Science', topics: 'Principes de management, comportement organisationnel, prise de décision' },
          { name: 'Analyse des Coûts', topics: 'Méthodes d\'analyse des coûts, analyse coût-volume-profit, budgétisation' },
        ]},
      ],
    },
    s3: {
      title: 'Semestre 3 — Approfondissement',
      year: '2024–2025 · 2ème Année',
      modules: [
        { title: 'Génie Logiciel', subs: [{ name: 'Génie Logiciel', topics: 'Cycle de vie du développement logiciel, ingénierie des exigences, UML, architecture logicielle, stratégies de tests, assurance qualité' }]},
        { title: 'Méthodologie de Développement des SI', subs: [{ name: 'Méthodologie de Développement des SI', topics: 'Méthodologies de développement des SI (Merise, UML), modélisation des processus métier, modélisation conceptuelle/logique/physique des données, architecture de données d\'entreprise' }]},
        { title: 'Modélisation Objet', subs: [{ name: 'Modélisation Objet', topics: 'UML avancé (diagrammes de classes, séquence, activités, états), modélisation objet, design patterns, modélisation du domaine' }]},
        { title: 'Structuration & Échange de Données', subs: [{ name: 'Structuration & Échange de Données', topics: 'Standards XML/JSON, sérialisation de données, validation de schémas, échange de données structurées, formats de données des services web (SOAP, REST)' }]},
        { title: 'Programmation Objet Avancée', subs: [{ name: 'Programmation Objet Avancée', topics: 'Génériques, réflexion, annotations, design patterns avancés, frameworks, multithreading' }]},
        { title: 'Compilation & Théorie des Langages', subs: [
          { name: 'Théorie des Langages', topics: 'Grammaires régulières/hors-contexte, automates (AFD, AFN, AP), hiérarchie de Chomsky' },
          { name: 'Compilation', topics: 'Analyse lexicale, analyse syntaxique (LL, LR), construction d\'AST, analyse sémantique, génération de code' },
        ]},
        { title: 'Réseaux TCP/IP & Routage', subs: [{ name: 'Réseaux TCP/IP / Technologies de Routage', topics: 'Pile TCP/IP, protocoles de routage (OSPF, BGP), sous-réseaux, VLANs, conception de réseaux' }]},
        { title: 'Statistiques & Analyse de Données', subs: [
          { name: 'Statistique Inférentielle', topics: 'Tests d\'hypothèses, intervalles de confiance, estimation de paramètres, tests du chi-deux, ANOVA, analyse de régression' },
          { name: 'Analyse de Données', topics: 'Analyse en Composantes Principales (ACP), clustering (k-means, hiérarchique), classification, analyse discriminante, visualisation de données multivariées, techniques de data mining' },
        ]},
        { title: 'Cloud Computing & Virtualisation', subs: [
          { name: 'Cloud Computing', topics: 'Modèles de services cloud (IaaS/PaaS/SaaS), architectures cloud, modèles de déploiement, scalabilité, concepts AWS/Azure/GCP' },
          { name: 'Virtualisation', topics: 'Hyperviseurs (Type 1/2), VMs, conteneurs (Docker), gestion des ressources, orchestration' },
        ]},
        { title: 'Systèmes Distribués', subs: [{ name: 'Systèmes Distribués', topics: 'Architectures distribuées, middleware, RPC/RMI, modèles de cohérence (théorème CAP), algorithmes de consensus, bases de données distribuées' }]},
        { title: 'Administration UNIX', subs: [{ name: 'Administration UNIX', topics: 'Administration système Linux, scripts shell (bash), gestion des processus, permissions, cron, services système' }]},
      ],
    },
    s4: {
      title: 'Semestre 4 — Approfondissement',
      year: '2024–2025 · 2ème Année',
      modules: [
        { title: 'Concepts & Technologies IA', subs: [{ name: "Fondement de l'IA / Technologies IA", topics: 'Conception de solutions IA (design thinking, workflows structurés), frameworks IA (TensorFlow, Keras, PyTorch, Apache Spark), apprentissage supervisé/non-supervisé/par renforcement, réseaux de neurones, AutoAI et mise à l\'échelle IA (PyCaret, Spark MLlib), déploiement et cycle de vie MLOps (MLFlow, Azure ML, SageMaker), IA générative (RNN, LSTM, GRU, Transformers, GAN), grands modèles de langage (architecture GPT, fine-tuning LLMs), ingénierie des prompts (zero-shot, few-shot, chain-of-thought), éthique de l\'IA (équité, explicabilité, vie privée).' }]},
        { title: 'Administration des Bases de Données', subs: [
          { name: 'Administration des Bases de Données I', topics: 'Fondamentaux DBA, administration Oracle/PostgreSQL, sauvegarde/restauration, gestion des utilisateurs, surveillance des performances' },
          { name: 'Administration des Bases de Données II', topics: 'DBA avancé, réplication, partitionnement, optimisation des performances, stratégies d\'indexation, sécurité des bases de données' },
          { name: 'Bases de Données Réparties', topics: 'Architectures de bases de données distribuées, fragmentation des données, stratégies de réplication, traitement de requêtes distribuées, validation en deux phases, cohérence dans les systèmes distribués' },
        ]},
        { title: 'Systèmes d\'Aide à la Décision', subs: [
          { name: 'Datawarehouse : Architectures et Applications', topics: 'Architecture d\'entrepôt de données (Inmon, Kimball), schémas étoile/flocon, conception de pipelines ETL, cubes OLAP, modélisation multidimensionnelle, data marts, intégration de plateformes BI' },
          { name: 'Data Driven Decision Making', topics: 'Analytique data-driven, conception de KPIs, tableaux de bord et visualisation de données, outils BI (Power BI, Tableau), systèmes d\'aide à la décision, reporting analytique' },
        ]},
        { title: 'Industrialisation du Logiciel', subs: [
          { name: 'Architectures de Modélisation Objet', topics: 'Architecture dirigée par les modèles (MDA), méta-modèles, profils UML, transformations de modèles, modélisation indépendante de la plateforme' },
          { name: 'Plateformes de Développement', topics: 'Frameworks de développement, outils de build, scaffolding de projets, chaînes d\'outils modernes' },
          { name: 'DevOps Best Practices', topics: 'Pipelines CI/CD, workflows Git, tests automatisés, infrastructure as code, monitoring, déploiements conteneurisés' },
        ]},
        { title: 'Gestion de Projet Informatique', subs: [
          { name: 'Gestion de Projet Informatique', topics: 'Planification de projet (WBS, Gantt), gestion des risques, estimation des coûts, gestion des parties prenantes, essentiels PMBOK' },
          { name: 'Processus Agiles de Développement', topics: 'Framework Scrum, Kanban, planification de sprints, user stories, rétrospectives, métriques agiles, approches hybrides' },
        ]},
        { title: 'Architecture & Applications Mobiles', subs: [
          { name: 'Réseaux Mobiles', topics: 'Architectures de réseaux mobiles, technologies cellulaires (3G/4G/5G), protocoles mobiles, connectivité IoT' },
          { name: 'Développement des Applications Mobiles', topics: 'Développement Android/iOS, conception d\'IHM mobiles, layouts responsifs, frameworks natifs vs. cross-platform' },
        ]},
      ],
    },
    s5: {
      title: 'Semestre 5 — Spécialisation GL',
      year: '2025–2026 · 3ème Année',
      modules: [
        { title: 'Intégration d\'Applications d\'Entreprise', subs: [
          { name: 'Intégration des Services et des Objets', topics: 'Architecture SOA, services web (SOAP/REST), conception d\'API, orchestration de services, intégration de microservices, WSDL/UDDI' },
          { name: 'Intégration des Processus', topics: 'BPM, modélisation BPMN 2.0, orchestration et chorégraphie de processus, moteurs de workflow, process mining, intégration de processus d\'entreprise' },
          { name: 'Interface Homme/Machine', topics: 'Principes IHM, conception centrée utilisateur, méthodes d\'évaluation de l\'utilisabilité, paradigmes d\'interaction, prototypage, conception UX, accessibilité, théorie de la charge cognitive' },
        ]},
        { title: 'Architectures Logicielles Avancées', subs: [
          { name: 'Architecture à Base de Composants', topics: 'Ingénierie logicielle à base de composants (CBSE), modèles de composants, contrats d\'interface, assemblage de composants, patterns de réutilisabilité' },
          { name: 'Ingénierie Dirigée par les Modèles', topics: 'Ingénierie Dirigée par les Modèles (IDM), méta-modélisation (MOF, Ecore), transformations de modèles (ATL, QVT), langages spécifiques au domaine (DSL), validation et vérification de modèles, méthodologies MDA/MDD' },
          { name: 'Systèmes Multi-Agents Mobiles', topics: 'Systèmes multi-agents (SMA), architectures d\'agents (BDI), communication entre agents (FIPA-ACL), IA distribuée, modélisation et simulation à base d\'agents, agents mobiles' },
        ]},
        { title: 'Gouvernance des SI', subs: [
          { name: "Architecture d'Entreprise", topics: 'Cycle ADM TOGAF, framework Zachman, modélisation ArchiMate, ontologies d\'entreprise, méta-modèles pour l\'AE, couches d\'architecture (métier, données, application, technologie), ontologie SOA/OASIS' },
          { name: 'Audit, Urbanisation et Planification Stratégique des SI', topics: 'Urbanisation des SI, planification stratégique des SI, méthodologies d\'audit des SI, alignement IT-métier, cartographie des systèmes d\'information, gouvernance de l\'architecture' },
          { name: 'Développement des Stratégies Digitales', topics: 'Stratégie de transformation digitale, feuilles de route technologiques, gestion de l\'innovation, évaluation de la maturité digitale, économie de plateforme' },
        ]},
        { title: 'Environnement Qualité Logicielle', subs: [
          { name: 'Référentiels et Bonnes Pratiques des SI', topics: 'ITIL v4, COBIT 2019, ISO 20000/27001, CMMI, gestion des services, cadres de gouvernance IT' },
          { name: 'Sécurité des SI', topics: 'Sécurité de l\'information, évaluation des risques, cryptographie, contrôle d\'accès, politiques de sécurité, fondamentaux du test d\'intrusion' },
          { name: 'Intelligences et Aspects Avancés des SI', topics: 'Systèmes d\'information pilotés par l\'IA, automatisation intelligente, analytique avancée pour les SI, aide à la décision intelligente, intégration de l\'IA dans les systèmes d\'entreprise' },
        ]},
        { title: 'Qualité & Sécurité des SI', subs: [
          { name: 'Assurance Qualité des SI', topics: 'Systèmes de management de la qualité, ISO 9001, métriques de qualité logicielle, gestion des SLA, cadres d\'audit' },
          { name: 'Aspects Avancés de la Gestion de Projets SI', topics: 'Gestion de portefeuille, gestion de programme, analyse de risques avancée, coordination multi-projets, gouvernance des projets IT' },
          { name: 'Organisation des DSI', topics: 'Organisation de la DSI, rôles du DSI, gestion des services IT, stratégies de sourcing IT, structures de gouvernance digitale' },
        ]},
        { title: 'Conférences Technologiques & Ouverture', subs: [
          { name: 'Conférences : IT et Entreprise', topics: 'Conférences industrielles, tendances technologiques, études de cas d\'innovation en entreprise, interventions de professionnels de l\'industrie' },
          { name: 'Certification', topics: 'Préparation et passage de la certification IBM AI Analyst' },
        ]},
        { title: 'Projet Fédérateur', subs: [{ name: 'Projet Fédérateur', topics: 'Projet intégrateur de synthèse combinant génie logiciel, gouvernance des SI, architecture et qualité — cycle de vie complet des exigences au déploiement' }]},
        { title: 'Langue & Communication 5', subs: [{ name: 'Préparation TOEIC', topics: 'Maîtrise de l\'anglais, préparation à l\'examen TOEIC, communication professionnelle en anglais' }]},
      ],
    },
    projects: [
      { title: 'Conception et Développement d\'un Outil de Supervision des Équipements', description: 'Application web full-stack pour la supervision d\'équipements, le suivi des demandes de maintenance et le RBAC. Développée avec Spring Boot, Angular, authentification JWT et architecture MVC.', year: '2022–2023 · 1ère Année', team: 'Omar Ettalbi, Anass Serroukh' },
      { title: 'Mo-To-Mi: Framework de Migration Monolithique → Microservices par IA', description: 'Système IA multi-agents pour la migration automatisée d\'applications Spring Boot monolithiques vers des microservices. 5 agents autonomes spécialisés (Architecte, Observateur, Stratège, Constructeur, Validateur), chacun alimenté par des LLMs dédiés.', year: '2024–2025 · 2ème Année', team: 'Omar Ettalbi, Doha Negraoui' },
      { title: 'Smart Sleep Tracker: Suivi Intelligent du Sommeil et Recommandations Personnalisées', description: 'Système en boucle fermée à double modèle : Modèle A (CatBoost) pour la prédiction de la qualité du sommeil et Modèle B (LightGBM Ranker) pour l\'optimisation des politiques d\'intervention personnalisées. Stack de données moderne : React Native, FastAPI, dbt, PostgreSQL, Great Expectations.', year: '2025–2026 · 3ème Année', team: 'Omar Ettalbi, Ayoub Akour, Saad Aittaleb' },
      { title: 'SI Relevés: Application Web de Gestion des Relevés Assistée par IA', description: 'Application web assistée par IA pour la gestion des relevés — extraction d\'exigences par IA, tableaux de bord statistiques, module de simulation ERP. 75 tests (45 backend, 30 frontend) avec Vitest.', year: '2025–2026 · 3ème Année', team: 'Omar Ettalbi + 6 coéquipiers · Encadrante: Mme Z. Mcharfi' },
      { title: 'Analyse des Précipitations & de la Richesse au Maroc — Aide à la Décision', description: 'Projet individuel : intégration de données géospatiales multi-sources (45 ans de relevés pluviométriques, Indice de Richesse Relative). Tableaux de bord interactifs avec cartes Leaflet. 4 modèles de séries temporelles comparés — Prophet a obtenu le meilleur MAE (8.41).', year: '2024–2025 · Systèmes Décisionnels', team: 'Omar Ettalbi (projet individuel)' },
      { title: 'RAG: Analyse Technique et Perspectives d\'Adoption en Entreprise', description: 'Rapport de recherche sur l\'architecture des pipelines RAG, analyse comparative vs. fine-tuning, analyse du marché de l\'écosystème RAG (LangChain, LlamaIndex, FAISS, Chroma, Pinecone). Revue systématique de la littérature (2022–2025).', year: '2025–2026 · 3ème Année', team: 'Omar Ettalbi, Ayoub Akour, Saad Ait Taleb' },
    ],
    internships: [
      { title: 'RaiseUp Consulting : Développement Front-End d\'un Site Web d\'Entreprise Responsive', description: 'Conception et développement du front-end du site web officiel de l\'entreprise. Recherche UX/UI, Next.js (SSR/SSG), Bootstrap. Site adopté comme version de production officielle et déployé sur le domaine de l\'entreprise.', year: '2024–2025 · Stage 1ère Année' },
      { title: 'RaiseUp Consulting : Plateforme d\'Opérations Étudiantes Internationales', description: 'Application web complète consolidant le cycle de vie des études internationales : gestion documentaire, prise de rendez-vous, suivi de progression candidatures/visas, paiements avec reçus. Tableaux de bord par rôle (Étudiant vs. Admin).', year: '2025–2026 · Stage 2ème Année' },
      { title: 'Diehl Aviation — Digitalisation & Data Analytics (Stage de Fin d\'Études)', description: 'Digitalisation des processus opérationnels du shop floor avec SAP S/4HANA, traitement des données avec SAP Datasphere et visualisation avec SAP Analytics Cloud. Secteur MRO aéronautique, Toulouse, France.', year: '2025–2026 · Semestre 6 (PFE) — En cours' },
    ],
    certifications: [
      { description: 'Fondements de l\'IA, pipelines d\'analyse de données, conception de workflows ML, IA responsable — obtenu dans le cadre du module M5.6 Certification' },
      { description: 'DQN, policy gradients, reward shaping, environnements OpenAI Gym — complété en mars 2025' },
    ],
  },
}
