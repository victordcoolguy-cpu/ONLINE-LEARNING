'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Heart, Users, Briefcase, Gift, Clock, Target } from 'lucide-react'

const ways = [
  {
    id: 'donate',
    icon: Gift,
    title: 'Donate',
    description: 'Make a financial contribution to support our programs',
    color: 'text-accent',
    benefits: [
      'Direct impact on community programs',
      'Tax-deductible contributions',
      'Regular impact updates',
      'Recognition opportunities',
    ],
    cta: 'Make a Donation',
  },
  {
    id: 'volunteer',
    icon: Heart,
    title: 'Volunteer',
    description: 'Give your time and skills to serve communities',
    color: 'text-primary',
    benefits: [
      'Direct service opportunities',
      'Meaningful community connections',
      'Skill development',
      'Team-based projects',
    ],
    cta: 'Join Our Team',
  },
  {
    id: 'partner',
    icon: Briefcase,
    title: 'Partner',
    description: 'Collaborate to amplify our collective impact',
    color: 'text-secondary',
    benefits: [
      'Strategic collaboration',
      'Corporate partnership packages',
      'Co-branded initiatives',
      'Long-term relationships',
    ],
    cta: 'Let\'s Collaborate',
  },
]

const donationLevels = [
  {
    amount: '#5,000',
    title: 'Friend',
    impact: 'Provides school supplies for 5 children',
  },
  {
    amount: '#10,000',
    title: 'Supporter',
    impact: 'Supports one child\'s full semester education',
  },
  {
    amount: '#25,000',
    title: 'Champion',
    impact: 'Covers medical supplies for a health initiative',
  },
  {
    amount: '#50,000+',
    title: 'Benefactor',
    impact: 'Supports a full community program',
  },
]

const volunteerOpportunities = [
  {
    title: 'Teaching Assistant',
    frequency: 'Weekly',
    skills: 'Education, mentoring',
    time: '4-8 hours/week',
  },
  {
    title: 'Healthcare Support',
    frequency: 'Bi-weekly',
    skills: 'Healthcare, compassion',
    time: '4-6 hours/session',
  },
  {
    title: 'Community Outreach',
    frequency: 'Monthly',
    skills: 'Communication, organization',
    time: '8-12 hours/month',
  },
  {
    title: 'Event Planning',
    frequency: 'Project-based',
    skills: 'Planning, coordination',
    time: 'Flexible',
  },
  {
    title: 'Marketing & Social Media',
    frequency: 'Weekly',
    skills: 'Digital marketing, design',
    time: '3-5 hours/week',
  },
  {
    title: 'Administrative Support',
    frequency: 'As needed',
    skills: 'Organization, administration',
    time: 'Flexible',
  },
]

export default function GetInvolved() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/80 to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get Involved
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our mission to create lasting positive change in communities across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Three Ways Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Three Ways to Make an Impact
            </h2>
            <p className="text-xl text-gray-600">
              Find the way that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ways.map((way) => {
              const Icon = way.icon
              return (
                <Card key={way.id} className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-xl transition-shadow">
                  <Icon className={`w-16 h-16 ${way.color} mb-6`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{way.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{way.description}</p>
                  <div className="space-y-3 mb-8">
                    {way.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors">
                    {way.cta}
                  </button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section id="donate" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Donation Levels
            </h2>
            <p className="text-xl text-gray-600">
              Choose a giving level that matches your passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationLevels.map((level, index) => (
              <Card key={index} className="p-8 bg-white border border-gray-200 text-center hover:shadow-lg transition-shadow hover:border-primary/50">
                <div className="text-4xl font-bold text-primary mb-3">{level.amount}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{level.title}</h3>
                <p className="text-gray-700 leading-relaxed">{level.impact}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-lg">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Find a role that matches your skills and schedule
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{opportunity.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{opportunity.skills}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-600">{opportunity.time}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-lg">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partner" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Corporate Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Work with us to create mutual value and community impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Partner With Us?</h3>
              <ul className="space-y-3">
                {[
                  'Align your brand with meaningful social impact',
                  'Access community engagement opportunities',
                  'Build employee satisfaction through giving back',
                  'Flexible partnership packages',
                  'Transparent reporting and accountability',
                  'Long-term, sustainable collaboration',
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-white border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Options</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Sponsorship</p>
                  <p className="text-gray-600 text-sm">Support specific programs or events</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">In-kind Donations</p>
                  <p className="text-gray-600 text-sm">Contribute products or services</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Volunteer Programs</p>
                  <p className="text-gray-600 text-sm">Employee volunteer opportunities</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Custom Collaboration</p>
                  <p className="text-gray-600 text-sm">Tailored partnership arrangements</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-lg">
              Start a Partnership
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How are donations used?',
                a: 'All donations go directly to our programs. We maintain transparent financial records and provide regular impact reports to donors.',
              },
              {
                q: 'Is there a minimum donation amount?',
                a: 'No minimum! Every contribution matters. You can donate any amount that works for you.',
              },
              {
                q: 'How much time do I need to volunteer?',
                a: 'Volunteer opportunities are flexible. Choose roles based on your availability, from 3 hours weekly to project-based work.',
              },
              {
                q: 'Are donations tax-deductible?',
                a: 'Yes, donations to our foundation are tax-deductible. We are registered with the Corporate Affairs Commission.',
              },
              {
                q: 'How do I track the impact of my donation?',
                a: 'We provide regular updates and impact reports to all donors. You can see exactly how your contribution made a difference.',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
