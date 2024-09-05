import React from 'react'
import { Link, NavLink } from 'react-router-dom' //a ki jagah link tag use krte hai kyuki usme pura page refresg hojata hai
import './Header.css'
export default function Header() {
  return (
    <header class='header'>
      <nav className=" border-gray-200 px-4 lg: px-4.5 py-1.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="" className="flex items-center">
            <img
              src="https://i.pinimg.com/736x/ac/e4/11/ace4115b83ff06a6f0ba18c61e5daba0.jpg"
              className="mr-3 h-12"
              alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-black  hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Read More
            </Link>

          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/" //automatically is acitve me daldegi
                  className={({ isActive }) => //isactive matlb jab cursor home pe lajaunga toh usko g=higuhligh krne keliye
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-500" : "text-gray-700"} 
                     border-b border-gray-100
                      hover:bg-gray-50 lg:hover:bg-transparent
                       lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) => //isactive matlb jab cursor home pe lajaunga toh usko g=higuhligh krne keliye
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-500" : "text-gray-700"} 
                     border-b border-gray-100
                      hover:bg-gray-50 lg:hover:bg-transparent
                       lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) => //isactive matlb jab cursor home pe lajaunga toh usko g=higuhligh krne keliye
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-500" : "text-gray-700"} 
                     border-b border-gray-100
                      hover:bg-gray-50 lg:hover:bg-transparent
                       lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/benefits"
                  className={({ isActive }) => //isactive matlb jab cursor home pe lajaunga toh usko g=higuhligh krne keliye
                    `block py-2 pr-4 pl-3 duration-200
                     ${isActive ? "text-orange-500" : "text-gray-700"} 
                     border-b border-gray-100
                      hover:bg-gray-50 lg:hover:bg-transparent
                       lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Benefits
                </NavLink>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

