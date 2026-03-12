import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<number | "">("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | "">("");
  const [loanAmount, setLoanAmount] = useState<number | "">("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch<AppDispatch>();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store: RootState) => store.account);

  function handleDeposit() {
    if (depositAmount === "" || depositAmount <= 0) return;

    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (withdrawalAmount === "" || withdrawalAmount <= 0) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (loanAmount === "" || loanAmount <= 0 || !loanPurpose.trim()) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-7">
      <h2 className="text-lg font-semibold text-slate-900">
        Your account operations
      </h2>
      <div className="mt-4 grid gap-5">
        <div className="grid gap-3">
          <label className="text-sm font-semibold text-slate-700">Deposit</label>
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_160px]">
            <input
              type="number"
              value={depositAmount}
              onChange={(e) =>
                setDepositAmount(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            >
              <option value="USD">US Dollar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">British Pound</option>
            </select>
          </div>

          <button
            className="w-full rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading
              ? "Converting..."
              : depositAmount === ""
              ? "Deposit"
              : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div className="grid gap-3">
          <label className="text-sm font-semibold text-slate-700">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) =>
              setWithdrawalAmount(
                e.target.value === "" ? "" : Number(e.target.value)
              )
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <button
            className="w-full rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm transition hover:bg-slate-300"
            onClick={handleWithdrawal}
          >
            {withdrawalAmount === ""
              ? "Withdraw"
              : `Withdraw ${withdrawalAmount}`}
          </button>
        </div>

        <div className="grid gap-3">
          <label className="text-sm font-semibold text-slate-700">
            Request loan
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) =>
              setLoanAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="Loan amount"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
          <button
            className="w-full rounded-lg bg-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 shadow-sm transition hover:bg-slate-300"
            onClick={handleRequestLoan}
          >
            {loanAmount === "" ? "Request loan" : `Request loan ${loanAmount}`}
          </button>
        </div>

        {currentLoan > 0 && (
          <div className="grid gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <span className="text-sm font-semibold text-slate-700">
              Pay back ${currentLoan} ({currentLoanPurpose})
            </span>
            <button
              className="w-full rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition hover:bg-orange-400 sm:w-auto"
              onClick={handlePayLoan}
            >
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
