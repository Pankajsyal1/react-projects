import PageNav from "../../components/nav/page-nav/PageNav";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-12">
        <PageNav />

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight">
              Simple pricing.
              <br />
              Just $9/month.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
              vel labore mollitia iusto. Recusandae quos provident, laboriosam
              fugit voluptatem iste.
            </p>
            <button className="mt-8 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.3em] text-slate-900 shadow-xl shadow-white/30 transition hover:-translate-y-0.5">
              Start free trial
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sky-400/30 via-indigo-400/20 to-purple-400/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <img
                src="/world-wise/img-2.jpg"
                alt="overview of a large city with skyscrapers"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
