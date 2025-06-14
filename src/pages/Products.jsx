import React, { useState, useEffect } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                ASAASE{" "}
              </span>
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-pulse">
                PLUS
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-green-800 max-w-4xl mx-auto font-light leading-relaxed">
              Revolutionary eco-fertilizer that transforms agricultural waste
              into
              <span className="text-emerald-700 font-semibold">
                {" "}
                premium soil nutrition
              </span>
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
                      {/* Replace this with your actual product image */}
                      <img 
                        src="/fertilizer.jpeg" // Update this path
                        alt="Asaase Plus Organic Fertilizer"
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "/images/placeholder-product.jpg"; // Add a fallback image
                        }}
                      />
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full animate-bounce z-20"></div>
                      <div className="absolute -bottom-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full animate-bounce delay-300 z-20"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-3 sm:p-4 border border-green-200">
                      <div className="text-green-700 text-xs sm:text-sm font-semibold mb-1">
                        Available Sizes
                      </div>
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
                      <div className="text-amber-700 text-xs sm:text-sm font-semibold mb-1">
                        NPK Ratio
                      </div>
                      <div className="text-2xl sm:text-3xl font-black text-amber-800">
                        10:10:5
                      </div>
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
                        <h3 className="text-green-700 font-bold text-base sm:text-lg mb-1">
                          {benefit.title}
                        </h3>
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
                  color: "bg-blue-100 text-blue-800",
                },
                {
                  title: "Future-Focused",
                  desc: "Continuous research and development to improve our products",
                  icon: "🔬",
                  color: "bg-purple-100 text-purple-800",
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
                    <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-green-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Approach Section */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/20 to-emerald-500/40"></div>

            <div className="relative p-6 sm:p-8 md:p-12 text-white">
              <div className="max-w-5xl mx-auto">
                <div className="inline-block mb-4 sm:mb-6">
                  <div className="px-3 py-1 sm:px-4 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                    SCIENCE-BASED SOLUTION
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">Backed by Research</h2>
                <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed">
                  Asaase Plus is the result of extensive research and
                  development in organic soil nutrition
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-yellow-500 rounded-full mr-3 sm:mr-4"></div>
                      Soil Microbiology
                    </h3>
                    <p className="text-sm sm:text-base text-green-100 mb-3 sm:mb-4">
                      Our formula enhances beneficial microbial activity,
                      creating a thriving soil ecosystem.
                    </p>
                    <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-xs sm:text-sm text-green-200/80">
                      Increases microbial biomass by up to 300% compared to
                      untreated soils
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/20">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full mr-3 sm:mr-4"></div>
                      Nutrient Analysis
                    </h3>
                    <p className="text-sm sm:text-base text-green-100 mb-3 sm:mb-4">
                      Comprehensive nutrient profile designed for optimal plant
                      uptake and growth.
                    </p>
                    <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full mb-3 sm:mb-4"></div>
                    <p className="text-xs sm:text-sm text-green-200/80">
                      Contains 12 essential minerals and 8 micronutrients in
                      bioavailable forms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;