import { lazy } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import WeatherApp from "./pages/weather-app"
import CountDown from "./components/projects/intermediate-projects/CountDown"
import ProjectLayout from "./layouts/ProjectLayout"
import Accounts from "./pages/accounts/Accounts"
import AtomicBlogs from "./pages/atomic-blogs/AtomicBlogs"
import FastPizzaAppLayout from "./pages/fast-pizza/ui/AppLayout"
import FastPizzaError from "./pages/fast-pizza/ui/Error"
import FastPizzaHome from "./pages/fast-pizza/ui/Home"
import FastPizzaMenu, { loader as menuLoader } from "./pages/fast-pizza/features/menu/Menu"
import FastPizzaCart from "./pages/fast-pizza/features/cart/Cart"
import FastPizzaCreateOrder, { action as createOrderAction } from "./pages/fast-pizza/features/order/CreateOrder"
import FastPizzaOrder, { loader as orderLoader } from "./pages/fast-pizza/features/order/Order"
import { action as updateOrderAction } from "./pages/fast-pizza/features/order/UpdateOrder"
import fastPizzaStore from "./pages/fast-pizza/store"
import ReactQuiz from "./pages/react-quiz/ReactQuiz"
import StepsView from "./pages/steps-views/StepsView"

const RootLayout = lazy(() => import("./layouts/RootLayout"))
const Home = lazy(() => import("./pages/home"))
const Counter = lazy(() => import("./pages/counter-app/Counter"))
const Todos = lazy(() => import("./pages/todos-app/Todos"))
const Meals = lazy(() => import("./pages/meals-app/Meals"))
const Calculator = lazy(() => import("./pages/calculator-app"))
const HiddenSearchBar = lazy(() => import("./pages/hidden-searchbar-app/HiddenSearchBar"))
const Testimonials = lazy(() => import("./pages/testimonials-app/TestimonialsApp"))
const Accordion = lazy(() => import("./pages/accordion-app"))
const Projects = lazy(() => import("./pages/all-projects"))
const ThemeToggler = lazy(() => import("./pages/theme-toggler-app/ThemeTogglerApp"))
const FormValidation = lazy(() => import("./pages/form-validation-app/FormValidationApp"))
const AdvancedFilterApp = lazy(() => import("./pages/advanced-filter"))
const XolcyLandingPage = lazy(() => import("./pages/landing-page/XolcyLandingPage"))
const NotFound = lazy(() => import("./pages/404"))

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
          {
            path: "/pizza",
            element: (
              <Provider store={fastPizzaStore}>
                <Outlet />
              </Provider>
            ),
            children: [
              {
                element: <FastPizzaAppLayout />,
                errorElement: <FastPizzaError />,
                children: [
                  { index: true, element: <FastPizzaHome /> },
                  {
                    path: "menu",
                    element: <FastPizzaMenu />,
                    loader: menuLoader,
                    errorElement: <FastPizzaError />,
                  },
                  { path: "cart", element: <FastPizzaCart /> },
                  {
                    path: "order/new",
                    element: <FastPizzaCreateOrder />,
                    action: createOrderAction,
                  },
                  {
                    path: "order/:orderId",
                    element: <FastPizzaOrder />,
                    loader: orderLoader,
                    errorElement: <FastPizzaError />,
                    action: updateOrderAction,
                  },
                ],
              },
            ],
          },
          { path: "/form-validation", element: <FormValidation /> },
          { path: "/search-bar", element: <HiddenSearchBar /> },
          { path: "/meals", element: <Meals /> },
          { path: "/react-quiz", element: <ReactQuiz /> },
          { path: "/steps-view", element: <StepsView /> },
          { path: "/testimonials", element: <Testimonials /> },
          { path: "/theme-toggler", element: <ThemeToggler /> },
          { path: "/todos", element: <Todos /> },
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
