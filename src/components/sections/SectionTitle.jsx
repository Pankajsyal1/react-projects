import PropTypes from "prop-types"

const SectionTitle = ({ title }) => {
  return (
    <h2 className="mb-3 text-2xl"><i>{title}</i></h2>
  )
}

SectionTitle.propTypes = { title: PropTypes.string }

export default SectionTitle