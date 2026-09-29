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
            For Better Software Experience for All
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

            <div className="my-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-navy-200 bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-2xl font-serif font-normal text-navy-900">What is accessibility?</h2>
                <p>
                  Accessibility, or A11y, helps everyone—including disabled and elderly people—get things done using software. The ADA provides a legal framework, while WCAG is widely used to evaluate conformance.
                </p>
              </div>
              <div className="rounded-lg border border-navy-200 bg-white p-6 shadow-sm">
                <h2 className="mb-3 text-2xl font-serif font-normal text-navy-900">How we improve it</h2>
                <p>
                  We assess common usability issues, research patterns that address them, provide practical solutions and guidelines, and support compliance with existing legal and regulatory frameworks.
                </p>
              </div>
            </div>

            <div className="mb-8 rounded-lg bg-navy-50 p-6">
              <h2 className="mb-6 text-2xl font-serif font-normal text-navy-900">Team Members</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pasted%202026-09-25%20at%2017.05.40-1DgaAB9yHFYPM4lNM88pKt0ugGM17k.jpeg" alt="Daniel S., Executive Director" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-serif text-navy-900">Daniel S.</h3>
                    <p className="mb-3 text-sm font-semibold text-teal-800">Executive Director</p>
                    <p>With a decade of experience in technology and education, Daniel strives to close the gap between people and their goals through accessibility improvement.</p>
                  </div>
                </article>
                <article className="overflow-hidden rounded-lg bg-white shadow-sm">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pasted%202026-09-25%20at%2017.05.43-dkvhzsfo4t1DIMyUVldCU7MoYrrEvV.jpeg" alt="Audri S., Development Director" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-serif text-navy-900">Audri S.</h3>
                    <p className="mb-3 text-sm font-semibold text-teal-800">Development Director</p>
                    <p>With extensive data analytics and compliance experience, Audri builds Accessibility Practice&apos;s business framework and relationships with other organizations.</p>
                  </div>
                </article>
              </div>
            </div>

            <p className="mb-6">
              Approaching Web Accessibility as a core building block rather than an add-on will bring agility and
              quality to software product development cycles.
            </p>

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
