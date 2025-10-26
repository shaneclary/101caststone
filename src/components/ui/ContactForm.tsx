'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'residential',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="bg-warm-white rounded-2xl shadow-luxury p-8 md:p-10">
      <div className="mb-6">
        <h3 className="font-cormorant text-3xl font-bold text-charcoal mb-2">
          Request a Consultation
        </h3>
        <p className="font-inter text-slate-gray">
          Share your project details and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-olive-green/10 border border-olive-green/30 rounded-lg">
          <div className="flex items-center space-x-2 text-olive-green">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-inter font-medium">Thank you! We&apos;ll be in touch soon.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-inter text-sm font-medium text-charcoal mb-2">
            Full Name <span className="text-tuscan-terracotta">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-travertine-cream border border-slate-gray/20 rounded-lg text-charcoal placeholder-slate-gray/50 focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all font-inter"
            placeholder="John Smith"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block font-inter text-sm font-medium text-charcoal mb-2">
              Email Address <span className="text-tuscan-terracotta">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-travertine-cream border border-slate-gray/20 rounded-lg text-charcoal placeholder-slate-gray/50 focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all font-inter"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-inter text-sm font-medium text-charcoal mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-travertine-cream border border-slate-gray/20 rounded-lg text-charcoal placeholder-slate-gray/50 focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all font-inter"
              placeholder="(555) 555-1234"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block font-inter text-sm font-medium text-charcoal mb-2">
            Project Type <span className="text-tuscan-terracotta">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-travertine-cream border border-slate-gray/20 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all font-inter"
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="hospitality">Hospitality</option>
            <option value="institutional">Institutional</option>
            <option value="restoration">Historic Restoration</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-inter text-sm font-medium text-charcoal mb-2">
            Project Details <span className="text-tuscan-terracotta">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-travertine-cream border border-slate-gray/20 rounded-lg text-charcoal placeholder-slate-gray/50 focus:outline-none focus:ring-2 focus:ring-tuscan-terracotta focus:border-transparent transition-all font-inter resize-none"
            placeholder="Tell us about your project... What products are you interested in? What are your timeline and budget?"
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="flex-1"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => window.open('tel:+15555551234', '_self')}
          >
            Or Call Now
          </Button>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-slate-gray font-inter text-center">
          By submitting this form, you agree to our Privacy Policy. We&apos;ll never share your
          information without your consent.
        </p>
      </form>
    </div>
  )
}
