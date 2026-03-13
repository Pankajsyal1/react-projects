export default function Loader() {
  return (
    <div className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-300">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-500 border-t-transparent"></div>
      <p>Loading questions...</p>
    </div>
  );
}
