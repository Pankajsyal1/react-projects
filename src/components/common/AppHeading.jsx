import PropTypes from "prop-types"

const AppHeading = ({ sno, title }) => {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl mb-5">Project-{sno}: <em>{title}</em></h1>
  )
}
AppHeading.propTypes = { sno: PropTypes.number, title: PropTypes.string }
export default AppHeading