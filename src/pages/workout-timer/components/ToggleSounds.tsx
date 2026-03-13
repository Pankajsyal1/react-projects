import { memo } from "react";

type ToggleSoundsProps = {
  allowSound: boolean;
  setAllowSound: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToggleSounds({ allowSound, setAllowSound }: ToggleSoundsProps) {
  return (
    <button
      className="absolute right-6 top-6 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-slate-700 shadow-lg shadow-slate-200/60 transition hover:-translate-y-0.5 hover:text-slate-900"
      onClick={() => setAllowSound((allow) => !allow)}
      type="button"
    >
      {allowSound ? "Sound On" : "Sound Off"}
    </button>
  );
}

export default memo(ToggleSounds);
