import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TradesStrip from './components/TradesStrip.jsx'
import Problem from './components/Problem.jsx'
import Services from './components/Services.jsx'
import SampleBuilds from './components/SampleBuilds.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  return (
    <>
      <a
        href="#preview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-char"
      >
        Skip to the preview form
      </a>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <TradesStrip />
        <Problem />
        <Services />
        <SampleBuilds />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
