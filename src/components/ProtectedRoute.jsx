import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute=({component:Component,requiredRole})=>{
    const {user,isAuthenticated}=useContext(AuthContext)

    // return(
    //     <Route
    //      {...rest}
    //      render={(props)=>
    //      isAuthenticated && user.role===requiredRole?(
    //         <Component {...props} />
    //      ):(
    //         <Redirect to="/unauthorized" />
    //      )
    //      }
    //     />
    // )
    if(!isAuthenticated || user?.role !== requiredRole)
    {
        return <Navigate to='/unauthorized'/>
    }
    return <Component />
    // const isAuthenticated = true; // Set to true for testing
    // if (!isAuthenticated) {
    //     return <Navigate to="/unauthorized" />;
    //   }
    
    //   return <Component />;

}
ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired,  // for React components
    requiredRole: PropTypes.string.isRequired,    // assuming role is a string
  };
export default ProtectedRoute