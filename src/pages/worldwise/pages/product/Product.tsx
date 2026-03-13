import PageNav from "../../components/nav/page-nav/PageNav";

export default function Product() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-12">
        <PageNav />

        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/30 via-sky-400/20 to-indigo-400/20 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <img
                src="/world-wise/img-1.jpg"
                alt="person with dog overlooking mountain with sunset"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight">
              About WorldWise.
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p className="mt-4 text-lg text-slate-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
