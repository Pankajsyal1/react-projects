import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
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