"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

// type TechKey = 'sensing' | 'insights' | 'intelligence';

// interface Technology {
//   title: string;
//   description: string;
//   image: string;
// }

interface TeamMember {
  name: string;
  description: string;
  image?: string;
}

export default function Home() {
  // const [activeTech, setActiveTech] = useState<TechKey>('sensing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const technologies: Record<TechKey, Technology> = {
  //   sensing: {
  //     title: "High-Res Sensing",
  //     description: "Our drones fly through vineyards and watch for problems like disease, stress, or poor vine health. Growers get a clear picture of their whole field, all season long.",
  //     image: "/drone2.png"
  //   },
  //   insights: {
  //     title: "Real-Time Insights", 
  //     description: "Our live monitoring systems provide instant alerts and real-time data on the field. Growers see crop conditions, weather, and changes as they happen—so they can respond right away.",
  //     image: "/heatmap.png"
  //   },
  //   intelligence: {
  //     title: "Actionable Intelligence",
  //     description: "Our software platform uses farm data to make predictions and recommendations. We build up an self-improving model of the field and use it to inform decisions.",
  //     image: "/grapes.png"
  //   }
  // };

  const teamMembers: TeamMember[] = [
    {
      name: "Rishi Gurjar",
      description: "Rishi studies ecology and CS at Cornell.",
      image: "/rishi.png"
    },
    {
      name: "Yotam Dubiner",
      description: "Yotam studies CS and crop science at UIUC.",
      image: "/yotam.png"
    },
    {
      name: "Om Kamat", 
      description: "Om studies aerospace engineering at UIUC.",
      image: "/om.png"
    }
  ];

  useEffect(() => {
    // Hero animations
    gsap.from(".hero-title", {
      duration: 0.5,
      y: 30,
      autoAlpha: 0,
      stagger: 0.05
    });

    gsap.from(".hero-subtitle", {
      duration: 0.5,
      y: 10,
      autoAlpha: 0,
      delay: 0.1
    });

    // Mission section animations
    gsap.from(".mission-heading", {
      duration: 0.6,
      y: 30,
      autoAlpha: 0,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".mission-heading",
        start: "top 80%"
      }
    });

    gsap.from(".mission-text", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".mission-text",
        start: "top 80%"
      }
    });

    // Technology section animations
    gsap.from(".tech-content", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".tech-content",
        start: "top 80%"
      }
    });

    // Team section animations
    gsap.from(".team-heading", {
      duration: 0.6,
      y: 30,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".team-heading",
        start: "top 80%"
      }
    });

    gsap.from(".team-text", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".team-text",
        start: "top 80%"
      }
    });

    // Contact section animations
    gsap.from(".contact-heading", {
      duration: 0.6,
      y: 30,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".contact-heading",
        start: "top 80%"
      }
    });

    gsap.from(".contact-text", {
      duration: 0.5,
      y: 20,
      autoAlpha: 0,
      delay: 0.1,
      scrollTrigger: {
        trigger: ".contact-text",
        start: "top 80%"
      }
    });
  }, []);

  return (
    <div className="font-[family-name:var(--font-aktiv-grotesk)]">
      {/* Header */}
      <header className="bg-white/75 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link href="/" className="flex items-center">
        <Image
          src="/verdusnew.png"
          alt="Verdus logo"
                width={120}
                height={120}
                className="dark:invert"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-medium">
              <a
                href="#mission"
                className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium"
              >
                Mission
              </a>
              {/* <a
                href="#technology"
                className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium"
              >
                Technology
              </a> */}
              <a
                href="#team"
                className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium"
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#2F473A] hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#mission"
                  className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mission
                </a>
                {/* <a
                  href="#technology"
                  className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technology
                </a> */}
                <a
                  href="#team"
                  className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
          </a>
          <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Vineyard Background */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/trent-erwin-sj4M_cwUGB0-unsplash.jpg"
            alt="Vineyard landscape"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0% 30%, rgba(0,0,0,0.0) 100%)",
              top: "-32px"
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-4 sm:gap-[22px] items-center sm:items-start">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-white leading-tight hero-title">
                Turn Farm Data<br />into Decisions
              </h1>
              <p className="text-base sm:text-lg text-white/80 dark:text-white/90 max-w-2xl font-medium leading-relaxed hero-subtitle">
              Crops aren&apos;t silent. They signal stress, thirst, disease (if you know how to listen). With our technology, turn your exisiting farm data into operational action.
              </p>
              <Button
                asChild
                variant="secondary"
                className="mt-6 sm:mt-8 gap-2 rounded-none w-full sm:w-auto"
              >
                <a href="https://cal.com/verdus/learn-more" target="_blank" rel="noopener noreferrer">
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with White Background */}
      <section id="mission" className="bg-gray-0 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-gray-800 mb-4 tracking-wide uppercase">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2F473A] mb-6 sm:mb-8 mission-heading">
                Making agriculture computable.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mission-text">
                For generations, farming has been about hard work, experience, and a little bit of faith. We&apos;re changing that by making farm data actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#2F473A] mb-4 sm:mb-6 team-heading">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed team-text">
                Verdus Labs is a three-person company based in Ithaca, New York.<br className="hidden sm:block" />
                We are building hardware and software to make farmers omniscient.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-fit">
                {teamMembers.map((member, index) => (
                  <div key={index} className="group relative overflow-hidden aspect-square w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
                    <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 bg-gray-300 flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-xs">{member.name}</p>
                        </div>
                      )}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#2F473A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-1 sm:p-2">
                        <h3 className="text-xs sm:text-sm font-medium mb-1">{member.name}</h3>
                        <p className="text-xs text-white/70 leading-tight">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-0 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2F473A] mb-6 sm:mb-8 w-full lg:w-3/4 contact-heading">
              See what your farm&apos;s been hiding.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed contact-text">
                Chat with us to learn more about our technology and how it can help your farm.
              </p>

                <Button
                  asChild
                  variant="secondary"
                  className="gap-2 rounded-none bg-[#2F473A] hover:bg-[#223428] text-white border-[#2F473A] w-full sm:w-auto"
                >
                  <a
                    href="https://cal.com/verdus/learn-more"
          target="_blank"
          rel="noopener noreferrer"
        >
                    Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8 font-[family-name:var(--font-aktiv-grotesk)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
            <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base"
                href="#mission"
              >
                Mission
              </a>
              {/* <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base"
                href="#technology"
              >
                Technology
              </a> */}
              <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base"
                href="#contact"
              >
                Contact
        </a>
        <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base"
                href="#team"
              >
                Team
              </a>
              <a
                className="text-gray-600 hover:text-gray-900 transition-colors"
                href="https://www.linkedin.com/company/verduslabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                className="text-gray-600 hover:text-gray-900 transition-colors"
                href="mailto:r@verduslabs.com"
                aria-label="Email"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              {/* <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base italic"
                href="https://github.com/Verdus-Labs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a> */}
            </div>
            <div className="text-gray-600 font-mono text-sm sm:text-base text-center md:text-right">
              © 2025 Verdus Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
