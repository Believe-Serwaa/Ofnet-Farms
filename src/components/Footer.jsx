import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Match the same sections as in Navbar
  const sections = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "products", label: "Products", path: "/products" },
    { id: "impact", label: "Impact", path: "/impact" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ];

  // Scroll function matching Navbar behavior
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        window.history.pushState(null, null, `#${sectionId}`);
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-yellow-400 rounded-full blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 md:w-48 md:h-48 bg-green-400 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-teal-400 rounded-full blur-lg md:blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:pt-16 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Company Info - Enhanced */}
          <div className="md:col-span-2 lg:col-span-5">
            <div className="group mb-6">
              <div className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <img 
                  src="/logo.jpeg" 
                  alt="OfNet Farms Logo" 
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover border-2 border-white/20"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                    OfNet Farms
                  </h3>
                </div>
              </div>
            </div>
            
            <p className="text-green-100 mb-6 text-base sm:text-lg leading-relaxed text-center sm:text-left">
              Transforming agricultural waste into premium organic fertilizer, 
              <span className="text-yellow-300 font-medium"> promoting sustainable farming </span> 
              practices across Ghana.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61563200616809&mibextid=ZbWKwL" 
                className="group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-green-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://wa.me/233541166900" 
                className="group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-green-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="mailto:ofnetfarms@gmail.com" 
                className="group relative p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110"
              >
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-green-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links - Thin Faded Line */}
          <div className="md:col-span-1 lg:col-span-3 relative">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-yellow-400 to-transparent"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-3 pl-2 border-l-2 border-green-700/50">
              {sections.slice(0, 4).map((section) => (
                <li key={section.id} className="group relative">
                  <a 
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className="flex items-center text-green-100 hover:text-yellow-300 transition-all duration-300 group-hover:translate-x-2 pl-3 text-sm sm:text-base"
                  >
                    <span className="absolute left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125"></span>
                    <span className="relative">
                      {section.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Thin Faded Line */}
          <div className="md:col-span-1 lg:col-span-4 relative">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-white relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-yellow-400 to-transparent"></span>
            </h3>
            <div className="space-y-3 sm:space-y-4 pl-2 border-l-2 border-green-700/50">
              <div className="flex items-start space-x-2 sm:space-x-3 group relative pl-3">
                <div className="p-1.5 sm:p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors duration-300 backdrop-blur-sm">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-green-100 text-sm sm:text-base">Gyamase, Ashanti Region</p>
                  <p className="text-green-300 text-xs sm:text-sm">Sekyere South District, Ghana</p>
                </div>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 group relative pl-3">
                <div className="p-1.5 sm:p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors duration-300 backdrop-blur-sm">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <a href="tel:+233541166900" className="block text-green-100 hover:text-yellow-300 transition-colors duration-300 relative text-sm sm:text-base">
                    <span className="relative">
                      0541166900
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                  <a href="tel:+233503968414" className="block text-green-100 hover:text-yellow-300 transition-colors duration-300 relative text-sm sm:text-base">
                    <span className="relative">
                      0503968414
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </div>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3 group relative pl-3">
                <div className="p-1.5 sm:p-2 bg-yellow-400/10 rounded-lg group-hover:bg-yellow-400/20 transition-colors duration-300 backdrop-blur-sm">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-300 relative text-sm sm:text-base"
                >
                  <span className="relative">
                    ofnetfarms@gmail.com
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
                <div className="absolute left-0 top-0 h-full w-0.5 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20 text-center">
          <p className="text-green-200 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} OfNet Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;