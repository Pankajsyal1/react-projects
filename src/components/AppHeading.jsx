import PropTypes from "prop-types"

const AppHeading = ({ sno, title }) => {
  return (
    <h1 className={'title'}>Project-{sno}: <em>{title}</em></h1>
  )
}
AppHeading.propTypes = { sno: PropTypes.string, title: PropTypes.string }
export default AppHeading