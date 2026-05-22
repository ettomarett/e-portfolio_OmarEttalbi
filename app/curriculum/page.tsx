'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'
import { curriculumUI, semesterTranslations } from '../i18n/curriculumTranslations'

const semesters = [
  {
    id: 'cpge',
    num: 'P',
    year: '2020–2022 · Classes Préparatoires aux Grandes Écoles, Settat',
    color: '#c0392b',
    modules: [
      {
        code: 'CNC',
        title: 'Concours National Commun — Filière TSI',
        subs: [{ tags: undefined as string[] | undefined }],
      },
      {
        code: 'TIPE',
        title: 'Manoeuvre Automatique d\'un Drone par Apprentissage par Renforcement Profond',
        subs: [{ tags: ['Machine Learning'] as string[] | undefined }, { tags: undefined as string[] | undefined }],
      },
    ],
  },
  {
    id: 's1',
    num: 'S1',
    year: '2022–2023 · 1ère Année',
    color: '#E8763A',
    modules: [
      { code: 'M1.1', title: 'Algorithmique & Structures de Données', subs: [{}, {}, {}] },
      { code: 'M1.2', title: 'Architecture des Ordinateurs', subs: [{}, {}] },
      { code: 'M1.3', title: 'Statistique & Probabilité Appliquée', subs: [{}, { tags: ['Machine Learning', 'Data Visualization'] }, {}] },
      { code: 'M1.4', title: 'Éléments de Recherche Opérationnelle', subs: [{ tags: ['Knowledge Graphs'] }, {}] },
      { code: 'M1.5', title: 'Éthique, Métiers et Projet de Challenge', subs: [{}] },
      { code: 'M1.6', title: 'Gestion, Économie et Finance 1', subs: [{}, {}] },
    ],
  },
  {
    id: 's2',
    num: 'S2',
    year: '2023–2024 · 1ère Année',
    color: '#E8763A',
    modules: [
      { code: 'M2.1', title: 'Bases de Données', subs: [{ tags: ['Data Engineering', 'Knowledge Graphs'] }, { tags: ['Data Engineering'] }] },
      { code: 'M2.2', title: 'Réseaux et Système', subs: [{}, {}, {}] },
      { code: 'M2.3', title: 'Fondements de l\'Informatique', subs: [{}, { tags: ['Knowledge Graphs', 'Ontologies'] }] },
      { code: 'M2.4', title: 'Programmation Orientée Objet et Développement Logiciel', subs: [{}, {}, { tags: ['Data Engineering', 'Knowledge Graphs'] }] },
      { code: 'M2.6', title: 'Économie, Gestion, Finance 2', subs: [{}, {}] },
    ],
  },
  {
    id: 's3',
    num: 'S3',
    year: '2024–2025 · 2ème Année',
    color: '#4CAF7D',
    modules: [
      { code: 'M3.1.2', title: 'Génie Logiciel', subs: [{}] },
      { code: 'M3.2.1', title: 'Méthodologie de Développement des SI', subs: [{ tags: ['Ontologies', 'Data Engineering'] }] },
      { code: 'M3.1.2', title: 'Modélisation Objet', subs: [{ tags: ['Ontologies'] }] },
      { code: 'M3.3.1', title: 'Structuration & Échange de Données', subs: [{ tags: ['Data Engineering', 'Knowledge Graphs'] }] },
      { code: 'M3.3.2', title: 'Programmation Objet Avancée', subs: [{}] },
      { code: 'M3.2', title: 'Compilation & Théorie des Langages', subs: [{}, {}] },
      { code: 'M3.1.1', title: 'Réseaux TCP/IP & Technologies de Routage', subs: [{}] },
      { code: 'M3.5', title: 'Statistiques et Analyse de Données', subs: [{ tags: ['Machine Learning'] }, { tags: ['Machine Learning', 'Data Visualization'] }] },
      { code: 'M3.6', title: 'Cloud Computing & Virtualisation', subs: [{}, {}] },
      { code: 'M3.4.3', title: 'Systèmes Distribués', subs: [{}] },
      { code: 'M3.4.2', title: 'Administration UNIX', subs: [{}] },
    ],
  },
  {
    id: 's4',
    num: 'S4',
    year: '2024–2025 · 2ème Année',
    color: '#4CAF7D',
    modules: [
      { code: 'M4.4', title: 'Concepts et Technologies de l\'IA', subs: [{ tags: ['Knowledge Graphs', 'Machine Learning', 'Ontologies'] }] },
      { code: 'M4.2', title: 'Administration des Bases de Données', subs: [{ tags: ['Data Engineering'] }, { tags: ['Data Engineering'] }, { tags: ['Data Engineering'] }] },
      { code: 'M4.5', title: 'Systèmes Décisionnels', subs: [{ tags: ['Data Engineering', 'Data Visualization'] }, { tags: ['Data Visualization', 'Machine Learning'] }] },
      { code: 'M4.3', title: 'Industrialisation Logicielle', subs: [{ tags: ['Ontologies'] }, {}, {}] },
      { code: 'M4.1', title: 'Conduite de Projet Informatique', subs: [{}, {}] },
      { code: 'M4.6', title: 'Architecture et Applications Mobiles', subs: [{}, { tags: ['HCI'] }] },
    ],
  },
  {
    id: 's5',
    num: 'S5',
    year: '2025–2026 · 3ème Année',
    color: '#6C5CE7',
    modules: [
      { code: 'M5.1', title: 'Intégration des Applications d\'Entreprise', subs: [{}, { tags: ['Ontologies'] }, { tags: ['HCI', 'Data Visualization'] }] },
      { code: 'M5.2', title: 'Architectures Logicielles Avancées', subs: [{}, { tags: ['Ontologies', 'Knowledge Graphs'] }, { tags: ['Machine Learning', 'Knowledge Graphs'] }] },
      { code: 'M5.3', title: 'Gouvernance des Systèmes d\'Information', subs: [{ tags: ['Ontologies', 'Knowledge Graphs'] }, { tags: ['Ontologies'] }, {}] },
      { code: 'M5.4', title: 'Environnement pour la Qualité Logicielle', subs: [{}, {}, { tags: ['Machine Learning', 'Knowledge Graphs'] }] },
      { code: 'M5.5', title: 'Qualité et Sûreté des Systèmes d\'Information', subs: [{}, {}, {}] },
      { code: 'M5.6', title: 'Conférences Technologiques et Ouverture', subs: [{}, { tags: ['Machine Learning'] }] },
      { code: 'M5.7', title: 'Projet Fédérateur', subs: [{}] },
      { code: 'M5.8', title: 'Langue et Communication 5', subs: [{}] },
    ],
  },
]

const projects = [
  { code: 'PFA 1A', title: 'Conception et Développement d\'un Outil de Supervision des Équipements', team: 'Omar Ettalbi, Anass Serroukh', jury: 'Pr. W. Ettazi', year: '2022–2023 · 1ère Année', tags: ['Spring Boot', 'Angular', 'JWT', 'PostgreSQL'] },
  { code: 'PFA 2A', title: 'Mo-To-Mi: Framework de Migration Monolithique → Microservices par IA', team: 'Omar Ettalbi, Doha Negraoui', jury: 'Pr. S. Baina, Pr. M. Nassar, Mme M. Labaalli', year: '2024–2025 · 2ème Année', tags: ['Python', 'LLM', 'Multi-Agent', 'Google ADK'] },
  { code: 'PFA 3A', title: 'Smart Sleep Tracker: Suivi Intelligent du Sommeil et Recommandations Personnalisées', team: 'Omar Ettalbi, Ayoub Akour, Saad Aittaleb', jury: 'Pr. S. El Fkihi, Pr. R. Oulad Haj Thami', year: '2025–2026 · 3ème Année', tags: ['CatBoost', 'LightGBM', 'React Native', 'FastAPI', 'dbt'] },
  { code: 'Proj IA', title: 'SI Relevés: Application Web de Gestion des Relevés Assistée par IA', team: 'Omar Ettalbi + 6 teammates · Encadrante: Mme Z. Mcharfi', jury: '', year: '2025–2026 · 3ème Année', tags: ['AI Coding', 'Vitest', 'Cursor IDE', 'Full-Stack'] },
  { code: 'M4.5', title: 'Morocco Rainfall & Wealth Analysis — Data-Driven Decision Making', team: 'Omar Ettalbi (individual project)', jury: 'Pr. Y. Tabii', year: '2024–2025 · Systèmes Décisionnels', tags: ['Python', 'Prophet', 'ARIMA', 'Leaflet', 'Geospatial'] },
  { code: 'Proj 3A', title: 'RAG: Analyse Technique et Perspectives d\'Adoption en Entreprise', team: 'Omar Ettalbi, Ayoub Akour, Saad Ait Taleb', jury: 'M. A. Remli', year: '2025–2026 · 3ème Année', tags: ['RAG', 'LLM', 'Vector DB', 'LangChain'] },
]

const internships = [
  { code: '1A', supervisor: 'M. H. Guermah / M. H. Sabeq', jury: 'Pr. H. Guermah, Pr. M. Nassar', tags: ['Next.js', 'Bootstrap', 'SSR/SSG'] },
  { code: '2A', supervisor: 'M. H. Guermah / M. H. Sabeq', jury: 'M. H. Guermah, M. H. Sabeq', tags: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'RBAC'] },
  { code: 'PFE', supervisor: '', jury: '', tags: ['SAP S/4HANA', 'SAP Datasphere', 'SAP Analytics Cloud'] },
]

const certifications = [
  { name: 'IBM AI Analyst Professional Certificate' },
  { name: 'DataCamp — Deep Reinforcement Learning in Python' },
]

const tagColors: Record<string, string> = {
  'Knowledge Graphs': 'bg-blue-500/15 text-blue-400',
  'Machine Learning': 'bg-emerald-500/15 text-emerald-400',
  'Data Visualization': 'bg-amber-500/15 text-amber-400',
  'HCI': 'bg-pink-500/15 text-pink-400',
  'Ontologies': 'bg-purple-500/15 text-purple-400',
  'Data Engineering': 'bg-cyan-500/15 text-cyan-400',
}

export default function CurriculumPage() {
  const { lang } = useLanguage()
  const ui = curriculumUI[lang]
  const st = semesterTranslations[lang]

  const semesterKeys = ['cpge', 's1', 's2', 's3', 's4', 's5'] as const

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 text-sm font-medium">
          <FaArrowLeft className="w-3 h-3" />
          {ui.backToPortfolio}
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-primary font-medium tracking-wide uppercase mb-6">
            <span className="w-2 h-2 bg-[#c0392b] rounded-full" />
            {ui.headerBadge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">
            ENSIAS — <span className="text-primary">Génie Logiciel</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg">{ui.headerSubtitle}</p>
          <div className="flex flex-wrap gap-8 mt-8">
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">{ui.duration}</span><span className="text-sm font-medium">{ui.durationValue}</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">{ui.academicYears}</span><span className="text-sm font-medium">{ui.academicYearsValue}</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">{ui.specialization}</span><span className="text-sm font-medium">{ui.specializationValue}</span></div>
            <div><span className="block text-xs uppercase tracking-wider text-gray-500">{ui.coordinator}</span><span className="text-sm font-medium">Pr. Hatim Guermah</span></div>
          </div>
        </motion.div>

        {/* CPGE Banner */}
        <div className="relative mt-8 mb-12">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#c0392b]/30" /></div>
          <div className="relative flex justify-center">
            <span className="bg-secondary px-6 py-2 text-sm font-bold uppercase tracking-widest text-[#c0392b] border border-[#c0392b]/30 rounded-full">
              {ui.cpgeBanner}
            </span>
          </div>
        </div>

        {/* CPGE Semester */}
        {renderSemester(semesters[0], 0, st.cpge)}

        {/* ENSIAS Banner */}
        <div className="relative mt-16 mb-12">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-primary/30" /></div>
          <div className="relative flex justify-center">
            <span className="bg-secondary px-6 py-2 text-sm font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full">
              {ui.ensiasBanner}
            </span>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mb-12 max-w-2xl mx-auto">{ui.ensiasDescription}</p>

        {/* ENSIAS Semesters */}
        {semesters.slice(1).map((sem, idx) => {
          const key = semesterKeys[idx + 1]
          const semTrans = st[key]
          return renderSemester(sem, idx, semTrans)
        })}

        {/* Defended Projects */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-purple-500">P</div>
            <div>
              <h2 className="text-2xl font-bold">{ui.defendedProjects}</h2>
              <span className="text-sm text-gray-500">{ui.defendedProjectsSub}</span>
            </div>
          </div>
          <div className="space-y-3">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors">
                <div className="flex items-start gap-3 mb-2">
                  <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md flex-shrink-0">{proj.code}</span>
                  <h3 className="font-semibold text-sm">{proj.title}</h3>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mb-3 pl-3 border-l-2 border-white/[0.06]">{st.projects[idx].description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 mb-3">
                  <span>{ui.team}: {proj.team}</span>
                  {proj.jury && <span>{ui.jury}: {proj.jury}</span>}
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
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-amber-500">I</div>
            <div>
              <h2 className="text-2xl font-bold">{ui.internships}</h2>
              <span className="text-sm text-gray-500">{ui.internshipsSub}</span>
            </div>
          </div>
          <div className="space-y-3">
            {internships.map((intern, idx) => {
              const intTrans = st.internships[idx]
              return (
                <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md flex-shrink-0">{intern.code}</span>
                    <h3 className="font-semibold text-sm">{intTrans.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3 pl-3 border-l-2 border-white/[0.06]">{intTrans.description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 mb-3">
                    {intern.supervisor && <span>{ui.supervisor}: {intern.supervisor}</span>}
                    {intern.jury && <span>{ui.jury}: {intern.jury}</span>}
                    <span>{intTrans.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {intern.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400">{tag}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0 bg-emerald-500">C</div>
            <div>
              <h2 className="text-2xl font-bold">{ui.certifications}</h2>
              <span className="text-sm text-gray-500">{ui.certificationsSub}</span>
            </div>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-white/10 transition-colors flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-gray-500">{st.certifications[idx].description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="text-center pt-8 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors text-sm font-medium">
            <FaArrowLeft className="w-3 h-3" />
            {ui.backToPortfolio}
          </Link>
        </div>
      </div>
    </div>
  )
}

function renderSemester(sem: typeof semesters[number], semIdx: number, semTrans: { title: string; year: string; modules: { title: string; subs: { name: string; topics: string }[] }[] }) {
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
        <div className="w-12 h-12 flex items-center justify-center rounded-xl text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: sem.color }}>
          {sem.num}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{semTrans.title}</h2>
          <span className="text-sm text-gray-500">{semTrans.year}</span>
        </div>
      </div>

      <div className="space-y-3">
        {sem.modules.map((mod, modIdx) => {
          const modTrans = semTrans.modules[modIdx]
          return (
            <div key={`${sem.id}-${modIdx}`} className="bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3 px-5 py-3.5">
                <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-md flex-shrink-0">{mod.code}</span>
                <span className="font-semibold text-sm">{modTrans.title}</span>
              </div>
              <div className="px-5 pb-4">
                {mod.subs.map((sub, subIdx) => {
                  const subTrans = modTrans.subs[subIdx]
                  return (
                    <div key={subIdx} className={`py-3 ${subIdx > 0 ? 'border-t border-white/[0.04]' : ''}`}>
                      <div className="flex justify-between items-start gap-4">
                        <span className="text-sm font-medium text-gray-200">{subTrans.name}</span>
                      </div>
                      {subTrans.topics && (
                        <p className="text-xs text-gray-500 mt-1.5 pl-3 border-l-2 border-white/[0.06] leading-relaxed">{subTrans.topics}</p>
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
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
