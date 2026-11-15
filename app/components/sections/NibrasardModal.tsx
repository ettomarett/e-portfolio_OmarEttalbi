'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBookOpen, FaLaptopCode, FaCloud, FaDocker } from 'react-icons/fa'

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

export default function NibrasardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <div className="space-y-6">
                <div className={SECTION}>
                  <p className="text-gray-300 leading-relaxed text-sm mb-4">
                    Nibrasard is an audiobook reader and generator for PDF, EPUB, MOBI, and TXT documents. It ships as a desktop app (Electron) and as an account-based cloud platform (VPS) with a user web client, admin console, and processing workers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Highlighted', 'Production', 'Electron', 'VPS', 'Ongoing'].map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#E8763A]/20 text-[#F4A261]">{t}</span>
                    ))}
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