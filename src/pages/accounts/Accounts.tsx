import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { Provider, useSelector } from "react-redux";
import store, { type RootState } from "./store";
import './index.css'

function Accounts() {
  const fullName = useSelector((state: RootState) => state.customer.fullName);

  return (
    <Provider store={store}>
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {fullName === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </div>
    </Provider>
  );
}

export default Accounts;
