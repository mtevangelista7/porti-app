"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-primary-bg via-secondary-bg to-icon-text/20 flex items-center justify-center py-24 lg:py-36"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          
          {/* Title */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-8 bg-gradient-to-r from-main-text to-aux-text bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>

          {/* Optional Description */}
          <p className="text-xl sm:text-2xl text-aux-text mb-16 leading-relaxed max-w-3xl mx-auto font-light">
            Always open to discussing new opportunities, collaborations, and innovative projects.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            
            {/* GitHub */}
            <a
              href="https://github.com/mtevangelista7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-primary-bg rounded-xl p-2"
              aria-label="Visit Matheus Evangelista's GitHub profile to see code repositories and projects"
            >
              <div className="animate-card-hover w-20 h-20 sm:w-24 sm:h-24 bg-icon-text/10 hover:bg-main-text/15 rounded-2xl flex items-center justify-center">
                <Github className="w-10 h-10 sm:w-12 sm:h-12 text-icon-text group-hover:text-main-text transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-base sm:text-lg text-icon-text group-hover:text-main-text transition-colors duration-300 font-light">
                GitHub
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:matheus.evangelista7@protonmail.com"
              className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-primary-bg rounded-xl p-2"
              aria-label="Send email to Matheus Evangelista at matheus.evangelista7@protonmail.com"
            >
              <div className="animate-button-hover w-20 h-20 sm:w-24 sm:h-24 bg-main-text hover:bg-aux-text rounded-2xl flex items-center justify-center">
                <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-primary-bg" aria-hidden="true" />
              </div>
              <span className="text-base sm:text-lg text-main-text group-hover:text-aux-text transition-colors duration-300 font-medium">
                Email
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/matheus-evangelista-1920/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-main-text focus:ring-offset-2 focus:ring-offset-primary-bg rounded-xl p-2"
              aria-label="Visit Matheus Evangelista's LinkedIn profile for professional networking and career information"
            >
              <div className="animate-card-hover w-20 h-20 sm:w-24 sm:h-24 bg-icon-text/10 hover:bg-main-text/15 rounded-2xl flex items-center justify-center">
                <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-icon-text group-hover:text-main-text transition-colors duration-300" aria-hidden="true" />
              </div>
              <span className="text-base sm:text-lg text-icon-text group-hover:text-main-text transition-colors duration-300 font-light">
                LinkedIn
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}