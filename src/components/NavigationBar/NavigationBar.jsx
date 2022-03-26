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
      <Container className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="company-logo" className="w-24" />
        </Link>
        <div className="flex gap-6">
          {auth.user ? (
            <div className="flex flex-col">
              <img
                src={auth.user.photoURL}
                alt="avatar"
                className="h-12 rounded-full self-center"
              />
              <span>{auth.user.displayName}</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link
                to="/login"
                className="text-purple-700 font-bold pb-0.3 border-b-2 border-purple-700"
              >
                Sign In
              </Link>
              <span className="text-purple-700 font-bold">/</span>
              <Link
                to="/register"
                className="text-purple-700 font-bold pb-0.3 border-b-2 border-purple-700"
              >
                Register
              </Link>
            </div>
          )}
          <Link to="/employer">
            <span className="grid place-items-center bg-purple-200 p-4 text-purple-700 font-bold rounded-md">
              Employer Site
            </span>
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default NavigationBar;
