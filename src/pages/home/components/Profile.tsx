import InfoCard from "./InfoCard";
import { motion } from "framer-motion";
import Section from "./Section";

const Profile = () => {
  const developerInfo = [
    "Design systems and component libraries",
    "Accessible, responsive UI engineering",
    "Performance-minded React architecture",
    "Figma-to-code collaboration",
  ];

  const additionalInfo = [
    "Clear communication and steady delivery",
    "Pragmatic UX decisions that ship",
    "Reliable state management patterns",
    "Maintainable, scalable frontend code",
  ];

  const tags = [
    "Frontend Engineer",
    "UI/UX Designer",
    "React + TypeScript",
    "Design Systems",
  ];

  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-500">
          Available for Work
        </span>

        <h1 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Hi, I&apos;m Pankaj. I design and build pixel-precise web experiences.
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Frontend developer with a design-first mindset, focused on clean systems,
          delightful interactions, and reliable production code.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#connect"
            className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
          <a
            href="https://pankaj-portfolio-reactjs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 bg-white/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            View Portfolio
          </a>
        </div>
      </motion.div>

      <Section  className="mt-16" title={"About Me"}>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InfoCard
              title="Skills & Technical Focus"
              points={developerInfo}
              icon="-"
              gradient="from-blue-400 to-indigo-500"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InfoCard
              title="Working Style"
              points={additionalInfo}
              icon="-"
              gradient="from-purple-400 to-pink-500"
            />
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Profile;
