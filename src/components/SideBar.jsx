import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {colors, getElementsBackgroundColor, getElementsTextColor} from "../common/colors/Colors";
import Store from "../api/store";

const SidebarWrapper = styled.nav`
  width: 200px;
  height: 100vh;
  background-color: ${(props) => getElementsBackgroundColor(props.theme)};
  color: ${(props) => getElementsTextColor(props.theme)};
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
  color: ${(props) => getElementsTextColor(props.theme)};
  padding: 10px;
  display: block;

  &:hover {
    background-color: #555; /* Adjust the hover background color as needed */
  }
`;

const Sidebar = () => {
    const [theme] = useState(Store.getTheme() || 'dark');


    return (
        <SidebarWrapper theme={theme}>
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
