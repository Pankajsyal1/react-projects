import { lazy } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WeatherApp from "./pages/weather-app"
import CountDown from "./components/projects/intermediate-projects/CountDown"
import ProjectLayout from "./layouts/ProjectLayout"
import Accounts from "./pages/accounts/Accounts"
import AtomicBlogs from "./pages/atomic-blogs/AtomicBlogs"
import PizzaView from "./pages/pizza/PizzaView"

const RootLayout = lazy(() => import("./layouts/RootLayout"))
const Home = lazy(() => import("./pages/home"))
const Counter = lazy(() => import("./pages/counter-app/Counter"))
const Todos = lazy(() => import("./pages/todos-app"))
const Meals = lazy(() => import("./pages/meals-app"))
const Calculator = lazy(() => import("./pages/calculator-app"))
const HiddenSearchBar = lazy(() => import("./pages/hidden-searchbar-app/HiddenSearchBar"))
const Testimonials = lazy(() => import("./pages/testimonials-app"))
const Accordion = lazy(() => import("./pages/accordion-app"))
const Projects = lazy(() => import("./pages/all-projects"))
const ThemeToggler = lazy(() => import("./pages/theme-toggler-app"))
const FormValidation = lazy(() => import("./pages/form-validation-app/FormValidationApp"))
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
          { path: "/accordion", element: <Accordion /> },
          { path: "/accounts", element: <Accounts /> },
          { path: "/advanced-filter", element: <AdvancedFilterApp /> },
          { path: "/atomic-blogs", element: <AtomicBlogs /> },
          { path: "/calculator", element: <Calculator /> },
          { path: "/weather-app", element: <WeatherApp /> },
          { path: "/counter", element: <Counter /> },
          { path: "/todos", element: <Todos /> },
          { path: "/pizza", element: <PizzaView /> },
          { path: "/form-validation", element: <FormValidation /> },
          { path: "/search-bar", element: <HiddenSearchBar /> },
          { path: "/meals", element: <Meals /> },
          { path: "/theme-toggler", element: <ThemeToggler /> },
          { path: "/testimonials", element: <Testimonials /> },
          { path: "/countdown-app", element: <CountDown /> },
        ]
      },
    ],
  },
  { path: "/xolcy", element: <XolcyLandingPage /> },
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