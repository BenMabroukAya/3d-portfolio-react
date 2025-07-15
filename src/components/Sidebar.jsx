// src/components/Sidebar.jsx

import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa";
import { Link } from "react-scroll"; // Permet le scroll fluide

const Sidebar = () => {
  return (
    <div className="fixed top-1/4 left-0 z-50 flex flex-col gap-6 bg-gray-900 text-white p-4 rounded-r-xl shadow-lg">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="flex items-center gap-2 cursor-pointer hover:text-teal-400"
      >
        <FaUser />
        <span className="hidden md:inline">About</span>
      </Link>
      <Link
        to="work"
        smooth={true}
        duration={500}
        className="flex items-center gap-2 cursor-pointer hover:text-teal-400"
      >
        <FaBriefcase />
        <span className="hidden md:inline">Work</span>
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="flex items-center gap-2 cursor-pointer hover:text-teal-400"
      >
        <FaEnvelope />
        <span className="hidden md:inline">Contact</span>
      </Link>
    </div>
  );
};

export default Sidebar;
