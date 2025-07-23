"use client"
import type React from "react"
import { motion } from "framer-motion"

interface PartnerProps {
  logoSrc: string
  altText: string
  name: string
}

const partners: PartnerProps[] = [
  { logoSrc: "/buzstop.JPG", altText: "BuzStop", name: "BuzStop" },
  { logoSrc: "/fishpond.jpg", altText: "FishPond", name: "FishPond" },
  { logoSrc: "/maasim.JPG", altText: "Maasim", name: "Maasim" },
  { logoSrc: "/oko.JPG", altText: "Oko", name: "Oko" },
]

const ModernPartners: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations to provide the best waste management solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#0A8791]/20">
                <div className="flex items-center justify-center h-20 mb-4">
                  <img
                    src={partner.logoSrc || "/placeholder.svg"}
                    alt={partner.altText}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-center text-sm font-semibold text-gray-700 group-hover:text-[#0A8791] transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Interested in Partnership?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our network of partners and help us create cleaner, more sustainable communities together.
            </p>
            <motion.a
              href="#ContactUs"
              className="inline-flex items-center px-8 py-4 bg-[#0A8791] text-white font-semibold rounded-2xl hover:bg-[#065e62] transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernPartners
