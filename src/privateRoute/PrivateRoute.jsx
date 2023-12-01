import React, { useContext } from "react";
import { AuthContext } from "./../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  console.log(user)
  if(loading){
    return <Spinner></Spinner>
  }
  if (!user?.email) {
    return <Navigate  state={location.pathname} to="/login" />;
  }
  return children;
};

export default PrivateRoute;
