import { useState } from "react";
const messages = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
];

function StepsView() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const progress = ((step - 1) / 2) * 100;

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div className="min-h-[60vh] w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-12 text-slate-800">
      <div className="mx-auto w-[min(720px,92vw)]">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_25px_70px_-45px_rgba(15,23,42,0.5)] backdrop-blur sm:p-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">
                Roadmap
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
                React Steps
              </h3>
            </div>
            <button
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              {isOpen ? "Hide" : "Show"}
            </button>
          </div>

          {isOpen && (
            <div className="mt-10">
              <div className="flex items-center justify-between gap-2">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`z-10 relative flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition ${
                      step >= num
                        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>

              <div className="relative z-0 -mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-16 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-slate-400">
                  Step {step}
                </p>
                <p className="mt-3 text-2xl font-bold text-slate-900">
                  {messages[step - 1]}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={step === 1}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={step === 3}
                  className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StepsView;
