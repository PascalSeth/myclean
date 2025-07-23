"use client"
import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import SocialLinks from "./SocialLinks"
import AppStoreButtons from "./AppStoreButtons"
import { APP_LINKS } from "@/config/links"
import Image from "next/image"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#64ced6] to-gray-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image width={60} height={60} src='/a1.png' alt='MyClean Logo' />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Transforming waste management with smart technology for cleaner, more sustainable communities.
            </p>
            <SocialLinks variant="light" size="md" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {APP_LINKS.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-6">Legal</h3>
            <ul className="space-y-3">
              {APP_LINKS.footer.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-bold mb-6">Download App</h3>
            <AppStoreButtons variant="light" size="sm" />

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <motion.button
                  type="submit"
                  className="w-full bg-white text-[#0A8791] font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} MyClean. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>Made with ❤️ for a cleaner world</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
