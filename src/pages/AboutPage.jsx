import React, { useState } from "react";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Globe,
  Shield,
  CheckCircle,
  Package,
  Sprout,
  Trees,
  Zap,
  Heart,
  Star,
  Leaf,
  Sun,
  Droplets,
  CloudSun,
} from "lucide-react";
import founderImage from "../assets/images/foster.jpeg"; // Adjust the path to your image

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    {
      number: "200+",
      label: "Acres Cultivated",
      icon: Trees,
      color: "bg-gradient-to-br from-teal-500 to-emerald-600",
    },
    {
      number: "1,500+",
      label: "Monthly Output",
      icon: Package,
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      number: "GHC70K",
      label: "EU Innovation Grant",
      icon: Award,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      number: "2019",
      label: "Founded",
      icon: Sprout,
      color: "bg-gradient-to-br from-lime-500 to-green-600",
    },
  ];

  const achievements = [
    {
      title: "EU Grant Winner",
      description: "Recognized for circular economy innovation",
      icon: Award,
      year: "2023",
      color: "text-blue-500",
    },
    {
      title: "Proven Results",
      description: "Documented yield improvements",
      icon: TrendingUp,
      year: "2022",
      color: "text-emerald-500",
    },
    {
      title: "Industry Pioneer",
      description: "Leading Ghana's agricultural innovation",
      icon: Globe,
      year: "2021",
      color: "text-amber-500",
    },
  ];

  const commitments = [
    "Regenerative soil health practices",
    "Circular agricultural solutions",
    "Affordable organic alternatives",
    "Climate-positive farming systems",
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Leaf className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Our Green Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Cultivating{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Sustainable Futures
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Transforming agriculture through innovation, sustainability, and community empowerment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg md:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-emerald-100 transform hover:-translate-y-1 text-center">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-lg mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md mx-auto`}
                >
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-1 sm:space-x-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("story")}
              className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg ${
                activeTab === "story"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Our Story
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg ${
                activeTab === "mission"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Our Mission
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "story" && (
          <div className="space-y-12 md:space-y-16">
            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Sun className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Since 2019
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  From Humble Roots to{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    National Impact
                  </span>
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                  <p>
                    What began as a vision in Jamasi, Ashanti Region has blossomed into Ghana's premier organic fertilizer producer, transforming agricultural waste into premium soil nutrients.
                  </p>
                  <p>
                    Under the leadership of CEO Foster Osae, we've expanded our operations across 200+ acres, delivering sustainable solutions that benefit both farmers and the environment.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl md:rounded-2xl p-6 md:p-8 h-64 md:h-80 flex items-center justify-center shadow-sm border border-emerald-100">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                    <Sprout className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Growing Together
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Building sustainable agricultural ecosystems
                  </p>
                </div>
              </div>
            </div>

            {/* Product & Leadership */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white overflow-hidden relative">
              <div className="absolute -right-20 -top-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-teal-500/10 blur-3xl"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                {/* Text Content */}
                <div>
                  <div className="inline-flex items-center bg-white/10 text-emerald-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
                    <Zap className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Innovation Spotlight
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      Asaase Plus
                    </span>{" "}
                    & Our Vision
                  </h3>
                  
                  {/* Product Info */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-2 md:mb-3">Revolutionary Organic Fertilizer</h4>
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                      Our NPR 10:10:5 formula transforms agricultural waste into premium soil nutrients, delivering:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-emerald-600/30 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-400">
                        20-35% Yield Increase
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-teal-600/30 border border-teal-400/30 rounded-full text-xs font-medium text-teal-400">
                        30% Cost Savings
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-600/30 border border-blue-400/30 rounded-full text-xs font-medium text-blue-400">
                        Soil Regeneration
                      </span>
                    </div>
                  </div>
                  
                  {/* Founder Info */}
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-emerald-400 mb-2 md:mb-3">Leadership</h4>
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                      <span className="font-semibold text-white">Foster Osae</span> has guided our growth from local initiative to national leader in organic agricultural solutions, earning recognition including the prestigious EU Green Innovation Grant.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-emerald-600/30 text-emerald-400 rounded-full text-xs font-medium">
                        EU Grant Winner
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-teal-600/30 text-teal-400 rounded-full text-xs font-medium">
                        Agricultural Innovator
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Content */}
                <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                  {/* Founder Image */}
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-lg overflow-hidden ring-2 md:ring-4 ring-emerald-400/30 mb-3 md:mb-4">
                      <img 
                        src={founderImage} 
                        alt="Foster Osae, Founder & CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg md:text-xl font-bold text-white">Foster Osae</h5>
                    <p className="text-sm md:text-base text-emerald-400">Founder & CEO</p>
                  </div>
                  
                  {/* Product Visual */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-4 md:p-6 text-center border border-white/20">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-md">
                      <Package className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <h5 className="text-base md:text-lg font-bold text-white mb-1 md:mb-2">Asaase Plus</h5>
                    <p className="text-xs md:text-sm text-gray-300">NPR 10:10:5 Organic Formula</p>
                    <p className="text-xs text-emerald-400 mt-1">Premium Soil Solution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${achievement.color}/10 rounded-lg mb-3 md:mb-4 mx-auto border ${achievement.color}/30`}>
                    <achievement.icon className={`w-5 h-5 md:w-6 md:h-6 ${achievement.color}`} />
                  </div>
                  <div className="text-xs md:text-sm font-medium text-emerald-600 mb-1 md:mb-2">{achievement.year}</div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="space-y-8 md:space-y-12">
            {/* Mission */}
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto px-4 sm:px-0">
                To cultivate a sustainable agricultural ecosystem that nourishes the land, empowers farmers, and secures food systems for future generations.
              </p>
            </div>

            {/* Commitments */}
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Core Commitments
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-2 md:mr-3 mt-0.5 md:mt-1 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <span className="text-sm md:text-base md:text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      {commitment}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPage;