"use client"

import { useState, useEffect, useRef } from "react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const isMobile = useRef(false)

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      isMobile.current = window.innerWidth < 1024 // lg breakpoint
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-transparent" : "bg-navy-900 shadow-md",
          isScrolled && isMobile.current ? "opacity-0 pointer-events-none" : "opacity-100",
        )}
      >
        {/* Full Header (visible when not scrolled) */}
        <div
          className={cn(
            "container mx-auto px-4 py-4 transition-all duration-500",
            isScrolled ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100 max-h-24",
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Logo className="text-gray-100" size={50} />
              <div className="ml-3">
                <div className="flex flex-col justify-center h-[50px]">
                  <span className="text-2xl font-serif leading-none text-gray-100">A11y</span>
                  <span className="text-2xl font-serif leading-none text-gray-100">Clinic</span>
                </div>
              </div>
            </div>

            {/* Desktop and Mobile Contact Button */}
            <button
              onClick={scrollToContact}
              className="px-6 py-2 rounded-md bg-gray-100 text-navy-900 font-medium hover:bg-gray-200 transition-colors border-2 border-navy-900"
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Truncated Header (visible when scrolled on desktop only) */}
        <div
          className={cn(
            "container mx-auto transition-all duration-500",
            isScrolled && !isMobile.current ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden pointer-events-none",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="bg-navy-900/90 backdrop-blur-sm py-1 px-3 rounded-br-md absolute top-0 left-0">
              <div className="flex flex-col justify-center">
                <span className="text-lg font-serif leading-none text-gray-100">A11y</span>
                <span className="text-lg font-serif leading-none text-gray-100">Clinic</span>
              </div>
            </div>

            {/* Contact button in truncated header */}
            <button
              onClick={scrollToContact}
              className="absolute top-1 right-4 px-4 py-1 rounded-md bg-gray-100 text-navy-900 text-sm font-medium hover:bg-gray-200 transition-colors border-2 border-navy-900"
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Contact Button (visible when scrolled on mobile) */}
      <button
        className={cn(
          "lg:hidden fixed z-50 p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md text-navy-900 bg-gray-100 transition-all duration-300 top-4 right-4 border-2 border-navy-900",
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={scrollToContact}
        aria-label="Contact us"
      >
        Contact
      </button>
    </>
  )
}

