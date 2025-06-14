"use client"

import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-green-50 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cce7d0_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            Let's Connect
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base text-gray-700 max-w-lg mx-auto leading-relaxed">
            Transform your farming with our premium organic fertilizers.
            <span className="text-green-700 font-semibold"> We're here to help you grow sustainably.</span>
          </p>
        </div>

        {/* Glass Form Container */}
        <div className="relative px-4 sm:px-0">
          {/* Glass effect layers */}
          <div className="absolute inset-0 backdrop-blur-lg bg-white/20 rounded-3xl shadow-lg border border-white/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl"></div>
          
          {/* Main form container with glass effect */}
          <div className="relative backdrop-blur-md bg-white/30 rounded-3xl shadow-xl border border-white/40 overflow-hidden">
            {/* Subtle animated border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-green-400/30 via-emerald-400/30 to-teal-400/30 animate-pulse">
              <div className="h-full w-full rounded-3xl bg-transparent backdrop-blur-sm"></div>
            </div>

            {/* Top accent line */}
            <div className="relative h-1 bg-gradient-to-r from-green-400 to-emerald-400"></div>

            <div className="relative p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`w-full px-4 py-3 text-sm sm:text-base border-2 rounded-xl transition-all duration-300 bg-white/70 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-gray-800 font-medium shadow-sm ${
                          focusedField === "name"
                            ? "border-emerald-500 shadow-md shadow-emerald-500/20 bg-white"
                            : "border-gray-200 hover:border-emerald-400"
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`w-full px-4 py-3 text-sm sm:text-base border-2 rounded-xl transition-all duration-300 bg-white/70 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-gray-800 font-medium shadow-sm ${
                          focusedField === "email"
                            ? "border-emerald-500 shadow-md shadow-emerald-500/20 bg-white"
                            : "border-gray-200 hover:border-emerald-400"
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-800">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        className={`w-full px-4 py-3 text-sm sm:text-base border-2 rounded-xl transition-all duration-300 bg-white/70 focus:outline-none focus:ring-0 placeholder:text-gray-600 text-gray-800 font-medium shadow-sm ${
                          focusedField === "phone"
                            ? "border-emerald-500 shadow-md shadow-emerald-500/20 bg-white"
                            : "border-gray-200 hover:border-emerald-400"
                        }`}
                        placeholder="054 123 4567"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-800">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField("")}
                        required
                        className={`w-full px-4 py-3 text-sm sm:text-base border-2 rounded-xl transition-all duration-300 bg-white/70 focus:outline-none focus:ring-0 appearance-none cursor-pointer text-gray-800 font-medium shadow-sm ${
                          focusedField === "subject"
                            ? "border-emerald-500 shadow-md shadow-emerald-500/20 bg-white"
                            : "border-gray-200 hover:border-emerald-400"
                        }`}
                      >
                        <option value="">Choose inquiry type...</option>
                        <option value="product">🌱 Product Inquiry</option>
                        <option value="partnership">🤝 Partnership Opportunity</option>
                        <option value="feedback">💬 Feedback & Suggestions</option>
                        <option value="other">❓ Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-800">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField("")}
                      required
                      className={`w-full px-4 py-3 text-sm sm:text-base border-2 rounded-xl transition-all duration-300 bg-white/70 resize-none focus:outline-none focus:ring-0 placeholder:text-gray-600 text-gray-800 font-medium shadow-sm ${
                        focusedField === "message"
                          ? "border-emerald-500 shadow-md shadow-emerald-500/20 bg-white"
                          : "border-gray-200 hover:border-emerald-400"
                      }`}
                      placeholder="Tell us about your farming needs..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden ${
                      isSubmitting ? "" : "hover:from-green-700 hover:to-emerald-700"
                    }`}
                  >
                    <span
                      className={`relative transition-opacity duration-300 text-sm sm:text-base ${isSubmitting ? "opacity-0" : "opacity-100"}`}
                    >
                      Send Message ✨
                    </span>
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="ml-2 sm:ml-3 text-sm sm:text-base font-semibold">Sending...</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;