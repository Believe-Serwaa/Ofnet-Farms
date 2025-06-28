import React, { useState } from "react";
import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  Package,
  Sprout,
  Trees,
  Heart,
  Star,
  Leaf,
  Sun,
} from "lucide-react";
import founderImage from "../assets/images/foster.jpeg"; // Make sure to use the correct image path

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    {
      number: "200+",
      label: "Acres Cultivated",
      icon: Trees,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      number: "1,500+",
      label: "Monthly Production (tons)",
      icon: Package,
      color: "bg-gradient-to-br from-amber-400 to-orange-500",
    },
    {
      number: "100%",
      label: "Organic Certified",
      icon: Leaf,
      color: "bg-gradient-to-br from-lime-500 to-green-600",
    },
    {
      number: "50+",
      label: "Farmers Empowered",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
  ];

  const commitments = [
    "Sustainable farming practices",
    "Soil health regeneration",
    "Farmer education programs",
    "Community-focused solutions",
    "Innovative organic products",
    "Environmental stewardship"
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Leaf className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            Our Story
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Enriching Soils,  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Sustaining Tomorrow
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering organic agriculture solutions that benefit farmers, communities, and the environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg md:rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100 transform hover:-translate-y-1 text-center">
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
                  ? "bg-green-600 text-white shadow-sm"
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
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`flex items-center px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg ${
                activeTab === "values"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Our Values
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "story" && (
          <div className="space-y-12 md:space-y-16">
            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <Sun className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Since 2019
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  From Humble Beginnings to{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Regional Leader
                  </span>
                </h3>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-700">
                  <p>
                    Founded in 2019, our company began with a simple mission: to provide farmers with affordable, effective organic alternatives to chemical fertilizers.
                  </p>
                  <p>
                    What started as a small operation has grown into a thriving business serving farmers across the region, helping them improve yields while protecting the environment.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of the organic agriculture movement, developing innovative products that make sustainable farming accessible to all.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-6 md:p-8 h-64 md:h-80 flex items-center justify-center shadow-sm border border-green-100">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md">
                    <Sprout className="w-6 h-6 md:w-10 md:h-10 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    Rooted in Community
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Committed to local farmers and sustainable growth
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white overflow-hidden relative">
              <div className="absolute -right-20 -top-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-green-500/10 blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <div>
                  <div className="inline-flex items-center bg-white/10 text-green-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 backdrop-blur-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    Our Founder
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      Meet Our Leader
                    </span>
                  </h3>
                  
                  <div className="mb-6 md:mb-8">
                    <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                      With over a decade of experience in organic agriculture, our founder has been instrumental in developing sustainable farming solutions that actually work for smallholder farmers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-green-600/30 border border-green-400/30 rounded-full text-xs font-medium text-green-400">
                        Agriculture Expert
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-emerald-600/30 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-400">
                        Community Leader
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-600/30 border border-blue-400/30 rounded-full text-xs font-medium text-blue-400">
                        Innovation Champion
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 mt-6 lg:mt-0">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-lg overflow-hidden ring-2 md:ring-4 ring-green-400/30 mb-3 md:mb-4">
                      <img 
                        src={founderImage} 
                        alt="Founder & CEO" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-lg md:text-xl font-bold text-white">Foster Osae</h5>
                    <p className="text-sm md:text-base text-green-400">Founder & CEO</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="space-y-8 md:space-y-12">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Purpose
                </span>
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto">
                To transform agriculture through sustainable practices that benefit farmers, nourish the land, and create healthier food systems for our communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h4>
                <p className="text-gray-700 mb-6">
                  To provide farmers with affordable, effective organic solutions that improve yields while regenerating the land for future generations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Develop locally-adapted organic solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Educate farmers on sustainable practices</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Promote soil health and biodiversity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h4>
                <p className="text-gray-700 mb-6">
                  To see a world where every farmer has access to the tools and knowledge needed to farm productively and sustainably.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regional leader in organic agriculture by 2025</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Certified organic production standards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Farmer training programs in every district</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div className="space-y-8 md:space-y-12">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Core Values
                </span>
              </h3>
              <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto">
                These principles guide everything we do, from product development to farmer relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-green-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{value}</h4>
                  <p className="text-sm text-gray-600">
                    {value === "Sustainable farming practices" && "We prioritize methods that protect and enhance the environment for future generations."}
                    {value === "Soil health regeneration" && "Healthy soil is the foundation of everything we do and every product we create."}
                    {value === "Farmer education programs" && "We invest in farmer knowledge because educated farmers make better decisions."}
                    {value === "Community-focused solutions" && "Our products are designed with real community needs in mind."}
                    {value === "Innovative organic products" && "We continuously research and develop new solutions for organic farming."}
                    {value === "Environmental stewardship" && "We take responsibility for our environmental impact and work to minimize it."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPage;