'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBookOpen, FaLaptopCode, FaCloud, FaDocker, FaServer, FaBrain, FaTerminal } from 'react-icons/fa'

const TAG_STYLE = 'px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-gray-300'
const SECTION = 'mb-6'
const H3 = 'text-sm font-semibold text-gray-100 uppercase tracking-wider mb-3'
const FEATURE = 'flex items-start gap-2 text-sm text-gray-300 leading-relaxed'
const DOT = 'mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0'

function FeatureList({ items }: { items: [string, string][] }) {
  return (
    <ul className="space-y-2">
      {items.map(([name, desc]) => (
        <li key={name} className={FEATURE}>
          <span className={`${DOT} bg-[#6C5CE7]`} />
          <span><span className="font-medium text-white">{name}</span>: {desc}</span>
        </li>
      ))}
    </ul>
  )
}

function TechSpecRow({ tech, version, purpose }: { tech: string; version: string; purpose: string }) {
  return (
    <div className="flex gap-4 px-4 py-2 border-b border-white/[0.04] text-sm">
      <span className="w-24 font-mono text-[#F4A261]">{tech}</span>
      <span className="w-16 text-gray-500">{version}</span>
      <span className="text-gray-300">{purpose}</span>
    </div>
  )
}

export default function NibrasardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaBookOpen },
    { id: 'desktop', label: 'Desktop App', icon: FaLaptopCode },
    { id: 'platform', label: 'Cloud Platform', icon: FaCloud },
    { id: 'ai', label: 'AI & NLP', icon: FaBrain },
    { id: 'devops', label: 'DevOps', icon: FaTerminal },
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#0f1117] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between px-6 py-5 border-b border-white/[0.07] flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#E8763A]/20 text-[#F4A261] uppercase tracking-wide">Highlighted Project</span>
                  <span className="text-[11px] text-gray-500">· Desktop + Cloud · Electron · VPS</span>
                </div>
                <h2 className="text-xl font-bold text-white">Nibrasard</h2>
                <p className="text-sm text-gray-400 mt-0.5">Audiobook Reader & Generator Platform</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0 ml-4">
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-1 px-6 py-2 border-b border-white/[0.07] flex-shrink-0 overflow-x-auto">
              {tabs.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? 'bg-[#E8763A]/20 text-[#F4A261]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <Icon className="w-3 h-3" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-6">
                      <div className={SECTION}>
                        <p className="text-gray-300 leading-relaxed text-sm mb-4">
                          Nibrasard is an audiobook reader and generator for PDF, EPUB, MOBI, and TXT documents. It ships as a desktop app (Electron) and as an account-based cloud platform (VPS) with a user web client, admin console, and processing workers.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Highlighted', 'Production', 'Electron', 'VPS', 'Ongoing', 'MIT License'].map(t => (
                            <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E8763A]/20 text-[#F4A261]">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Supported Formats</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {['PDF', 'EPUB', 'MOBI', 'TXT'].map(fmt => (
                            <span key={fmt} className={TAG_STYLE}>{fmt}</span>
                          ))}
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Localization</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Multi-language UI with 40+ TTS languages including English, Spanish, French, German, Japanese, Korean, Chinese, Hindi, Arabic, Dutch, Russian, Polish, Turkish, Swedish, Norwegian, Danish, Finnish, Greek, Hebrew, Czech, Romanian, Hungarian, Ukrainian, Vietnamese, Indonesian, and more.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'desktop' && (
                  <motion.div
                    key="desktop"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-6">
                      <div className={SECTION}>
                        <h3 className={H3}>Desktop Runtime & Framework</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Electron" version="^44.5.1" purpose="Cross-platform desktop shell (main + preload + renderer)" />
                          <TechSpecRow tech="React" version="^18.2.0" purpose="Frontend UI library" />
                          <TechSpecRow tech="React DOM" version="^18.2.0" purpose="React renderer for browser/Electron webContents" />
                          <TechSpecRow tech="Vite" version="^8.3.2" purpose="Build tool and dev server (port 3210)" />
                          <TechSpecRow tech="@vitejs/plugin-react" version="^6.1.1" purpose="Vite React plugin (HMR, JSX transform)" />
                          <TechSpecRow tech="electron-builder" version="^26.15.3" purpose="App packaging (NSIS, AppImage, deb, DMG)" />
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Desktop Frontend Libraries</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="pdfjs-dist" version="^5.4.296" purpose="PDF rendering in the browser" />
                          <TechSpecRow tech="react-pdf" version="^10.4.1" purpose="React components for PDF.js" />
                          <TechSpecRow tech="epubjs" version="^0.4.2" purpose="EPUB reading / rendering" />
                          <TechSpecRow tech="howler" version="^2.2.4" purpose="Audio playback (read-along, TTS audio)" />
                          <TechSpecRow tech="recharts" version="2.15.4" purpose="Charts (usage / price estimator)" />
                          <TechSpecRow tech="three" version="^0.128.0" purpose="3D graphics (logo / intro animation)" />
                          <TechSpecRow tech="tesseract.js" version="^5.0.4" purpose="OCR for scanned pages" />
                          <TechSpecRow tech="@fontsource/amiri" version="^5.3.0" purpose="Arabic serif font" />
                          <TechSpecRow tech="@fontsource/plus-jakarta-sans" version="^5.3.0" purpose="Sans-serif UI font" />
                          <TechSpecRow tech="zod" version="^4.6.5" purpose="Schema validation" />
                          <TechSpecRow tech="uuid" version="^11.1.1" purpose="Unique identifiers" />
                          <TechSpecRow tech="jszip" version="^3.10.1" purpose="ZIP handling (EPUB internals)" />
                          <TechSpecRow tech="canvas" version="^3.2.3" purpose="Canvas / image manipulation" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'platform' && (
                  <motion.div
                    key="platform"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-6">
                      <div className={SECTION}>
                        <h3 className={H3}>Cloud Platform Application</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Node.js" version="—" purpose="API, workers, and admin/web clients" />
                          <TechSpecRow tech="Express" version="—" purpose="Platform API server (port 3941)" />
                          <TechSpecRow tech="BullMQ" version="^6.3.11" purpose="Job queues (extraction, conversion, TTS) backed by Redis" />
                          <TechSpecRow tech="ioredis" version="^6.0.0" purpose="Redis client" />
                          <TechSpecRow tech="pg" version="^8.23.1" purpose="PostgreSQL client" />
                          <TechSpecRow tech="@aws-sdk/client-s3" version="^3.1145.0" purpose="S3-compatible object storage client" />
                          <TechSpecRow tech="helmet" version="^8.3.0" purpose="Security headers" />
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Cloud Infrastructure (Docker Compose)</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Docker / Docker Compose" version="—" purpose="Container orchestration" />
                          <TechSpecRow tech="PostgreSQL" version="17-alpine" purpose="Primary database (postgres_data volume)" />
                          <TechSpecRow tech="Redis" version="7-alpine" purpose="Cache + BullMQ job queue (redis_data, append-only)" />
                          <TechSpecRow tech="RustFS" version="1.0.0" purpose="S3-compatible object store for artifacts (storage_data)" />
                          <TechSpecRow tech="Opus-MT translator" version="custom Dockerfile" purpose="CPU-based sentence translation service" />
                          <TechSpecRow tech="Caddy" version="—" purpose="Reverse proxy (routes nibrasard.com, admin.nibrasard.com, ci.nibrasard.com)" />
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Cloud Platform Clients</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="React + Vite" version="—" purpose="User web client (platform/web)" />
                          <TechSpecRow tech="React + Vite" version="—" purpose="Admin console (platform/admin)" />
                          <TechSpecRow tech="Electron" version="—" purpose="Account/library desktop client (when NIBRASARD_PLATFORM_API is set)" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-6">
                      <div className={SECTION}>
                        <h3 className={H3}>AI / NLP Services</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="OpenRouter" version="OpenAI-compatible" purpose="LLM for text cleanup, TOC cleanup, page reading, front-matter probing" />
                          <TechSpecRow tech="Google Cloud Text-to-Speech" version="—" purpose="Cloud TTS audiobook generation" />
                          <TechSpecRow tech="ONNX Runtime Node" version="—" purpose="Document layout models (doclayout_yolo.onnx, PP-DocLayoutV2.onnx)" />
                          <TechSpecRow tech="Tesseract.js" version="traineddata (ara, eng, fra, spa)" purpose="OCR for scanned documents" />
                          <TechSpecRow tech="Opus-MT" version="CPU container" purpose="Sentence translation" />
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>External Services & APIs</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Google Cloud Text-to-Speech" version="—" purpose="Premium TTS voices (40+ languages)" />
                          <TechSpecRow tech="Google Cloud Storage" version="—" purpose="Cloud object storage" />
                          <TechSpecRow tech="Resend" version="—" purpose="Email delivery" />
                          <TechSpecRow tech="OpenRouter / OpenAI" version="—" purpose="LLM text processing" />
                          <TechSpecRow tech="Google OAuth" version="—" purpose="Sign-in (account mode)" />
                          <TechSpecRow tech="Cloudflare Turnstile" version="—" purpose="Registration bot protection" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'devops' && (
                  <motion.div
                    key="devops"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className="space-y-6">
                      <div className={SECTION}>
                        <h3 className={H3}>DevOps, CI/CD, & Tooling</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Drone CI" version=".drone.yml" purpose="Verification pipeline (node:24-bookworm-slim) + production promotion pipeline" />
                          <TechSpecRow tech="GitHub" version="—" purpose="Version control" />
                          <TechSpecRow tech="Docker Compose" version="—" purpose="Local and production container orchestration" />
                          <TechSpecRow tech="systemd timers" version="—" purpose="Backup/restic scheduling on the VPS" />
                          <TechSpecRow tech="Restic" version="—" purpose="Encrypted backups to external S3-compatible target" />
                          <TechSpecRow tech="concurrently" version="—" purpose="Run React + Electron + backend together in dev" />
                          <TechSpecRow tech="cross-env" version="—" purpose="Cross-platform environment variables" />
                          <TechSpecRow tech="wait-on" version="—" purpose="Wait for TCP ports before launching Electron" />
                          <TechSpecRow tech="nodemon" version="—" purpose="Backend auto-restart in dev" />
                          <TechSpecRow tech="electron-builder install-app-deps" version="—" purpose="Post-install Linux dependencies" />
                        </div>
                      </div>

                      <div className={SECTION}>
                        <h3 className={H3}>Ports & Network (Development)</h3>
                        <div className="space-y-2">
                          <TechSpecRow tech="Vite (React dev)" version="3210" purpose="Proxies /api → backend, /api/v1 → platform API" />
                          <TechSpecRow tech="Legacy Express backend" version="3941" purpose="backend/server.js" />
                          <TechSpecRow tech="Platform API" version="3942" purpose="Proxied from Vite /api/v1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}