import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="mt-16 flex flex-col items-center gap-4 text-lg font-semibold">
      <div className="flex items-center gap-3">
        <input
          className="w-40 accent-teal-500"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="rounded-full border border-slate-700 bg-slate-700 px-4 py-2 text-base transition hover:bg-slate-800"
          onClick={dec}
        >
          -
        </button>
        <input
          className="w-20 rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-center text-base"
          value={count}
          onChange={defineCount}
        />
        <button
          className="rounded-full border border-slate-700 bg-slate-700 px-4 py-2 text-base transition hover:bg-slate-800"
          onClick={inc}
        >
          +
        </button>
      </div>

      <p className="text-base text-slate-300">{date.toDateString()}</p>

      <div>
        <button
          className="rounded-full border border-slate-700 bg-slate-700 px-5 py-2 text-base transition hover:bg-slate-800"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default DateCounter;
