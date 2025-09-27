import React, { useState, useEffect } from "react";
import { Menu, X, Star, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, hasDropdown = false }) => (
    <div className="relative group">
      <a 
        href={href} 
        className="flex items-center gap-1 text-gray-700 hover:text-primary-700 transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary-50/50"
      >
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
      </a>
      
      {/* Dropdown Menu */}
      {hasDropdown && (
        <div className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
          <div className="p-2">
            {[
              { name: "IELTS Academic", href: "#academic" },
              { name: "IELTS General", href: "#general" },
              { name: "Speaking Course", href: "#speaking" },
              { name: "Writing Course", href: "#writing" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-600 hover:text-primary-700 hover:bg-primary-50/50 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
    }`}>
      <div className="container-px">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`relative transition-all duration-500 ${
              scrolled ? 'h-10 w-10' : 'h-12 w-12'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl grid place-items-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                IP
              </div>
              <div className="absolute -top-1 -right-1">
                <div className="bg-green-500 text-white rounded-full p-1 shadow-lg">
                  <Star className="h-2 w-2 fill-current" />
                </div>
              </div>
            </div>
            <div>
              <span className={`font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all duration-500 ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                IELTS Pro
              </span>
              <div className="text-xs text-gray-500 font-medium">Institute</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features" hasDropdown>Courses</NavLink>
            <NavLink href="#testimonials">Success Stories</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone Link */}
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-gray-600 hover:text-primary-700 transition-all duration-300 p-2 rounded-lg hover:bg-primary-50/50"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            
            {/* Primary CTA */}
            <a 
              href="#enroll" 
              className="relative group overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <span className="relative z-10">Enroll Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-px py-4 bg-gradient-to-b from-white/95 to-gray-50/95 backdrop-blur-xl border-t border-gray-100/50">
          <div className="flex flex-col gap-1">
            {[
              { name: "Home", href: "#home" },
              { name: "Courses", href: "#features", dropdown: true },
              { name: "Success Stories", href: "#testimonials" },
              { name: "Pricing", href: "#pricing" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 px-4 text-gray-700 hover:text-primary-700 hover:bg-primary-50/50 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-primary-100"
              >
                {item.name}
                {item.dropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-200/50 space-y-3">
              <a 
                href="tel:+919876543210"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 justify-center w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              
              <a 
                href="#enroll"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 origin-left transform scale-x-0 transition-transform duration-300"
           style={{ transform: `scaleX(${scrolled ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) : 0})` }}>
      </div>
    </header>
  );
}