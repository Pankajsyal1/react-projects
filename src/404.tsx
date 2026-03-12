import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 overflow-hidden relative">
      <div className="max-w-xl w-full text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative inline-block"
        >
          <h1 className="text-[12rem] font-black text-dark/5 leading-none tracking-tighter">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiAlertCircle size={80} className="text-primary/20" />
          </div>
        </motion.div>

        <div className="space-y-6">
          <h2 className="text-4xl font-black text-dark tracking-tighter uppercase">Signal Lost</h2>
          <p className="text-secondary font-bold leading-relaxed max-w-md mx-auto italic">
            "The coordinate you requested does not exist in this digital dimension. It may have been relocated or terminated."
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-10 py-5 bg-dark text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-2xl shadow-dark/20 active:scale-95 no-underline"
          >
            <FiHome size={16} />
            Return to Nexus
          </Link>
        </motion.div>
      </div>

      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-0" />
    </div>
  )
}

export default NotFound;