import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FollowMe = () => {
  return (
    <ul className="flex gap-4 p-0 list-none items-center">
      <li>
        <motion.a 
          aria-label="LinkedIn" 
          href="https://www.linkedin.com/in/pankaj-kumar-a1641ba6/" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-blue-500/25 no-underline"
        >
          <FaLinkedinIn size={16} />
        </motion.a>
      </li>
      <li>
        <motion.a 
          aria-label="Github" 
          href="https://github.com/Pankajsyal1" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-xl bg-dark/5 text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-all duration-300 shadow-sm hover:shadow-dark/20 no-underline"
        >
          <FaGithub size={16} />
        </motion.a>
      </li>
    </ul>
  )
}

export default FollowMe;