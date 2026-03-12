import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { Provider, useSelector } from "react-redux";
import store, { type RootState } from "./store";
import { motion } from "framer-motion";
import AppHeading from "../../components/common/AppHeading";

function AccountsContent() {
  const fullName = useSelector((state: RootState) => state.customer.fullName);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#e0f2fe_0%,_#f8fafc_42%,_#ffffff_100%)] px-6 pb-16 pt-12 text-slate-900 sm:px-8">
      <motion.header
        className="mx-auto mb-6 max-w-5xl rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AppHeading
          sno={2}
          title="🏦 The React-Redux Bank "
          description="Manage deposits, withdrawals, and loans in one place."
        />
      </motion.header>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="grid gap-6">
            <Customer />
            <AccountOperations />
          </div>
          <aside className="grid content-start gap-4">
            <BalanceDisplay />
          </aside>
        </div>
      )}
    </div>
  );
}

function Accounts() {
  return (
    <Provider store={store}>
      <AccountsContent />
    </Provider>
  );
}

export default Accounts;
