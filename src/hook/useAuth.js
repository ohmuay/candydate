import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};
