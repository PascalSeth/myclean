"use client"
import type React from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { getSocialLinks } from "@/config/links"

interface SocialLinksProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
}

const SocialLinks: React.FC<SocialLinksProps> = ({ variant = "default", size = "md", className = "" }) => {
  const socialLinks = getSocialLinks()

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  const getButtonClasses = () => {
    const baseClasses = `${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`

    if (variant === "light") {
      return `${baseClasses} bg-white text-[#0A8791] hover:bg-gray-50 shadow-md`
    }

    if (variant === "dark") {
      return `${baseClasses} bg-gray-800 text-white hover:bg-gray-700`
    }

    // Default variant
    return `${baseClasses} bg-white text-[#0A8791] hover:bg-gray-200`
  }

  const socialIcons = [
    { href: socialLinks.twitter, icon: FaX, label: "Twitter" },
    { href: socialLinks.instagram, icon: FaInstagram, label: "Instagram" },
    { href: socialLinks.facebook, icon: FaFacebookF, label: "Facebook" },
    { href: socialLinks.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  ]

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialIcons.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses()}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={social.label}
        >
          <social.icon className={iconSizes[size]} />
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
