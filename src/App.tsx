import { Suspense, lazy } from "react"
import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProjectLayout from "./layouts/ProjectLayout"

const RootLayout = lazy(() => import("./layouts/RootLayout"))
const Home = lazy(() => import("./pages/home/Home"))
const Counter = lazy(() => import("./pages/counter-app/Counter"))
const Todos = lazy(() => import("./pages/todos-app/Todos"))
const Meals = lazy(() => import("./pages/meals-app/Meals"))
const Calculator = lazy(() => import("./pages/calculator-app/Calculator"))
const HiddenSearchBar = lazy(() => import("./pages/hidden-searchbar-app/HiddenSearchBar"))
const Testimonials = lazy(() => import("./pages/testimonials-app/TestimonialsApp"))
const Accordion = lazy(() => import("./pages/accordion-app/Accordion"))
const Projects = lazy(() => import("./pages/all-projects/AllProjects"))
const ThemeToggler = lazy(() => import("./pages/theme-toggler-app/ThemeTogglerApp"))
const FormValidation = lazy(() => import("./pages/form-validation-app/FormValidationApp"))
const AdvancedFilterApp = lazy(() => import("./pages/advanced-filter/AdvancedFilterApp"))
const XolcyLandingPage = lazy(() => import("./pages/landing-page/XolcyLandingPage"))
const NotFound = lazy(() => import("./pages/404"))
const WeatherApp = lazy(() => import("./pages/weather-app/WeatherApp"))
const CountDown = lazy(() => import("./pages/count-down/CountDown"))
const Accounts = lazy(() => import("./pages/accounts/Accounts"))
const AtomicBlogs = lazy(() => import("./pages/atomic-blogs/AtomicBlogs"))
const ReactQuiz = lazy(() => import("./pages/react-quiz/ReactQuiz"))
const StepsView = lazy(() => import("./pages/steps-views/StepsView"))
const TravelListView = lazy(() => import("./pages/travel-list/TravelListView"))
const MoviesPopcorn = lazy(() => import("./pages/movies-popcorn/MoviesPopcorn"))
const WatchView = lazy(() => import("./pages/watch/WatchView"))
const WorkoutTimer = lazy(() => import("./pages/workout-timer/WorkoutTimer"))
const PizzaProvider = lazy(() => import("./pages/fast-pizza/PizzaProvider"))
const FastPizzaAppLayout = lazy(() => import("./pages/fast-pizza/ui/AppLayout"))
const FastPizzaError = lazy(() => import("./pages/fast-pizza/ui/Error"))
const FastPizzaHome = lazy(() => import("./pages/fast-pizza/ui/Home"))
const FastPizzaMenu = lazy(() => import("./pages/fast-pizza/features/menu/Menu"))
const FastPizzaCart = lazy(() => import("./pages/fast-pizza/features/cart/Cart"))
const FastPizzaCreateOrder = lazy(() => import("./pages/fast-pizza/features/order/CreateOrder"))
const FastPizzaOrder = lazy(() => import("./pages/fast-pizza/features/order/Order"))

const menuLoader = async (args: LoaderFunctionArgs) => {
  const module = await import("./pages/fast-pizza/features/menu/Menu")
  return module.loader?.()
}

const orderLoader = async (args: LoaderFunctionArgs) => {
  const module = await import("./pages/fast-pizza/features/order/Order")
  return module.loader?.(args)
}

const createOrderAction = async (args: ActionFunctionArgs) => {
  const module = await import("./pages/fast-pizza/features/order/CreateOrder")
  return module.action?.(args)
}

const updateOrderAction = async (args: ActionFunctionArgs) => {
  const module = await import("./pages/fast-pizza/features/order/UpdateOrder")
  return module.action?.(args)
}

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
          { path: "/countdown-app", element: <CountDown /> },
          { path: "/counter", element: <Counter /> },
          {
            path: "/pizza",
            element: <PizzaProvider />,
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
          { path: "/movies-popcorn", element: <MoviesPopcorn /> },
          { path: "/react-quiz", element: <ReactQuiz /> },
          { path: "/steps-view", element: <StepsView /> },
          { path: "/testimonials", element: <Testimonials /> },
          { path: "/theme-toggler", element: <ThemeToggler /> },
          { path: "/todos", element: <Todos /> },
          { path: "/travel-view", element: <TravelListView /> },
          { path: "/watch-view", element: <WatchView /> },
          { path: "/weather-app", element: <WeatherApp /> },
          { path: "/workout-timer", element: <WorkoutTimer /> },
        ]
      },
    ],
  },
  { path: "/xolcy", element: <XolcyLandingPage /> },
  { path: "*", element: <NotFound /> },
])

const App = () => {
  return (
    <Suspense fallback={<div className="p-6 text-slate-600">Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
