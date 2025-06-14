"use client"

import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const location = useLocation()

  // Sections configuration
  const sections = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "products", label: "Products", path: "/products" },
    { id: "impact", label: "Impact", path: "/impact" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 10px
      setScrolled(window.scrollY > 10)

      // Determine which section is currently in view
      const scrollPosition = window.scrollY + 100 // Adjust offset as needed

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    // Initial check on mount
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  // Handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    setIsOpen(false)
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`
    } else {
      // If we're already on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })

        // Update URL hash without page jump
        window.history.pushState(null, null, `#${sectionId}`)
        setActiveSection(sectionId)
      }
    }
  }

  // Check if a section is currently active
  const isSectionActive = (sectionId) => {
    if (location.pathname !== "/") return false
    return activeSection === sectionId
  }

  // Get styles for desktop navigation
  const getDesktopStyles = (sectionId, isScrolledState) => {
    const active = isSectionActive(sectionId)
    
    if (isScrolledState) {
      return active 
        ? "text-yellow-600 bg-yellow-50 border-b-2 border-yellow-600" 
        : "text-green-800 hover:text-yellow-600"
    } else {
      return active 
        ? "text-yellow-400 bg-white/20 border-b-2 border-yellow-400" 
        : "text-white hover:text-yellow-400"
    }
  }

  // Get styles for mobile navigation
  const getMobileStyles = (sectionId, isScrolledState) => {
    const active = isSectionActive(sectionId)
    
    if (isScrolledState) {
      return active 
        ? "text-yellow-600 bg-yellow-50 border-l-4 border-yellow-600" 
        : "text-green-800 hover:bg-white/30 hover:text-yellow-400"
    } else {
      return active 
        ? "text-yellow-400 bg-white/20 border-l-4 border-yellow-400" 
        : "text-white hover:bg-white/10 hover:text-yellow-400"
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-lg shadow-lg border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Desktop Logo - Only shown when scrolled */}
          {scrolled && (
            <div className="hidden md:flex items-center">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, "home")}
                className="flex-shrink-0 flex items-center"
              >
                <span className="ml-3 text-xl font-semibold italic transition-colors text-green-800">OfNet Farms</span>
              </a>
            </div>
          )}

          {/* Mobile Logo - Always visible */}
          <div className="md:hidden flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, "home")}
              className="flex-shrink-0 flex items-center"
            >
              <span className={`ml-3 text-xl font-semibold italic transition-colors ${
                scrolled ? "text-green-800" : "text-white"
              }`}>
                OfNet Farms
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            {scrolled ? (
              // Scrolled layout - Nav links in centered ring
              <div className="bg-white/30 backdrop-blur-sm border border-white/20 rounded-full px-6 lg:px-12 py-2 flex items-center space-x-6 lg:space-x-12">
                {sections.slice(0, 4).map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`px-2 lg:px-4 py-2 text-sm font-medium transition duration-300 rounded-md ${getDesktopStyles(section.id, true)}`}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            ) : (
              // Not scrolled - Full ring with logo on far left, nav in center, contact on far right
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 lg:px-12 py-2 flex items-center justify-between w-full max-w-6xl">
                {/* Logo pushed to far left */}
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="text-white hover:text-yellow-400 text-lg font-semibold italic transition duration-300 flex-shrink-0"
                >
                  OfNet Farms
                </a>

                {/* Navigation links in center */}
                <div className="flex items-center space-x-6 lg:space-x-12">
                  {sections.slice(0, 4).map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={(e) => scrollToSection(e, section.id)}
                      className={`text-sm font-medium transition duration-300 px-2 py-1 rounded-md ${getDesktopStyles(section.id, false)}`}
                    >
                      {section.label}
                    </a>
                  ))}
                </div>

                {/* Contact pushed to far right */}
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className={`px-4 lg:px-6 py-2 rounded-full border border-white/30 text-sm font-medium transition duration-300 flex-shrink-0 ${
                    isSectionActive("contact") 
                      ? "bg-yellow-400/30 border-yellow-400 text-yellow-400" 
                      : "bg-white/20 hover:bg-white/30 text-white hover:text-yellow-400"
                  }`}
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>

          {/* Desktop Contact Button - Only shown when scrolled */}
          {scrolled && (
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className={`relative inline-flex items-center justify-center px-4 lg:px-6 py-2 text-sm font-medium rounded-full transition duration-300 border-2 backdrop-blur-sm ${
                  isSectionActive("contact")
                    ? "border-yellow-600 text-yellow-600 bg-yellow-50 hover:bg-yellow-100"
                    : "border-white/40 text-green-800 hover:text-yellow-600 bg-white/30 hover:bg-white/40"
                }`}
              >
                Contact Us
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:text-yellow-400 focus:outline-none ${
                scrolled ? "text-green-800 bg-white/30" : "text-white"
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} ${
          scrolled ? "bg-white/80 backdrop-blur-lg" : "bg-black/70 backdrop-blur-lg"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => scrollToSection(e, section.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${getMobileStyles(section.id, scrolled)}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;