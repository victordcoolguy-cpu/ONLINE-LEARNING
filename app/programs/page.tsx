'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { BookOpen, Stethoscope, Users, AlertCircle } from 'lucide-react'

const programs = [
  {
    icon: BookOpen,
    title: 'Education & Literacy',
    description: 'Empowering communities through quality education and literacy programs to create lasting opportunities for children and young people.',
    details: [
      'School supply distribution',
      'Scholarship programs',
      'Literacy training initiatives',
      'Educational infrastructure support',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Wellness',
    description: 'Providing access to essential healthcare services and wellness programs for marginalized communities.',
    details: [
      'Hospital support and donations',
      'Health awareness campaigns',
      'Medical supply provision',
      'Wellness program initiatives',
    ],
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Building sustainable infrastructure and initiatives that uplift entire communities and create long-term positive change.',
    details: [
      'Infrastructure projects',
      'Community centers establishment',
      'Local business support',
      'Skills training programs',
    ],
  },
  {
    icon: AlertCircle,
    title: 'Relief & Response',
    description: 'Swift and compassionate response to emergencies and critical needs in our communities.',
    details: [
      'Emergency relief distribution',
      'Disaster response initiatives',
      'Crisis support services',
      'Humanitarian aid programs',
    ],
  },
]

const impact = [
  {
    program: 'Education & Literacy',
    metric: '500+',
    description: 'Children supported through educational programs',
  },
  {
    program: 'Healthcare & Wellness',
    metric: '1000+',
    description: 'Lives reached through healthcare initiatives',
  },
  {
    program: 'Community Development',
    metric: '15+',
    description: 'Communities strengthened through development projects',
  },
  {
    program: 'Relief & Response',
    metric: '2000+',
    description: 'Families assisted during emergencies and crises',
  },
]

export default function Programs() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four pillars of transformative change that create lasting impact in our communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                  <div className="space-y-2">
                    {program.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600">The measurable difference we're making</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <Card key={index} className="p-8 bg-white border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-primary mb-3">{item.metric}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.program}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Support Our Programs</h2>
            <p className="text-xl text-gray-600">Your contribution directly impacts lives and strengthens communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-white border border-gray-200">
              <div className="text-4xl font-bold text-primary mb-4">Donate</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Make a financial contribution to support our programs and maximize our impact in communities.
              </p>
              <a
                href="/get-involved#donate"
                className="text-primary font-bold hover:text-primary/80 transition-colors"
              >
                Contribute Now
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-white border border-gray-200">
              <div className="text-4xl font-bold text-secondary mb-4">Volunteer</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Give your time and skills to directly serve communities and make a tangible difference.
              </p>
              <a
                href="/get-involved#volunteer"
                className="text-secondary font-bold hover:text-secondary/80 transition-colors"
              >
                Join Us
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-white border border-gray-200">
              <div className="text-4xl font-bold text-accent mb-4">Partner</div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Collaborate with us to amplify our reach and create sustainable solutions together.
              </p>
              <a
                href="/get-involved#partner"
                className="text-accent font-bold hover:text-accent/80 transition-colors"
              >
                Let's Work Together
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
