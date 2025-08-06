"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    const sections = ["home", "about", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    
    setIsOpen(false); // Close mobile menu after clicking
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-bg/20 backdrop-blur-md border-b border-main-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              onKeyDown={(e) => handleKeyDown(e, "#home")}
              className="text-xl font-bold text-main-text hover:text-aux-text transition-colors focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-transparent rounded-md px-2 py-1"
              aria-label="Go to home section"
            >
              Matheus Evangelista
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-transparent rounded-md ${
                    isActive
                      ? "text-main-text"
                      : "text-aux-text hover:text-main-text"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-main-text transform origin-left transition-transform"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-aux-text hover:text-main-text focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-transparent rounded-md p-2"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-bg/40 backdrop-blur-sm rounded-lg mt-2">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-transparent ${
                    isActive
                      ? "text-main-text bg-main-text/10"
                      : "text-aux-text hover:text-main-text hover:bg-main-text/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}