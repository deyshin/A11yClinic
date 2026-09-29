import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo className="text-gray-100" size={40} />
              <div className="ml-3">
                <div className="flex flex-col justify-center h-[40px]">
                  <span className="text-xl font-serif font-normal leading-none">Accessibility</span>
                  <span className="text-xl font-serif font-normal leading-none">Practice</span>
                </div>
              </div>
            </div>
            <p className="mb-4 text-gray-300">Making the web accessible for everyone.</p>
            <p className="text-gray-300">
              Contact:{" "}
              <a
                href="mailto:daniel@accessibilitypractice.com"
                className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
              >
                daniel@accessibilitypractice.com
              </a>
            </p>
          </div>

          <div>
            <nav className="a11y-webring-club" aria-labelledby="a11y-webring-club">
              <h2 id="a11y-webring-club" className="text-xl font-serif font-normal mb-4">
                a11y-webring.club
              </h2>
              <p className="mb-4 text-gray-300">
                This site is a member of the{" "}
                <a
                  rel="external"
                  href="https://a11y-webring.club/"
                  className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                >
                  a11y-webring.club
                </a>
                .
              </p>
              <ul className="flex flex-wrap gap-6 text-gray-300">
                <li>
                  <a
                    rel="external"
                    referrerPolicy="strict-origin"
                    href="https://a11y-webring.club/prev"
                    className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                  >
                    Previous website
                  </a>
                </li>
                <li>
                  <a
                    rel="external"
                    referrerPolicy="strict-origin"
                    href="https://a11y-webring.club/random"
                    className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                  >
                    Random website
                  </a>
                </li>
                <li>
                  <a
                    rel="external"
                    referrerPolicy="strict-origin"
                    href="https://a11y-webring.club/next"
                    className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-navy-900 rounded"
                  >
                    Next website
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Accessibility Practice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
