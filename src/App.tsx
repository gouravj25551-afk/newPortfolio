import { MotionConfig } from 'framer-motion'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { DSASection } from './components/DSASection'
import { Projects } from './components/Projects'
import { AISection } from './components/AISection'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    // `reducedMotion="user"` makes every Framer transform respect the OS setting.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-xl focus:bg-accent-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <Background />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <DSASection />
        <Projects />
        <AISection />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  )
}
