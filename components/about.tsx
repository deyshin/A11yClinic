"use client"

import { Button } from "@/components/ui/button"

export function About() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-navy-900 mb-8 text-center">
            We Fix A11y Issues &amp; Make UX Better
          </h1>

          <div className="prose prose-lg max-w-none text-navy-800">
            <p className="text-xl font-medium mb-6">Accessibility Practice is here to:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Address accessibility issues and stay compliant with regulations</li>
              <li>Identify opportunities to improve UI/UX with user-centric design principles</li>
              <li>Shape the future of technology to prioritize people</li>
            </ol>

            <p className="mb-6">
              Accessibility Practice will help you resolve web accessibility problems and improve Web UI/UX. Accessibility
              principles lead us to a human-centric future.
            </p>

            <p className="mb-6">
              Approaching Web Accessibility as a core building block rather than an add-on will bring agility and
              quality to software product development cycles.
            </p>

            <div className="bg-navy-50 p-6 rounded-lg border border-navy-200 my-8">
              <h2 className="text-2xl font-serif font-normal text-navy-900 mb-4">Meet Your A11y Clinician</h2>
              <p className="mb-4">
                I am Daniel, your A11y Clinician! I've been in tech for 10 years, and spent 5 of those specializing in
                Web Accessibility in big tech (I was the one and only Level II A11y Specialist). I've resolved issues,
                ran training events, mentored engineers, and built out plans to run annual audit processes from
                discovery to resolution.
              </p>
            </div>

            <p className="mb-6">
              Get an A11y Checkup to identify potential risks and opportunities to improve! In addition, future-proof
              your business by staying compliant with{" "}
              <a
                href="https://www.ada.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 underline hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 rounded"
              >
                ADA
              </a>{" "}
              and{" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32019L0882"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 underline hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 rounded"
              >
                EAA
              </a>
              .
            </p>

            <div className="flex flex-col items-center mt-10 space-y-6">
              <Button
                onClick={scrollToServices}
                className="bg-navy-800 hover:bg-navy-900 text-white px-8 py-6 text-lg rounded-md border-2 border-navy-900"
              >
                Explore Our Services
              </Button>

              <a
                href="/blog"
                className="text-navy-700 underline hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 rounded"
              >
                Read more on our blog...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
