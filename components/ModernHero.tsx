"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import AppStoreButtons from "./AppStoreButtons"
import PilotProgramDialog from "./PilotProgramDialog"

const ModernHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0A8791]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0A8791]/10 text-[#0A8791] text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              #1 Waste Management App
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Clean Cities,
              <span className="text-[#0A8791] block">Cleaner Future</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Transform your neighborhood with MyClean - the smart waste management solution that connects communities
              with reliable collection services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <AppStoreButtons size="lg" />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.8★</div>
                <div className="text-gray-600">App Store Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">1</div>
                <div className="text-gray-600">City Served</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative z-20"
              >
                <img src="/map.png" alt="MyClean App" className="w-64 md:w-80 h-auto drop-shadow-2xl" />
              </motion.div>

              {/* Secondary Phone */}
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-16 top-20 z-10"
              >
                <img src="/bin.png" alt="MyClean Features" className="w-48 md:w-60 h-auto drop-shadow-xl opacity-80" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-[#0A8791]/20 rounded-full flex items-center justify-center"
              >
                <div className="w-10 h-10 bg-[#0A8791] rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      {/* Pilot Program Dialog */}
      <PilotProgramDialog />
    </section>
  )
}

export default ModernHero
