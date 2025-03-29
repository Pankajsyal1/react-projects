import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProjectLayout from "./layouts/ProjectLayout"
import WeatherApp from "./pages/weather-app"

const RootLayout = lazy(() => import("./layouts/RootLayout"))
const Home = lazy(() => import("./pages/home"))
const Counter = lazy(() => import("./pages/counter-app"))
const Todos = lazy(() => import("./pages/todos-app"))
const Meals = lazy(() => import("./pages/meals-app"))
const Calculator = lazy(() => import("./pages/calculator-app"))
const HiddenSearchBar = lazy(() => import("./pages/hidden-searchbar-app"))
const Testimonials = lazy(() => import("./pages/testimonials-app"))
const Accordion = lazy(() => import("./pages/accordion-app"))
const Projects = lazy(() => import("./pages/all-projects"))
const ThemeToggler = lazy(() => import("./pages/theme-toggler-app"))
const FormValidation = lazy(() => import("./pages/form-validation-app"))
const AdvancedFilterApp = lazy(() => import("./pages/advanced-filter"))
const XolcyLandingPage = lazy(() => import("./pages/landing-page/XolcyLandingPage"))
const NotFound = lazy(() => import("./404"))

const routes = createBrowserRouter([
  {
    path: "/", element: <RootLayout />,
    children: [
      { path: "", index: true, element: <Home /> },
      { path: "/projects", element: <Projects /> },
      {
        path: "", element: <ProjectLayout />,
        children: [
          { path: "/counter", element: <Counter /> },
          { path: "/todos", element: <Todos /> },
          { path: "/meals", element: <Meals /> },
          { path: "/calculator", element: <Calculator /> },
          { path: "/theme-toggler", element: <ThemeToggler /> },
          { path: "/search-bar", element: <HiddenSearchBar /> },
          { path: "/testimonials", element: <Testimonials /> },
          { path: "/accordion", element: <Accordion /> },
          { path: "/form-validation", element: <FormValidation /> },
          { path: "/advanced-filter", element: <AdvancedFilterApp /> },
          { path: "/weather-app", element: <WeatherApp /> },
        ]
      },
    ],
  },
  // { path: "/xolcy", element: <XolcyLandingPage /> },
  { path: "*", element: <NotFound /> },
])

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App