"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Home, Building2, Recycle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Collection",
    description: "Scheduled pickups for households with flexible timing and eco-friendly disposal methods.",
    features: ["Weekly/Bi-weekly schedules", "Bulk item collection", "Recycling guidance"],
    image: "https://zoomlionghana.com/wp-content/uploads/2023/08/Zoomlion_cleaning.jpg",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description: "Scalable waste management solutions for businesses, offices, and commercial establishments.",
    features: ["Custom schedules", "Large volume handling", "Compliance reporting"],
    image: "https://starrfm.com.gh/wp-content/uploads/2023/05/5-696x522.jpg",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Recycle,
    title: "Recycling Programs",
    description: "Comprehensive recycling services that help reduce environmental impact and promote sustainability.",
    features: ["Material sorting", "Pickup scheduling", "Impact tracking"],
    image: "https://i.pinimg.com/originals/74/b7/3e/74b73e3cac06cfa5e08735dd6053a173.jpg",
    color: "from-purple-500 to-purple-600",
  },
]

const ModernServices: React.FC = () => {
  return (
    <section id="waste-solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Waste Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential pickups to commercial waste management, we've got you covered
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#0A8791] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-[#0A8791] text-white font-semibold rounded-xl hover:bg-[#065e62] transition-colors duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModernServices
