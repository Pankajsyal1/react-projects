import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import OurServices from './components/Services/OurServices'
import Features from './components/Features/Features'
import ClientSays from './components/Testimonials/ClientSays'
import StatsSection from './components/Stats/StatsSection'
import PricingSection from './components/Pricing/PricingSection'
import LogosSection from './components/LogosSection'
import ContactUsSection from './components/ContactUsSection'
import MyFooter from './components/MyFooter'

const XolcyLandingPage = () => {
  useEffect(() => {
    document.body.classList.add('xolcy-scroll-opt')
    document.documentElement.classList.add('xolcy-scroll-opt')
    return () => {
      document.body.classList.remove('xolcy-scroll-opt')
      document.documentElement.classList.remove('xolcy-scroll-opt')
    }
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top Left Gradient Orb */}
        <div 
          className="gradient-orb gradient-orb-primary w-[480px] h-[480px] -top-[160px] -left-[160px] opacity-70 transform-gpu"
        />
        {/* Top Right Gradient Orb */}
        <div 
          className="gradient-orb gradient-orb-blue w-[420px] h-[420px] top-[8%] -right-[130px] opacity-60 transform-gpu"
        />
        {/* Middle Left Purple Orb */}
        <div 
          className="gradient-orb gradient-orb-purple w-[360px] h-[360px] top-[42%] -left-[90px] opacity-60 transform-gpu"
        />
        {/* Bottom Right Pink Orb */}
        <div 
          className="gradient-orb gradient-orb-pink w-[440px] h-[440px] bottom-[18%] -right-[180px] opacity-60 transform-gpu"
        />
        {/* Center subtle pattern */}
        <div className="absolute inset-0 pattern-dots-light opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <OurServices />
        <Features />
        <ClientSays />
        <StatsSection />
        <PricingSection />
        <LogosSection />
        <ContactUsSection />
        <MyFooter />
      </div>
    </div>
  )
}

export default XolcyLandingPage
