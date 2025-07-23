import type React from "react"
import ModernHero from "./ModernHero"
import ModernFeatures from "./ModernFeatures"
import ModernServices from "./ModernServices"
import ModernStats from "./ModernStats"
import OurApps from "./OurApps"
import ModernTestimonials from "./ModernTestimonials"
import ModernPartners from "./ModernPartners"
import ModernCTA from "./ModernCTA"
import ContactUs from "./ContactUs"

type Props = {}

const Homepage: React.FC<Props> = () => {
  return (
    <div className="w-full min-h-screen">
      <ModernHero />
      <ModernStats />
      <ModernFeatures />
      <ModernServices />
      <OurApps />
      <ModernPartners />
      <ModernTestimonials />
      <ModernCTA />
      <ContactUs />
    </div>
  )
}

export default Homepage
