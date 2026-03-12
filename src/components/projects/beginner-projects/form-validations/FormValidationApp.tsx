import { useState } from "react";
import AppHeading from "../../../common/AppHeading"
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiLock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const ErrorText = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="flex items-center gap-2 text-red-500 text-[10px] font-black uppercase tracking-widest mt-2 px-4"
  >
    <FiAlertCircle size={12} />
    <span>{text}</span>
  </motion.div>
);

const FormValidationApp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    let newErrors = {};
    if (formData.userName.length < 8) newErrors.userName = "Must be 8+ characters";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email terminal";
    if (formData.password.length < 8) newErrors.password = "Complexity required (8+)";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Parity mismatch";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) validate();
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("System access granted.");
    }
  };

  const InputField = ({ name, type, placeholder, icon: Icon, label }) => (
    <div className="space-y-2 group">
      <div className="flex items-center justify-between px-4">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary group-focus-within:text-primary transition-colors">
          {label}
        </label>
        {touched[name] && !errors[name] && <FiCheckCircle className="text-green-500" size={14} />}
      </div>
      <div className="relative">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">
          <Icon size={18} />
        </div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full bg-white border outline-none py-5 pl-16 pr-6 rounded-[1.5rem] font-bold text-dark transition-all shadow-sm ${touched[name] && errors[name]
              ? "border-red-200 focus:ring-4 focus:ring-red-500/5"
              : "border-dark/5 focus:ring-4 focus:ring-primary/10"
            }`}
        />
      </div>
      <AnimatePresence>
        {touched[name] && errors[name] && <ErrorText text={errors[name]} />}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={9} title="Identity Verification" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white/70 backdrop-blur-xl border border-dark/5 p-8 lg:p-12 rounded-[3.5rem] shadow-2xl shadow-dark/5"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField name="userName" type="text" label="Identity" placeholder="JohnDoe_99" icon={FiUser} />
          <InputField name="email" type="email" label="Endpoint" placeholder="john@example.com" icon={FiMail} />
          <InputField name="password" type="password" label="Cipher" placeholder="••••••••" icon={FiLock} />
          <InputField name="confirmPassword" type="password" label="Verification" placeholder="••••••••" icon={FiCheckCircle} />

          <button
            type="submit"
            className="w-full mt-8 py-6 bg-dark text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all shadow-xl shadow-dark/10 active:scale-[0.98]"
          >
            Authorize Access
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default FormValidationApp;