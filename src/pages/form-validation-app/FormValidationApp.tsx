import { useState, type ChangeEvent, type FocusEvent, type FormEvent, type ComponentType, type HTMLInputTypeAttribute } from "react";
import AppHeading from "../../components/common/AppHeading"
import { motion, AnimatePresence } from "framer-motion";
import { FiUser, FiMail, FiLock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type FormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;
type TouchedFields = Partial<Record<keyof FormData, boolean>>;

type ErrorTextProps = {
  text: string;
};

const ErrorText = ({ text }: ErrorTextProps) => (
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

type InputFieldProps = {
  name: keyof FormData;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  icon: ComponentType<{ size?: number }>;
  label: string;
  value: string;
  touched?: boolean;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};

const InputField = ({
  name,
  type,
  placeholder,
  icon: Icon,
  label,
  value,
  touched,
  error,
  onChange,
  onBlur,
}: InputFieldProps) => (
  <div className="space-y-2 group">
    <div className="flex items-center justify-between px-4">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary group-focus-within:text-primary transition-colors">
        {label}
      </label>
      {touched && !error && <FiCheckCircle className="text-green-500" size={14} />}
    </div>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors">
        <Icon size={18} />
      </div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full bg-white border outline-none py-5 pl-16 pr-6 rounded-[1.5rem] font-bold text-dark transition-all shadow-sm ${touched && error
            ? "border-red-200 focus:ring-4 focus:ring-red-500/5"
            : "border-dark/5 focus:ring-4 focus:ring-primary/10"
          }`}
      />
    </div>
    <AnimatePresence>
      {touched && error && <ErrorText text={error} />}
    </AnimatePresence>
  </div>
);

const FormValidationApp = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const validate = (data: FormData) => {
    const newErrors: FieldErrors = {};
    if (data.userName.length < 8) newErrors.userName = "Must be 8+ characters";
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email terminal";
    if (data.password.length < 8) newErrors.password = "Complexity required (8+)";
    if (data.password !== data.confirmPassword) newErrors.confirmPassword = "Parity mismatch";
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const next = { ...prev, [name]: value } as FormData;
      setErrors(validate(next));
      return next;
    });
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("System access granted.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6">
      <AppHeading sno={9} title="Identity Verification" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 bg-white/70 backdrop-blur-xl border border-dark/5 p-8 lg:p-12 rounded-[3.5rem] shadow-2xl shadow-dark/5"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField
            name="userName"
            type="text"
            label="Identity"
            placeholder="JohnDoe_99"
            icon={FiUser}
            value={formData.userName}
            touched={touched.userName}
            error={errors.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="email"
            type="email"
            label="Endpoint"
            placeholder="john@example.com"
            icon={FiMail}
            value={formData.email}
            touched={touched.email}
            error={errors.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="password"
            type="password"
            label="Cipher"
            placeholder="••••••••"
            icon={FiLock}
            value={formData.password}
            touched={touched.password}
            error={errors.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputField
            name="confirmPassword"
            type="password"
            label="Verification"
            placeholder="••••••••"
            icon={FiCheckCircle}
            value={formData.confirmPassword}
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />

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
