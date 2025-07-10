"use client"
import React from "react"
import { useState, useEffect } from "react"

const ProductPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "+233541166900"
    const message = "Hi! I'm interested in learning more about Asaase Plus organic fertilizer. Can you provide more details?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="products"
      className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-200/30 to-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-lime-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div
            className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-2">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                <div className="text-xs sm:text-sm font-bold tracking-wider uppercase opacity-80">
                  Premium Organic Solution
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent ">
                ASAASE{" "}
              </span>
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent ">
                PLUS
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-green-800 max-w-4xl mx-auto font-light leading-relaxed">
              Revolutionary eco-fertilizer that transforms agricultural waste into
              <span className="text-emerald-700 font-semibold"> premium soil nutrition</span>
            </p>
          </div>

          {/* Product Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20">
            {/* Product Image Container */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/80 to-green-50/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-green-200/50 hover:border-green-400/50 transition-all duration-500 shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-amber-100/50 to-green-100/50 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-emerald-100/20 animate-pulse"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                      <img
                        src="/fertilizer.jpeg"
                        alt="Asaase Plus Organic Fertilizer"
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = "/images/placeholder-product.jpg"
                        }}
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full animate-bounce z-20"></div>
                      <div className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full animate-bounce delay-300 z-20"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-3 sm:p-4 border border-green-200">
                      <div className="text-green-700 text-xs sm:text-sm font-semibold mb-1">Available Sizes</div>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="px-2 py-1 sm:px-3 sm:py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                          50kg Premium
                        </div>
                        <div className="px-2 py-1 sm:px-3 sm:py-1 bg-emerald-500 text-white rounded-full text-xs font-medium">
                          25kg Standard
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-3 sm:p-4 border border-amber-200">
                      <div className="text-amber-700 text-xs sm:text-sm font-semibold mb-1">NPK Ratio</div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-800">10:10:5</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Benefits */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gradient-to-br from-white/80 to-green-50/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl border border-green-200/50 hover:border-green-400/50 transition-all duration-500 shadow-xl h-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 flex items-center">
                  <div className="w-2 h-6 sm:w-3 sm:h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full mr-3 sm:mr-4"></div>
                  Revolutionary Benefits
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      title: "Nutrient Powerhouse",
                      desc: "Essential macro and micronutrients for explosive growth",
                      icon: "🌱",
                    },
                    {
                      title: "Soil Regeneration",
                      desc: "Transforms soil structure for long-term productivity",
                      icon: "🌍",
                    },
                    {
                      title: "Cost Revolution",
                      desc: "50% cheaper than traditional chemical alternatives",
                      icon: "💰",
                    },
                    {
                      title: "Zero Waste Impact",
                      desc: "Converts agricultural waste into valuable resources",
                      icon: "♻️",
                    },
                    {
                      title: "Extended Release",
                      desc: "Nutrients available for months, not weeks",
                      icon: "⏰",
                    },
                    {
                      title: "Universal Application",
                      desc: "Perfect for cereals, vegetables, and fruits",
                      icon: "🌾",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-green-100/50 transition-all duration-300"
                    >
                      <div className="text-xl sm:text-2xl group-hover:scale-125 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-green-700 font-bold text-base sm:text-lg mb-1">{benefit.title}</h3>
                        <p className="text-sm sm:text-base text-green-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-green-800 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Why Choose Asaase Plus
                </span>
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {[
                {
                  title: "Local Expertise",
                  desc: "Developed by Ghanaian agricultural scientists specifically for African soil conditions",
                  icon: "🌍",
                  color: "bg-emerald-100 text-emerald-800",
                },
                {
                  title: "Sustainable Innovation",
                  desc: "Circular economy model that benefits both farmers and the environment",
                  icon: "♻️",
                  color: "bg-green-100 text-green-800",
                },
                {
                  title: "Proven Effectiveness",
                  desc: "Field-tested with consistent results across multiple growing seasons",
                  icon: "📊",
                  color: "bg-amber-100 text-amber-800",
                },
                {
                  title: "Community Impact",
                  desc: "Creating jobs and supporting local economies while improving yields",
                  icon: "👥",
                  color: "bg-teal-100 text-teal-800",
                },
                {
                  title: "Technical Support",
                  desc: "Comprehensive guidance from our team of agricultural experts",
                  icon: "🛠️",
                  color: "bg-green-100 text-green-800",
                },
                {
                  title: "Future-Focused",
                  desc: "Continuous research and development to improve our products",
                  icon: "🔬",
                  color: "bg-amber-100 text-amber-800",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg"
                >
                  <div
                    className={`absolute inset-0 ${item.color.replace("bg-", "bg-").replace("text-", "text-")} opacity-10 group-hover:opacity-20 transition-all duration-500`}
                  ></div>
                  <div className="relative bg-white/90 backdrop-blur-xl border border-green-200/50 group-hover:border-green-300/70 p-6 sm:p-8 h-full transition-all duration-500">
                    <div
                      className={`text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-500 ${item.color.replace("bg-", "text-").replace("text-", "text-")}`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-sm sm:text-base text-green-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Approach Section */}
          <div className="mb-12 sm:mb-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full mb-4 border border-green-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wide">
                    Science-Based Solution
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 mb-4">
                  Backed by{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                    Research
                  </span>
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Asaase Plus is the result of extensive research and development in organic soil nutrition
                </p>
              </div>

              {/* Research Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Soil Microbiology Card */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-amber-200">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-yellow-300">
                        <div className="text-2xl">🔬</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Soil Microbiology</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our formula enhances beneficial microbial activity, creating a thriving soil ecosystem that
                          naturally improves nutrient availability.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Microbial Increase</span>
                        <span className="text-lg font-bold text-amber-700">300%</span>
                      </div>
                      <div className="w-full bg-yellow-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">Compared to untreated soils</p>
                    </div>
                  </div>
                </div>

                {/* Nutrient Analysis Card */}
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-green-200">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-300">
                        <div className="text-2xl">📊</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrient Analysis</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Comprehensive nutrient profile designed for optimal plant uptake and sustained growth
                          throughout the season.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-300">
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-700">12</div>
                          <div className="text-xs text-gray-600">Essential Minerals</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-700">8</div>
                          <div className="text-xs text-gray-600">Micronutrients</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Call to Action Section */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-500/20 to-green-500/30"></div>

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative p-6 sm:p-8 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-block mb-4">
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/30">
                    🚀 READY TO TRANSFORM YOUR HARVEST?
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  Get Asaase Plus <span className="text-yellow-300">Today!</span>
                </h2>

                <p className="text-sm sm:text-base text-green-100 mb-6 leading-relaxed">
                  Join thousands of farmers who've revolutionized their farming with our premium organic fertilizer
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-white/20">
                    <div className="text-xl mb-1">📞</div>
                    <p className="text-xs text-green-100">Instant Support</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-white/20">
                    <div className="text-xl mb-1">🚚</div>
                    <p className="text-xs text-green-100">Fast Delivery</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-white/20">
                    <div className="text-xl mb-1">💰</div>
                    <p className="text-xs text-green-100">Best Prices</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    onClick={handleWhatsAppClick}
                    className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      <span> Chat on WhatsApp</span>
                    </div>
                  </button>

                  <div className="text-center sm:text-left">
                    <p className="text-green-200 text-xs mb-1">Or call:</p>
                    <a
                      href="tel:+233541166900"
                      className="text-yellow-300 font-medium text-sm hover:text-yellow-200 transition-colors"
                    >
                      +233541166900
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-green-200 text-xs">
                    ✅ Free consultation • ✅ Bulk pricing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage;