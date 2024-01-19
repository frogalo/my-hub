import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import SideBar from "../components/SideBar";
import Store from "../api/store";
import styled from "styled-components";

const ProtectedRouteWrapper = styled.div`
  display: flex;
`;

const SidebarContainer = styled.div`
  width: 200px;
`;

const MainContentContainer = styled.div`
  flex: 1;
`;

const ProtectedRoute = () => {
    const token = Store.getToken();

    if (!token) {
        console.log("NO TOKEN FOUND, REDIRECTING TO LOGIN");
        return <Navigate to="/login"/>;
    }

    return (
        <ProtectedRouteWrapper>
            <SidebarContainer>
                <SideBar/>
            </SidebarContainer>
            <MainContentContainer>
                <DashboardHeader/>
                <Outlet/>
            </MainContentContainer>
        </ProtectedRouteWrapper>
    );
};

export default ProtectedRoute;
