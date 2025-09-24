'use client'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Crown, Users, Award, Sparkles, ArrowRight, Linkedin, Twitter, Github, Mail, Instagram } from 'lucide-react'

const founder = {
  name: 'Stephen Selorm Bedzrah',
  role: 'Founder & CEO',
  image: '/Stephen.jpg',
  bio: 'Visionary entrepreneur with 8+ years in tech innovation. Stephen founded MyClean with a mission to transform urban waste management through cutting-edge technology. Previously led multiple successful startups and holds an MBA in Sustainable Business.',
  achievements: ['Winner of Entrepreneurship with Bola Ray', 'Beneficiary of NEIP Presidential Pitch'],
  social: {
    linkedin: 'https://www.linkedin.com/in/stephen-bedzrah-6331a916b',
    twitter: 'https://x.com/manlikebedzrah',
    instagram: 'https://www.instagram.com/manlikebedzrah',
  }
}

const teamMembers = [
  {
    name: 'Daniel Amoako Kodua',
    role: 'Co-founder & Backend Developer',
    image: '/Daniel.jpg',
    specialty: 'Backend Architecture',
    experience: '5+ Years',
    skills: ['Node.js', 'Python', 'Cloud Architecture'],
    social: {
      linkedin: 'https://www.linkedin.com/in/daniel-amoako-kodua-4b4174240/',
      instagram: 'https://www.instagram.com/officialjwise/'
    }
  },
  {
    name: 'Pascal Adotse',
    role: 'Frontend Developer',
    image: '/Pascal.jpg',
    specialty: 'Frontend Development',
    experience: '4+ Years',
    skills: ['React', 'TypeScript', 'UI/UX'],
    social: {
      linkedin: 'https://www.linkedin.com/in/pascal-seth/',
      twitter: 'https://twitter.com/pascal_seth'
    }
  },
  {
    name: 'Samuel Tutu Sasu-Yiadom',
    role: 'Product Designer',
    image: '/Nana.jpg',
    specialty: 'Product Design',
    experience: '6+ Years',
    skills: ['Figma', 'Design Systems', 'User Research'],
    social: {
      linkedin: 'https://www.linkedin.com/in/samuel-sasu-yiadom',
      instagram: 'https://www.instagram.com/ux.kwaku'
    }
  },
  {
    name: 'Papa Kofi Boahen',
    role: 'Mobile Developer',
    image: '/Papakofi.jpg',
    specialty: 'Mobile Development',
    experience: '3+ Years',
    skills: ['React Native', 'Flutter', 'iOS/Android'],
    social: {
      linkedin: 'https://www.linkedin.com/in/papakofiboahen'
    }
  }
]

const stats = [
  { label: 'Active Users', value: '200+', icon: Users },
  { label: 'App Store Rating', value: '4.8★', icon: Award },
  { label: 'Cities Served', value: '1', icon: Sparkles },
]

function AboutUs() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const [hoveredFounder, setHoveredFounder] = useState(false)

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin': return Linkedin
      case 'twitter': return Twitter
      case 'github': return Github
      case 'instagram': return Instagram
      case 'email': return Mail
      default: return Mail
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About MyClean
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're transforming how cities handle waste through innovative technology, creating cleaner communities and sustainable urban environments for millions of people worldwide.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-sm">
                  <Icon className="w-8 h-8 text-[#0A8791] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  MyClean emerged from a simple observation: urban waste management was stuck in the past while cities grew more complex. We saw an opportunity to bridge this gap with technology.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our platform doesn't just collect trash—it creates intelligent waste ecosystems that adapt to urban rhythms, optimize collection routes, and reward environmental responsibility.
                </p>
                <div className="flex items-center text-[#0A8791] font-medium">
                  <span>Cleaner cities start here</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#0A8791]/10 to-blue-50 rounded-2xl p-4 md:p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Impact So Far</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center"><div className="w-2 h-2 bg-[#0A8791] rounded-full mr-3"></div>Reduced collection times by 40%</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-[#0A8791] rounded-full mr-3"></div>Improved waste sorting accuracy by 65%</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-[#0A8791] rounded-full mr-3"></div>Decreased carbon footprint by 30%</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-[#0A8791] rounded-full mr-3"></div>Enhanced community engagement by 200%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
      
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Founder</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Founder Image with Overlay */}
              <div 
                className="relative h-96 lg:h-full group cursor-pointer"
                onMouseEnter={() => setHoveredFounder(true)}
                onMouseLeave={() => setHoveredFounder(false)}
              >
                <img 
                  src={founder.image} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${hoveredFounder ? 'opacity-100' : 'opacity-60'}`}>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-yellow-500 rounded-full p-2">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Social Icons */}
                      <div className="flex space-x-3">
                        {Object.entries(founder.social).map(([platform, url]) => {
                          const Icon = getSocialIcon(platform)
                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                              <Icon className="w-4 h-4 text-white" />
                            </a>
                          )
                        })}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                    <p className="text-yellow-300 font-medium">{founder.role}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {founder.bio}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-gray-900 font-semibold mb-4">Notable Achievements</h4>
                  <div className="space-y-3">
                    {founder.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#0A8791]/10 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-[#0A8791]" />
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-[#0A8791] pl-6 italic text-gray-600 text-lg">
                  "Technology should serve humanity's greatest challenges. MyClean is our answer to creating sustainable, livable cities for everyone."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-xl">The brilliant minds behind MyClean's success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-gray-200 hover:border-[#0A8791]/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-70'}`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                        <p className="text-[#0A8791] font-medium text-sm mb-4">{member.specialty}</p>

                        {/* Social Icons */}
                        <div className="flex justify-center space-x-2">
                          {Object.entries(member.social).map(([platform, url]) => {
                            const Icon = getSocialIcon(platform)
                            return (
                              <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#0A8791]/80 transition-colors"
                              >
                                <Icon className="w-4 h-4 text-white" />
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#0A8791]/10 to-blue-50 border border-gray-200 rounded-3xl p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your City?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Join thousands of communities already benefiting from smarter waste management solutions.
            </p>
            <button className="bg-gradient-to-r from-[#0A8791] to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-[#0A8791]/90 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs