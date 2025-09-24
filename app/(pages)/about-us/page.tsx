'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Crown, Users, Award, Sparkles, ArrowRight } from 'lucide-react'

const founder = {
  name: 'Stephen Selorm Bedzrah',
  role: 'Founder & CEO',
  image: '/placeholder-user.jpg',
  bio: 'Visionary entrepreneur with 8+ years in tech innovation. Stephen founded MyClean with a mission to transform urban waste management through cutting-edge technology. Previously led multiple successful startups and holds an MBA in Sustainable Business.',
  achievements: [ 'Tech Innovator Award 2023', 'Sustainable Cities Pioneer']
}

const teamMembers = [
  {
    name: 'Daniel',
    role: 'Co-founder & Backend Developer',
    image: '/placeholder-user.jpg',
    specialty: 'Backend Architecture'
  },
  {
    name: 'Pascal Adotse',
    role: 'Frontend Developer',
    image: '/placeholder-user.jpg',
    specialty: 'Frontend Development'
  },
  {
    name: 'Samuel Tutu Sasu-Yiadom',
    role: 'Product Designer',
    image: '/placeholder-user.jpg',
    specialty: 'Product Design'
  },
  {
    name: 'Papa Kofi Boahen',
    role: 'Mobile Developer',
    image: '/placeholder-user.jpg',
    specialty: 'Mobile Development'
  }
]

const stats = [
  { label: 'Active Users', value: '200+', icon: Users },
  { label: 'App Store Rating', value: '4.8★', icon: Award },
  { label: 'Cities Served', value: '1', icon: Sparkles },
]

function AboutUs() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0A8791]/10 border border-[#0A8791]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#0A8791] mr-2" />
              <span className="text-[#0A8791] text-sm font-medium">Revolutionizing Urban Waste Management</span>
            </div>

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
          <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="bg-gradient-to-br from-[#0A8791]/10 to-blue-50 rounded-2xl p-8 border border-gray-200">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-4">
              <Crown className="w-4 h-4 text-yellow-600 mr-2" />
              <span className="text-yellow-700 text-sm font-medium">Leadership</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Founder</h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <Avatar className="relative w-32 h-32 border-4 border-gray-200">
                    <AvatarImage src={founder.image} alt={founder.name} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-[#0A8791] to-blue-600 text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Crown className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-[#0A8791] font-medium mb-4">{founder.role}</p>
              </div>

              <div className="lg:col-span-2 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {founder.bio}
                </p>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-gray-900 font-semibold mb-4">Notable Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {founder.achievements.map((achievement, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 text-center border border-gray-200">
                        <Award className="w-5 h-5 text-[#0A8791] mx-auto mb-2" />
                        <span className="text-gray-700 text-sm">{achievement}</span>
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
                className="bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-[#0A8791]/50 cursor-pointer group shadow-sm"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardHeader className="text-center p-6">
                  <div className="relative mb-6">
                    <Avatar className="mx-auto w-20 h-20 border-2 border-gray-200 group-hover:border-[#0A8791] transition-colors">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#0A8791] to-blue-600 text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {hoveredMember === index && (
                      <div className="absolute inset-0 bg-[#0A8791]/20 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  <CardTitle className="text-gray-900 text-lg mb-2">{member.name}</CardTitle>
                  <CardDescription className="text-[#0A8791] font-medium mb-3">{member.role}</CardDescription>

                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <span className="text-xs text-[#0A8791] uppercase tracking-wide font-semibold">Specialty</span>
                    <p className="text-gray-700 text-sm mt-1">{member.specialty}</p>
                  </div>
                </CardHeader>
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