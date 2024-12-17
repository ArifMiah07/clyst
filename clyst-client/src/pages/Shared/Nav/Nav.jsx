import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    const navLinks = <>
    <li><NavLink to={'/'} className="text-black hover:text-green-400 hover:text-[21px] ">Home</NavLink> </li>
    <li><NavLink to={'/page'} className="text-black hover:text-green-400 hover:text-[21px] ">Page</NavLink> </li>
    <li><NavLink to={'/group'} className="text-black hover:text-green-400 hover:text-[21px] ">Group</NavLink> </li>
    <li><NavLink to={'/post'} className="text-black hover:text-green-400 hover:text-[21px] ">post</NavLink> </li>
    <li><NavLink to={'/more'} className="text-black hover:text-green-400 hover:text-[21px] ">more </NavLink> </li> 

</>

  return (
    <div className="navbar border-b-2 border-blue-400 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Clyst</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Profile</a>
      </div>
    </div>
  );
};

export default Nav;
