import Link from "next/link"
import { Logo } from "@/components/logo"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-navy-900 text-gray-100 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Logo className="text-gray-100" size={40} />
              <div className="ml-3">
                <div className="flex flex-col justify-center h-[40px]">
                  <span className="text-xl font-serif font-normal leading-none">A11y</span>
                  <span className="text-xl font-serif font-normal leading-none">Clinic</span>
                </div>
              </div>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 rounded-md bg-gray-100 text-navy-900 font-medium hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">Blog Coming Soon</h1>
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

      <footer className="bg-navy-900 text-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} A11y Clinic. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="underline hover:text-white">
              Back to Home
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}

