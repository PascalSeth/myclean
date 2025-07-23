"use client"
import type React from "react"
import { motion } from "framer-motion"
import { BsAndroid, BsApple } from "react-icons/bs"
import { getAppStoreLinks } from "@/config/links"

interface AppStoreButtonsProps {
  variant?: "default" | "light" | "dark"
  size?: "sm" | "md" | "lg"
  className?: string
  appType?: "user" | "driver"
}

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  variant = "default",
  size = "md",
  className = "",
  appType = "user",
}) => {
  const { googlePlay, appStore } = getAppStoreLinks()

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const getButtonClasses = (type: "android" | "ios") => {
    const baseClasses = `inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${sizeClasses[size]}`

    if (variant === "light") {
      return type === "android"
        ? `${baseClasses} bg-white text-[#0A8791] hover:bg-gray-50 border border-gray-200`
        : `${baseClasses} bg-white text-gray-900 hover:bg-gray-50 border border-gray-200`
    }

    if (variant === "dark") {
      return type === "android"
        ? `${baseClasses} bg-[#0A8791] text-white hover:bg-[#065e62]`
        : `${baseClasses} bg-gray-900 text-white hover:bg-gray-800`
    }

    // Default variant
    return type === "android"
      ? `${baseClasses} bg-[#0A8791] text-white hover:bg-[#065e62]`
      : `${baseClasses} bg-gray-900 text-white hover:bg-gray-800`
  }

  const appName = appType === "driver" ? "Driver" : "User"

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <motion.a
        href={googlePlay[appType]}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonClasses("android")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsAndroid className={`${iconSizes[size]} mr-3`} />
        <div className="text-left">
          <div className="text-xs opacity-80">Get it on</div>
          <div className="font-bold">Google Play</div>
        </div>
      </motion.a>

      <motion.a
        href={appStore[appType]}
        target="_blank"
        rel="noopener noreferrer"
        className={getButtonClasses("ios")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsApple className={`${iconSizes[size]} mr-3`} />
        <div className="text-left">
          <div className="text-xs opacity-80">Download on the</div>
          <div className="font-bold">App Store</div>
        </div>
      </motion.a>
    </div>
  )
}

export default AppStoreButtons
