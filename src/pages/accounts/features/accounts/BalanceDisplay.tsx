import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return (
    <div className="rounded-2xl bg-slate-900 p-6 text-center text-white shadow-[0_16px_35px_rgba(15,23,42,0.25)]">
      <div className="text-3xl font-semibold">{formatCurrency(balance)}</div>
      <p className="mt-2 text-sm text-white/70">Current balance</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
