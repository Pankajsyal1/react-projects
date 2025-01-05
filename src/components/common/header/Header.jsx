import { Link } from 'react-router-dom';
import FollowMe from '../../../components/about/FollowMe';
import { Logo } from '../../common/Logo/Logo';

function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/"><Logo /></Link>
        </div>
        <nav className="flex space-x-6 items-center">
          <Link className="text-sm font-medium hover:text-gray-500 transition duration-200" to="/projects">Projects</Link>
          <FollowMe />
        </nav>
      </div>
    </header>
  );
}

export default Header;
