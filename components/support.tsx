import { HeartHandshake, Mail, UsersRound } from "lucide-react"

export function Support() {
  return (
    <section id="support" className="bg-amber-50 py-16 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-800">Support the work</p>
              <h2 className="mb-5 text-3xl font-serif font-normal text-navy-900 md:text-4xl">Help make technology work for everyone.</h2>
              <p className="mb-5 text-lg leading-8 text-navy-800">
                Accessibility Practice is a 501(c)(3) nonprofit organization working to protect people from the effects of substandard software. Your donation helps us listen to the community, share practical guidance, and make accessibility improvements more possible.
              </p>
              <p className="text-navy-800">
                Every contribution supports a more usable, inclusive future for disabled people, older adults, and anyone navigating a temporary or situational barrier.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <a href="mailto:help@accessibilitypractice.com" className="group rounded-xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
                <Mail className="mb-3 text-teal-800" aria-hidden="true" />
                <h3 className="mb-1 font-serif text-xl text-navy-900">Request help</h3>
                <p className="text-sm leading-6 text-navy-700">Tell us about an accessibility issue at help@accessibilitypractice.com.</p>
              </a>
              <a href="mailto:oh@accessibilitypractice.com" className="group rounded-xl border border-amber-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2">
                <UsersRound className="mb-3 text-teal-800" aria-hidden="true" />
                <h3 className="mb-1 font-serif text-xl text-navy-900">Join office hours</h3>
                <p className="text-sm leading-6 text-navy-700">Reach out to learn when and where the next in-person office hour will be held.</p>
              </a>
              <div className="rounded-xl bg-navy-900 p-5 text-white shadow-sm sm:col-span-3 lg:col-span-1">
                <HeartHandshake className="mb-3 text-amber-300" aria-hidden="true" />
                <h3 className="mb-1 font-serif text-xl">Donate</h3>
                <p className="text-sm leading-6 text-gray-200">Your support helps Accessibility Practice help the community. Thank you for investing in access.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
