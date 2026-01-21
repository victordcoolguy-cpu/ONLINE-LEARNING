'use client'

import React from "react"

import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight, Heart, Users, BookOpen, Stethoscope, AlertCircle, X, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const programs = [
  {
    icon: BookOpen,
    title: 'Education & Literacy',
    description: 'Empowering communities through quality education and literacy programs to create lasting opportunities.',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare & Wellness',
    description: 'Providing access to essential healthcare services and wellness programs for marginalized communities.',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Building sustainable infrastructure and initiatives that uplift entire communities.',
  },
  {
    icon: AlertCircle,
    title: 'Relief & Response',
    description: 'Swift and compassionate response to emergencies and critical needs in our communities.',
  },
]

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Impact', href: '#impact' },
  { name: 'Programs', href: '#programs' },
]

const coreValues = [
  { title: 'Stewardship', description: 'Responsibly managing resources for the benefit of others.' },
  { title: 'Compassion', description: 'Showing kindness and empathy towards those in need.' },
  { title: 'Service', description: 'Serving others through selfless acts and dedication.' },
  { title: 'Transformation', description: 'Bringing about lasting positive change in communities.' },
  { title: 'Generosity', description: 'Giving freely and generously to support those in need.' },
]

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full overflow-hidden min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight text-balance">
                Empowering <span className="text-primary">Transformative</span> Giving
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Inspiring a culture of generosity by demonstrating Christ's love through impactful philanthropy and community stewardship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
                >
                  Get Involved
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/dsc-7104.jpg"
                alt="Community impact - children enjoying foundation programs"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 sm:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10+', label: 'Years of Service' },
              { number: '1000+', label: 'Lives Impacted' },
              { number: '50+', label: 'Programs Delivered' },
              { number: '15+', label: 'Communities Served' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                About Munachi Collins Ikedum Foundation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2014 by Engineer Munachi Collins Ikedum, our foundation is dedicated to promoting stewardship and improving lives through meaningful philanthropy. We believe in demonstrating Christ's love through tangible action and community engagement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the past decade, we have touched thousands of lives through education initiatives, healthcare support, and youth empowerment programs. Our work spans multiple communities across Nigeria, creating sustainable change and inspiring a culture of generosity.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
                >
                  Learn Our Story
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-lg transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/dsc-7105.jpg"
                alt="Foundation team and community members"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Our Programs
              </h2>
              <p className="text-gray-600">
                Four pillars of transformative change in our communities
              </p>
            </div>
            <Link
              href="/programs"
              className="text-primary font-bold hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              View All
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon
              return (
                <Link
                  key={index}
                  href="/programs"
                  className="block"
                >
                  <Card
                    className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all group h-full"
                  >
                    <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/images/dsc-7103.jpg"
                alt="Large community event"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Making Real Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Since our inception, the Munachi Collins Ikedum Foundation has been instrumental in bringing about positive change across multiple dimensions of community life. From supporting hospitals and caring for orphans to empowering young people with skills and financial support, our programs address real needs with real solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Yearly hospital donations supporting government healthcare facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing support and care for children in orphanages since 2016</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Annual mentorship and financial empowerment for youth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">Educational initiatives reaching thousands of students</span>
                </li>
              </ul>
              <Link
                href="/impact"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
              >
                Explore Our Impact
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 border border-gray-200 hover:shadow-lg transition-shadow hover:border-primary/30 bg-gradient-to-br from-white to-gray-50">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Collaborating with organizations that share our vision for community transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ellasot Consulting</h3>
              </div>
              <p className="text-gray-700">Strategic partnership for organizational excellence, consulting services, and capacity building to strengthen our operations and maximize impact.</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Christian Student Network</h3>
              </div>
              <p className="text-gray-700">Empowering young people to live out their faith through service, mentorship, and community engagement initiatives that create lasting change.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary via-primary/80 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Ways You Can Help
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              There are many ways to support our mission and make a direct impact on the lives of those we serve
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all">
              <Heart className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">Make a Donation</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Your generous contribution directly supports our programs and helps us reach more people in need across our communities.
              </p>
              <Link
                href="/get-involved"
                className="inline-block px-6 py-2 bg-white text-primary hover:bg-white/90 font-bold rounded-lg transition-colors"
              >
                Donate Now
              </Link>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all">
              <Users className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">Volunteer With Us</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Contribute your time, skills, and passion to help make a real difference in the lives of vulnerable populations.
              </p>
              <Link
                href="/get-involved"
                className="inline-block px-6 py-2 bg-white text-primary hover:bg-white/90 font-bold rounded-lg transition-colors"
              >
                Join Our Team
              </Link>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 transition-all">
              <Users className="w-12 h-12 mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-3">Partner With Us</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Collaborate with us through corporate partnerships, sponsorships, or strategic alliances to amplify our collective impact.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-white text-primary hover:bg-white/90 font-bold rounded-lg transition-colors"
              >
                Let's Collaborate
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter/Contact CTA */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Get updates on our latest programs, impact stories, and ways to support our mission
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-involved"
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Get Involved Today
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-bold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
