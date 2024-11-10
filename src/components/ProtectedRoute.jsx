import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute=({component:Component,requiredRole,...rest})=>{
    const {user,isAuthenticated}=useContext(AuthContext)

    return(
        <Route
         {...rest}
         render={(props)=>
         isAuthenticated && user.role===requiredRole?(
            <Component {...props} />
         ):(
            <Redirect to="/unauthorized" />
         )
         }
        />
    )

}
ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,  // for React components
    requiredRole: PropTypes.string.isRequired,    // assuming role is a string
  };
export default ProtectedRoute