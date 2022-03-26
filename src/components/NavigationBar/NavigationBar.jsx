import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import logo from "../../statics/images/logo.png";
import Container from "../Container/Container";

function NavigationBar() {
  const { auth } = useContext(AuthContext);
  console.log(auth);

  return (
    <nav className="p-6 xl:px-0">
      <Container className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="company-logo" className="w-24" />
        </Link>
        <div className="flex gap-6">
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
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-purple-700 font-bold pb-0.3 border-b-2 border-purple-700"
              >
                Sign In
              </Link>
              <span className="font-bold text-purple-700">/</span>
              <Link
                to="/register"
                className="text-purple-700 font-bold pb-0.3 border-b-2 border-purple-700"
              >
                Register
              </Link>
            </div>
          )}
          <Link to="/employer">
            <span className="grid p-4 font-bold text-purple-700 bg-purple-200 rounded-md place-items-center">
              Employer Site
            </span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default NavigationBar;
