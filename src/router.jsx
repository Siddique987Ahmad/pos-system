import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ManagerPage from "./pages/ManagerPage";
import CashierPage from "./pages/CashierPage";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

function AppRouter() {
  return (
    <Router>
    <Routes>
        
        <Route path="/login" element={<Login/>} />
        <ProtectedRoute path="/admin" element={<AdminPage/>} requiredRole='admin' />
        <ProtectedRoute path="/manager" element={<ManagerPage/>} requiredRole='manager' />
        <ProtectedRoute path="/cashier" element={<CashierPage/>} requiredRole='cashier'/> 
        <Route path="/unauthorized" element={<Unauthorized/>}/>
        <Route path="/" element={<HomePage/>} />

        </Routes>
    </Router>
  );
}

export default AppRouter;
