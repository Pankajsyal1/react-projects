import React from 'react'
import { motion } from 'framer-motion';
export interface ClientCardProps {
  id: number, name: string, job: string, quote: string
}

const ClientCard: React.FC<ClientCardProps> = (testimonial) => {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  const { id, name, job, quote } = testimonial;
  return (
    <motion.div initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInVariants} className="flex-md-row card p-4 h-100 gap-4" key={id}>
      <div className="flex-shrink-0 d-flex flex-column justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#8358FF"
          className="bi bi-chat-left-quote-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.5 0a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 1.5 1.5h1.5A2.5 2.5 0 0 1 7 4.5c-.588 0-1.007.082-1.288.196l-3.002 3a.655.655 0 0 1-.882 0 .655.655 0 0 1 0-.882l3-3A1.5 1.5 0 0 1 9.5 3v1zm3.017 5.721c.18.181.286.44.286.721 0 .277-.099.528-.292.719l-4.5 4.5c-.195.195-.451.288-.72.288-.268 0-.525-.094-.719-.292a1 1 0 0 1 0-1.414l4.5-4.5c.195-.194.45-.292.719-.292.271 0 .523.098.718.292z" />
        </svg>
        <div className='mt-2'>
          <h5 className="mb-1">{name}</h5>
          <p className="text-muted m-0">{job}</p>
        </div>
      </div>
      <div className='vr mx-4' />
      <div className='align-self-center'>
        <p className="text-secondary m-0 fs-5">{quote}</p>
      </div>
    </motion.div>
  )
}

export default ClientCard