'use client'

import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaServer, FaBrain, FaShare, FaCog, FaBolt, FaDocker } from 'react-icons/fa'
import { SiAnsible } from 'react-icons/si'

const TABS = [
  { id: 'overview', label: 'Overview', icon: FaServer },
  { id: 'ace', label: 'ACE', icon: FaBrain },
  { id: 'skidjoule', label: 'Skidjoule', icon: FaShare },
  { id: 'frast', label: 'Frast', icon: FaCog },
  { id: 'devops', label: 'DevOps', icon: FaDocker },
  { id: 'highlights', label: 'Engineering', icon: FaBolt },
]

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
          <span><span className="font-medium text-white">{name}</span> — {desc}</span>
        </li>
      ))}
    </ul>
  )
}

function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map(t => <span key={t} className={TAG_STYLE}>{t}</span>)}
    </div>
  )
}

function OverviewTab() {
  return (
    <div>
      <div className={SECTION}>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Clueleak is a production-grade, multi-application SaaS platform built and deployed entirely independently — outside any academic or professional obligation. It covers AI-powered content production, social media automation, infrastructure management, and content publication, all running on a self-managed OVH VPS under a custom Docker Compose stack.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Personal Project', 'Production', 'OVH VPS', 'Self-directed', 'Ongoing'].map(t => (
            <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#6C5CE7]/20 text-[#a29bfe]">{t}</span>
          ))}
        </div>
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Architecture</h3>
        <div className="rounded-xl border border-white/[0.07] overflow-hidden">
          {[
            ['ACE', 'Autonomous Content Engine', 'AI-powered content production platform with visual workflows, studio editors, template system, and Gemini agent'],
            ['Skidjoule', 'Social Media Automation', 'Multi-platform content scheduling and publishing to X, Instagram, TikTok, YouTube, Pinterest, Facebook, and Payload CMS'],
            ['Frast', 'VPS Management Panel', 'Private control panel for managing VPS instances, website deployments, and infrastructure provisioning'],
            ['Site Skeleton', 'Publication Template', 'Reusable Payload CMS + Next.js + PostgreSQL starter for publication frontends'],
          ].map(([app, role, desc], i) => (
            <div key={app} className={`flex gap-4 px-5 py-4 ${i > 0 ? 'border-t border-white/[0.05]' : ''}`}>
              <div className="flex-shrink-0 w-24">
                <span className="font-mono text-xs font-bold text-[#a29bfe]">{app}</span>
                <p className="text-[11px] text-gray-500 mt-0.5">{role}</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Infrastructure</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            ['ACE Frontend', 'Next.js · Port 3099'],
            ['ACE Backend', 'Fastify 5 · Port 4000'],
            ['ACE Worker', 'BullMQ container'],
            ['PostgreSQL 16', 'Persistent volume'],
            ['Redis 7', 'Job queues + cache'],
            ['MinIO', 'S3-compatible assets'],
          ].map(([name, detail]) => (
            <div key={name} className="rounded-lg border border-white/[0.07] px-3.5 py-3 bg-white/[0.02]">
              <p className="text-xs font-semibold text-gray-200">{name}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AceTab() {
  return (
    <div>
      <div className={SECTION}>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Node-based content production platform orchestrating AI-generated content through visual pipelines, with human-in-the-loop review, immutable version control on all outputs, and a brand memory system for continuous improvement.
        </p>
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Core Features</h3>
        <FeatureList items={[
          ['Visual Workflow Editor', 'React Flow canvas with macro node types (Brief → Reference Pack → Generate → Review → Publish); full graph persistence and versioning'],
          ['Studio System', '4 specialized sub-editors: Generate Studio (text/image), Assembly Studio (Tiptap rich editor), Review Studio (approval workflows), Publish Studio'],
          ['Template Marketplace', 'Reusable versioned content templates with fork, revert, diff, publish, and visibility controls'],
          ['Template Batches', 'Run templates against item arrays or AI-expanded briefs; full-screen batch review UI with slot-based approval'],
          ['Memory System', 'Tagged feedback stored per brand, origin-scoped to prevent cross-contamination between workflow runs and template batches'],
          ['AI Agent', 'Gemini-powered tool-calling loop with confirmation protocol for write operations — reads data, navigates UI, creates workflows, and promotes templates'],
          ['Recurring Schedules', 'Cron-based template batch automation with state tracking (enabled, nextRunAt, itemCursor, totalRuns)'],
          ['Version Control', 'Immutable snapshots across templates, runs, workflows, and studio graphs with revert and diff support'],
        ]} />
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Tech Stack</h3>
        <div className="space-y-2">
          <div>
            <span className="text-[11px] text-gray-500 uppercase tracking-wide">Frontend</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              <TechStack items={['Next.js (App Router)', 'React 19', 'Zustand', 'React Flow', 'Tiptap', 'Tailwind CSS', 'Radix UI', 'Zod']} />
            </div>
          </div>
          <div>
            <span className="text-[11px] text-gray-500 uppercase tracking-wide">Backend</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              <TechStack items={['Fastify 5', 'Prisma 6', 'PostgreSQL 16', 'BullMQ', 'Redis', 'MinIO', 'Sharp']} />
            </div>
          </div>
          <div>
            <span className="text-[11px] text-gray-500 uppercase tracking-wide">AI</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              <TechStack items={['Google Gemini (Vertex AI)', 'Runware API (FLUX)', 'Tool-calling agent loop']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkidjouleTab() {
  return (
    <div>
      <div className={SECTION}>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Multi-platform social media automation system for scheduling and publishing content to X, Facebook, Instagram, Pinterest, TikTok, YouTube, and Payload CMS. Handles account setup, posting, analytics, and comment management via browser automation.
        </p>
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Core Features</h3>
        <FeatureList items={[
          ['Multi-Brand Management', 'Separate content, accounts, and analytics per brand'],
          ['Platform Accounts', 'Multiple accounts per brand across 7+ platforms'],
          ['Content Management', 'Content items with shape metadata (video 9:16/16:9, images 1:1/9:16), type (post, story, reel, short, carousel, pin, thread, video, blog article), title, caption, hashtags, and media paths'],
          ['Scheduled Posting', 'Queue content for automatic posting with retry logic and screenshot capture; job status tracking (pending, queued, in_progress, completed, failed, cancelled)'],
          ['Browser Automation', 'Multilogin profile integration for multi-accounting across platforms'],
          ['Account Setup Automation', 'Auto-create, verify, and recover platform accounts using Claude + captcha solver + Tuta Mail'],
          ['Analytics Snapshots', 'Per-account metric tracking and historical snapshots'],
          ['Comment Inbox', 'Engagement management with unread/read/replied/archived statuses'],
          ['Cost Tracking', 'Claude API token costs and captcha costs tracked per setup job'],
        ]} />
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Tech Stack</h3>
        <TechStack items={['Next.js', 'React 19', 'TypeScript', 'Prisma 6', 'PostgreSQL', 'BullMQ', 'Redis', 'MCP SDK', 'WebSockets', 'Zod', 'Tailwind CSS', 'Docker']} />
      </div>
    </div>
  )
}

function FrastTab() {
  return (
    <div>
      <div className={SECTION}>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          Private control panel for managing websites across VPS servers. Single dashboard for repository tracking, deployment history, health monitoring, and infrastructure provisioning.
        </p>
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Core Features</h3>
        <FeatureList items={[
          ['VPS Registry', 'Instance registry with connection details, health status, and hosted site count'],
          ['Website Catalog', 'Domain, GitHub repo, deployment target, and status per site'],
          ['Guided Creation Flow', 'Step-by-step website creation: name → domain → VPS → repo → template → confirm'],
          ['Deployment Tracking', 'Status, timestamps, and success/failure indicators per deployment'],
          ['State Machines', 'VPS and site setup state machines with provisioning steps and event logs'],
          ['Planned Extensions', 'GitHub repo creation, VPS bootstrap via Ansible, Drone CI integration, team/client support'],
        ]} />
      </div>
      <div className={SECTION}>
        <h3 className={H3}>Tech Stack</h3>
        <TechStack items={['Next.js', 'React 19', 'TypeScript', 'Prisma', 'SQLite / PostgreSQL', 'iron-session', 'Tailwind CSS', 'Docker Compose']} />
      </div>
    </div>
  )
}

function DevOpsTab() {
  return (
    <div>
      <div className={SECTION}>
        <p className="text-gray-300 leading-relaxed text-sm mb-4">
          The entire Clueleak platform runs on a self-managed OVH VPS under a hand-crafted Docker Compose stack — no managed cloud services, no PaaS. Every service, network, volume, and deployment is owned and operated independently.
        </p>
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Docker Compose Stack</h3>
        <div className="rounded-xl border border-white/[0.07] overflow-hidden">
          {[
            ['ACE Frontend', 'Next.js · Port 3099', 'Turbopack hot reload in dev; production build in container'],
            ['ACE Backend', 'Fastify 5 · Port 4000', 'tsx watch in dev; compiled in production'],
            ['ACE Worker', 'BullMQ container', 'Isolated worker process — scaled independently from the API'],
            ['PostgreSQL 16', 'Port 5432', 'Persistent named volume; Prisma migrations auto-applied on startup'],
            ['Redis 7', 'Port 6379', 'Persistent named volume; used for BullMQ job queues and caching'],
            ['MinIO', 'Ports 9000 / 9001', 'S3-compatible object storage for generated assets; console on 9001'],
          ].map(([service, detail, note], i) => (
            <div key={service} className={`flex gap-4 px-5 py-3.5 ${i > 0 ? 'border-t border-white/[0.05]' : ''}`}>
              <div className="flex-shrink-0 w-28">
                <span className="font-mono text-xs font-bold text-[#a29bfe]">{service}</span>
                <p className="text-[11px] text-gray-500 mt-0.5">{detail}</p>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Infrastructure</h3>
        <FeatureList items={[
          ['OVH VPS', 'Self-managed Linux server — OS configuration, firewall rules, SSH hardening, and service supervision all done manually'],
          ['Reverse Proxy', 'Custom domain routing for each application over the VPS; TLS termination at the edge'],
          ['Persistent Volumes', 'Named Docker volumes for PostgreSQL and Redis ensure data survives container restarts and redeployments'],
          ['Database Migrations', 'Prisma migrations auto-applied on container startup — zero-downtime schema evolution across services'],
          ['Secrets Management', 'API credentials encrypted at rest via a provider secret key; environment variables injected at runtime, never committed'],
          ['Ansible (Frast roadmap)', 'VPS bootstrap and site provisioning via Ansible playbooks — automated from Frast\'s guided creation flow'],
          ['Drone CI (Frast roadmap)', 'CI/CD pipeline integration planned for automated build, test, and deploy workflows triggered from Frast'],
        ]} />
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Async Job Infrastructure</h3>
        <FeatureList items={[
          ['BullMQ + Redis', 'Separate worker containers for ACE content generation and Skidjoule social posting — decoupled from API response path'],
          ['Job Status Tracking', 'Per-job state machine: pending → queued → in_progress → completed / failed / cancelled with retry logic'],
          ['Worker Isolation', 'ACE worker runs as a dedicated container — can be scaled or restarted independently without affecting the API or frontend'],
          ['Cost Observability', 'Token usage, API costs, and captcha costs recorded per job for full spending visibility'],
        ]} />
      </div>

      <div className={SECTION}>
        <h3 className={H3}>Tech Stack</h3>
        <TechStack items={['Docker', 'Docker Compose', 'OVH VPS', 'Linux', 'PostgreSQL 16', 'Redis 7', 'MinIO', 'BullMQ', 'Prisma Migrations', 'Ansible (planned)', 'Drone CI (planned)', 'Reverse Proxy']} />
      </div>
    </div>
  )
}

function HighlightsTab() {
  return (
    <div>
      <div className={SECTION}>
        <FeatureList items={[
          ['Two-dimensional data partitioning', 'originKind discriminator on Run and Memory models prevents cross-contamination between workflow runs and template batch runs'],
          ['Immutable versioning', 'Full snapshot history on templates, runs, and workflows with revert and diff support — nothing is ever overwritten'],
          ['Unified studio execution path', 'Single backend service handles both HTTP route calls and AI agent tool invocations, ensuring consistency'],
          ['AI agent with confirmation protocol', 'Write operations pause and require explicit user approval before executing — safe agentic automation'],
          ['Server-side image rendering pipeline', 'Sharp-based compositing with filters, text overlays via SVG/pango, and layer composites for image generation'],
          ['Background job processing', 'BullMQ + Redis for async content generation (ACE) and social posting (Skidjoule) with separate worker containers for scalability'],
          ['Per-run cost tracking', 'Token usage and API costs recorded per run, template execution, and setup job for full observability'],
          ['Abstracted provider layer', 'Swappable AI providers (Google Gemini, Runware) behind a unified interface; credentials encrypted per brand at rest'],
        ]} />
      </div>
    </div>
  )
}

interface Props {
  open: boolean
  onClose: () => void
}

export default function ClueleakModal({ open, onClose }: Props) {
  const [activeTab, setActiveTab] = useState('overview')

  const content: Record<string, React.ReactNode> = {
    overview: <OverviewTab />,
    ace: <AceTab />,
    skidjoule: <SkidjouleTab />,
    frast: <FrastTab />,
    devops: <DevOpsTab />,
    highlights: <HighlightsTab />,
  }

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
            {/* Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-white/[0.07] flex-shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#6C5CE7]/20 text-[#a29bfe] uppercase tracking-wide">Personal Project</span>
                  <span className="text-[11px] text-gray-500">· Production · OVH VPS</span>
                </div>
                <h2 className="text-xl font-bold text-white">Clueleak</h2>
                <p className="text-sm text-gray-400 mt-0.5">AI Content Production & Social Media Automation Platform</p>
              </div>
              <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white flex-shrink-0 ml-4">
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-6 py-2 border-b border-white/[0.07] flex-shrink-0 overflow-x-auto">
              {TABS.map(tab => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-[#6C5CE7]/20 text-[#a29bfe]'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {content[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
