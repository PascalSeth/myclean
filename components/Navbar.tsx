"use client"
import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { getNavigationLinks } from "@/config/links"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigationLinks = getNavigationLinks()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/a1.png" alt="MyClean Logo" className="h-10 w-10 lg:h-12 lg:w-12" />
                <span className="text-xl lg:text-2xl font-bold text-[#0A8791] hidden sm:block">MyClean</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-[#0A8791] font-medium transition-colors duration-200 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A8791] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#ContactUs"
                  className="bg-[#0A8791] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#065e62] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img src="/a1.png" alt="MyClean" className="h-10 w-10" />
                    <span className="text-xl font-bold text-[#0A8791]">MyClean</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="h-6 w-6 text-gray-700" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="space-y-6">
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="flex items-center space-x-3 text-gray-700 hover:text-[#0A8791] font-medium text-lg transition-colors duration-200 group"
                        >
                          <div className="w-2 h-2 bg-[#0A8791] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                          <span>{link.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* CTA Section */}
                <div className="p-6 border-t border-gray-100">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="#ContactUs"
                      onClick={toggleMenu}
                      className="block w-full bg-[#0A8791] text-white text-center px-6 py-4 rounded-2xl font-semibold hover:bg-[#065e62] transition-all duration-300 shadow-lg"
                    >
                      Get Started
                    </Link>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-sm text-gray-500 mb-3">Follow us</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://x.com/MycleanApp"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A8791] hover:text-white transition-colors duration-200"
                      >
                        <span className="text-sm font-bold">𝕏</span>
                      </a>
                      <a
                        href="https://www.instagram.com/myclean.app/"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#0A8791] hover:text-white transition-colors duration-200"
                      >
                        <span className="text-sm font-bold">IG</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
