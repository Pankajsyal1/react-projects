import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  console.log(props);

  const { title, content, idx } = props;

  return (
    <div className="mb-4" onClick={() => setIsActive(!isActive)}>
      <div className="bg-gray-500 p-3 flex justify-between">
        <button><span>{idx + 1}{" ."}</span>{title}</button>
        <span>{isActive ? '+' : '-'}</span>
      </div>
      {isActive && <div className="bg-gray-700 p-3"><p>{content}</p></div>}
    </div>
  );
};

AccordionItem.propTypes = {
  idx: PropTypes.number,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default AccordionItem;
