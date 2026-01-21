'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Heart, Users, BookOpen, TrendingUp } from 'lucide-react'

const keyMetrics = [
  {
    icon: Heart,
    number: '10+',
    label: 'Years of Service',
    color: 'text-accent',
  },
  {
    icon: Users,
    number: '1000+',
    label: 'Lives Impacted',
    color: 'text-primary',
  },
  {
    icon: BookOpen,
    number: '50+',
    label: 'Programs Delivered',
    color: 'text-secondary',
  },
  {
    icon: TrendingUp,
    number: '15+',
    label: 'Communities Served',
    color: 'text-accent',
  },
]

const initiatives = [
  {
    title: 'Yearly Hospital Donations',
    description: 'Since 2014, we have provided consistent support and donations to government hospitals, improving healthcare access and quality for thousands of residents.',
    impact: 'Healthcare infrastructure strengthened across multiple facilities',
    image: '/images/dsc-7104.jpg',
  },
  {
    title: 'Orphanage Adoption Program',
    description: 'Since 2016, we have maintained an ongoing commitment to supporting and caring for children in orphanages within our communities.',
    impact: '500+ orphans and vulnerable children directly supported',
    image: '/images/dsc-7105.jpg',
  },
  {
    title: 'Youth Empowerment Programs',
    description: 'Annual mentorship and financial empowerment initiatives since 2014, helping young people achieve their potential and build sustainable futures.',
    impact: '300+ youth equipped with skills and mentorship',
    image: '/images/dsc-7103.jpg',
  },
]

const stories = [
  {
    title: 'Education Changed Her Future',
    excerpt: 'Through our scholarship program, Grace was able to complete her secondary education and is now pursuing a degree in nursing.',
    author: 'Grace Okoro',
  },
  {
    title: 'Healthcare Access Saved Lives',
    excerpt: 'The hospital donations from MCIF enabled critical surgeries and medical interventions that saved multiple lives in our community.',
    author: 'Dr. Chioma Williams',
  },
  {
    title: 'Youth Mentorship Transformed My Life',
    excerpt: 'The mentorship program helped me gain confidence and start my own business, now I employ 10 people in my community.',
    author: 'David Nmeri',
  },
]

export default function Impact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Over a decade of transformative work creating lasting change in communities across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">By The Numbers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                  <div className="text-5xl font-bold text-gray-900 mb-2">{metric.number}</div>
                  <p className="text-gray-600 font-medium">{metric.label}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Major Initiatives</h2>

          <div className="space-y-16">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">{initiative.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{initiative.description}</p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <p className="text-primary font-bold">Key Impact:</p>
                    <p className="text-gray-700">{initiative.impact}</p>
                  </div>
                </div>
                <div className="relative h-96">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Impact Stories</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Real stories of lives transformed through our programs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">"{story.excerpt}"</p>
                <p className="text-primary font-bold">— {story.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Year-by-Year Impact */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Growth</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-gray-200 text-center">
              <p className="text-5xl font-bold text-primary mb-3">2014-2016</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Foundation Years</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Started with hospital donations</li>
                <li>Began orphanage support</li>
                <li>Youth programs launched</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 text-center">
              <p className="text-5xl font-bold text-secondary mb-3">2017-2020</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Expansion Phase</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Expanded to 10+ communities</li>
                <li>Added education programs</li>
                <li>500+ lives impacted</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 text-center">
              <p className="text-5xl font-bold text-accent mb-3">2021-2024</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Scaling Up</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>Official registration (2023)</li>
                <li>1000+ lives reached</li>
                <li>15+ communities served</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of This Impact
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join us in creating lasting positive change. Your contribution, no matter the size, makes a real difference in people's lives.
          </p>
          <a
            href="/get-involved"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-white font-bold rounded-lg transition-colors"
          >
            Make a Difference Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
