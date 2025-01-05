import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'
import Divider from '../Divider'

const Section = ({ title, children }) => {
  return (
    <>
      <div className="mb-6">
        <SectionTitle title={title} />
        <div>{children}</div>
      </div>
      <Divider />
    </>
  )
}

Section.propTypes = { title: PropTypes.string, children: PropTypes.element }

export default Section