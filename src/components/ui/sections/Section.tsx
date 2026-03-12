import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import Divider from '../Divider'
import { motion } from 'framer-motion'

const Section = ({ title, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative mb-8"
    >
      <SectionTitle title={title} />
      <div className="relative">{children}</div>
      <Divider />
    </motion.section>
  )
}

Section.propTypes = { title: PropTypes.string, children: PropTypes.element }

export default Section