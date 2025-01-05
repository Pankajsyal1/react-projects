import PropTypes from "prop-types";

const InfoCard = ({ title, points }) => (
  <div className="border border-gray-700 p-4 shadow-md">
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <ul className="list-disc pl-5 space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-300">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

InfoCard.propTypes = { title: PropTypes.string, points: PropTypes.array }

export default InfoCard;
