import { StickyHeader } from './components/common/StickyHeader'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Highlights } from './components/sections/Highlights'
import { MissionVision } from './components/sections/MissionVision'
import { Operations } from './components/sections/Operations'
import { QuickActions } from './components/sections/QuickActions'
import { Services } from './components/sections/Services'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <div className="bg-ink-950 text-ink-900 animate-fade-in">
      <StickyHeader />
      <Hero />
      <QuickActions />
      <Services />
      <Highlights />
      <WhyChooseUs />
      <Operations />
      <About />
      <MissionVision />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
