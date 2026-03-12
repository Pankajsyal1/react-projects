import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Views
import EatnSplitView from "./views/EatnSplitView";
import PizzaView from "./views/PizzaView";
import StepsView from "./views/StepsView";
import TravelListView from "./views/TravelListView";
import { ROUTES } from "./utils/Routes";
import HomeView from "./views/HomeView";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomeView />,
      },
      {
        path: ROUTES.PIZZA,
        element: <PizzaView />,
      },
      {
        path: ROUTES.STEPS,
        element: <StepsView />,
      },
      {
        path: ROUTES.TRAVEL,
        element: <TravelListView />,
      },
      {
        path: ROUTES.BILL,
        element: <EatnSplitView />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
