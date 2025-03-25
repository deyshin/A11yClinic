"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
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
      const sections = ["about", "services", "contact"]

      // Determine if scrolled
      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      lastScrollY.current = currentScrollY

      // Determine active section
      const scrollPosition = currentScrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-transparent" : "bg-navy-900 shadow-md",
          isMobileMenuOpen ? "h-screen lg:h-auto" : "",
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <nav className="flex gap-6 mr-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className={`relative px-1 py-2 text-lg font-medium transition-colors ${
                    activeSection === "about" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
                  }`}
                >
                  About
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                      activeSection === "about" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  ></span>
                </button>

                <Link
                  href="/blog"
                  className="relative px-1 py-2 text-lg font-medium text-gray-300 hover:text-gray-100 transition-colors"
                >
                  Blog
                  <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform scale-x-0 hover:scale-x-100"></span>
                </Link>

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`relative px-1 py-2 text-lg font-medium transition-colors ${
                    activeSection === "contact" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
                  }`}
                >
                  Contact
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                      activeSection === "contact" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  ></span>
                </button>
              </nav>

              <button
                onClick={() => scrollToSection("services")}
                className={`px-6 py-2 rounded-md bg-gray-100 text-navy-900 font-medium hover:bg-gray-200 transition-colors ${
                  activeSection === "services" ? "ring-2 ring-gray-300" : ""
                }`}
                aria-label="View our services"
              >
                Services
              </button>
            </div>
          </div>
        </div>

        {/* Truncated Header (visible when scrolled on desktop only) */}
        <div
          className={cn(
            "container mx-auto transition-all duration-500",
            isScrolled && !isMobile.current ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden pointer-events-none",
          )}
        >
          <div className="flex items-center">
            <div className="bg-navy-900/90 backdrop-blur-sm py-1 px-3 rounded-br-md shadow-sm absolute top-0 left-0">
              <div className="flex flex-col justify-center">
                <span className="text-lg font-serif leading-none text-gray-100">A11y</span>
                <span className="text-lg font-serif leading-none text-gray-100">Clinic</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Right Side Navigation for Desktop (when scrolled) */}
      <div
        className={cn(
          "hidden lg:block fixed right-0 top-0 z-40 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col bg-navy-900/90 backdrop-blur-sm p-2 rounded-bl-lg shadow-lg">
          <button
            onClick={() => scrollToSection("about")}
            className={`relative px-2 py-1.5 text-sm font-medium transition-colors text-left ${
              activeSection === "about" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
            }`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                activeSection === "about" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}
            ></span>
          </button>

          <Link
            href="/blog"
            className="relative px-2 py-1.5 text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors text-left"
          >
            Blog
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform scale-x-0 hover:scale-x-100"></span>
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className={`relative px-2 py-1.5 text-sm font-medium transition-colors text-left ${
              activeSection === "contact" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                activeSection === "contact" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}
            ></span>
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className={`relative px-2 py-1.5 text-sm font-medium bg-gray-100 text-navy-900 rounded-md hover:bg-gray-200 transition-colors mt-1 text-left ${
              activeSection === "services" ? "ring-1 ring-gray-300" : ""
            }`}
            aria-label="View our services"
          >
            Services
          </button>
        </div>
      </div>

      {/* Mobile Menu Button (always at top right) */}
      <button
        className={cn(
          "lg:hidden fixed z-50 p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full text-gray-100 bg-navy-900 shadow-lg transition-all duration-300 top-4 right-4",
        )}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {/* Mobile Menu (always appears below the top right hamburger) */}
      <div
        className={cn(
          "fixed lg:hidden z-40 transition-all duration-300 ease-in-out top-16 right-4",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col bg-navy-900/95 backdrop-blur-sm p-2 rounded-lg shadow-lg w-40">
          <button
            onClick={() => scrollToSection("about")}
            className={`relative px-2 py-1.5 text-sm font-medium transition-colors text-left ${
              activeSection === "about" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
            }`}
          >
            About
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                activeSection === "about" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}
            ></span>
          </button>

          <Link
            href="/blog"
            className="relative px-2 py-1.5 text-sm font-medium text-gray-300 hover:text-gray-100 transition-colors text-left"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform scale-x-0 hover:scale-x-100"></span>
          </Link>

          <button
            onClick={() => scrollToSection("contact")}
            className={`relative px-2 py-1.5 text-sm font-medium transition-colors text-left ${
              activeSection === "contact" ? "text-gray-100" : "text-gray-300 hover:text-gray-100"
            }`}
          >
            Contact
            <span
              className={`absolute left-0 bottom-0 h-0.5 w-full bg-gray-100 transform origin-left transition-transform ${
                activeSection === "contact" ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
              }`}
            ></span>
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="relative px-2 py-1.5 text-sm font-medium bg-gray-100 text-navy-900 rounded-md hover:bg-gray-200 transition-colors mt-1 text-left"
          >
            Services
          </button>
        </div>
      </div>
    </>
  )
}

