import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';
import Arrow from '../icons/Arrow';
import { HiOutlineMapPin, HiOutlineEnvelope, HiOutlinePhone } from 'react-icons/hi2';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  contact: string;
}

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    contact: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const contactInfo = [
    {
      icon: <HiOutlineMapPin className="text-xl" />,
      title: 'Our Office',
      lines: ['123 Innovation Drive, Design Valley,', 'Tech City, TC 54321'],
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      icon: <HiOutlineEnvelope className="text-xl" />,
      title: 'Email Us',
      lines: ['hello@xolcy.com', 'support@xolcy.com'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <HiOutlinePhone className="text-xl" />,
      title: 'Call Us',
      lines: ['+1 (555) 000-1234', 'Mon - Fri, 9am - 6pm'],
      gradient: 'from-emerald-400 to-teal-500'
    },
  ];

  return (
    <section id="contact" className="py-28 bg-[#fafafc]/90 backdrop-blur-sm relative overflow-hidden">
      {/* Top Wave */}
      <div className="wave-divider wave-divider-top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-cross opacity-30 pointer-events-none" />

      {/* Decorative Shapes */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[5%] w-20 h-20 border-2 border-primary/10 rounded-3xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] left-[3%] w-14 h-14 bg-blue-400/10 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[8%] w-10 h-10 bg-purple-400/10 rotate-45 hidden lg:block"
      />

      {/* Gradient Blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-stretch">

          {/* Info Side */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subTitle="Get In Touch"
                title="Let's Build Something Great Together"
                description="Have a project in mind? Looking to partner or just want to say hi? We'd love to hear from you."
                marginBottom="mb-10"
              />
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group glass-card p-5 rounded-2xl flex gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-black text-dark mb-1 tracking-tight">{info.title}</h4>
                    {info.lines.map((line, lIdx) => (
                      <p key={lIdx} className="text-secondary font-medium text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Form Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-purple-400/5 to-blue-400/10 rounded-[3.5rem] blur-2xl opacity-60 pointer-events-none" />
              
              <div className="relative bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-dark/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1">Full Name</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="John Doe"
                          className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1">Email Address</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="john@example.com"
                          className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1">Subject</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Project Inquiry"
                          className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1">Phone Number</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'contact' ? 'scale-[1.02]' : ''}`}>
                        <input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('contact')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1">Your Message</label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.01]' : ''}`}>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your project..."
                        className="w-full bg-gray-50/50 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white focus:border-primary/30 focus:shadow-lg focus:shadow-primary/5 transition-all font-bold text-sm resize-none"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full btn-shimmer bg-gradient-to-r from-primary to-purple-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:-translate-y-1 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-95 border-none cursor-pointer flex items-center justify-center gap-3 group"
                  >
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">
                      <Arrow />
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
