import { FaLinkedinIn, FaTwitter, FaGlobe, FaEnvelope, FaWhatsapp, FaTelegramPlane, FaSkype, FaSlack, FaStackOverflow, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialData = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pankaj-kumar-a1641ba6/", gradient: "from-[#0077b5] to-[#0066a0]" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/pankajk76520654", gradient: "from-[#1da1f2] to-[#0d8de0]" },
  { name: "Portfolio", icon: FaGlobe, href: "https://pankaj-portfolio-reactjs.vercel.app/", gradient: "from-emerald-500 to-green-600" },
  { name: "Email", icon: FaEnvelope, href: "mailto:mpankaj.syal1@gmail.com", gradient: "from-[#ea4335] to-[#d93025]" },
  { name: "WhatsApp", icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=919478629522", gradient: "from-[#25d366] to-[#128c7e]" },
  { name: "Telegram", icon: FaTelegramPlane, href: "https://telegram.me/panku522", gradient: "from-[#0088cc] to-[#0077b5]" },
  { name: "Skype", icon: FaSkype, href: "https://join.skype.com/invite/WJDN0F76RCeI", gradient: "from-[#00aff0] to-[#0099d9]" },
  { name: "Slack", icon: FaSlack, href: "https://pankajsyal1.slack.com/team/U02MPFBJSK1", gradient: "from-[#611f69] to-[#4a154b]" },
  { name: "Stack Overflow", icon: FaStackOverflow, href: "https://stackoverflow.com/users/27401510/pankaj-syal", gradient: "from-[#f58025] to-[#e67617]" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Pankajsyal1", gradient: "from-[#333333] to-[#24292e]" },
];

const SocialLinks = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 py-8">
    {socialData.map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col text-center items-center justify-center p-5 lg:p-6 rounded-2xl glass-card no-underline group transition-all duration-300 relative overflow-hidden"
      >
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
        
        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            whileHover={{ rotate: 12 }}
            className="mx-auto w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-dark mb-3 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 shadow-sm"
          >
            <social.icon size={20} />
          </motion.div>
          <span className="text-[9px] font-black uppercase tracking-widest text-dark group-hover:text-white transition-colors duration-300 text-center">
            {social.name}
          </span>
        </div>
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
