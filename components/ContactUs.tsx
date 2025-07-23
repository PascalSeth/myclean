"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaInstagram } from "react-icons/fa"
import { FaX } from "react-icons/fa6"
import { useForm, ValidationError } from "@formspree/react"
import { useToast } from "@/hooks/use-toast"
import { getContactInfo, getSocialLinks } from "@/config/links"

type Props = {}

const ContactUs: React.FC<Props> = () => {
  const { toast } = useToast()
  const [state, handleSubmit] = useForm("xkgweanj")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(e)
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! We'll get back to you soon.",
    })
    setFormData({ name: "", email: "", message: "" }) // Clear form fields
  }

  const contactInfo = getContactInfo()
  const socialLinks = getSocialLinks()

  return (
    <section
      id="ContactUs"
      className="bg-gradient-to-r w-full h-full overflow-x-hidden from-[#0A8791] to-[#06484d] text-white py-5 px-4"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-end mb-4 mx-4"
      >
        <img height={60} width={60} src="/a1.png" alt="Company Logo" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {/* Contact Form */}
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                rows={5}
                placeholder="Your Message"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>
            <motion.button
              disabled={state.submitting}
              whileHover={{ scale: 1.1 }}
              type="submit"
              className="w-full bg-[#0A8791] text-white p-3 rounded-lg shadow-lg hover:bg-[#0a889186] transition-colors"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-6 text-white"
        >
          <div>
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="mt-4">
              Phone:{" "}
              <a href={`tel:${contactInfo.phone}`} className="text-blue-200">
                {contactInfo.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${contactInfo.email}`} className="text-blue-200">
                {contactInfo.email}
              </a>
            </p>
          </div>
          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href={socialLinks.x}
                className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaX />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                className="bg-white text-[#0A8791] p-3 rounded-full hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactUs
