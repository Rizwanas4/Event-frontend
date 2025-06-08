import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white w-full fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex justify-between items-center p-4 md:px-8">
        <h1 className="text-2xl md:text-3xl text-pink-500 font-bold">Eventify</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/home" className="text-white text-lg hover:text-pink-500">
            Home
          </Link>
          <Link to="/service" className="text-white text-lg hover:text-pink-500">
            Services
          </Link>
          <Link to="/price" className="text-white text-lg hover:text-pink-500">
            Price
          </Link>
          <Link to="/contact" className="text-white text-lg hover:text-pink-500">
            Contact
          </Link>

          {isAuthenticated && (
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="rounded-full w-8 h-8"
                />
                <span className="hidden md:inline">{user.name}</span>
              </div>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-6 py-4 flex flex-col space-y-4 shadow-inner">
          <Link
            to="/home"
            className="text-white text-lg hover:text-pink-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/service"
            className="text-white text-lg hover:text-pink-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/price"
            className="text-white text-lg hover:text-pink-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Price
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-pink-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {isAuthenticated && (
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="rounded-full w-8 h-8"
                />
                <span>{user.name}</span>
              </div>
              <button
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                  setMobileMenuOpen(false);
                }}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
