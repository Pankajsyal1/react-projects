import { Outlet } from "react-router-dom"
import Header from "../components/common/header/Header"
import Footer from "../components/common/footer/Footer"
import ScrollToTop from "../components/common/ScrollToTop"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-[88px] md:pt-[96px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
