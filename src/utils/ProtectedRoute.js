import {Navigate, Outlet} from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";

const ProtectedRoute = () => {
    // Implement your authentication logic here
    // For simplicity, always consider the user authenticated in this example
    const isAuthenticated = false;

    if (!isAuthenticated) {
        return <Navigate to="/login"/>;
    }

    // Render your protected layout here, including common components like headers and sidebars
    return (
        <>
            <DashboardHeader/>
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="main-content">
                <Outlet/> {/* This is where nested protected routes will be rendered */}
            </div>
        </>
    );
};

export default ProtectedRoute;