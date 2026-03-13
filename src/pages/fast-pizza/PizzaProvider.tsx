import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"
import fastPizzaStore from "./store"

const PizzaProvider = () => {
  return (
    <Provider store={fastPizzaStore}>
      <Outlet />
    </Provider>
  )
}

export default PizzaProvider
