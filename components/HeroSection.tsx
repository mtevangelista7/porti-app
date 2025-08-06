"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen bg-gradient-to-br from-primary-bg via-secondary-bg to-icon-text relative overflow-hidden flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-20 pb-28 sm:pb-36 md:pb-20 lg:pb-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-main-text/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/2 sm:bottom-1/3 right-1/4 w-96 sm:w-[28rem] h-96 sm:h-[28rem] bg-aux-text/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className={`space-y-10 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            
            {/* Greeting */}
            <div className="space-y-3">
              <p className="text-xl sm:text-2xl text-aux-text font-light tracking-wide">
                Hello, I am
              </p>
              
              {/* Name - Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight">
                <span className="bg-gradient-to-r from-main-text via-aux-text to-main-text bg-clip-text text-transparent">
                  Matheus
                </span>
                <br />
                <span className="bg-gradient-to-r from-main-text via-aux-text to-main-text bg-clip-text text-transparent">
                  Evangelista
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-2xl sm:text-3xl text-main-text font-medium">
                Backend Developer
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    const navbarHeight = 80;
                    const elementPosition = aboutSection.offsetTop - navbarHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="animate-button-hover inline-flex items-center px-10 py-5 bg-main-text hover:bg-aux-text text-primary-bg font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-primary-bg transition-colors"
                aria-label="Navigate to about section to learn more about Matheus Evangelista"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      const navbarHeight = 80;
                      const elementPosition = aboutSection.offsetTop - navbarHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth",
                      });
                    }
                  }
                }}
              >
                Get to Know Me
                <svg
                  className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                  aria-label="Arrow pointing right"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

          </div>

          {/* Right Side - Creative Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="relative">
              
              {/* Creative Shape Container - Hexagon */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                
                {/* Hexagon SVG Clip Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                  <defs>
                    <clipPath id="hexagon-clip">
                      <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" />
                    </clipPath>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Glowing Border */}
                  <polygon 
                    points="50,5 85,25 85,75 50,95 15,75 15,25" 
                    fill="none" 
                    stroke="url(#borderGradient)" 
                    strokeWidth="0.5"
                    filter="url(#glow)"
                  />
                  
                  <defs>
                    <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A3ABBA" />
                      <stop offset="50%" stopColor="#7C8595" />
                      <stop offset="100%" stopColor="#A3ABBA" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Profile Image */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ clipPath: "polygon(50% 5%, 85% 25%, 85% 75%, 50% 95%, 15% 75%, 15% 25%)" }}
                >
                  <div className="relative w-60 h-60 sm:w-72 sm:h-72">
                    <Image
                      src="/img/matheus.png"
                      alt="Matheus Evangelista - Security-Focused Developer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 240px, 288px"
                      priority
                    />
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-main-text/50 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-6 h-6 bg-aux-text/50 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-1/2 -right-6 sm:-right-8 w-4 h-4 bg-main-text/30 rounded-full animate-float" style={{ animationDelay: "3s" }}></div>

                {/* Enhanced shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-bg/15 rounded-full blur-2xl transform translate-y-6 sm:translate-y-8 scale-105 sm:scale-110 -z-10"></div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-16 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-main-text/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-main-text/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}