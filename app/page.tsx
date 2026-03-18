import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
