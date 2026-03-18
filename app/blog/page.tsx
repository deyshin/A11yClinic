import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-navy-900 mb-6">Blog Coming Soon</h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-navy-800 mb-8">
              We're currently working on creating valuable content about web accessibility, UI/UX best practices, and
              inclusive design principles.
            </p>
            <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden mb-8">
              <div className="absolute top-0 left-0 h-full w-2/3 bg-navy-600 rounded-full animate-pulse"></div>
            </div>
            <p className="text-navy-700">
              In the meantime, feel free to{" "}
              <Link href="/#contact" className="text-navy-700 underline hover:text-navy-900">
                contact us
              </Link>{" "}
              with any questions about accessibility.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

