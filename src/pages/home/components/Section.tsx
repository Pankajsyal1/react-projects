import PropTypes from 'prop-types'
import SectionTitle from '../../../components/ui/sections/SectionTitle'
import Divider from '../../../components/ui/Divider'
import { motion } from 'framer-motion'

const Section = ({ title, children, className='' }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      className={`relative mb-8 ${className}`}
    >
      <SectionTitle title={title} />
      <div className="relative">{children}</div>
    </motion.section>
  )
}

Section.propTypes = { title: PropTypes.string, children: PropTypes.element }

export default Section