'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'

const coreValues = [
  { title: 'Stewardship', description: 'Managing resources with integrity and accountability' },
  { title: 'Compassion', description: 'Leading with empathy and genuine care for others' },
  { title: 'Integrity', description: 'Upholding honesty and transparency in all our actions' },
  { title: 'Excellence', description: 'Pursuing the highest standards in everything we do' },
  { title: 'Collaboration', description: 'Working together for greater impact and change' },
]

const timeline = [
  {
    year: '2014',
    title: 'Foundation Established',
    description: 'Founded by Engineer Munachi Collins Ikedum with a vision to create positive change through philanthropy',
  },
  {
    year: '2016',
    title: 'Orphanage Adoption Program',
    description: 'Launched ongoing commitment to support children in orphanages across communities',
  },
  {
    year: '2020',
    title: 'Expansion of Programs',
    description: 'Expanded services to include healthcare, education, and community development initiatives',
  },
  {
    year: '2023',
    title: 'Official Registration',
    description: 'Officially registered with the Corporate Affairs Commission, strengthening our legal foundation',
  },
]

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-cover bg-center bg-no-repeat overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/about-hero-bg.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              About Our Foundation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              A decade of dedicated service to communities in need, driven by faith and compassion
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2014 by Engineer Munachi Collins Ikedum, the Munachi Collins Ikedum Foundation emerged from a deep commitment to demonstrating Christ's love through concrete action and meaningful change in communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What began as a personal vision has evolved into a thriving organization dedicated to promoting stewardship and improving lives through targeted philanthropy. Our work focuses on three core areas: child education, women's health, and youth empowerment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Officially registered with the Corporate Affairs Commission in 2023, we continue to make a positive and lasting impact on communities across Nigeria, inspiring a culture of generosity and transformative giving.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-primary">2014</p>
                  <p className="text-gray-600 font-medium">Founded</p>
                </div>
                <div className="bg-accent/20 p-6 rounded-lg">
                  <p className="text-4xl font-bold text-accent">10+</p>
                  <p className="text-gray-600 font-medium">Years of Service</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <Image
                src="/images/dsc-7105.jpg"
                alt="Foundation activities with children and community members"
                fill
                className="object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section 
        className="relative py-24 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mission-background.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/80 to-accent/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl">
            To empower transformative giving and demonstrate Christ's love through community stewardship, inspiring a culture of generosity that positively impacts lives and strengthens communities across Nigeria.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section 
        className="relative py-24 md:py-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/vision-background.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-primary/80 to-gray-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl">
            A world where communities are empowered through education, healthcare, and sustainable development, where compassion drives action, and where transformative giving creates lasting positive change for generations to come.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Principles that guide everything we do</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-shadow hover:border-primary/30 text-center">
                <h4 className="text-lg font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Our Journey */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm mb-4">OUR MILESTONES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey of Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A decade of dedicated service, from founding to becoming a registered organization making real change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <Card 
                key={index} 
                className="group p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/50 hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                
                <div className="relative z-10">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Officially Registered & Growing Strong</h3>
                <p className="text-gray-700">Since our official registration with the Corporate Affairs Commission in 2023, we've been strengthening our operations and expanding our impact across multiple communities.</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">2023</p>
                <p className="text-gray-600 font-medium">CAC Registration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Guided by passion and commitment to service</p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-white border border-gray-200 text-center">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-primary">MC</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Engineer Munachi Collins Ikedum</h3>
            <p className="text-primary font-bold mb-4">Founder & Director</p>
            <p className="text-gray-700 leading-relaxed">
              A visionary leader committed to demonstrating Christ's love through philanthropic work. Engineer Munachi Collins Ikedum founded the foundation with the mission of creating lasting positive change in communities and inspiring a culture of generosity.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
