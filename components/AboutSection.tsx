"use client";

import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-br from-secondary-bg via-primary-bg to-icon-text/30 py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            
            {/* Title */}
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 bg-gradient-to-r from-main-text to-aux-text bg-clip-text text-transparent">
                About Me
              </h2>
            </div>

            {/* Bio Text - Editable Content */}
            <div className="space-y-8">
              <p className="text-xl sm:text-2xl text-main-text leading-relaxed font-light">
                I&apos;m a backend developer with a passion for building efficient, automated, and secure web applications. 
                My goal is always to deliver scalable and reliable software.
              </p>
              
              <p className="text-lg sm:text-xl text-aux-text leading-relaxed font-light">
                With 3+ years of experience in full-stack development, I&apos;ve successfully built secure and high-performance solutions across diverse domains. 
                I enjoy transforming challenging problems into clean, maintainable code.
              </p>
            </div>

            {/* Core Technologies */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-medium text-main-text mb-6">
                Core Technologies
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-aux-text">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">.NET (C#), ASP.NET Core, TypeScript, JavaScript, Python, Go</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">Angular, Blazor, React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">Relational and NoSQL databases</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">Azure, AWS Cloud</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">Git/GitHub & CI/CD</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-main-text rounded-full"></div>
                    <span className="font-light">Secure coding & API design</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Information Cards */}
          <div className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            
            {/* Experience Card */}
            <div className="animate-card-hover bg-secondary-bg/60 backdrop-blur-sm border border-main-text/15 rounded-xl p-10 text-center">
              <div className="space-y-6">
                <div className="text-7xl sm:text-8xl font-light bg-gradient-to-r from-main-text to-aux-text bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-2xl sm:text-3xl font-medium text-main-text">
                  Years of Experience
                </div>
                <p className="text-aux-text font-light">
                  Delivering robust and secure solutions
                </p>
              </div>
            </div>

            {/* Focus Areas Card */}
            <div className="animate-card-hover bg-primary-bg/60 backdrop-blur-sm border border-main-text/15 rounded-xl p-10">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-main-text/15 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-main-text" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zM12 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM12 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium text-main-text">
                    Focus Areas
                  </h3>
                </div>
                
                {/* Focus Areas List */}
                <div className="space-y-4 text-aux-text">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">Backend Development</span>
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">Fullstack Development</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">Cloud Solutions</span>
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">Microservices</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">Security</span>
                    <span className="px-4 py-2 bg-main-text/10 text-main-text rounded-full text-sm font-light">DevOps</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}