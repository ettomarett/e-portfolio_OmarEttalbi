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
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}