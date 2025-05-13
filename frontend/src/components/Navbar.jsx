import { Link } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa'; 

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-gray-800">
          <FaCalculator className="text-2xl text-blue-600" />
          <span className="text-2xl font-bold">Numath</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
