import { Navigate, Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";
import Store from "../api/store";

const ProtectedRoute = () => {
    const token = Store.getToken();

    if (!token) {
        console.log("NO TOKEN FOUND REDIRECTING TO LOGIN");
        return <Navigate to="/login" />;
    }

    return (
        <>
            <DashboardHeader />
            <div className="sidebar">
                <SideBar />
            </div>
            <div className="main-content">
                <Outlet /> {/* This is where nested protected routes will be rendered */}
            </div>
        </>
    );
};

export default ProtectedRoute;
