'use client'

import React from "react"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us to learn more about our work or to discuss how we can collaborate.
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-white border border-gray-200">
            {isSubmitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We'll be in touch soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="partnership">Partnership Discussion</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-lg"
              >
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="relative py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm">
              STAY IN THE LOOP
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl">
              Connect with us and stay informed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Join our growing community of supporters and impact creators. Get exclusive stories, program updates, and ways to make a difference.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Newsletter Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Get Updates Delivered</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Subscribe to our newsletter to receive monthly stories of impact, program highlights, and opportunities to support our mission.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all text-lg"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                We respect your inbox. Unsubscribe anytime. No spam, ever.
              </p>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Story</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Follow us on social media for daily inspiration, real-time impact updates, and behind-the-scenes glimpses of our work.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Facebook', url: '#', handle: '@munachicollinsfoundation' },
                  { name: 'Instagram', url: '#', handle: '@munachicollinsfoundation' },
                  { name: 'LinkedIn', url: '#', handle: 'Munachi Collins Ikedum Foundation' },
                  { name: 'Twitter', url: '#', handle: '@MCIFoundation' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-xl font-bold text-primary">{social.name.slice(0, 1)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 group-hover:text-primary transition-colors">{social.name}</p>
                        <p className="text-sm text-gray-500">{social.handle}</p>
                      </div>
                    </div>
                    <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 pt-20 border-t border-gray-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '10K+', label: 'Newsletter Subscribers' },
                { number: '25K+', label: 'Social Followers' },
                { number: '500+', label: 'Monthly Stories' },
                { number: '100%', label: 'Community Engagement' },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Find Us</h2>
          <Card className="p-0 overflow-hidden border border-gray-200 h-96 md:h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7234234234!2d7.06!3d4.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sNo%2035%20Old%20Refinery%20Road%2C%20Elelenwo!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
