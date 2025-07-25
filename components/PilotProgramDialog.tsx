"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, MapPin, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import AppStoreButtons from "./AppStoreButtons"

interface PilotProgramDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const PilotProgramDialog: React.FC<PilotProgramDialogProps> = ({ open: controlledOpen, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined

  // Auto-show dialog after 2 seconds if not controlled
  useEffect(() => {
    if (!isControlled) {
      const timer = setTimeout(() => {
        setInternalOpen(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isControlled])

  const open = isControlled ? controlledOpen : internalOpen
  const setOpen = isControlled ? onOpenChange : setInternalOpen

  const handleClose = () => {
    setOpen?.(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-0 overflow-hidden border-0 bg-transparent mx-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A8791]/5 via-white to-blue-50/30" />

          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-sm"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="px-4 sm:px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">


              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                  We're Live in Pokuase!
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-2">
                  MyClean is now piloting at <span className="font-semibold text-[#0A8791]">Agya Herbal, Pokuase</span>
                </p>
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 pb-6 md:pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left Side - App Preview */}
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative flex justify-center order-2 md:order-1"
                >
                  <div className="relative">
                    {/* Phone mockup with home.png */}
                    <div className="w-32 sm:w-40 md:w-48 h-auto relative">
                        <div className="bg-white rounded-[1.25rem] md:rounded-[2rem] overflow-hidden">
                          <img src="/home.png" alt="MyClean App" className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-3 h-3 md:w-6 md:h-6 bg-white rounded-full" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-6 h-6 md:w-10 md:h-10 bg-[#0A8791] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <div className="w-2 h-2 md:w-4 md:h-4 bg-white rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Side - Information */}
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 md:space-y-6 order-1 md:order-2"
                >
                  {/* Location Info */}
                  <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#0A8791]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#0A8791]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Pilot Location</h3>
                      <p className="text-gray-600 text-xs md:text-sm">Agya Herbal, Pokuase</p>
                      <p className="text-gray-500 text-xs mt-1">Greater Accra Region</p>
                    </div>
                  </div>

                  {/* Community Impact */}
                  <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-blue-50 rounded-xl md:rounded-2xl">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Community First</h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Testing with local residents to ensure the best experience
                      </p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-2">
                    <p className="text-xs md:text-sm text-gray-600 mb-4 text-center md:text-left">
                      Be part of our pilot program and help shape the future of waste management in Ghana.
                    </p>

                    <AppStoreButtons
                      appType="user"
                      variant="default"
                      size="md"
                      className="flex-col sm:flex-row gap-3"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-[#0A8791]/5 to-blue-50/50 px-4 sm:px-6 md:px-8 py-3 md:py-4 border-t border-gray-100"
            >
              <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-600">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#0A8791]" />
                <span>Join the movement for cleaner communities</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

export default PilotProgramDialog
