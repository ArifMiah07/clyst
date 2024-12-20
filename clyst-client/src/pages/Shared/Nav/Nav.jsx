import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaUserFriends, FaUsers, FaSearch, FaEllipsisH, FaBars, FaTimes } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import logo from "../../../assets/logo.png";
import { useSearch } from "../../../Context/SearchContext";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const { setSearchTerm } = useSearch();  // Access setSearchTerm from context
  const [input, setInput] = useState("");  // Local state for the input value


  const handleSearchChange = (e) => {
    setInput(e.target.value);  // Update the local input state
  };

  const handleSearchClick = () => {
    setSearchTerm(input);  // Set searchTerm in context when the button is clicked
  };
  // State to control the hamburger menu
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="flex items-center gap-2 text-black hover:text-blue-500 transition-transform hover:scale-110"
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/friends"}
          className="flex items-center gap-2 text-black hover:text-blue-500 transition-transform hover:scale-110"
        >
          <FaUserFriends /> Friends
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/groups"}
          className="flex items-center gap-2 text-black hover:text-blue-500 transition-transform hover:scale-110"
        >
          <FaUsers /> Groups
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/post"}
          className="flex items-center gap-2 text-black hover:text-blue-500 transition-transform hover:scale-110"
        >
          <IoMdAddCircle /> Post
        </NavLink>
      </li>
    </>
  );

  const user = false;
  const register = false;

  return (
    <div className="navbar space-x-2 border-b-2 border-blue-400 bg-base-100 shadow-md">
      {/* Left Section */}
      <div className="navbar-start">
        <a className="btn btn-ghost hover:bg-[#0f00f0] text-xl">
          <img className="w-[40px]" src={logo} alt="Clyst logo" />
        </a>
        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center ml-4">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-64"
            value={input}  // Set input value from local state
            onChange={handleSearchChange}  // Update the search term on input change
          />
          <button className="btn btn-primary ml-2" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden navbar-end">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Center Section (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Mobile Menu (Toggled by hamburger) */}
      <div
        className={`lg:hidden w-full bg-base-100 absolute top-16 left-0 shadow-lg ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="menu p-4">{navLinks}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex items-center gap-4">
        {
          user ?  
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full w-10"
              />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          : 
          register ?   
            <button className="btn btn-primary">
              <Link to={'/login'}>Login</Link>
            </button> 
            : 
            <button className="btn btn-primary">
              <Link to={'/register'}>Register</Link>
            </button> 
        }
      </div>
    </div>
  );
};

export default Nav;
