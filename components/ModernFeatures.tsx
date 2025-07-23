"use client"
import type React from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CreditCard, Bell, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered scheduling that adapts to your routine and local collection patterns.",
    image: "/mycleanmain.png",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your collection requests in real-time with live GPS updates.",
    image: "/mycleanhome.png",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security and instant receipts.",
    image: "/payment.png",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get timely reminders and updates about your waste collection schedule.",
    image: "/mycleanaccount.png",
  },
  {
    icon: Shield,
    title: "Verified Collectors",
    description: "All service providers are verified and rated by the community.",
    image: "/mycleanmain.png",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help with any issues or questions.",
    image: "/mycleanhome.png",
  },
]

const ModernFeatures: React.FC = () => {
  return (
    <section id="app-features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need in One App</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover powerful features designed to make waste management effortless and efficient
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#0A8791]/10 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-[#0A8791]/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#0A8791]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModernFeatures
