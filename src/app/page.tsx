"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-logo", { y: 20, autoAlpha: 0, duration: 0.55 })
        .from(".hero-line", { y: 28, autoAlpha: 0, duration: 0.75 }, "-=0.25")
        .from(".hero-cta", { y: 16, autoAlpha: 0, duration: 0.5 }, "-=0.3")
        .from(".site-footer", { y: 10, autoAlpha: 0, duration: 0.45 }, "-=0.15");
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex min-h-svh flex-col font-[family-name:var(--font-aktiv-grotesk)] text-[#1a1a1a]">
      <main className="flex flex-1 flex-col">
        <section className="relative flex min-h-svh flex-1 items-center justify-center overflow-hidden">
          <Image
            src="/dan-meyers-0AgtPoAARtE-unsplash.jpg"
            alt="Farmland at dusk"
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,22,18,0.35) 0%, rgba(15,22,18,0.55) 45%, rgba(15,22,18,0.92) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 sm:px-8">
            <Link
              href="/"
              className="hero-logo relative mb-8 block h-8 w-[110px] sm:mb-10 sm:h-9 sm:w-[120px]"
            >
              <Image
                src="/verdus_split_full.png"
                alt="Verdus"
                fill
                priority
                className="object-contain object-left brightness-0 invert"
              />
            </Link>

            <p className="hero-line group max-w-2xl text-lg font-normal leading-relaxed tracking-tight text-white/80 sm:text-xl lg:text-2xl">
              We build hardware and software that help farms{" "}
              <span className="transition-colors duration-300 group-hover:text-white">
                produce more saleable output with less labor, energy, water,
                chemicals, and capital
              </span>
              . One of our projects is{" "}
              <a
                href="https://openhectare.org/"
                className="underline decoration-transparent underline-offset-[0.2em] transition-[color,text-decoration-color] duration-300 group-hover:decoration-white/40 hover:text-white hover:decoration-white/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenHectare
              </a>
              , turning trusted agricultural research into practical answers for
              farmers
            </p>

            <div className="hero-cta mt-9">
              <a
                href="https://cal.com/verdus/learn-more"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/85 px-5 py-3 text-sm font-medium text-[#2F473A] transition-colors hover:bg-white"
              >
                Get in touch
                <ArrowIcon />
              </a>
            </div>
          </div>

          <footer className="site-footer absolute inset-x-0 bottom-0 z-10 py-5 sm:py-6">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
              <div className="flex items-center gap-5">
                <a
                  href="https://www.linkedin.com/company/verduslabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="mailto:info@verduslabs.com"
                  aria-label="Email"
                  className="text-white/55 transition-colors hover:text-white"
                >
                  <MailIcon />
                </a>
              </div>
              <p className="font-medium text-sm text-white/40">
                © {new Date().getFullYear()} Verdus Labs
              </p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003ZM4.5 7.25A1.75 1.75 0 0 1 6.25 5.5h11.5A1.75 1.75 0 0 1 19.5 7.25v9.5a1.75 1.75 0 0 1-1.75 1.75H6.25A1.75 1.75 0 0 1 4.5 16.75v-9.5Zm1.75.85 5.4 3.37a.7.7 0 0 0 .7 0l5.4-3.37v-.85H6.25v.85Zm0 1.9v6.75h11.5V10l-5.05 3.15a2.2 2.2 0 0 1-2.4 0L6.25 10Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
