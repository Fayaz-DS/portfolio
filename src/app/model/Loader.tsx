"use client"

import { useProgress } from "@react-three/drei"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function Loader() {
  const { progress } = useProgress()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (progress === 100) {
      const t = setTimeout(() => setVisible(false), 900)
      return () => clearTimeout(t)
    }
  }, [progress])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: "#09080a" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(180,150,80,0.045) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="absolute top-5 left-5 w-10 h-10 border-t border-l border-[#c9a827]/25" />
          <div className="absolute top-5 right-5 w-10 h-10 border-t border-r border-[#c9a827]/25" />
          <div className="absolute bottom-5 left-5 w-10 h-10 border-b border-l border-[#c9a827]/25" />
          <div className="absolute bottom-5 right-5 w-10 h-10 border-b border-r border-[#c9a827]/25" />

          <div className="relative flex items-center justify-center mb-10">
            <svg
              viewBox="0 0 80 110"
              width="80"
              height="110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="0.3" y2="1">
                  <stop offset="0%"   stopColor="#f4f4fc" />
                  <stop offset="25%"  stopColor="#d0d0e0" />
                  <stop offset="50%"  stopColor="#888898" />
                  <stop offset="75%"  stopColor="#c8c8d8" />
                  <stop offset="100%" stopColor="#6c6c7c" />
                </linearGradient>
              </defs>

              <motion.line
                x1="18" y1="5" x2="18" y2="105"
                stroke="url(#sg)" strokeWidth="10"
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.line
                x1="18" y1="5" x2="72" y2="5"
                stroke="url(#sg)" strokeWidth="10"
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeInOut", delay: 0.75 }}
              />
              <motion.line
                x1="18" y1="55" x2="58" y2="55"
                stroke="url(#sg)" strokeWidth="10"
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeInOut", delay: 1.15 }}
              />
            </svg>

            <motion.div
              className="absolute inset-0 blur-2xl rounded-full"
              style={{ background: "radial-gradient(ellipse, rgba(200,200,220,0.12) 0%, transparent 70%)" }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="w-40 h-px bg-[#c9a827]/15 relative overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#c9a827]/60 to-[#f5d060]/80"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[9px] font-mono tracking-[0.45em] text-[#c9a827]/35 uppercase"
          >
            Initialising System
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}