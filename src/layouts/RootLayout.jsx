import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const RootLayout = () => {
  return (
    <>
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