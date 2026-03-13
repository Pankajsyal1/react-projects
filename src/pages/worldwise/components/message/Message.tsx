function Message({ message }: { message: string }) {
  return (
    <p className="rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-4 text-center text-sm font-semibold text-slate-200">
      {message}
    </p>
  );
}

export default Message;
