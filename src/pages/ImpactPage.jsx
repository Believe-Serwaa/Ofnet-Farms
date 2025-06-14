"use client"
import React,{ useState, useEffect } from "react"
import { Award, Users, TrendingUp, Globe, Shield, Recycle, LeafyGreen, Wheat, Star } from "lucide-react"

const ImpactPage = () => {
  const [counters, setCounters] = useState({
    soil: 0,
    yield: 0,
    waste: 0,
    jobs: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      // Animate counters
      const soilTimer = setInterval(() => {
        setCounters((prev) => ({ ...prev, soil: Math.min(prev.soil + 3, 85) }))
      }, 30)

      const yieldTimer = setInterval(() => {
        setCounters((prev) => ({ ...prev, yield: Math.min(prev.yield + 1, 35) }))
      }, 50)

      const wasteTimer = setInterval(() => {
        setCounters((prev) => ({ ...prev, waste: Math.min(prev.waste + 4, 120) }))
      }, 40)

      const jobsTimer = setInterval(() => {
        setCounters((prev) => ({ ...prev, jobs: Math.min(prev.jobs + 2, 50) }))
      }, 60)

      setTimeout(() => {
        clearInterval(soilTimer)
        clearInterval(yieldTimer)
        clearInterval(wasteTimer)
        clearInterval(jobsTimer)
      }, 3000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const impactMetrics = [
    {
      title: "Soil Health Improvement",
      value: `${counters.soil}%`,
      description: "of farmers report improved soil quality after using our organic fertilizers",
      icon: LeafyGreen,
      color: "bg-gradient-to-br from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      shadowColor: "shadow-green-500/20",
    },
    {
      title: "Yield Increase",
      value: `${counters.yield}%`,
      description: "average crop yield improvement for farmers using our products",
      icon: TrendingUp,
      color: "bg-gradient-to-br from-green-600 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      title: "Waste Diverted",
      value: `${counters.waste}+`,
      description: "tons of agricultural waste recycled annually into organic fertilizers",
      icon: Recycle,
      color: "bg-gradient-to-br from-emerald-500 to-teal-700",
      bgColor: "from-teal-50 to-teal-100",
      shadowColor: "shadow-teal-500/20",
    },
    {
      title: "Jobs Created",
      value: `${counters.jobs}+`,
      description: "direct employment opportunities in rural communities",
      icon: Users,
      color: "bg-gradient-to-br from-teal-500 to-green-700",
      bgColor: "from-green-50 to-teal-50",
      shadowColor: "shadow-green-500/20",
    },
  ]

  const solutions = [
    {
      title: "Soil Health Restoration",
      description:
        "Our Asaase Plus organic fertilizer (NPR 10:10:5) replenishes soil nutrients naturally, reversing damage from chemical overuse.",
      icon: LeafyGreen,
      gradient: "from-green-500 to-green-700",
      badge: "🌱 Organic",
    },
    {
      title: "Waste to Wealth",
      description: "Transforming agricultural waste into valuable organic inputs through circular economy practices.",
      icon: Recycle,
      gradient: "from-emerald-500 to-emerald-700",
      badge: "♻️ Circular",
    },
    {
      title: "Affordable Solutions",
      description:
        "Locally-produced fertilizers that are 30% more cost-effective than chemical alternatives for smallholder farmers.",
      icon: TrendingUp,
      gradient: "from-teal-500 to-teal-700",
      badge: "💰 Cost-Effective",
    },
    {
      title: "Climate Resilience",
      description: "Reducing Ghana's carbon footprint by decreasing dependence on imported chemical fertilizers.",
      icon: Shield,
      gradient: "from-green-600 to-emerald-700",
      badge: "🌍 Climate-Smart",
    },
    {
      title: "Rural Empowerment",
      description: "Employing and training women and youth in sustainable farming and fertilizer production.",
      icon: Users,
      gradient: "from-emerald-600 to-teal-700",
      badge: "👥 Community",
    },
    {
      title: "Food Security",
      description:
        "Field trials show our OFA fertilizer increases crop yields by 20-35% compared to conventional methods.",
      icon: Wheat,
      gradient: "from-teal-600 to-green-700",
      badge: "🌾 Proven",
    },
  ]

  const achievements = [
    {
      title: "EU Green Innovation Grant",
      description: "Awarded GHC70,000 for advancing green and circular economy initiatives in Ghana",
      icon: Award,
      year: "2023",
      amount: "💰 Fund",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Proven Agricultural Impact",
      description: "Asaase Plus fertilizer shown to improve yields and profitability in field trials",
      icon: TrendingUp,
      year: "2022",
      amount: "35% Yield ↗",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Climate Action Leadership",
      description: "Recognized by The BFT Online for sustainable agriculture innovations",
      icon: Globe,
      year: "2021",
      amount: "🏆 Award",
      color: "from-teal-500 to-teal-700",
    },
  ]

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Smallholder Farmer",
      location: "Ashanti Region",
      quote: "My maize yield increased by 40% using Asaase Plus. My soil is healthier and my profits have doubled!",
      avatar: "👩🏾‍🌾",
      rating: 5,
    },
    {
      name: "Kofi Asante",
      role: "Agricultural Coordinator",
      location: "Northern Region",
      quote: "This organic fertilizer has transformed farming in our community. It's affordable and truly works.",
      avatar: "👨🏾‍🌾",
      rating: 5,
    },
  ]

  const SectionHeader = ({
    badge,
    title,
    highlight,
    description,
    highlightColor = "from-green-600 to-emerald-600",
  }) => (
    <div className="text-center mb-8 md:mb-10">
      {badge && (
        <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-full mb-3 md:mb-4 text-sm md:text-base">
          {badge}
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4">
        {title}{" "}
        {highlight && (
          <span className={`bg-gradient-to-r ${highlightColor} bg-clip-text text-transparent`}>{highlight}</span>
        )}
      </h2>
      {description && <p className="text-base md:text-lg text-gray-600 font-medium">{description}</p>}
    </div>
  )

  return (
    <section
      id="impact"
      className="relative pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8 lg:pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Header */}
        <SectionHeader
          badge="📊 REAL NUMBERS, REAL IMPACT"
          title="OUR"
          highlight="IMPACT"
          description="Measuring the real difference we're making in Ghana's agricultural transformation"
        />

        {/* Impact Metrics Section */}
        <div className="py-4 md:py-6 lg:py-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${metric.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-2xl ${metric.shadowColor} hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-4 hover:scale-[1.02] md:hover:scale-105 border-2 border-white/50 overflow-hidden`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full"></div>
                    <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"></div>
                  </div>

                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 ${metric.color} rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-105 md:group-hover:scale-110 group-hover:rotate-6 md:group-hover:rotate-12 transition-all duration-300 shadow-lg md:shadow-xl relative z-10`}
                  >
                    <metric.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 md:mb-4 font-mono tracking-tight">
                    {metric.value}
                  </h3>

                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">{metric.title}</h4>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">{metric.description}</p>

                  <div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-2xl md:rounded-3xl blur opacity-20 md:opacity-30 group-hover:opacity-40 md:group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="bg-gradient-to-r from-gray-900 via-green-900 to-emerald-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-8 md:mb-12 text-center">
                  WHAT <span className="text-green-400">FARMERS</span> SAY
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20 transform hover:scale-[1.02] md:hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl mr-3 md:mr-4">{testimonial.avatar}</div>
                        <div>
                          <h4 className="font-bold text-white text-base md:text-lg">{testimonial.name}</h4>
                          <p className="text-gray-300 text-sm md:text-base">
                            {testimonial.role} • {testimonial.location}
                          </p>
                          <div className="flex mt-1 md:mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-green-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-200 text-base md:text-lg italic leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="mb-12 md:mb-16">
              <SectionHeader
                badge="🚀 OUR SOLUTIONS"
                title="GAME-CHANGING"
                highlight="INNOVATIONS"
                highlightColor="from-emerald-600 to-teal-600"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-6 hover:scale-[1.02] md:hover:scale-105 border-2 border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-green-400 to-transparent rounded-full transform translate-x-4 -translate-y-4 md:translate-x-8 md:-translate-y-8"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-tr from-emerald-400 to-transparent rounded-full transform -translate-x-3 translate-y-3 md:-translate-x-6 md:translate-y-6"></div>
                    </div>

                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-white to-gray-50 rounded-full px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-bold text-gray-700 shadow md:shadow-lg border border-gray-200">
                      {solution.badge}
                    </div>

                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${solution.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-105 md:group-hover:scale-110 group-hover:rotate-3 md:group-hover:rotate-6 transition-all duration-300 shadow-lg md:shadow-xl lg:shadow-2xl relative z-10`}
                    >
                      <solution.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{solution.title}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-medium">
                      {solution.description}
                    </p>

                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${solution.gradient} rounded-2xl md:rounded-3xl blur opacity-0 group-hover:opacity-10 md:group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <SectionHeader
                badge="🏆 ACHIEVEMENTS"
                title="PROVEN"
                highlight="SUCCESS"
                highlightColor="from-teal-600 to-green-600"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 md:hover:-translate-y-6 hover:scale-[1.02] md:hover:scale-105 border-2 border-gray-100 relative overflow-hidden"
                  >
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${achievement.color} rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-105 md:group-hover:scale-110 group-hover:rotate-6 md:group-hover:rotate-12 transition-all duration-300 shadow-lg md:shadow-xl lg:shadow-2xl`}
                    >
                      <achievement.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="text-sm md:text-base lg:text-lg text-white font-bold bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 md:px-4 md:py-2 rounded-full shadow md:shadow-lg">
                        {achievement.year}
                      </div>
                      <div className="text-sm md:text-base lg:text-lg font-black text-gray-900 bg-gradient-to-r from-green-100 to-emerald-100 px-2 py-1 md:px-4 md:py-2 rounded-full border-2 border-green-200">
                        {achievement.amount}
                      </div>
                    </div>

                    <h4 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{achievement.title}</h4>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed font-medium">
                      {achievement.description}
                    </p>

                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl md:rounded-3xl blur opacity-0 group-hover:opacity-10 md:group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactPage;
