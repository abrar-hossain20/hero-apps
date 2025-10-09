import { Link, NavLink } from "react-router";

import logoPng from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg border border-base-300"
          >
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/apps" 
                className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/installation" 
                className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <div className="shrink-0">
            <img
              src={logoPng}
              alt="Hero.IO Logo"
              className="h-6 w-auto sm:h-7 md:h-8"
            />
          </div>
          <Link
            to="/"
            className="text-lg sm:text-xl font-extrabold text-white whitespace-nowrap"
            style={{
              background:
                "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hero.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 text-xl font-bold ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/apps" 
              className={({ isActive }) => 
                `px-3 py-2 text-xl font-bold ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/installation" 
              className={({ isActive }) => 
                `px-3 py-2 text-xl font-bold ${isActive ? 'text-purple-600' : ''}`
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/abrar-hossain20"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          style={{
            background:
              "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 .5a12 12 0 00-3.793 23.404c.6.111.82-.26.82-.579 0-.286-.011-1.044-.017-2.051-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.072 1.836 2.812 1.306 3.495.999.108-.777.42-1.306.763-1.606-2.665-.304-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.303 1.23a11.5 11.5 0 016.01 0c2.294-1.552 3.301-1.23 3.301-1.23.655 1.652.243 2.873.119 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.476 5.921.431.372.816 1.103.816 2.222 0 1.604-.015 2.898-.015 3.293 0 .321.218.695.826.577A12 12 0 0012 .5z"
              clipRule="evenodd"
            />
          </svg>
          <span>Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
