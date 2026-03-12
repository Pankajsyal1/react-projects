import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function Customer() {
  const customer = useSelector((store: RootState) => store.customer.fullName);

  return (
    <h2 className="rounded-2xl border border-slate-200/60 bg-white p-4 text-lg font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-5">
      ?? Welcome, {customer}
    </h2>
  );
}

export default Customer;
