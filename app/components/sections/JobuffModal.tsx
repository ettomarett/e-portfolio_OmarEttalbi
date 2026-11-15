'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBookOpen, FaLaptopCode, FaCloud, FaDocker, FaPython, FaServer } from 'react-icons/fa'

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

export default function JobuffModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaBookOpen },
    { id: 'frontend', label: 'Frontend', icon: FaLaptopCode },
    { id: 'bpma', label: 'BPMA Process Map', icon: FaServer },
    { id: 'pipeline', label: 'Python Pipeline', icon: FaPython },
    { id: 'agent', label: 'Agent / Browser', icon: FaCloud },
    { id: 'storage', label: 'Data & Storage', icon: FaDocker },
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
                  <span className="text-[11px] text-gray-500">· Self-Hosted · React · Python · Docker</span>
                </div>
                <h2 className="text-xl font-bold text-white">Jobuff</h2>
                <p className="text-sm text-gray-400 mt-0.5">Self-Hosted Opportunity Tracking Platform</p>
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
              <div className="space-y-6">
                <div className={SECTION}>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    Jobuff is a self-hosted opportunity-tracking application for managing PhD positions, jobs, internships, and grants. It combines a React frontend with a Python-based scraping pipeline, browser automation for job-board discovery, email handling (IMAP/SMTP), and a Docker-based deployment behind a Caddy edge proxy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Highlighted', 'Production', 'Self-Hosted', 'Docker', 'Ongoing'].map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E8763A]/20 text-[#F4A261]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className={SECTION}>
                  <h3 className={H3}>Frontend — Web Application</h3>
                  <div className="space-y-2">
                    <TechSpecRow tech="React" version="^19.2.5" purpose="UI library (React 19)" />
                    <TechSpecRow tech="React DOM" version="^19.2.5" purpose="Client-side rendering" />
                    <TechSpecRow tech="React Router DOM" version="^7.14.2" purpose="Dynamic /:huntId/* routes" />
                    <TechSpecRow tech="Vite" version="^8.0.10" purpose="Dev server, HMR, production build" />
                    <TechSpecRow tech="TypeScript" version="~6.0.2" purpose="Static typing" />
                    <TechSpecRow tech="Zustand" version="^5.0.12" purpose="Store factory pattern for multi-hunt state isolation" />
                    <TechSpecRow tech="FontAwesome" version="^7.3.1 / ^3.5.0" purpose="UI icons" />
                    <TechSpecRow tech="marked" version="^18.0.9" purpose="Render cached scrape content / markdown" />
                    <TechSpecRow tech="dompurify" version="^3.4.13" purpose="Sanitize HTML before rendering" />
                    <TechSpecRow tech="nodemailer" version="^8.0.7" purpose="SMTP email dispatch" />
                    <TechSpecRow tech="imap-simple" version="^5.1.0" purpose="IMAP inbox fetching" />
                    <TechSpecRow tech="mailparser" version="^3.9.9" purpose="Parse raw email into structured data" />
                    <TechSpecRow tech="pdf-parse" version="^2.4.5" purpose="Parse PDF CVs/documents" />
                  </div>
                </div>

                <div className={SECTION}>
                  <h3 className={H3}>Pipeline — Python Backend & Scraping</h3>
                  <div className="space-y-2">
                    <TechSpecRow tech="Python" version="3.11" purpose="Backend & scraping pipeline" />
                    <TechSpecRow tech="Playwright" version="—" purpose="Browser automation" />
                    <TechSpecRow tech="curl_cffi" version="—" purpose="HTTP client with TLS fingerprinting" />
                    <TechSpecRow tech="websocket-client" version="—" purpose="WebSocket client" />
                    <TechSpecRow tech="fonttools" version="—" purpose="Font manipulation" />
                    <TechSpecRow tech="pyautogui" version="—" purpose="GUI automation" />
                    <TechSpecRow tech="pyperclip" version="—" purpose="Clipboard access" />
                    <TechSpecRow tech="python-xlib" version="—" purpose="X11 library" />
                    <TechSpecRow tech="pygetwindow" version="—" purpose="Window management" />
                    <TechSpecRow tech="Pillow" version="—" purpose="Image processing" />
                  </div>
                </div>

                <div className={SECTION}>
                  <h3 className={H3}>Agent / Browser</h3>
                  <div className="space-y-2">
                    <TechSpecRow tech="Claude Code" version="—" purpose="AI coding agent" />
                    <TechSpecRow tech="chrome-devtools-mcp" version="—" purpose="Chrome DevTools MCP server" />
                    <TechSpecRow tech="Playwright (Node)" version="—" purpose="Browser automation" />
                    <TechSpecRow tech="Chromium" version="—" purpose="Web browser engine" />
                    <TechSpecRow tech="Xvfb" version="—" purpose="Virtual framebuffer" />
                    <TechSpecRow tech="x11vnc" version="—" purpose="VNC server for X11" />
                    <TechSpecRow tech="novnc" version="—" purpose="NoVNC HTML5 VNC client" />
                    <TechSpecRow tech="websockify" version="—" purpose="WebSocket to TCP proxy" />
                  </div>
                </div>

                <div className={SECTION}>
                  <h3 className={H3}>Infrastructure & Deployment</h3>
                  <div className="space-y-2">
                    <TechSpecRow tech="Docker" version="—" purpose="Containerized app" />
                    <TechSpecRow tech="node:24-bookworm-slim" version="—" purpose="Image base (Node 24 on Debian Bookworm)" />
                    <TechSpecRow tech="Docker Compose" version="compose.yaml" purpose="Multi-service orchestration" />
                    <TechSpecRow tech="Caddy" version="jobuff.caddy" purpose="TLS, security headers, reverse proxy" />
                    <TechSpecRow tech="Drone CI" version=".drone.yml" purpose="Verify + deploy-production pipelines" />
                    <TechSpecRow tech="tini + entrypoint.sh" version="—" purpose="Process manager (reaps orphaned processes)" />
                    <TechSpecRow tech="Docker secrets" version="anthropic" purpose="Claude API key at runtime" />
                    <TechSpecRow tech="curl /healthz" version="—" purpose="Docker HEALTHCHECK on port 4173" />
                  </div>
                </div>

                <div className={SECTION}>
                  <h3 className={H3}>Data & Storage</h3>
                  <div className="space-y-2">
                    <TechSpecRow tech="hunts/{hunt-id}/ledger/listings.json" version="—" purpose="Per-hunt listing data" />
                    <TechSpecRow tech="hunts/{hunt-id}/ledger/apply-journal.ndjson" version="—" purpose="Application journal" />
                    <TechSpecRow tech="hunts/{hunt-id}/cache/" version="—" purpose="Scraped screenshots (.png) & cached content (.md)" />
                    <TechSpecRow tech="platforms/{slug}/" version="—" purpose="Shared library: platform.json, discover.py, DISCOVER.md, RECIPE.md" />
                    <TechSpecRow tech="creds/" version="—" purpose="Proxy + cookie config for scraping (gitignored)" />
                    <TechSpecRow tech="app/public/data/" version="—" purpose="Static data served by the app" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
