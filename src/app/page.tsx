"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { useState } from "react";

type TechKey = 'sensing' | 'insights' | 'intelligence';

interface Technology {
  title: string;
  description: string;
  image: string;
}

interface TeamMember {
  name: string;
  description: string;
  image?: string;
}

export default function Home() {
  const [activeTech, setActiveTech] = useState<TechKey>('sensing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const technologies: Record<TechKey, Technology> = {
    sensing: {
      title: "High-Res Sensing",
      description: "Our drones fly over vineyards and watch for problems like disease, stress, or poor vine health. Growers get a clear picture of their whole field, all season long.",
      image: "/drone2.png"
    },
    insights: {
      title: "Real-Time Insights", 
      description: "Our live monitoring systems provide instant alerts and real-time data on the field. Growers see crop conditions, weather, and changes as they happen—so they can respond right away.",
      image: "/heatmap.png"
    },
    intelligence: {
      title: "Actionable Intelligence",
      description: "Our software platform uses farm data to make predictions and recommendations. We build up an self-improving model of the field and use it to inform decisions.",
      image: "/grapes.png"
    }
  };

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
              <a
                href="#technology"
                className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium"
              >
                Technology
              </a>
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
                <a
                  href="#technology"
                  className="text-gray-600 hover:text-[#2F473A] transition-colors font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technology
                </a>
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
            src="/Palisades-Canyon-Vineyard-intro_image_img_1-19042-large.jpg"
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
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight mb-4 text-white leading-tight">
                Know Your Fields<br />Like Never Before
              </h1>
              <p className="text-base sm:text-lg text-white/80 dark:text-white/90 max-w-2xl font-medium leading-relaxed">
              Imagine if every vine could speak — telling you when it&apos;s thirsty, stressed, or under attack. With our technology, the vineyard becomes a living, breathing system you can see, understand, and optimize in real time.
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
      <section id="mission" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-gray-800 mb-4 tracking-wide uppercase">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2F473A] mb-6 sm:mb-8">
                Making agriculture computable.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                For generations, farming has been about hard work, experience, and a little bit of faith. We&apos;re making farmers omniscient—knowing every vine, every acre, every decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="relative bg-gray-100 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Technology description */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-[#2F473A] mb-4">
                {technologies[activeTech].title}
              </h2>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6 sm:mb-8">
                {technologies[activeTech].description}
              </p>
            </div>
            
            {/* Right side - Technology image */}
            <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden order-1 lg:order-2">
              <Image
                src={technologies[activeTech].image}
                alt={`${technologies[activeTech].title} visualization`}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Technology Cards */}
          <div className="mt-8 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* High-Res Sensing */}
              <div 
                className={`backdrop-blur-sm p-4 sm:p-6 transition-colors cursor-pointer ${
                  activeTech === 'sensing' 
                    ? 'bg-[#2F473A] hover:bg-[#223428]' 
                    : 'bg-black/40 hover:bg-black/60'
                }`}
                onClick={() => setActiveTech('sensing')}
              >
                <div className="text-center">
                  <h3 className="text-sm sm:text-lg font-medium text-white mb-2">High-Res Sensing</h3>
                </div>
              </div>

              {/* Real-Time Insights */}
              <div 
                className={`backdrop-blur-sm p-4 sm:p-6 transition-colors cursor-pointer ${
                  activeTech === 'insights' 
                    ? 'bg-[#2F473A] hover:bg-[#223428]' 
                    : 'bg-black/40 hover:bg-black/60'
                }`}
                onClick={() => setActiveTech('insights')}
              >
                <div className="text-center">
                  <h3 className="text-sm sm:text-lg font-medium text-white mb-2">Real-Time Insights</h3>
                </div>
              </div>

              {/* Actionable Intelligence */}
              <div 
                className={`backdrop-blur-sm p-4 sm:p-6 transition-colors cursor-pointer ${
                  activeTech === 'intelligence' 
                    ? 'bg-[#2F473A] hover:bg-[#223428]' 
                    : 'bg-black/40 hover:bg-black/60'
                }`}
                onClick={() => setActiveTech('intelligence')}
              >
                <div className="text-center">
                  <h3 className="text-sm sm:text-lg font-medium text-white mb-2">Actionable Intelligence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#2F473A] mb-4 sm:mb-6">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
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

      <section id="contact" className="bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2F473A] mb-6 sm:mb-8 w-full lg:w-3/4">
              See what your farm&apos;s been hiding.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                For generations, growers have relied on experience and hard work. Now, it&apos;s time to put data to work for your operation.
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
              <a
                className="text-gray-600 hover:text-gray-900 transition-colors font-mono text-sm sm:text-base"
                href="#technology"
              >
                Technology
              </a>
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
            </div>
            <div className="text-gray-600 font-mono text-sm sm:text-base text-center md:text-right">
              © 2025 Verdus. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
