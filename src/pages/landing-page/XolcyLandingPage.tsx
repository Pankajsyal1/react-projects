import HeroSection from '../../components/xolcy-landing-page/Hero/HeroSection'
import OurServices from '../../components/xolcy-landing-page/Services/OurServices'
import Features from '../../components/xolcy-landing-page/Features/Features'
import ClientSays from '../../components/xolcy-landing-page/Testimonials/ClientSays'
import StatsSection from '../../components/xolcy-landing-page/Stats/StatsSection'
import PricingSection from '../../components/xolcy-landing-page/Pricing/PricingSection'
import LogosSection from '../../components/xolcy-landing-page/Logos/LogosSection'
import ContactUsSection from '../../components/xolcy-landing-page/ContactUs/ContactUsSection'
import MyFooter from '../../components/xolcy-landing-page/Footer/MyFooter'

const XolcyLandingPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Left Gradient Orb */}
        <div 
          className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-[200px] -left-[200px] animate-pulse-glow"
          style={{ animationDelay: '0s' }}
        />
        {/* Top Right Gradient Orb */}
        <div 
          className="gradient-orb gradient-orb-blue w-[500px] h-[500px] top-[10%] -right-[150px] animate-float-slow"
          style={{ animationDelay: '2s' }}
        />
        {/* Middle Left Purple Orb */}
        <div 
          className="gradient-orb gradient-orb-purple w-[400px] h-[400px] top-[40%] -left-[100px] animate-float"
          style={{ animationDelay: '4s' }}
        />
        {/* Bottom Right Pink Orb */}
        <div 
          className="gradient-orb gradient-orb-pink w-[500px] h-[500px] bottom-[20%] -right-[200px] animate-pulse-glow"
          style={{ animationDelay: '1s' }}
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