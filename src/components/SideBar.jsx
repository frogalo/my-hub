import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors} from "../common/colors/Colors";

const SidebarWrapper = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: ${colors.primary}; /* Adjust the background color as needed */
  color: white;
  padding-top: 100px;
`;

const SidebarList = styled.ul`
  list-style: none;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 10px;
  display: block;

  &:hover {
    background-color: #555; /* Adjust the hover background color as needed */
  }
`;

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarList>
                <SidebarItem>
                    <SidebarLink to="/dashboard">Dashboard</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to="/profile">Profile</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to="/service">Service</SidebarLink>
                </SidebarItem>
            </SidebarList>
        </SidebarWrapper>
    );
};

export default Sidebar;
