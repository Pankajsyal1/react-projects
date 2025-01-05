import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { generateRandomColor } from "../../utils/common-functon"

const ProjectLinks = () => (
  <>
    <div className="bg-gray-800 p-4">
      <h3 className="text-lg mb-2">{"Beginer Projects"}</h3>
      <ul className="flex flex-wrap gap-4 text-white">
        {projects.map((project, index) => (
          <li
            key={index}
            className="px-2 py-1"
            style={{ backgroundColor: generateRandomColor() }}
          >
            <Link
              to={project.path}
              className="text-sm font-medium hover:text-black transition duration-200"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

ProjectLinks.propTypes = { title: PropTypes.string };
export default ProjectLinks;
