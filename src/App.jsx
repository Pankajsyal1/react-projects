import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import HiddenSearchBar from "./pages/hidden-searchbar-app"
import Testimonials from "./pages/testimonials-app"
import { Accordion } from "./pages/accordion-app"
import Projects from "./pages/all-projects"

const Home = lazy(() => import("./pages/home"))
const Counter = lazy(() => import("./pages/counter-app"))
const Todos = lazy(() => import("./pages/todos-app"))
const Meals = lazy(() => import("./pages/meals-app"))
const Calculator = lazy(() => import("./pages/calculator-app"))
const ThemeToggler = lazy(() => import("./pages/theme-toggler-app"))

const routes = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/counter", element: <Counter /> },
      { path: "/todos", element: <Todos /> },
      { path: "/meals", element: <Meals /> },
      { path: "/calculator", element: <Calculator /> },
      { path: "/theme-toggler", element: <ThemeToggler /> },
      { path: "/search-bar", element: <HiddenSearchBar /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/accordion", element: <Accordion /> },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App