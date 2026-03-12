import { motion } from "framer-motion";

const AppHeading = ({ sno, title, description = null }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-10 mb-20 relative"
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-px bg-primary"
        />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
          Project Instance {sno || "00"}
        </span>
      </div>

      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-dark tracking-tighter leading-[0.9] mb-4 relative">
        <span className="relative z-10">{title}</span>
        {/* Decorative elements behind title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -top-4 -left-4 w-12 h-12 bg-primary/5 rounded-full blur-xl -z-10"
        />
      </h1>

      {description && <p className="mb-10">{description}</p>}

      <div className="flex items-center gap-3">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-1.5 w-32 bg-linear-to-r from-primary to-purple-500 rounded-full origin-left shadow-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="w-1.5 h-1.5 rounded-full bg-purple-500"
        />
      </div>
    </motion.div>
  )
}

export default AppHeading;