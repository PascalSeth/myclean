"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, User, Truck } from "lucide-react"
import AppStoreButtons from "./AppStoreButtons"

const ModernCTA: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<"user" | "driver">("user")

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A8791] via-[#0A8791] to-[#065e62] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Choose your app and join the MyClean community today. Whether you need waste collection or want to provide
              the service, we've got you covered.
            </p>

            {/* App Selection */}
            <div className="flex space-x-4 mb-8">
              <motion.button
                onClick={() => setSelectedApp("user")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedApp === "user" ? "bg-white text-[#0A8791]" : "bg-white/20 text-white hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5" />
                <span>User App</span>
              </motion.button>

              <motion.button
                onClick={() => setSelectedApp("driver")}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedApp === "driver" ? "bg-white text-[#0A8791]" : "bg-white/20 text-white hover:bg-white/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Truck className="w-5 h-5" />
                <span>Driver App</span>
              </motion.button>
            </div>

            <AppStoreButtons appType={selectedApp} variant="light" size="lg" className="mb-8" />

            <div className="flex items-center text-white/80">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>Available on iOS and Android</span>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative z-20"
              >
                <img src="/home.png" alt="MyClean App" className="w-64 md:w-80 h-auto drop-shadow-2xl" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-10 -left-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
              >
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ModernCTA
