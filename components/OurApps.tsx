"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Truck, Calendar, MapPin, CreditCard, Bell, DollarSign, Route, Clock, Star } from "lucide-react"
import AppStoreButtons from "./AppStoreButtons"

const OurApps: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"user" | "driver">("user")

  const userFeatures = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Schedule waste pickups at your convenience with flexible timing options.",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your collection requests and see when drivers are on their way.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Pay safely through the app with multiple payment options available.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get notified about pickup schedules, driver arrivals, and service updates.",
    },
  ]

  const driverFeatures = [
    {
      icon: Route,
      title: "Optimized Routes",
      description: "Get the most efficient routes to maximize your earnings and save time.",
    },
    {
      icon: DollarSign,
      title: "Flexible Earnings",
      description: "Work on your schedule and earn competitive rates for each collection.",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Receive instant notifications for new pickup requests in your area.",
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Build your reputation with customer ratings and feedback system.",
    },
  ]

  const TabButton = ({
    type,
    icon: Icon,
    label,
    isActive,
    onClick,
  }: {
    type: "user" | "driver"
    icon: React.ElementType
    label: string
    isActive: boolean
    onClick: () => void
  }) => (
    <motion.button
      onClick={onClick}
      className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
        isActive
          ? "bg-[#0A8791] text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </motion.button>
  )

  return (
    <section id="our-apps" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Two Apps, One Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need waste collection or want to provide the service, we have the perfect app for you
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 p-2 bg-gray-100 rounded-3xl">
            <TabButton
              type="user"
              icon={User}
              label="For Users"
              isActive={activeTab === "user"}
              onClick={() => setActiveTab("user")}
            />
            <TabButton
              type="driver"
              icon={Truck}
              label="For Drivers"
              isActive={activeTab === "driver"}
              onClick={() => setActiveTab("driver")}
            />
          </div>
        </div>

        {/* App Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {activeTab === "user" ? "MyClean User App" : "MyClean Driver App"}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeTab === "user"
                    ? "Request waste collection services with just a few taps. Schedule pickups, track drivers, and manage payments all in one place."
                    : "Join our network of verified drivers and start earning by providing waste collection services in your area."}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {(activeTab === "user" ? userFeatures : driverFeatures).map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-[#0A8791]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#0A8791]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="pt-4">
                <AppStoreButtons appType={activeTab} size="lg" variant="default" />
              </div>
            </div>

            {/* Phone Mockup Side */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main Phone */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="relative z-20"
                >
                  <div className="w-64 md:w-80 h-auto">
                    {/* Phone Frame */}
                    <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[2.5rem] overflow-hidden">
                        {/* Status Bar */}
                        <div className="bg-gray-900 h-8 flex items-center justify-center">
                          <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                        </div>

                        {/* App Content */}
                        <div className="h-96 bg-gradient-to-br from-[#0A8791]/10 to-blue-50 flex flex-col items-center justify-center p-8">
                          <div
                            className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                              activeTab === "user" ? "bg-[#0A8791]" : "bg-orange-500"
                            }`}
                          >
                            {activeTab === "user" ? (
                              <User className="w-10 h-10 text-white" />
                            ) : (
                              <Truck className="w-10 h-10 text-white" />
                            )}
                          </div>

                          <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">
                            {activeTab === "user" ? "Request Pickup" : "Accept Jobs"}
                          </h4>

                          <p className="text-sm text-gray-600 text-center mb-6">
                            {activeTab === "user"
                              ? "Schedule your waste collection in seconds"
                              : "Find nearby pickup requests and start earning"}
                          </p>

                          {/* Mock UI Elements */}
                          <div className="w-full space-y-3">
                            <div className="h-12 bg-white rounded-xl shadow-sm flex items-center px-4">
                              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                              </div>
                            </div>
                            <div className="h-12 bg-white rounded-xl shadow-sm flex items-center px-4">
                              <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                              <div className="flex-1">
                                <div className="h-2 bg-gray-200 rounded mb-1"></div>
                                <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-10 -left-10 w-20 h-20 bg-[#0A8791]/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-10 h-10 bg-[#0A8791] rounded-full"></div>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-10 -right-10 w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-[#0A8791] mb-2">200+</div>
            <div className="text-gray-600">Active Users</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-green-500 mb-2">500+</div>
            <div className="text-gray-600">Successful Pickups</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-500 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurApps
