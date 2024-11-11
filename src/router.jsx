import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

// import AdminPage from "./pages/AdminPage";
// import HomePage from "./pages/HomePage";
// import ManagerPage from "./pages/ManagerPage";
// import CashierPage from "./pages/CashierPage";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Unauthorized from "./components/Unauthorized";
// import { ROLES } from "./utils/constants";
function AppRouter() {
  return (
    <Router>
    <Routes>
        
        <Route path="/" element={<Login/>} />
        {/* <Route path="/unauthorized" element={<Unauthorized/>}/>
        <Route path="/" element={<HomePage/>} />
        <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} requiredRole={ROLES.ADMIN}/> } />
        <Route path="/manager" element={<ProtectedRoute element={<ManagerPage/>} requiredRole={ROLES.MANAGER} />}/>
        <Route path="/cashier" element={<ProtectedRoute element={<CashierPage/>} requiredRole={ROLES.CASHIER} />}/> 
       */}

        </Routes>
    </Router>
  );
}

export default AppRouter;
