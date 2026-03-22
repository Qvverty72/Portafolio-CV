'use client'

import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('Email sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage('Error sending email. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('Connection error. Please check your internet and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Contact me
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:car.sotoa@duocuc.cl"
                className="text-xl text-white hover:text-blue-400 transition"
              >
                car.sotoa@duocuc.cl
              </a>
            </div>

            <div>
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">
                Cellphone number
              </p>
              <a
                href="tel:+56964354778"
                className="text-xl text-white hover:text-blue-400 transition"
              >
                +569 64354778
              </a>
            </div>

            <div>
              <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">
                Follow me
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/carlos-soto-516299293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition text-2xl"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/qvverty72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition text-2xl"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition resize-none"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 font-semibold rounded-lg transition ${
                isSubmitting
                  ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitMessage && (
              <div className={`text-center py-2 rounded-lg ${submitMessage.includes('✓') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
