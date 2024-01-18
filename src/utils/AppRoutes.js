import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../views/user/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../views/Dashboard";
import React from "react";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<ProtectedRoute />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    );
};

