import { Header, Footer } from '@/components/navigation'
import { RevealAnimation } from '@/components/animation'
import { Hero } from '@/components/section'
import { About } from '@/components/section'
import { Projects } from '@/components/section'
import { Skills } from '@/components/section'
import { Contact } from '@/components/section'

export default function Home() {
  return (
    <div className="font-main text-black bg-beige-50 dark:bg-black dark:text-gray-50 min-h-screen">
      <Header />
      <main className="pt-20 px-4 max-w-container mx-auto">
        <RevealAnimation>
          <Hero />
        </RevealAnimation>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
