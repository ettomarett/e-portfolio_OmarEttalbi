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
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: 'Software Engineering Student at ENSIAS — Currently at Diehl Aviation, Toulouse',
      contactMe: 'Contact Me',
      fullCurriculum: 'Full Curriculum',
    },
    about: {
      title: 'About Me',
      bio1: 'Final-year Software Engineering student at ENSIAS (Mohammed V University, Rabat). My training spans the full software lifecycle — from algorithms and formal methods to enterprise architecture, AI, and DevOps — with a strong foundation in mathematics and engineering sciences from CPGE TSI (ranked top 18% in the national engineering school entrance exam).',
      bio2: 'I have hands-on experience building multi-agent AI systems, full-stack web platforms, ML pipelines, and data-driven dashboards. I work across Python, Java/Spring Boot, TypeScript/React/Next.js, and modern data tools (dbt, Spark, SAP).',
      bio3: 'Currently completing my end-of-studies internship at Diehl Aviation (Toulouse, France), working on digitalization of shop floor processes with SAP S/4HANA, SAP Datasphere, and SAP Analytics Cloud.',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      edu: [
        {
          school: 'ENSIAS — Mohammed V University',
          degree: 'State Engineering Degree — Software Engineering',
          location: 'Rabat, Morocco',
          years: '2022–2026 (3rd Year — S6 Final Internship in progress)',
        },
        {
          school: 'CPGE TSI — Preparatory Classes, Settat',
          degree: 'Maths, Physics & Engineering Sciences — Ranked top 18% in national engineering school entrance exam',
          location: 'Settat, Morocco',
          years: '2020–2022',
        },
      ],
      certs: [
        { name: 'IBM AI Analyst Professional Certificate', year: '2025' },
        { name: 'DataCamp — Deep Reinforcement Learning in Python', year: '2025' },
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
      items: [
        {
          title: 'Smart Sleep Tracker — ML Closed-Loop Recommendation System',
          description: 'Dual-model closed-loop system: Model A (CatBoost) for sleep quality prediction and Model B (LightGBM Ranker) for optimizing personalized intervention policies. Learns from user feedback to refine recommendations. Modern data stack with Great Expectations for data quality.',
        },
        {
          title: 'Mo-To-Mi — Multi-Agent LLM Migration Framework',
          description: 'Multi-agent AI system for automated migration of monolithic Spring Boot apps to microservices. 5 specialized autonomous agents (Architect, Observer, Strategist, Builder, Validator), each powered by dedicated LLMs with domain-specific prompts and tools. Tested on real applications.',
        },
        {
          title: 'Morocco Rainfall & Wealth Analysis',
          description: 'Individual project: multi-source geospatial data integration (45-year rainfall records, Relative Wealth Index). Interactive dashboards with Leaflet maps. Benchmarked 4 time series models — Prophet achieved best MAE (8.41). Full Python pipeline with point-in-polygon analysis.',
        },
        {
          title: 'RAG Architecture — Technical Research Report',
          description: 'Research report on RAG pipeline architecture: document retrieval, embedding, chunking, vector databases. Comparative analysis vs. fine-tuning and traditional search. Market analysis of RAG ecosystem. Systematic literature review (2022–2025) with structured scoring matrices.',
        },
        {
          title: 'Meter Readings System — Utility Meter Management Backoffice',
          description: 'Backoffice web application for Rabat Energie & Eau (REE): meter fleet management (water & electricity), field agent assignment to city districts, and consumption data centralization before billing. ERP integration simulation module. Built with a structured AI Coding methodology — AI-assisted requirements analysis (NLP), code generation, test data creation, and documentation using Cursor IDE. 75 tests with Vitest.',
        },
        {
          title: 'Equipment Supervision Tool',
          description: 'Full-stack web application for equipment supervision, maintenance request tracking, and role-based access control (RBAC). UML design, CRUD operations, and user-friendly dashboard for supervisors and employees.',
        },
        {
          title: 'TIPE — Autonomous Drone Navigation with Deep RL',
          description: 'Individual CPGE research project: modeled a city environment, drone, and sensors in Unity 3D. Trained an autonomous navigation agent using the ML-Agents toolkit with deep RL (Q-learning, policy gradients, reward shaping) for waste management network navigation.',
        },
      ],
    },
    publications: {
      title: 'Scientific Publication',
      subtitle: 'Published research bridging neuroscience, content analysis, and viewer behavior.',
      badge: 'Scientific Publication',
      bookTitle: 'Khozai — Understanding Content Engagement Through Neuroscience',
      bookDescription: 'A formal scientific framework connecting the physics of video content to the biology of the human brain to the behavior of real viewers. The book spans 13 chapters across 5 parts — covering brain architecture, dimensions of experience, behavioral measurement vectors, mutation and correlation engines, inference chains, calibration and governance, and real-world applications. A multidisciplinary work at the intersection of neuroscience, data science, and content analytics.',
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
          title: 'End-of-Studies Intern — Digitalization & Data Analytics',
          company: 'Diehl Aviation',
          period: 'PFE 2026 · Toulouse, France',
          type: 'Current',
          description: 'Digitalization of operational shop floor processes in the MRO aviation sector using SAP technologies.',
          achievements: [
            'Digitalization of shop floor operational processes using SAP S/4HANA.',
            'Data processing and pipeline design with SAP Datasphere.',
            'Data visualization and dashboarding with SAP Analytics Cloud.',
          ],
        },
        {
          title: 'Full-Stack Developer — International Student Ops Platform',
          company: 'RaiseUp Consulting',
          period: '2nd Year Internship · 2025',
          type: 'Finished',
          description: 'End-to-end web application consolidating the international study lifecycle: document management, appointments, visa tracking, and payments with role-based dashboards.',
          achievements: [
            'Built Next.js 15 / TypeScript application with Prisma ORM and PostgreSQL.',
            'Implemented RBAC authentication, document upload & review workflows, appointment booking with rescheduling.',
            'Designed application/visa progression tracking, payment system with receipts, and audit trails.',
            'Created role-based dashboards (Student vs. Admin) with structured status progression workflows.',
          ],
        },
        {
          title: 'Front-End Developer — Corporate Website',
          company: 'RaiseUp Consulting',
          period: '1st Year Internship · 2024',
          type: 'Previous',
          description: "Designed and developed the company's official website front-end, which was adopted as the production version and deployed to the company's domain.",
          achievements: [
            'UX/UI research (Behance, Dribbble) and responsive design with Next.js (SSR/SSG) and Bootstrap.',
            'Built reusable component architecture, navigation management, and visual interaction effects.',
            'Site adopted as official production version — led to extended collaboration for mobile app development.',
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
          title: 'Co-Founder & Lead — ENSIAS Radio',
          description: 'Student club leadership and content creation',
        },
        {
          title: 'Computer Vision — YOLO & OpenCV',
          description: 'Object detection, image processing, model fine-tuning, and video analysis through personal side projects',
        },
        {
          title: 'Blender — 3D Modeling',
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
      about: 'À propos',
      services: 'Compétences',
      projects: 'Projets',
      publications: 'Publications',
      experience: 'Expérience',
      languages: 'Langues',
      interests: 'Centres d\'intérêt',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'Élève Ingénieur en Génie Logiciel à l\'ENSIAS — Actuellement chez Diehl Aviation, Toulouse',
      contactMe: 'Me Contacter',
      fullCurriculum: 'Curriculum Complet',
    },
    about: {
      title: 'À propos',
      bio1: 'Élève ingénieur en dernière année de Génie Logiciel à l\'ENSIAS (Université Mohammed V, Rabat). Ma formation couvre l\'ensemble du cycle de vie logiciel — des algorithmes et méthodes formelles à l\'architecture d\'entreprise, l\'IA et le DevOps — avec une solide base en mathématiques et sciences de l\'ingénieur acquise en CPGE TSI (classé top 18% au Concours National Commun).',
      bio2: 'J\'ai une expérience pratique dans la construction de systèmes multi-agents IA, de plateformes web full-stack, de pipelines ML et de tableaux de bord data-driven. Je travaille avec Python, Java/Spring Boot, TypeScript/React/Next.js et des outils de données modernes (dbt, Spark, SAP).',
      bio3: 'Actuellement en stage de fin d\'études chez Diehl Aviation (Toulouse, France), je travaille sur la digitalisation des processus opérationnels avec SAP S/4HANA, SAP Datasphere et SAP Analytics Cloud.',
      education: 'Formation',
      skills: 'Compétences',
      certifications: 'Certifications',
      edu: [
        {
          school: 'ENSIAS — Université Mohammed V',
          degree: 'Cycle d\'Ingénieur — Génie Logiciel',
          location: 'Rabat, Maroc',
          years: '2022–2026 (3ème Année — S6 PFE en cours)',
        },
        {
          school: 'CPGE TSI — Classes Préparatoires, Settat',
          degree: 'Mathématiques, Physique & Sciences de l\'Ingénieur — Classé top 18% au Concours National Commun',
          location: 'Settat, Maroc',
          years: '2020–2022',
        },
      ],
      certs: [
        { name: 'IBM AI Analyst Professional Certificate', year: '2025' },
        { name: 'DataCamp — Deep Reinforcement Learning in Python', year: '2025' },
      ],
    },
    services: {
      title: 'Domaines de Compétence',
      subtitle: 'Voici les principaux domaines où je concentre mon énergie, combinant compétences techniques et créativité pour produire des résultats impactants.',
      items: [
        {
          title: 'IA & Machine Learning',
          description: 'Apprentissage supervisé/non-supervisé/par renforcement, réseaux de neurones, LLMs, Transformers, systèmes multi-agents. Pratique avec TensorFlow, PyTorch, scikit-learn, CatBoost, LightGBM et MLOps (MLFlow).',
        },
        {
          title: 'Développement Full-Stack',
          description: 'Java/Spring Boot, TypeScript/React/Next.js, Python/FastAPI. Conception d\'API REST, authentification JWT/RBAC, persistance ORM et frameworks frontend modernes.',
        },
        {
          title: 'Data Engineering & BI',
          description: 'Pipelines ETL, entrepôts de données (schémas étoile/flocon), dbt, SAP Datasphere, Power BI, Tableau. Analyse géospatiale, prévision de séries temporelles et tableaux de bord interactifs.',
        },
        {
          title: 'Ingénierie Dirigée par les Modèles & Architecture d\'Entreprise',
          description: 'MDE (MOF, Ecore, ATL/QVT, DSLs), MDA, TOGAF, ArchiMate, BPM/BPMN 2.0, ontologies d\'entreprise et cadres de gouvernance SI (ITIL, COBIT).',
        },
        {
          title: 'Systèmes Multi-Agents',
          description: 'Architectures BDI, communication FIPA-ACL, modélisation à base d\'agents. Construction d\'un système à 5 agents LLM pour la migration automatisée de monolithes vers des microservices.',
        },
        {
          title: 'DevOps & Cloud',
          description: 'Docker, CI/CD (GitHub Actions), workflows Git, architectures cloud (IaaS/PaaS/SaaS), administration Linux, déploiements conteneurisés et infrastructure as code.',
        },
      ],
    },
    projects: {
      title: 'Mes Projets',
      subtitle: 'Voici quelques-uns de mes projets récents. Chacun est réalisé avec attention aux détails et un focus sur l\'expérience utilisateur.',
      viewPresentation: 'Aperçu Présentation',
      viewRepo: 'Voir le Dépôt',
      items: [
        {
          title: 'Smart Sleep Tracker — Système de Recommandation ML en Boucle Fermée',
          description: 'Système en boucle fermée à double modèle : Modèle A (CatBoost) pour la prédiction de la qualité du sommeil et Modèle B (LightGBM Ranker) pour l\'optimisation des politiques d\'intervention personnalisées. Apprend du feedback utilisateur pour affiner les recommandations. Stack de données moderne avec Great Expectations.',
        },
        {
          title: 'Mo-To-Mi — Framework de Migration LLM Multi-Agents',
          description: 'Système IA multi-agents pour la migration automatisée d\'applications Spring Boot monolithiques vers des microservices. 5 agents autonomes spécialisés (Architecte, Observateur, Stratège, Constructeur, Validateur), chacun alimenté par des LLMs dédiés. Testé sur des applications réelles.',
        },
        {
          title: 'Analyse des Précipitations & de la Richesse au Maroc',
          description: 'Projet individuel : intégration de données géospatiales multi-sources (45 ans de relevés pluviométriques, Indice de Richesse Relative). Tableaux de bord interactifs avec cartes Leaflet. 4 modèles de séries temporelles comparés — Prophet a obtenu le meilleur MAE (8.41). Pipeline Python complet.',
        },
        {
          title: 'Architecture RAG — Rapport de Recherche Technique',
          description: 'Rapport de recherche sur l\'architecture des pipelines RAG : recherche de documents, embedding, chunking, bases vectorielles. Analyse comparative vs. fine-tuning et recherche traditionnelle. Analyse du marché de l\'écosystème RAG. Revue systématique de la littérature (2022–2025).',
        },
        {
          title: 'SI Relevés — Backoffice de Gestion des Compteurs',
          description: 'Application Backoffice Web pour Rabat Énergie & Eau (REE) : gestion du parc de compteurs (eau et électricité), affectation des agents de terrain aux quartiers, et centralisation des données de consommation avant facturation. Module de simulation d\'intégration ERP. Développé avec une méthodologie AI Coding structurée — analyse des besoins assistée par IA (NLP), génération de code, création de jeux de données de test et documentation via Cursor IDE. 75 tests avec Vitest.',
        },
        {
          title: 'Outil de Supervision d\'Équipements',
          description: 'Application web full-stack pour la supervision d\'équipements, le suivi des demandes de maintenance et le contrôle d\'accès basé sur les rôles (RBAC). Conception UML, opérations CRUD et tableau de bord convivial.',
        },
        {
          title: 'TIPE — Navigation Autonome de Drone par Deep RL',
          description: 'Projet de recherche CPGE individuel : modélisation d\'un environnement urbain, d\'un drone et de capteurs dans Unity 3D. Entraînement d\'un agent de navigation autonome avec le toolkit ML-Agents et le deep RL (Q-learning, policy gradients, reward shaping) pour la navigation dans un réseau de gestion des déchets.',
        },
      ],
    },
    publications: {
      title: 'Publication Scientifique',
      subtitle: 'Recherche publiée à l\'intersection des neurosciences, de l\'analyse de contenu et du comportement des spectateurs.',
      badge: 'Publication Scientifique',
      bookTitle: 'Khozai — Comprendre l\'Engagement du Contenu par les Neurosciences',
      bookDescription: 'Un cadre scientifique formel reliant la physique du contenu vidéo à la biologie du cerveau humain et au comportement des spectateurs réels. Le livre couvre 13 chapitres répartis en 5 parties — architecture cérébrale, dimensions de l\'expérience, vecteurs de mesure comportementale, moteurs de mutation et de corrélation, chaînes d\'inférence, calibration et gouvernance, et applications concrètes. Un travail multidisciplinaire à l\'intersection des neurosciences, de la data science et de l\'analyse de contenu.',
      readOn: 'Lire sur khozai.com',
      tags: ['Neurosciences', 'Analyse de Contenu', 'Sciences Comportementales', 'Data Science', 'Cadre Formel'],
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Mon parcours professionnel en génie logiciel, axé sur le développement full-stack, les solutions data-driven et les applications prêtes pour la production.',
      keyAchievements: 'Réalisations Clés :',
      technologiesUsed: 'Technologies Utilisées :',
      current: 'En cours',
      finished: 'Terminé',
      previous: 'Précédent',
      items: [
        {
          title: 'Stagiaire PFE — Digitalisation & Data Analytics',
          company: 'Diehl Aviation',
          period: 'PFE 2026 · Toulouse, France',
          type: 'Current',
          description: 'Digitalisation des processus opérationnels du shop floor dans le secteur MRO aéronautique avec les technologies SAP.',
          achievements: [
            'Digitalisation des processus opérationnels du shop floor avec SAP S/4HANA.',
            'Traitement des données et conception de pipelines avec SAP Datasphere.',
            'Visualisation de données et tableaux de bord avec SAP Analytics Cloud.',
          ],
        },
        {
          title: 'Développeur Full-Stack — Plateforme d\'Opérations Étudiantes Internationales',
          company: 'RaiseUp Consulting',
          period: 'Stage 2ème Année · 2025',
          type: 'Finished',
          description: 'Application web complète consolidant le cycle de vie des études internationales : gestion documentaire, rendez-vous, suivi de visa et paiements avec tableaux de bord basés sur les rôles.',
          achievements: [
            'Développement d\'une application Next.js 15 / TypeScript avec Prisma ORM et PostgreSQL.',
            'Implémentation de l\'authentification RBAC, workflows de gestion documentaire, prise de rendez-vous avec reprogrammation.',
            'Conception du suivi de progression des candidatures/visas, système de paiement avec reçus et pistes d\'audit.',
            'Création de tableaux de bord par rôle (Étudiant vs. Admin) avec workflows de progression structurés.',
          ],
        },
        {
          title: 'Développeur Front-End — Site Web d\'Entreprise',
          company: 'RaiseUp Consulting',
          period: 'Stage 1ère Année · 2024',
          type: 'Previous',
          description: 'Conception et développement du front-end du site web officiel de l\'entreprise, adopté comme version de production et déployé sur le domaine de l\'entreprise.',
          achievements: [
            'Recherche UX/UI (Behance, Dribbble) et design responsive avec Next.js (SSR/SSG) et Bootstrap.',
            'Architecture de composants réutilisables, gestion de la navigation et effets d\'interaction visuels.',
            'Site adopté comme version de production officielle — a mené à une collaboration étendue pour le développement d\'une application mobile.',
          ],
        },
      ],
    },
    languages: {
      title: 'Langues',
      subtitle: 'Mon niveau de maîtrise dans différentes langues',
      proficiency: 'maîtrise',
      items: [
        { name: 'Français', level: 'Courant' },
        { name: 'Arabe', level: 'Langue Maternelle' },
        { name: 'Anglais', level: 'Courant' },
      ],
    },
    interests: {
      title: 'Autres Centres d\'Intérêt',
      subtitle: 'Au-delà du génie logiciel, voici mes activités parascolaires et centres d\'intérêt personnels',
      extracurricular: 'Parascolaire',
      hobbies: 'Loisirs',
      items: [
        {
          title: 'Co-Fondateur & Responsable — ENSIAS Radio',
          description: 'Leadership associatif et création de contenu',
        },
        {
          title: 'Vision par Ordinateur — YOLO & OpenCV',
          description: 'Détection d\'objets, traitement d\'images, fine-tuning de modèles et analyse vidéo à travers des projets personnels',
        },
        {
          title: 'Blender — Modélisation 3D',
          description: 'Modélisation de maillage, sculpting, matériaux/textures, éclairage, composition de scènes et rendu',
        },
        {
          title: 'Échecs',
          description: 'Joueur actif travaillant sur la reconnaissance de patterns tactiques et la réflexion stratégique',
        },
        {
          title: 'Traitement Audio',
          description: 'Production musicale et ingénierie audio',
        },
      ],
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'N\'hésitez pas à me contacter pour des opportunités, des collaborations ou simplement pour échanger !',
    },
  },
}

export type Language = 'en' | 'fr'
export type Translations = typeof translations.en
