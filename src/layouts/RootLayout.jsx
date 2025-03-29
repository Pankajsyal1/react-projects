import { Outlet } from "react-router-dom"
import Header from "../components/common/header/Header"
import Footer from "../components/common/footer/Footer"
import ScrollToTop from "../components/common/ScrollToTop"

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <section className="py-8">
          <div className="container">
            <Outlet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default RootLayout