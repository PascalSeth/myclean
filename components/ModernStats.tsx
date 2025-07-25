"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Users, MapPin, Recycle, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Active Users",
    description: "Trust our platform daily",
  },
  {
    icon: MapPin,
    value: "1",
    label: "City",
    description: "Across multiple countries",
  },
  {
    icon: Recycle,
    value: "1k+",
    label: "Tons Collected",
    description: "Waste properly managed",
  },
  {
    icon: Award,
    value: "4.8",
    label: "Rating",
    description: "Average user satisfaction",
  },
]

const ModernStats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Communities Worldwide</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join millions of users who are making their cities cleaner and more sustainable
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A8791]/10 rounded-2xl mb-4 group-hover:bg-[#0A8791]/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-[#0A8791]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModernStats
