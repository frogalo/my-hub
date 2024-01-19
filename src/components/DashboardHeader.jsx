import React from 'react';
import styled from 'styled-components';
import {colors} from "../common/colors/Colors";
import Button from "../common/buttons/Button";
import Store from "../api/store";
import {Navigate, useNavigate} from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const DashboardHeader = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Store.removeToken();
        navigate('/login');
    };

    return (
        <HeaderWrapper>
            <Title>Header</Title>
            <Button type="button" onClick={handleLogout}>
                Logout
            </Button>
        </HeaderWrapper>
    );
};

export default DashboardHeader;
