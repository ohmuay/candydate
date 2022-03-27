import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../statics/images/logo.png";

function NavigationBar() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="container mx-auto">
      <nav className="p-4 md:px-0">
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} alt="company-logo" className="w-24" />
          </Link>
          <div className="flex gap-4 md:gap-6">
            {auth.user ? (
              <div className="flex flex-col">
                <img
                  src={auth.user.photoURL}
                  alt="avatar"
                  className="self-center h-12 rounded-full"
                />
                <span>{auth.user.displayName}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <Link
                  to="/login"
                  className="text-purple-700 pb-0.3 border-b-2 border-purple-700"
                >
                  Sign In
                </Link>
                <span className="hidden text-purple-700 md:block">/</span>
                <Link
                  to="/register"
                  className="text-purple-700 pb-0.3 border-b-2 border-purple-700"
                >
                  Register
                </Link>
              </div>
            )}
            <Link to="/employer">
              <span className="grid p-4 text-purple-700 bg-purple-200 rounded-md place-items-center">
                Employer Site
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
