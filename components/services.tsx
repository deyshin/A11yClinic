import { ClipboardCheck, Wrench, LineChart, PartyPopper } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-12 text-center">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* A11y Checkup */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-4 text-navy-700">
              <ClipboardCheck size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">A11y Checkup</h3>
            <p className="text-navy-800 mb-4 flex-grow">
              This one-time checkup identifies major a11y issues and opportunities to improve UI/UX of the given
              product.
            </p>
            <div className="mt-auto">
              <h4 className="font-serif font-medium text-navy-900 mb-2">Steps:</h4>
              <ol className="list-decimal pl-5 text-navy-800 space-y-1">
                <li>Setup a kickoff meeting</li>
                <li>Clinician checks the product</li>
                <li>Final meeting with written report of findings</li>
              </ol>
            </div>
          </div>

          {/* A11y Solutions */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-4 text-navy-700">
              <Wrench size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">A11y Solutions</h3>
            <p className="text-navy-800 flex-grow">
              Work with an a11y clinician to resolve identified UI/UX issues. We'll help implement practical solutions
              to make your product more accessible.
            </p>
          </div>

          {/* A11y Maintenance Plan */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-4 text-navy-700">
              <LineChart size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">A11y Maintenance Plan</h3>
            <p className="text-navy-800 flex-grow">
              Clinician makes a long-term plan based on A11y Checkup report, architects a plan to improve UI/UX and
              product development process.
            </p>
          </div>

          {/* A11y Party */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-4 text-navy-700">
              <PartyPopper size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">A11y Party</h3>
            <p className="text-navy-800 flex-grow">
              Clinician organizes a day-long event to run a11y training for employees. Learn accessibility principles in
              an engaging, interactive format.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

