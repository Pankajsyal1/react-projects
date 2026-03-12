import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-7">
      <h2 className="text-lg font-semibold text-slate-900">
        Create new customer
      </h2>
      <div className="mt-4 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700">
            Customer full name
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-700">
            National ID
          </label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </div>
        <button
          className="w-full rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-sky-400"
          onClick={handleClick}
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default Customer;
